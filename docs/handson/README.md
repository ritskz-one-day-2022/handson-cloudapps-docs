# はじめに

このハンズオンは下記の内容を元に作成しております。<br>
* [AWS で React アプリケーションを構築する](https://aws.amazon.com/jp/getting-started/hands-on/build-react-app-amplify-graphql/)

また、手順の軽量化、及び手順の最新化のために元の内容を一部改変しております。

## ハンズオンの概要
このハンズオンでは、クラウドサービス(AWS) を使用してシンプルな Web アプリケーション(メモアプリ) を構築します。<br>
最初の STEP1 では、Web アプリケーションの開発準備を進めます。<br>
残りの 4 つのステップでは、クラウドサービス(AWS) を使用して以下の機能を持ったメモアプリを構築します。
 * メモアプリにはインターネットさえあればいつでもどこでもアクセスできる。
 * メモはユーザー毎に管理され、プライベートな内容も安心して登録することができる。
 * ユーザーはメモの作成、削除、一覧表示ができる。
 * メモには画像を関連づけることができる。

## 学習内容
このハンズオンでは、上記の Web アプリケーションを作成するステップが説明されます。<br>
 * STEP1: Web アプリケーションの雛形を作成します。この雛形を更新してメモアプリに変えていきます。
 * STEP2: Web アプリケーションをインターネットに公開します。
 * STEP3: Web アプリケーションにログイン機能を追加します。
 * STEP4: ユーザーがメモを作成、削除、一覧表示できるようにします。
 * STEP5: メモに画像を関連付ける機能を追加します。

## 主要な概念
 * **クラウドサービス** - クラウドサービスプラットフォームからインターネット経由で IT リソースをオンデマンドで利用することができるサービスの総称です。このハンズオンでは Amazon が提供している AWS を利用しています。
 * **Node.js** - ブラウザ上という制限された環境でしか動けなかったJavaScriptをパソコン上で動かせるようにしてくれるのが「Node.js」です。Node.jsは「サーバサイドのJavaScript実行環境」や「クライアントサイドJavaScriptの開発環境」として利用されます。このハンズオンでは「クライアントサイドJavaScriptの開発環境」として利用します。
 * **Amplify** – AWS で Web/スマホアプリケーションをすばやく簡単に構築できるようにするサービスです。

## 推奨環境
下記の環境で動作することを確認しています。
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

* Windows
![](/images/module-zero_howto-start-command-prompt.png)
* Mac/Linux 
:::

### Node.js インストール
下記のサイトから Node.js をインストールします。<br>
* [Node.js](https://nodejs.org/)<br>
このハンズオンは Node.js v16.x / v14.x での動作を確認しています。

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

デフォルトの Visual Studio Code の言語は英語となっています。<br>
Visual Studio Code の言語を日本語に設定したい場合は以下のプラグインをインストールします。
* [Japanese Language Pack for Visual Studio Code](https://marketplace.visualstudio.com/items?itemName=MS-CEINTL.vscode-language-pack-ja)


### Amplify CLI インストール
Amplify コマンドラインインターフェイス (CLI) をインストールします。<br>
Amplify CLI は、Amplify が提供するツールの一つです。<br>
Amplify CLI を使用するとガイドの指示に従っていくつかの質問に答えるだけで AWS クラウドサービスを作成することができます。<br>

では、コマンドプロンプト (Windows) またはターミナル (macOS) を使用して Amplify CLI をインストールしてみましょう。<br>
```bash
npm install -g @aws-amplify/cli
```
