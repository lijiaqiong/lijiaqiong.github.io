import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "九三网络博客",
  description: "个人博客",

  srcDir: '.', // 存放文档的路径（index.md 的父目录），VitePress 会基于这个目录来编译和生成静态网站；如果配置为 ., 则是对应的项目根目录，scDir 下 必须要有一个 index.md，配置主页布局

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [  //首页右上角导航栏
      {
        text: 'Home',
        link: '/'   //// 链接路径，这个路径应该是相对于 `srcDir` 的。比如 `/docs/test` 指向的是 `scDir/docs/test.md`
      },
      {
        text: 'Examples',
        link: '/markdown-examples'  //// 指向笔记库的文档路径
      }
    ],

    sidebar: [  // 详情页侧边栏
      {
        text: 'Examples',
        items: [
          {
            text: 'Markdown Examples',
            link: '/markdown-examples'
          },
          {
            text: 'Runtime API Examples',
            link: '/api-examples'
          }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
