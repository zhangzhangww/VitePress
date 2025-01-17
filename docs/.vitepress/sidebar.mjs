import { setSidebar } from "./gen_sidebar.mjs"

export default {
  '/': [{
    text: '案例',
    collapsed: true,
    items:[
      { text: 'Markdown案例', link: '/markdown-examples' },
    { text: 'Runtime API Examples', link: '/api-examples' }
    ]
  }
    
  ],

  '/fe/':  [{
    text: '案例',
    collapsed: true,
    items:setSidebar('/docs/fe/')
  }]  
  
}