# STEP 2: REACT アプリをホストする
このステップでは、AWS Amplify の Web ホスティングサービスを使って React アプリケーションをインターネット上に公開します。

## はじめに
STEP 1 で作成した React アプリケーションを AWS Amplify の Web ホスティングサービス上に配置（デプロイ）します。<br>
これによりインターネット上にアプリケーションが公開されます。

## 学習内容
 * アプリを AWS Amplify でデプロイする

## 主要な概念
 * **Web ホスティングサービス** – Web サイトまたは Web ページをインターネットに公開できるようにするサービスです

## 実装
### アプリを AWS Amplify でデプロイする
Amplify CLI を使用してアプリケーションホスティングを行いましょう。<br>
`amplify add hosting`を実行し、質問に答えていきます。
```bash
amplify add hosting

? Select the plugin module to execute (Use arrow keys)
> Hosting with Amplify Console (Managed hosting with custom domains, Continuous deployment)

? Choose a type
> Manual deployment
```

続いて、 `amplify publish` でホスティングを開始しましょう。
```bash
amplify publish -y
```

数分待つと以下のように実行結果が返ってきます。 最後のURLにアクセスしてみてください。 ローカル環境でReactアプリケーションを実行したときと同じ画面が表示されるはずです。
```
√ Zipping artifacts completed.
√ Deployment complete!
https://dev.xxxxxxxxxx.amplifyapp.com
```

# まとめ
Web ホスティングサービスを使って React アプリケーションをインターネット上に公開できました。<br>
次のステップでは、ほんの数行のコードでユーザー認証フロー全体を追加します。

::: tip

ここまでの手順が完了すると、あなたのアプリが Amplify アプリとして AWS 上に追加されているはずです。<br>
[AWS マネジメントコンソール](https://aws.amazon.com/jp/console/)を開き「AWS Amplify」を検索して Amplify アプリ一覧を確認してみましょう。<br>
以下のコマンドを実行すると素早く AWS マネジメントコンソールの Amplify アプリ一覧を開くことができます。
```
amplify console
```

:::