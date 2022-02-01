import type { SidebarConfig } from '@vuepress/theme-default'

export const ja: SidebarConfig = {
  '/handson/': [
    {
      text: 'ハンズオン',
      children: [
        '/handson/README.md',
      ],
    },
  ]
}