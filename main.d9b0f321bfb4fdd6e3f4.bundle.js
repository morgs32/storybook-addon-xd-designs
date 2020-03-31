(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{326:function(e,t,n){n(327),n(751),e.exports=n(583)},751:function(e,t,n){"use strict";n.r(t);var o=n(94),s=n.n(o),i=n(3);const r="STORYBOOK_XD_ADDON_DESIGNS",a={UpdateConfig:r+"/update_config"};var c=n(0),l=n(59),d=n(21);const g=n(552),b=({config:e})=>{const t=Object(c.useMemo)(()=>{const t=(e=>e&&e.match(/https:\/\/xd.adobe.com\/view\/([0-9a-zA-Z-]{22,128})/))(e.reviewUrl),n=(e=>e&&e.match(/https:\/\/xd.adobe.com\/spec\/[0-9a-zA-Z-]{22,128}\/screen\/([0-9a-zA-Z-]{22,128})\/([^\/]*)\/?$/))(e.specUrl),o=g(t,"1"),s=g(n,"1"),i=g(n,"2"),r=Boolean(o&&s&&i),a=r?`https://xd.adobe.com/embed/${o}/screen/${s}/${i}?fullscreen`:"";return{isValid:r,specUrl:e.specUrl,screenUrl:a}},[e.specUrl,e.reviewUrl,e.embedHost]);return t.isValid?Object(i.jsx)("div",{css:f},Object(i.jsx)("div",{css:p},Object(i.jsx)("iframe",{css:u,src:t.screenUrl,allowFullScreen:!0})),Object(i.jsx)("a",{css:h,href:t.specUrl,target:"_blank"},"Visit spec in Adobe XD ",Object(i.jsx)("span",{className:"XD__rightArrow"},"→"))):Object(i.jsx)(d.Placeholder,null,Object(i.jsx)(c.Fragment,null,"Invalid config type"),Object(i.jsx)(c.Fragment,null,"That design config is not valid. Please check the "," ",Object(i.jsx)(d.Link,{href:"https://github.com/morgs32/storybook-addon-xd-designs",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"documentation")))},p=i.css`
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
`),j=({active:e,api:t,channel:n})=>{const[o,s]=Object(c.useState)(),[r,g]=Object(c.useState)();if(Object(c.useEffect)(()=>{const e=e=>{g(e);const n=t.getParameters(e,"design");n!==o&&s(n)},i=t=>{e(t),n.removeListener(l.STORY_CHANGED,i)};return n.on(a.UpdateConfig,s),n.on(l.STORY_CHANGED,e),n.on(l.STORY_RENDERED,i),()=>{n.removeListener(a.UpdateConfig,s),n.removeListener(l.STORY_CHANGED,e)}},[]),!e||!r)return null;if(!o||"length"in o&&0===o.length)return Object(i.jsx)(d.Placeholder,null,Object(i.jsx)(c.Fragment,null,"No designs found"),Object(i.jsx)(c.Fragment,null,"Learn how to"," ",Object(i.jsx)(d.Link,{href:"https://github.com/pocka/storybook-addon-xd-designs#usage",target:"_blank",rel:"noopener",withArrow:!0,cancel:!1},"display design preview for the story")));const p=[...o instanceof Array?o:[o]].map((e,t)=>{const n={id:`addon-designs-tab--${t}`,title:e.name||"XD Design"};return[Object(i.jsx)(b,{config:e}),n]});return 1===p.length?Object(i.jsx)("div",{key:r},p[0][0]):Object(i.jsx)(d.TabsState,{key:r,absolute:!0,initial:p[0][1].id},p.map(([e,t])=>Object(i.jsx)("div",{key:t.id,id:t.id,title:t.title},e)))};s.a.register(r,e=>{s.a.addPanel("STORYBOOK_XD_ADDON_DESIGNS/panel",{title:"XD Design",render:({active:t,key:n})=>Object(i.jsx)(j,{key:n,channel:s.a.getChannel(),api:e,active:t})})})}},[[326,1,2]]]);