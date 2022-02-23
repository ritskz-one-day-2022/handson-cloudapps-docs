# STEP 3: 認証を追加する
このステップでは、Amplify CLI とライブラリを使用して、認証を設定し、アプリに追加します。

## はじめに
次に追加する機能は認証です。このステップでは、マネージド型のユーザー ID サービスである Amazon Cognito を利用して、Amplify CLI とライブラリでユーザーを認証する方法を学びます。<br>
<br>
また、Amplify UI コンポーネントライブラリを使用してユーザー認証フロー全体を構築する方法を学び、ユーザーが数行のコードでサインアップ、サインイン、パスワードのリセットを行えるようにします。


## 学習内容
 * Amplify ライブラリをインストールする
 * 認証サービスを作成してデプロイする
 * React アプリを設定して認証を含める

## 主要な概念
* **Amplify ライブラリ** – Amplify ライブラリにより、ウェブまたはモバイルアプリケーションから AWS のサービスを操作できます。
* **認証** – ソフトウェアでは、認証は、認証サービスまたは API を使用してユーザーの ID を確認および管理するプロセスです。

## 演習
### Amplify ライブラリをインストールする
プロジェクトには 2 つの Amplify ライブラリが必要です。メインの **aws-amplify ライブラリ**には、使用するさまざまな AWS のサービスとやり取りするためのすべてのクライアント側 API が含まれ、**@aws-amplify/ui-react ライブラリ**にはフレームワーク固有の UI コンポーネントが含まれています。これらのライブラリをプロジェクトのルートにインストールしてください。<br>
<br>
`noteapp<ユーザー名>`ディレクトリ直下で下記のコマンドを実行します。
```bash
npm install aws-amplify @aws-amplify/ui-react
```

### 認証サービスを作成する
認証サービスを作成するには、Amplify CLI を使用します。
```bash
amplify add auth

 Do you want to use the default authentication and security configuration? (Use arrow keys)
> Default configuration

 How do you want users to be able to sign in?
> Username

 Do you want to configure advanced settings?
> No, I am done.

```

### 認証サービスをデプロイする
認証サービスがローカルで設定されたので、Amplify push コマンドを実行して認証サービスをデプロイできます。

```bash
amplify push --y
```

### Amplify リソースを使用して React プロジェクトを設定する

プロジェクトの `src` ディレクトリに aws-exports.js というファイルが作成されているのがわかります。<br>
このファイルは Amplify CLI によって自動生成されたものです。React アプリケーション が AWS サービスとの連携に必要な設定情報を記載しています。
<br>
この設定ファイルを読み込むためには、**src/index.js** を開き、最後のインポートの下に次のコードを追加します。

```javascript
import Amplify from 'aws-amplify';
import config from './aws-exports';
Amplify.configure(config);
```

### App.js に認証フローを追加する
次に、**src/App.js** を開き、次のコードですべて上書きします。

```javascript
import { Authenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

export default function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <main>
          <h1>Hello {user.username}</h1>
          <button onClick={signOut}>Sign out</button>
        </main>
      )}
    </Authenticator>
  );
}
```
このコンポーネントでは、Authenticator コンポーネントを使用しました。このコンポーネントは、ユーザー認証フロー全体を足場にして、ユーザーがサインアップ、サインイン、パスワードのリセット、および多要素認証 (MFA) のサインインの確認を行えるようにします。
### アプリをローカルで実行する
次に、ローカル環境でアプリを実行して、認証フローが追加されていることを確認します。

```bash
npm start
```

![](/images/module-three_signin-demo.png)
<br>
ここで、サインアップ（Create Account）を試みると、自動的にサインインします。サインインすると、「Hello ＜アプリのユーザー名＞」が表示されます。また、サインアウトボタンで認証フローを再開することができます。

### 変更をライブ環境にデプロイします
インターネットで公開中の React アプリケーションに今回の変更を適用させましょう。
ホスティングを開始した時と同じように `amplify publish` コマンドを実行します。

```bash
amplify publish -y
```

# まとめ
これで、数行のコードでユーザー認証がアプリに追加されました。 次のステップでは、アプリに API を追加します。<br>