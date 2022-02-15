import type { SidebarConfig } from '@vuepress/theme-default'

export const ja: SidebarConfig = {
  '/handson/': [
    {
      text: 'ハンズオン',
      children: [
        '/handson/README.md',
        {
          text: 'STEP 1: WEB アプリの開発準備をする',
          link: '/handson/module-one.html'
        },
        {
          text: 'STEP 2: REACT アプリをホストする',
          link: '/handson/module-two.html'
        },
        {
          text: 'STEP 3: 認証を追加する',
          link: '/handson/module-three.html'
        },
        {
          text: 'STEP 4: API とデータベースを追加する',
          link: '/handson/module-four.html'
        },
        {
          text: 'STEP 5: ストレージを追加する',
          link: '/handson/module-five.html'
        },
      ],
    },
  ]
}