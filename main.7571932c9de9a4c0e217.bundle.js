(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{326:function(e,t,n){n(327),n(751),e.exports=n(583)},751:function(e,t,n){"use strict";n.r(t);var o=n(94),s=n.n(o),r=n(3);const a="STORYBOOK_XD_ADDON_DESIGNS",i={UpdateConfig:a+"/update_config"};var c=n(0),l=n(59),d=n(21);const b=n(552),p=({config:e})=>{const t=Object(c.useMemo)(()=>{const t=(e=>e&&e.match(/https:\/\/xd.adobe.com\/view\/(?<reviewId>[0-9a-zA-Z-]{22,128})/))(e.reviewUrl),n=(e=>e&&e.match(/https:\/\/xd.adobe.com\/spec\/(?<specId>[0-9a-zA-Z-]{22,128})\/screen\/(?<screenId>[0-9a-zA-Z-]{22,128})\/(?<artboard>[^\/]*)\/?$/))(e.specUrl),o=b(t,"groups.reviewId"),s=b(n,"groups.screenId"),r=b(n,"groups.artboard"),a=Boolean(o&&s&&r),i=a?`https://xd.adobe.com/embed/${o}/screen/${s}/${r}?fullscreen`:"";return{isValid:a,specUrl:e.specUrl,screenUrl:i}},[e.specUrl,e.reviewUrl,e.embedHost]);return t.isValid?Object(r.jsx)("div",{css:u},Object(r.jsx)("div",{css:g},Object(r.jsx)("iframe",{css:f,src:t.screenUrl,allowFullScreen:!0})),Object(r.jsx)("a",{css:h,href:t.specUrl,target:"_blank"},"Go to spec")):Object(r.jsx)(d.Placeholder,null,Object(r.jsx)(c.Fragment,null,"Invalid config type"),Object(r.jsx)(c.Fragment,null,"That design config is not valid. Please check the "," ",Object(r.jsx)(d.Link,{href:"https://github.com/morgs32/storybook-addon-xd-designs",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"documentation")))},g=r.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,h=r.css`
  box-shadow: 0px 6px 8px 2px #333;
  height: 26px;
  font-family: monospace;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 26px;
  text-align: center; 
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background: #0f2027; /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #0f2027, #203a43, #2c5364); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #0f2027, #203a43, #2c5364); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ 
  color: white;
  text-decoration: none;
`,u=r.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`,f=(r.css`
  position: absolute;
  top: 75%;
  left: 50%;

  transform: translate(-50%, -50%);
`,r.css`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  margin-bottom: 0;
  z-index: 1;
`),j=({active:e,api:t,channel:n})=>{const[o,s]=Object(c.useState)(),[a,b]=Object(c.useState)();if(Object(c.useEffect)(()=>{const e=e=>{b(e);const n=t.getParameters(e,"design");n!==o&&s(n)},r=t=>{e(t),n.removeListener(l.STORY_CHANGED,r)};return n.on(i.UpdateConfig,s),n.on(l.STORY_CHANGED,e),n.on(l.STORY_RENDERED,r),()=>{n.removeListener(i.UpdateConfig,s),n.removeListener(l.STORY_CHANGED,e)}},[]),!e||!a)return null;if(!o||"length"in o&&0===o.length)return Object(r.jsx)(d.Placeholder,null,Object(r.jsx)(c.Fragment,null,"No designs found"),Object(r.jsx)(c.Fragment,null,"Learn how to"," ",Object(r.jsx)(d.Link,{href:"https://github.com/pocka/storybook-addon-xd-designs#usage",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));const g=[...o instanceof Array?o:[o]].map((e,t)=>{const n={id:`addon-designs-tab--${t}`,title:e.name||"XD Design"};return[Object(r.jsx)(p,{config:e}),n]});return 1===g.length?Object(r.jsx)("div",{key:a},g[0][0]):Object(r.jsx)(d.TabsState,{key:a,absolute:!0,initial:g[0][1].id},g.map(([e,t])=>Object(r.jsx)("div",{key:t.id,id:t.id,title:t.title},e)))};s.a.register(a,e=>{s.a.addPanel("STORYBOOK_XD_ADDON_DESIGNS/panel",{title:"XD Design",render:({active:t,key:n})=>Object(r.jsx)(j,{key:n,channel:s.a.getChannel(),api:e,active:t})})})}},[[326,1,2]]]);