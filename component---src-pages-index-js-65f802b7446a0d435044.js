"use strict";(self.webpackChunkerwintobing15_github_io=self.webpackChunkerwintobing15_github_io||[]).push([[678],{6594:function(e,t,r){var n=r(4942),a=r(885),i=r(5987),c=r(5900),o=r.n(c),l=r(7294),u=r(1118),s=r(9541),f=r(5893),d=["as","bsPrefix","variant","size","active","className"];function m(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?m(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):m(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var b=l.forwardRef((function(e,t){var r=e.as,n=e.bsPrefix,c=e.variant,l=e.size,m=e.active,b=e.className,v=(0,i.Z)(e,d),O=(0,s.vE)(n,"btn"),g=(0,u.FT)(p({tagName:r},v)),y=(0,a.Z)(g,2),h=y[0],j=y[1].tagName;return(0,f.jsx)(j,p(p(p({},v),h),{},{ref:t,className:o()(b,O,m&&"active",c&&"".concat(O,"-").concat(c),l&&"".concat(O,"-").concat(l),v.href&&v.disabled&&"disabled")}))}));b.displayName="Button",b.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=b},9019:function(e,t,r){var n=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r),Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[r]}})}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),a=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),i=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&n(t,e,r);return a(t,e),t};Object.defineProperty(t,"__esModule",{value:!0});var c=i(r(7294));t.default=function(e){var t=c.useState(0),r=t[0],n=t[1],a=e.transitionDuration||400,i=e.delay||50,o=e.wrapperTag||"div",l=e.childTag||"div",u=void 0===e.visible||e.visible;return c.useEffect((function(){var t=c.default.Children.count(e.children);if(u||(t=0),t==r){var o=setTimeout((function(){e.onComplete&&e.onComplete()}),a);return function(){return clearTimeout(o)}}var l=t>r?1:-1,s=setTimeout((function(){n(r+l)}),i);return function(){return clearTimeout(s)}}),[c.default.Children.count(e.children),i,r,u,a]),c.default.createElement(o,{className:e.className},c.default.Children.map(e.children,(function(t,n){return c.default.createElement(l,{className:e.childClassName,style:{transition:"opacity "+a+"ms, transform "+a+"ms",transform:r>n?"none":"translateY(20px)",opacity:r>n?1:0}},t)})))}},160:function(e,t,r){var n=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=r(9019);Object.defineProperty(t,"default",{enumerable:!0,get:function(){return n(a).default}})},1971:function(e,t,r){r.r(t),r.d(t,{default:function(){return h}});var n=r(7294),a=r(5444),i=r(6785),c=r(6594),o=r(4942),l=r(5987),u=r(5900),s=r.n(u),f=r(9541),d=r(5893),m=["bsPrefix","fluid","as","className"];function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function b(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,o.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var v=n.forwardRef((function(e,t){var r=e.bsPrefix,n=e.fluid,a=e.as,i=void 0===a?"div":a,c=e.className,o=(0,l.Z)(e,m),u=(0,f.vE)(r,"container"),p="string"==typeof n?"-".concat(n):"-fluid";return(0,d.jsx)(i,b(b({ref:t},o),{},{className:s()(c,n?"".concat(u).concat(p):u)}))}));v.displayName="Container",v.defaultProps={fluid:!1};var O=v,g=r(160),y=r.n(g),h=function(){return n.createElement(n.Fragment,null,n.createElement("title",null,"Erwin Tobing"),n.createElement(i.Z,{page:""}),n.createElement(O,{fluid:"true",className:"index-module--container--+MMgw"},n.createElement(y(),{delay:"100"},n.createElement("div",{className:"index-module--content--+X+Cu"},n.createElement("h1",{className:"index-module--head--tUwAF"},"Hi, I'm Erwin.",n.createElement("br",null),"A Software Developer.")),n.createElement("p",{className:"index-module--parag--DFBtq"},"I'm a software enthusiast that like to explore and trying out new things."),n.createElement("p",null,n.createElement(a.Link,{to:"/about"},n.createElement(c.Z,{variant:"outline-light",size:"lg"},n.createElement("strong",null,"More")))," ",n.createElement(a.Link,{to:"/project"},n.createElement(c.Z,{variant:"outline-light",size:"lg"},n.createElement("strong",null,"Project")))))))}}}]);
//# sourceMappingURL=component---src-pages-index-js-65f802b7446a0d435044.js.map