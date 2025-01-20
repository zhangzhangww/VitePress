import{_ as i,c as t,a2 as p,j as a,t as e,a as l,o as r}from"./chunks/framework.Cy9RTJCs.js";const g=JSON.parse('{"title":"Runtime API Examples","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"api-examples.md","filePath":"api-examples.md","lastUpdated":1736998727000}'),c={name:"api-examples.md"};function m(n,s,o,b,d,u){return r(),t("div",null,[s[0]||(s[0]=p(`<h1 id="runtime-api-examples" tabindex="-1">Runtime API Examples <a class="header-anchor" href="#runtime-api-examples" aria-label="Permalink to &quot;Runtime API Examples&quot;">​</a></h1><p>This page demonstrates usage of some of the runtime APIs provided by VitePress.</p><p>The main <code>useData()</code> API can be used to access site, theme, and page data for the current page. It works in both <code>.md</code> and <code>.vue</code> files:</p><div class="language-md vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">md</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;script setup&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">const { theme, page, frontmatter } = useData()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/script&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">## Results</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-light-font-weight:bold;--shiki-dark:#79B8FF;--shiki-dark-font-weight:bold;">### Theme Data</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,4)),a("pre",null,e(n.theme),1),s[1]||(s[1]=a("h3",{id:"page-data",tabindex:"-1"},[l("Page Data "),a("a",{class:"header-anchor",href:"#page-data","aria-label":'Permalink to "Page Data"'},"​")],-1)),a("pre",null,e(n.page),1),s[2]||(s[2]=a("h3",{id:"page-frontmatter",tabindex:"-1"},[l("Page Frontmatter "),a("a",{class:"header-anchor",href:"#page-frontmatter","aria-label":'Permalink to "Page Frontmatter"'},"​")],-1)),a("pre",null,e(n.frontmatter),1),s[3]||(s[3]=p(`<div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span>
<span class="line"><span>&lt;script setup&gt;</span></span>
<span class="line"><span>import { useData } from &#39;vitepress&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const { site, theme, page, frontmatter } = useData()</span></span>
<span class="line"><span>&lt;/script&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## Results</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Theme Data</span></span>
<span class="line"><span>&lt;pre&gt;{{ theme }}&lt;/pre&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Page Data</span></span>
<span class="line"><span>&lt;pre&gt;{{ page }}&lt;/pre&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>### Page Frontmatter</span></span>
<span class="line"><span>&lt;pre&gt;{{ frontmatter }}&lt;/pre&gt;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>## More</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Check out the documentation for the [full list of runtime APIs](https://vitepress.dev/reference/runtime-api#usedata).</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div>`,1))])}const k=i(c,[["render",m]]);export{g as __pageData,k as default};
