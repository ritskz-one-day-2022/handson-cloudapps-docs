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
// 今回は誰が作ったアプリなのか判別できるようにアプリ名の末尾にユーザー名を追加します

npx create-react-app noteapp＜ユーザー名＞
```

続けて、作成した React アプリケーションをローカル環境で実行し、正常に動作することを確認します。
```bash
cd noteapp＜ユーザー名＞
npm start
```
ブラウザが自動で立ち上がり下記の画面が表示されれば成功です。
もし、ブラウザが立ち上がらない場合はブラウザから「[http://localhost:3000/](http://localhost:3000/)」へアクセスしてみてください。
![](/images/module-one_npm-start-success.png)

### Amplify CLI を設定する
CLI を設定するには、`amplify configure`コマンドを実行します。ここで設定したユーザーのAWS環境に対して、Amplify CLI はサービスの作成、管理、削除を行います。
```bash
amplify configure

# 1. ブラウザが勝手に立ち上がりAWSのサイトを開いてしまうかもしれませんが、サイトを閉じてしまっても問題ないです。
# 「Enter」を押下して続行しましょう

# 2. regionはap-northeast-1（東京）を選択します。「矢印キー」で選択し「Enter」で決定です。
Specify the AWS Region
? region:  ap-northeast-1

# 3. ユーザー名は事前に共有してある「AWSアカウント一覧」の ＜ユーザー名＞を入力してください。
Specify the username of the new IAM user:
? user name:  ＜ユーザー名＞
# 入力を終えたら「Enter」を押下して続行しましょう。

# 4. 再度、AWSのサイトが開きますがこちらも閉じてしまって問題ないです。
# 「Enter」を押下して続行しましょう。

# 5. アクセスキーIDは事前に共有してある「AWSアカウント一覧.csv」の＜Access key ID＞をコピーして貼り付けてください。
# windowsのコマンドプロンプトに張り付ける場合は、コピー後、コマンドプロンプト上で「右クリック」です。
Enter the access key of the newly created user:
? accessKeyId:  ＜Access key ID＞貼り付け
# 入力を終えたら「Enter」を押下して続行しましょう。

# 6. アクセスキーIDは事前に共有してある「AWSアカウント一覧.csv」の＜Secret access key＞をコピーして貼り付けてください。
? secretAccessKey:  ＜Secret access key＞
# 入力を終えたら「Enter」を押下して続行しましょう。

# 7. ここまでの設定情報（プロファイル）に名前をつけます。
# 分かりやすい名前を付けてください。この手順では「oneday-2022」とします。
? Profile Name:  oneday-2022
# 入力を終えたら「Enter」を押下して終了です。
```

### Amplify を初期化する
先ほど作成した `noteapp＜ユーザー名＞` ディレクトリ内で、`amplify init`を使用し、amplifyのバックエンド環境を初期化します。
```bash
amplify init --permissions-boundary arn:aws:iam::＜AWS環境のアカウントID＞:policy/OneDayIntern2022Boundary

# 1. Amplify プロジェクト名を設定します。
# 今回はデフォルトの「noteapp＜ユーザー名＞」をそのまま設定したいので、何も入力せず「Enter」を押下しましょう。
Note: It is recommended to run this command from the root of your app directory
? Enter a name for the project (noteappintern) 

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

# 2. プロジェクト情報を設定します。
# 今回はデフォルトで問題ないため「Y」を入力後に「Enter」を押下しましょう。
# もし、エディターに「Visual Studio Code」を使っていない場合は「n」を入力後に「Enter」を押下して「? Choose your default editor」で任意のエディターを選択してください。
? Initialize the project with the above configuration? (Y/n)
Using default provider  awscloudformation

# 3. AWSへの接続方式を選択します。
# 「AWS profile」を選択し「Enter」を押下して続行しましょう。
? Select the authentication method you want to use: (Use arrow keys)

# 4. AWS profileを選択します。
# 先ほど「Amplify CLI を設定する」で作成したプロファイルを選択し「Enter」を押下して続行しましょう。
? Please choose the profile you want to use


```

# まとめ
以上で Web アプリケーションの開発準備は整いました。