import { defineConfig } from 'vitepress'
import nav from './nav.mjs'
import sidebar from './sidebar.mjs'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/vitePress/',
  title: "My Project",
  description: "A VitePress Site",
  outDir: "dist", //输出目录
  // srcDir: "docs", // 源码目录
  head:[
    ['link', { rel: 'icon', href: '/1.png' }]// 设置网站图标
  ],
  // 主题配置
  themeConfig: {
    logo: '/1.png',
    //网站标题
    siteTitle: false,
    //导航栏
    nav: nav,
    //侧边栏
    sidebar: sidebar,
    search: {
      provider: 'local',
      //配置中文提示
      options:{
        translations: {
          button: {
            buttonText: '搜索',
            buttonAriaLabel: '搜索'
          },
          modal: {
            searchBoxPlaceholder: '搜索文档',
            resetButtonTitle: '清除查询条件',
            closeButtonAriaLabel: '关闭搜索',
            noResultsText: '没有找到结果',
            footer: {
              selectText: '选择',
              noResultsText: '未找到结果',
              statsText: {
                one: '1个结果',
                other: '{n}个结果'
              },
              closeText: '关闭',
              navigateText: '导航到结果'
            }
          }
        }
      }
    },
    socialLinks: [
      { icon: {
        svg: '<svg t="1737013378762" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4307" width="200" height="200"><path d="M597.333333 554.666667H424.533333a42.666667 42.666667 0 0 0-42.666666 42.666666 42.666667 42.666667 0 0 0 42.666666 42.666667H597.333333a42.666667 42.666667 0 0 0 42.666667-42.666667 42.666667 42.666667 0 0 0-42.666667-42.666666m-172.8-128h110.933334a42.666667 42.666667 0 0 0 42.666666-42.666667 42.666667 42.666667 0 0 0-42.666666-42.666667h-110.933334a42.666667 42.666667 0 0 0-42.666666 42.666667 42.666667 42.666667 0 0 0 42.666666 42.666667M682.666667 384v42.666667a42.666667 42.666667 0 0 0 42.666666 42.666666 42.666667 42.666667 0 0 1 42.666667 42.666667v128a128 128 0 0 1-128 128H384a128 128 0 0 1-128-128V341.333333a128 128 0 0 1 128-128h170.666667a128 128 0 0 1 128 128m170.666666-256H170.666667c-47.36 0-85.333333 37.973333-85.333334 85.333334v682.666666a85.333333 85.333333 0 0 0 85.333334 85.333334h682.666666a85.333333 85.333333 0 0 0 85.333334-85.333334V170.666667a85.333333 85.333333 0 0 0-85.333334-85.333334z" fill="#4EC1FF" p-id="4308"></path></svg>',
      }, link: 'https://zhangzhangww.github.io/zwBlog/#/home' }
    ],//社交链接
    //最后更新时间
    lastUpdated: {
      text: "最后更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
    //页脚
    footer: {
      message: `<a href="https://baidu.com/" target="_blank">链接</a>`,
      copyright: `版权所有 © 2019-${new Date().getFullYear()} 张`,
    },
    //文档页脚
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    //中文配置
    langMenuLabel: "多语言", 
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
    outlineTitle: "目录",
    

  },
  //markdown配置
  markdown: {
    //显示行数
    lineNumbers: true,
    //中文配置
    container:{
      tipLabel: "提示",
      warningLabel: "警告",
      noteLabel: "注意",
      dangerLabel: "危险",
      detailsLabel: "详情",
      infoLabel: "信息",
    }
   
  }


})
