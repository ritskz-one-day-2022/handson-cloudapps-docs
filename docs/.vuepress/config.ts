import { navbar, sidebar } from './configs'

module.exports = {
  lang: 'ja-JP',
  title: 'Webアプリ開発ハンズオン',
  description: 'クラウドベースのWebアプリケーション開発体験',
  dest: 'dist/',
  base: '/handson-cloudapps-docs/',
  head: [
    ['meta', {name: 'robots', content: 'noindex'}],
    ['meta', {name: 'google-site-verification', content: 'J5VQ4JVxI8NKBJvybS8AFN6IpopC_ujMlJMqnmgmcis'}]
  ],

  theme: '@vuepress/theme-default',
  themeConfig: {
    locales: {
      '/': {
        // navbar
        navbar: navbar.ja,

        // sidebar
        sidebar: sidebar.ja,

        // page meta
        editLinkText: 'Edit this page on GitHub',
      },
    }
  }
}