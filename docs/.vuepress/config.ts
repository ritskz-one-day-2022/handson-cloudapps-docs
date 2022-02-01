import { navbar, sidebar } from './configs'

module.exports = {
  lang: 'ja-JP',
  title: 'Webアプリ開発ハンズオン',
  description: 'クラウドベースのWebアプリケーション開発体験',
  dest: 'dist/',
  base: '/handson-cloudapps-docs/',

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