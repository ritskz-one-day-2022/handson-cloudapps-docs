# STEP 5: ストレージを追加する
このステップでは、ストレージと、画像をアプリのメモに関連付ける機能を追加します。

## はじめに
メモアプリが機能するようになったので、各メモに画像を関連付ける機能を追加しましょう。このモジュールでは、Amplify CLI とライブラリを使用して、Amazon S3 を利用するストレージサービスを作成します。次に、前のモジュールで作成した GraphQL スキーマを更新して、画像を各メモに関連付けます。最後に、React アプリを更新して、画像のアップロード、フェッチ、レンダリングを有効にします。

## 学習内容
 * ストレージサービスを作成する
 * GraphQL スキーマを更新する
 * React アプリを更新する

## 主要な概念
* **ストレージサービス** –  画像や動画などのファイルの保存とクエリは、ほとんどのアプリケーションの一般的な要件です。これを行う 1 つのオプションは、ファイルを Base64 エンコードし、文字列として送信してデータベースに保存することです。これには、エンコードされたファイルが元のバイナリよりも大きいこと、操作に計算コストがかかること、適切にエンコードおよびデコードすることの複雑さが増すなどの欠点があります。別のオプションは、ファイルストレージ用に特別に構築および最適化されたストレージサービスを用意することです。Amazon S3 のようなストレージサービスは、これを可能な限り簡単、高性能、低料金になるようにしています。

## 実装
### ストレージサービスを作成する
画像ストレージ機能を追加するには、Amplify ストレージカテゴリを使用します。
```bash
amplify add storage

? Select from one of the below mentioned services:
> Content (Images, audio, video, etc.)

# デフォルトで文字列がセットされていますが、わかりやすいように「imagestorage＜ユーザー名＞」に変更しましょう。
? Provide a friendly name for your resource that will be used to label this category in the project: » imagestorage＜ユーザー名＞

# デフォルトで文字列がセットされているのでそのまま「Enter」を押して続行しましょう。
? Provide bucket name: » noteapp＜ユーザー名＞xxxxxxxxxxxxxxxxxxxxxxxx

? Who should have access: ...  (Use arrow keys or type to filter)
❯ Auth users only

# 複数選択式の質問です。すべて選択します。「space」で一つずつ選択する or 「CTRL + A」で一気に選択しましょう。
# すべて選択したら「Enter」を押して続行しましょう。
? What kind of access do you want for Authenticated users? ...  (Use arrow keys or type to filter)
❯√ create/update
 √ read
 √ delete

#  N を入力しましょう。
? Do you want to add a Lambda Trigger for your S3 Bucket? (y/N) »
```

### GraphQL スキーマを更新する
次に、**amplify/backend/api/notesapp＜ユーザー名＞/schema.graphql** を開き、次のスキーマで更新します。
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
  image: String
}

```
必ずファイルを保存してください。
### ストレージサービスと API の更新をデプロイする 
ストレージサービスがローカルで設定され、GraphQL スキーマが更新されたので、Amplify push コマンドを実行して更新をデプロイできます。
```bash
amplify push --y
```
### React アプリを更新する
バックエンドが更新されたので、React アプリを更新して、メモ用に画像をアップロードおよび表示する機能を追加しましょう。**src/App.js** を開き、次の変更を加えます。

a.まず、ストレージクラスを Amplify インポートに追加します。
```javascript
import { API, Storage } from 'aws-amplify';
```
b.メインの App 関数で、画像のアップロードを処理する新しい onChange 関数を作成します。
```javascript
async function onChange(e) {
  if (!e.target.files[0]) return
  const file = e.target.files[0];
  setFormData({ ...formData, image: file.name });
  await Storage.put(file.name, file);
  fetchNotes();
}
```
c.メモに関連付けられている画像がある場合は、fetchNotes 関数を更新して画像を取得します。
```javascript
async function fetchNotes() {
  const apiData = await API.graphql({ query: listNotes });
  const notesFromAPI = apiData.data.listNotes.items;
  await Promise.all(notesFromAPI.map(async note => {
    if (note.image) {
      const image = await Storage.get(note.image);
      note.image = image;
    }
    return note;
  }))
  setNotes(apiData.data.listNotes.items);
}
```
d.画像がメモに関連付けられている場合は、createNote 関数を更新して、画像をローカル画像配列に追加します。
```javascript
async function createNote() {
  if (!formData.name || !formData.description) return;
  await API.graphql({ query: createNoteMutation, variables: { input: formData } });
  if (formData.image) {
    const image = await Storage.get(formData.image);
    formData.image = image;
  }
  setNotes([ ...notes, formData ]);
  setFormData(initialFormState);
}
```
e.return ブロックのフォームにその他の入力を追加します。
```jsx
<input
  type="file"
  onChange={onChange}
/>
```
f.メモ配列をマッピングするときに、画像が存在する場合はそれをレンダリングします。
```jsx
{
    notes.map(note => (
        <div key={note.id || note.name}>
            <h2>{note.name}</h2>
            <p>{note.description}</p>
            <button onClick={() => deleteNote(note)}>Delete note</button>
            {
                note.image && <img src={note.image} style={{width: 400}} />
            }
        </div>
    ))
}

```

::: details 最終的な src/App.js のコード
```jsx
import { Auth } from 'aws-amplify';
import React, { useState, useEffect } from 'react';
import '@aws-amplify/ui-react/styles.css';
import { API, Storage } from 'aws-amplify';
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
     const notesFromAPI = apiData.data.listNotes.items;
     await Promise.all(notesFromAPI.map(async note => {
       if (note.image) {
         const image = await Storage.get(note.image);
         note.image = image;
       }
       return note;
     }))
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
    if (formData.image) {
      const image = await Storage.get(formData.image);
      formData.image = image;
    }
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

  async function onChange(e) {
    if (!e.target.files[0]) return
    const file = e.target.files[0];
    setFormData({ ...formData, image: file.name });
    await Storage.put(file.name, file);
    fetchNotes();
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
          <input
            type="file"
            onChange={onChange}
          />
          <button onClick={createNote}>Create Note</button>
          <div style={{marginBottom: 30}}>
            {notes.map(note => (
              <div key={note.id || note.name}>
                <h2>{note.name}</h2>
                <p>{note.description}</p>
                <button onClick={() => deleteNote(note)}>Delete note</button>
                {
                 note.image && <img src={note.image} style={{width: 400}} />
                }
              </div>
            ))}
          </div>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>
  );
}
```
:::

### アプリを実行する
アプリをローカル環境で実行し、アプリのメモに画像を紐づけられることを確認しましょう。
```bash
npm start
```
これで、各メモ用の画像をオプションでアップロードできるようになります。

### 変更をライブ環境にデプロイします
インターネットで公開中の React アプリケーションに今回の変更を適用させましょう。

```bash
amplify publish -y
```

# まとめ
AWS Amplify を使用してウェブアプリケーションをデプロイしました。 アプリに認証を追加して、ユーザーがサインアップ、サインイン、およびアカウントを管理できるようにしました。アプリには、Amazon DynamoDB データベースで設定されたスケーラブルな GraphQL API もあり、ユーザーはメモを作成および削除できます。また、Amazon S3 を使用してファイルストレージを追加し、ユーザーが画像をアップロードしてアプリで表示できるようにしました。
