# STEP 4: API とデータベースを追加する
このステップでは、Amplify CLI とライブラリを使用して、アプリに GraphQL API を設定して追加します。

## はじめに
アプリを作成して認証を設定したところで、API を追加しましょう。<br>
<br>
このモジュールでは、Amplify CLI とライブラリを使用してアプリに API を追加します。作成する API は GraphQL API で、Amazon DynamoDB (NoSQL データベース) によってサポートされる AWS AppSync (マネージド GraphQL サービス) を利用します。(GraphQL の概要については、このページにアクセスしてください)。<br>
<br>
作成するアプリは、ユーザーがメモを作成、削除、一覧表示できるようにするメモアプリです。この例から、人気のある CRUD + L (作成、読み取り、更新、削除、一覧表示) アプリケーションの多くを構築する方法がよく分かります。

## 学習内容
 * Amplify ライブラリをインストールする
 * 認証サービスを作成してデプロイする
 * React アプリを設定して認証を含める

## 主要な概念
* **API** – 複数のソフトウェア仲介者間の通信および相互作用を可能にするプログラミングインターフェイスを提供します。
* **GraphQL** – アプリケーションの型付き表現に基づくクエリ言語とサーバー側 API の実装。この API 表現は、GraphQL 型システムに基づくスキーマを使用して宣言されます。(GraphQL の詳細については、[このページ](https://graphql.org/learn/)にアクセスしてください)。

## 演習
### GraphQL API とデータベースを作成する
1. アプリディレクトリのルートから次のコマンドを実行して、GraphQL API をアプリに追加します。
```bash
amplify add api

? Select from one of the below mentioned services: (Use arrow keys)
> GraphQL

? Here is the GraphQL API that we will create. Select a setting to edit or continue
  Name: noteapp＜ユーザー名＞
  Authorization modes: API key (default, expiration time: 7 days from now)
  Conflict detection (required for DataStore): Disabled
> Continue

? Choose a schema template:
> Single object with fields (e.g., “Todo” with ID, name, description)

# y を入力しましょう。
√ Do you want to edit the schema now? (Y/n) · yes

# 使用中のエディタを選択する。（ここでは Visual Studio Code を選択する）
? Choose your default editor: (Use arrow keys)
> Visual Studio Code
```
2. 1.の最後の選択後、ファイルが開かれたら次のコードですべて上書きします。
```
# This "input" configures a global authorization rule to enable public access to
# all models in this schema. Learn more about authorization rules here: https://docs.amplify.aws/cli/graphql/authorization-rules
# input AMPLIFY { globalAuthRule: AuthRule = { allow: public } } # FOR TESTING ONLY!

type Note @model  @auth(rules: [
  { allow: owner }
]) {
  id: ID!
  name: String!
  description: String
}

```
※ ファイルが自動で開かれない場合は **amplify\backend\api\noteapp＜ユーザー名＞\schema.graphql**　をエディタで開きましょう。<br>
<br>
3. ファイルを保存します。

### API をデプロイする
API がローカルで設定されたので、今度はそれをデプロイします。これを行うには、`amplify push` コマンドを実行します。
```bash
amplify push --y
```

::: tip
アカウントで GraphQL API をいつでも表示するには、次のコマンドを実行します。
```bash
amplify console api
? Select from one of the below mentioned services: (Use arrow keys)
> GraphQL
```
:::
### API と対話するためのフロントエンドコードを記述する
バックエンドがデプロイされたので、ユーザーがメモを作成、一覧表示、削除できるようにするコードを記述しましょう。<br>
<br>
**src/App.js** を次のコードで更新します。
```javascript
import { Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API } from 'aws-amplify';
import { Authenticator } from '@aws-amplify/ui-react';
import { listNotes } from './graphql/queries';
import { createNote as createNoteMutation, deleteNote as deleteNoteMutation } from './graphql/mutations';

const initialFormState = { name: '', description: '' }

export default function App() {
  const [notes, setNotes] = useState([]);
  const [formData, setFormData] = useState(initialFormState);

  useEffect(() => {
    fetchNotes();
  }, []);

  async function fetchNotes() {
    const apiData = await API.graphql({ 
      query: listNotes,
      authMode: "AMAZON_COGNITO_USER_POOLS",
      authToken: (await Auth.currentSession()).getIdToken().getJwtToken()
     });
    setNotes(apiData.data.listNotes.items);
  }

  async function createNote() {
    if (!formData.name || !formData.description) return;
    await API.graphql({ 
      query: createNoteMutation,
      variables: { input: formData },
      authMode: "AMAZON_COGNITO_USER_POOLS",
      authToken: (await Auth.currentSession()).getIdToken().getJwtToken() 
    });
    setNotes([ ...notes, formData ]);
    setFormData(initialFormState);
  }

  async function deleteNote({ id }) {
    const newNotesArray = notes.filter(note => note.id !== id);
    setNotes(newNotesArray);
    await API.graphql({
      query: deleteNoteMutation,
      variables: { input: { id } },
      authMode: "AMAZON_COGNITO_USER_POOLS",
      authToken: (await Auth.currentSession()).getIdToken().getJwtToken() 
    });
  }

  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <h1>My Notes App (User: {user.username})</h1>
          <input
            onChange={e => setFormData({ ...formData, 'name': e.target.value})}
            placeholder="Note name"
            value={formData.name}
          />
          <input
            onChange={e => setFormData({ ...formData, 'description': e.target.value})}
            placeholder="Note description"
            value={formData.description}
          />
          <button onClick={createNote}>Create Note</button>
          <div style={{marginBottom: 30}}>
            {
              notes.map(note => (
                <div key={note.id || note.name}>
                  <h2>{note.name}</h2>
                  <p>{note.description}</p>
                  <button onClick={() => deleteNote(note)}>Delete note</button>
                </div>
              ))
            }
          </div>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}
```
アプリには 3 つの主要な機能があります。

1. fetchNotes - この関数は、API クラスを使用してクエリを GraphQL API に送信し、メモのリストを取得します。
2. createNote - この関数は、API クラスを使用してクエリと変数（メモの情報）を GraphQL API に送信し、新しいメモを作成します。
3. deleteNote - createNote と同様に、この関数は変数と共にクエリを GraphQL APIに送信しますが、メモを作成する代わりにメモを削除します。


### アプリを実行する
アプリをローカル環境で実行し、ユーザーがメモを作成、一覧表示、削除できることを確認しましょう。
```bash
npm start
```

# まとめ
これで、メモアプリが作成されました。AWS Amplifyを使用して、GraphQL APIを追加し、アプリの作成、読み取り、削除機能を構成しました。次のステップでは、アプリにストレージサービスを追加します。