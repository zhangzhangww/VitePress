---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  # //项目名称
  name: "Happy Day"
  image:
    src: /2.gif
    alt: "Happy Day"
  # // 项目标题
  text: "要努力变强"
  # // 项目标语
  tagline: 只有流过血的手指才能弹奏出世间的绝唱
  actions:
    - theme: brand
      text: 快速开始
      link: /markdown-examples
    - theme: alt
      text: 案例
      link: /api-examples


features:
  - title: 前端学习
    icon:
        src: https://bu.dusays.com/2021/01/15/d29f7b4bc6367.gif
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 生活杂记
    icon:
        src: https://bu.dusays.com/2021/01/15/29f9525142693.gif
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: 常见问题
    icon:
        src: https://bu.dusays.com/2021/01/15/2afce679d07e6.gif
    details: Lorem ipsum dolor sit amet, consectetur adipiscing elit
  - title: React 开发插件
    icon:
      src: /2.gif
    details: 是一个使用 React.js 框架开发的 Chrome 插件，旨在为开发者展示如何使用 React.js 构建强大的浏览器扩展。
    link: https://juejin.cn/post/7349936384512213027
    linkText: 查看详情
 
---
<!-- // 添加一个五彩纸屑效果 -->
<confetti/>
<!-- // 访客统计 -->
<VisitorPanel />

