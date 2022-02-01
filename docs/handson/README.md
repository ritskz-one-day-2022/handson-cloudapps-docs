# はじめに

このハンズオンは下記の内容を元に作成しております。<br>
* [AWS で React アプリケーションを構築する](https://aws.amazon.com/jp/getting-started/hands-on/build-react-app-amplify-graphql/)

また、手順の軽量化、及び手順の最新化のために元の内容を一部改変しております。

## ハンズオンの概要
> このチュートリアルでは、AWS Amplify を使用してシンプルなウェブアプリケーションを作成します。これは、ウェブホスティングサービスを含む一連のツールとサービスです。最初のモジュールでは、AWS で React アプリケーションを構築してホストします。残りの 4 つのモジュールでは、CLI を使用してローカルアプリを初期化し、認証を追加し、GraphQL API とデータベースを追加し、アプリを更新して画像を保存します。

[引用元](https://aws.amazon.com/jp/getting-started/hands-on/build-react-app-amplify-graphql/)

## 学習内容
> このチュートリアルでは、上記のサンプルウェブアプリケーションを作成するステップが説明されます。<br>
> * ホスティング: AWS グローバルコンテンツ配信ネットワーク (CDN) で React アプリケーションを構築してホストします。
> * 認証: アプリケーションに認証を追加して、サインインとサインアウトを有効にします
> * データベースとストレージ: GraphQL API、データベース、ストレージソリューションを追加します。

[引用元](https://aws.amazon.com/jp/getting-started/hands-on/build-react-app-amplify-graphql/)

## 主要な概念
 * **Node.js** - ブラウザ上という制限された環境でしか動けなかったJavaScriptをパソコン上で動かせるようにしてくれるのが「Node.js」です。Node.jsは「サーバサイドのJavaScript実行環境」や「クライアントサイドJavaScriptの開発環境」として利用されます。このハンズオンでは「クライアントサイドJavaScriptの開発環境」として利用します。
 * **React アプリケーション** – React はウェブアプリケーションフレームワークで、デベロッパーが JavaScript を使用して高性能のシングルページアプリケーションをすばやく構築できるようにします。
 * **Amplify CLI** – Amplify CLI により、端末から直接 AWS のサービスを作成、管理、削除できます。

## 推奨環境
下記の環境で動作することを確認しております。それ以外の環境では動作しない可能性があります。
* 開発環境 (以下が利用可能な Mac/Windows/Linux)
  * Node.js v14.x
  * Node.js v16.x
* ブラウザ環境
  * Google Chrome 
  * Mozilla Firefox
  * Microsoft Edge 

## 事前準備
::: tip
以降の手順ではコマンド操作が必要な場面が出てきます。<br>
コマンドはコマンドプロンプト (Windows) またはターミナル (macOS)上で実行します。

* Windows(PowerShell)

* Mac/Linux 
:::

### Node.js インストール
下記のサイトから Node.js をインストールします。<br>
* [Node.js](https://nodejs.org/)<br>
このハンズオンは Node.js v16.x / v14.x での動作を確認しております。

Node.js が正しくインストールされていることを確認します。<br>
コマンドプロンプト (Windows) またはターミナル (macOS)上で下記のコマンドを実行します。
```bash
❯ node -v
v14.18.1

❯ npm -v
6.14.15
```
バージョンが表示されればOKです。

### Visual Studio Code インストール (オプション)
アプリケーション開発用にコードエディタをインストールします。<br>
エディタにこだわりがある方はこの手順をスキップして構いません。
* [Visual Studio Code](https://code.visualstudio.com/)

デフォルトの Visual Studio Code の言語は英語となっております。<br>
Visual Studio Code の言語を日本語に設定したい場合は以下のプラグインをインストールします。
* [Japanese Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja)


### Amplify CLI インストール
Amplify コマンドラインインターフェイス (CLI) は、シンプルなガイド付きワークフローに従って、アプリの AWS クラウドサービスを作成するための統合ツールチェーンです。<br>
では、コマンドプロンプト (Windows) またはターミナル (macOS) を使用して Amplify CLI をインストールしてみましょう。<br>
注:「-g」はバイナリがシステムにグローバルにインストールされることを示すため、このコマンドはコマンドプロンプト/ターミナルの任意のディレクトリで実行できます。
```bash
npm install -g @aws-amplify/cli
```

### React アプリケーションを作成
簡単に React アプリケーションを作成するには、create-react-app のコマンドを使用します。<br>
コマンドプロンプト (Windows) またはターミナル (macOS) 上で次のコマンドを使用して、このパッケージをインストールします。
```bash
npx create-react-app amplifyapp
```

続けて、作成した React アプリケーションをローカル環境（あなたのPC上）で実行し、正常に動作することを確認します。
```bash
cd amplifyapp
npm start
```
ブラウザから「[http://localhost:3000/](http://localhost:3000/)」へアクセスし、下記の画面が表示されれば成功です。
![](/images/module-zero--npm-start-success.png)