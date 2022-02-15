# STEP 1: WEB アプリの開発準備をする
このステップでは、Web アプリケーションのフロントエンドとバックエンドの開発準備を行います。

## はじめに
Web アプリケーションは大きく フロントエンド と バックエンド の２つの開発領域に分かれます。<br>
フロントエンドはユーザーが直接目にする部分です。画面の表示や操作の受付を行います。<br>
バックエンドはユーザーの目に見えない部分です。フロントエンド側からデータや指示を受け付け、計算や変換などの処理を行ったり、ストレージやデータベースなどでデータの保存や読み出しを行います。<br>

このステップでは以下２点を進めていきます。
* フロントエンドの雛形を作成します。<br>
フロントエンドの実装には React というフレームワークを使用します。<br>
* バックエンド環境の構築準備を行います。<br>
バックエンドにはAWSのサービスを使用します。また、バックエンドはAmplifyを使用して構築します。<br>


## 学習内容
* 新しい React アプリケーションを作成する
* Amplify アプリケーションを初期化する

## 主要な概念
 * **React アプリケーション** – React は Web アプリケーションフレームワークで、開発者が JavaScript を使用して高性能のシングルページアプリケーションをすばやく構築できるようにします。
 * **Amplify CLI** – Amplify CLI により、端末から直接 AWS のサービスを作成、管理、削除できます。その他にも、React アプリケーション が AWSサービスとの連携に必要な設定ファイルやソースコードを自動生成してくれます。

## 実装
### React アプリケーションを作成
簡単に React アプリケーションを作成するには、`create-react-app` のコマンドを使用します。<br>
コマンドプロンプト (Windows) またはターミナル (macOS) 上で次のコマンドを使用して、このパッケージをインストールします。
```bash
// 今回は誰が作ったアプリか判別できるようにアプリ名の末尾にユーザー名を追加します

npx create-react-app noteapp＜ユーザー名＞
```

続けて、作成した React アプリケーションをローカル環境で実行し、正常に動作することを確認します。
```bash
cd noteapp＜ユーザー名＞
npm start
```
ブラウザから「[http://localhost:3000/](http://localhost:3000/)」へアクセスし、下記の画面が表示されれば成功です。
![](/images/module-zero--npm-start-success.png)

### Amplify CLI を設定する
CLI を設定するには、`amplify configure`コマンドを実行します。ここで設定したユーザーのAWS環境に対して、Amplify CLI はサービスの作成、管理、削除を行います。
```bash
amplify configure

? region:  ap-northeast-1
Specify the username of the new IAM user:
? user name:  ＜ユーザー名＞
? accessKeyId:  ＜アクセスキー貼り付け＞
? secretAccessKey:  ＜シークレットキー貼り付け＞
? Profile Name:  oneday-2022
```

### Amplify を初期化する
先ほど作成した `noteapp＜ユーザー名＞` ディレクトリ内で、`amplify init`を使用し、amplifyのバックエンド環境を初期化します。
```bash
amplify init --permissions-boundary arn:aws:iam::＜AWS環境のアカウントID＞:policy/OneDayIntern2022Boundary

Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project (noteappintern0) ⇦ プロジェクト名を変えない場合はそのままEnterでOK

Project information
| Name: noteappintern0
| Environment: dev
| Default editor: Visual Studio Code
| App type: javascript
| Javascript framework: react
| Source Directory Path: src
| Distribution Directory Path: build
| Build Command: npm run-script build
| Start Command: npm run-script start

? Initialize the project with the above configuration? (Y/n)
```

# まとめ
以上で Web アプリケーションの開発準備は整いました。