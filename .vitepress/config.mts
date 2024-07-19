import { defineConfig } from 'vitepress'

import nav from './nav.mjs'
import sidebar from './sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "九三网络日志",
  description: "个人知识库",

  srcDir: '.', // 存放文档的路径（index.md 的父目录），VitePress 会基于这个目录来编译和生成静态网站；如果配置为 ., 则是对应的项目根目录，scDir 下 必须要有一个 index.md，配置主页布局

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: nav,  //首页右上角导航栏

    sidebar: sidebar,  // 详情页侧边栏
    footer: {
      message: '九三二十七 （微信：jql9327)',
      copyright: 'Copyright © 2024-present blog'
    },
    search: {    // 搜索的模式
      provider: 'local'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/lijiaqiong/lijiaqiong.github.io' }
    ]
  },
  vite: {
    resolve: {
      preserveSymlinks: true
    }
  },
})
