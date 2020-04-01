(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1211:function(e,t,n){"use strict";n.r(t);var o=n(91),s=n.n(o),i=n(1);const r="STORYBOOK_XD_ADDON_DESIGNS",a={UpdateConfig:r+"/update_config"};var c=n(0),l=n(52),d=n(27);const b=n(305),p=({config:e})=>{const t=Object(c.useMemo)(()=>{if("artboardUrl"in e){const t=(e=>e&&e.match(/https:\/\/xd.adobe.com\/view\/([0-9a-zA-Z-]{22,128})\/screen\/([0-9a-zA-Z-]{22,128})\/([^\/]*)\/?$/))(e.artboardUrl),n=b(t,"1"),o=b(t,"2"),s=b(t,"3");return{isValid:Boolean(n&&o&&s),specUrl:e.artboardUrl,screenUrl:`https://xd.adobe.com/embed/${n}/screen/${o}/${s}?fullscreen`}}const t=(e=>e&&e.match(/https:\/\/xd.adobe.com\/view\/([0-9a-zA-Z-]{22,128})/))(e.reviewUrl),n=(e=>e&&e.match(/https:\/\/xd.adobe.com\/spec\/[0-9a-zA-Z-]{22,128}\/screen\/([0-9a-zA-Z-]{22,128})\/([^\/]*)\/?$/))(e.specUrl),o=b(t,"1"),s=b(n,"1"),i=b(n,"2"),r=Boolean(o&&s&&i),a=r?`https://xd.adobe.com/embed/${o}/screen/${s}/${i}?fullscreen`:"";return{isValid:r,specUrl:e.specUrl,screenUrl:a}},[e]);return t.isValid?Object(i.jsx)("div",{css:f},Object(i.jsx)("div",{css:g},Object(i.jsx)("iframe",{css:u,src:t.screenUrl,allowFullScreen:!0})),Object(i.jsx)("a",{css:h,href:t.specUrl,target:"_blank"},"Visit spec in Adobe XD ",Object(i.jsx)("span",{className:"XD__rightArrow"},"→"))):Object(i.jsx)(d.Placeholder,null,Object(i.jsx)("div",{style:{paddingBottom:4}},"Invalid config type"),Object(i.jsx)(c.Fragment,null,"That design config is not valid. Please check the "," ",Object(i.jsx)(d.Link,{href:"https://github.com/morgs32/storybook-addon-xd-designs",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"documentation")))},g=i.css`
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
`,h=i.css`
  box-shadow: 0px 6px 8px 2px #333;
  height: 26px;
  font-family: sans-serif;
  font-weight: bold;
  line-height: 26px;
  text-align: center;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 10;
  background-image: linear-gradient(to right, #f6d365 0%, #fda085 51%, #f6d365 100%); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background-size: 200% auto;
  will-change: background-position;
  transition: background-position .4s ease;
  color: white;
  text-decoration: none;

  .XD__rightArrow {
    position: relative;
    left: 0px;
    will-change: left;
    transition: left .3s ease;
  }

  &:hover {
    background-position: right center;

    .XD__rightArrow {
      left: 5px;
    }
  }
`,f=i.css`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  overflow: hidden;
`,u=(i.css`
  position: absolute;
  top: 75%;
  left: 50%;

  transform: translate(-50%, -50%);
`,i.css`
  position: relative;
  width: 100%;
  height: 100%;
  border: none;
  margin-bottom: 0;
  z-index: 1;
`),j=({active:e,api:t,channel:n})=>{const[o,s]=Object(c.useState)(),[r,b]=Object(c.useState)();if(Object(c.useEffect)(()=>{const e=e=>{b(e);const n=t.getParameters(e,"design");n!==o&&s(n)},i=t=>{e(t),n.removeListener(l.STORY_CHANGED,i)};return n.on(a.UpdateConfig,e=>{"_undefined_"===e&&s(void 0)}),n.on(l.STORY_CHANGED,e),n.on(l.STORY_RENDERED,i),()=>{n.removeListener(a.UpdateConfig,s),n.removeListener(l.STORY_CHANGED,e)}},[]),!e||!r)return null;if(!o||Array.isArray(o)&&o.length&&0===o.length)return Object(i.jsx)(d.Placeholder,null,Object(i.jsx)("div",{style:{paddingBottom:4}},"No designs found"),Object(i.jsx)(c.Fragment,null,"Learn how to"," ",Object(i.jsx)(d.Link,{href:"https://github.com/pocka/storybook-addon-xd-designs#usage",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));let g;const h=(g=Array.isArray(o)?o:[o]).map((e,t)=>{const n={id:`addon-designs-tab--${t}`,title:e.name||"XD Design"};return[Object(i.jsx)(p,{config:e}),n]});return 1===h.length?Object(i.jsx)("div",{key:r},h[0][0]):Object(i.jsx)(d.TabsState,{key:r,absolute:!0,initial:h[0][1].id},h.map(([e,t])=>Object(i.jsx)("div",{key:t.id,id:t.id,title:t.title},e)))};s.a.register(r,e=>{s.a.addPanel("STORYBOOK_XD_ADDON_DESIGNS/panel",{title:"XD Design",render:({active:t,key:n})=>Object(i.jsx)(j,{key:n,channel:s.a.getChannel(),api:e,active:t})})})},390:function(e,t,n){n(391),n(540),e.exports=n(1211)},475:function(e,t){}},[[390,1,2]]]);