(this["webpackJsonphufs-frontend"]=this["webpackJsonphufs-frontend"]||[]).push([[4],{185:function(e,t,n){"use strict";var r=n(4),a=n(1),i=n(114),o=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},l={border:0,background:"transparent",padding:0,lineHeight:"inherit",display:"inline-block"},c=a.forwardRef((function(e,t){var n=e.style,c=e.noStyle,s=e.disabled,p=o(e,["style","noStyle","disabled"]),d={};return c||(d=Object(r.a)({},l)),s&&(d.pointerEvents="none"),d=Object(r.a)(Object(r.a)({},d),n),a.createElement("div",Object(r.a)({role:"button",tabIndex:0,ref:t},p,{onKeyDown:function(e){e.keyCode===i.a.ENTER&&e.preventDefault()},onKeyUp:function(t){var n=t.keyCode,r=e.onClick;n===i.a.ENTER&&r&&r()},style:d}))}));t.a=c},249:function(e,t,n){"use strict";var r=n(250),a={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,i,o,l,c,s,p=!1;t||(t={}),n=t.debug||!1;try{if(o=r(),l=document.createRange(),c=document.getSelection(),(s=document.createElement("span")).textContent=e,s.style.all="unset",s.style.position="fixed",s.style.top=0,s.style.clip="rect(0, 0, 0, 0)",s.style.whiteSpace="pre",s.style.webkitUserSelect="text",s.style.MozUserSelect="text",s.style.msUserSelect="text",s.style.userSelect="text",s.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),"undefined"===typeof r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var i=a[t.format]||a.default;window.clipboardData.setData(i,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(s),l.selectNodeContents(s),c.addRange(l),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");p=!0}catch(d){n&&console.error("unable to copy using execCommand: ",d),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),p=!0}catch(d){n&&console.error("unable to copy using clipboardData: ",d),n&&console.error("falling back to prompt"),i=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"\u2318":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(i,e)}}finally{c&&("function"==typeof c.removeRange?c.removeRange(l):c.removeAllRanges()),s&&document.body.removeChild(s),o()}return p}},250:function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},440:function(e,t,n){"use strict";var r=n(4),a=n(94),i=n(1),o=n(93),l=n.n(o),c=n(115),s=n(155),p=n(106),d=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},u=function(e,t){var n=e.prefixCls,o=e.component,u=void 0===o?"article":o,f=e.className,y=e["aria-label"],b=e.setContentRef,h=e.children,v=d(e,["prefixCls","component","className","aria-label","setContentRef","children"]),m=t;return b&&(Object(p.a)(!1,"Typography","`setContentRef` is deprecated. Please use `ref` instead."),m=Object(c.a)(t,b)),i.createElement(s.a,null,(function(e){var t=e.getPrefixCls,o=e.direction,c=u,s=t("typography",n),p=l()(s,Object(a.a)({},"".concat(s,"-rtl"),"rtl"===o),f);return i.createElement(c,Object(r.a)({className:p,"aria-label":y,ref:m},v),h)}))},f=i.forwardRef(u);f.displayName="Typography";var y=f,b=n(98),h=n(110),v=n(103),m=n(99),g=n(101),O=n(102),E=n(104),x=n(117),j=n(249),C=n.n(j),w={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M257.7 752c2 0 4-.2 6-.5L431.9 722c2-.4 3.9-1.3 5.3-2.8l423.9-423.9a9.96 9.96 0 000-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2a33.5 33.5 0 009.4 29.8c6.6 6.4 14.9 9.9 23.8 9.9zm67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z"}}]},name:"edit",theme:"outlined"},S=n(105),k=function(e,t){return i.createElement(S.a,Object.assign({},e,{ref:t,icon:w}))};k.displayName="EditOutlined";var N=i.forwardRef(k),R=n(261),T={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M832 64H296c-4.4 0-8 3.6-8 8v56c0 4.4 3.6 8 8 8h496v688c0 4.4 3.6 8 8 8h56c4.4 0 8-3.6 8-8V96c0-17.7-14.3-32-32-32zM704 192H192c-17.7 0-32 14.3-32 32v530.7c0 8.5 3.4 16.6 9.4 22.6l173.3 173.3c2.2 2.2 4.7 4 7.4 5.5v1.9h4.2c3.5 1.3 7.2 2 11 2H704c17.7 0 32-14.3 32-32V224c0-17.7-14.3-32-32-32zM350 856.2L263.9 770H350v86.2zM664 888H414V746c0-22.1-17.9-40-40-40H232V264h432v624z"}}]},name:"copy",theme:"outlined"},P=function(e,t){return i.createElement(S.a,Object.assign({},e,{ref:t,icon:T}))};P.displayName="CopyOutlined";var D=i.forwardRef(P),I=n(119),z=n(96),A=n(128),H=n(185),L=n(172),M=n(192),U=n(133),K=n(95),F=n(114),B={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M864 170h-60c-4.4 0-8 3.6-8 8v518H310v-73c0-6.7-7.8-10.5-13-6.3l-141.9 112a8 8 0 000 12.6l141.9 112c5.3 4.2 13 .4 13-6.3v-75h498c35.3 0 64-28.7 64-64V178c0-4.4-3.6-8-8-8z"}}]},name:"enter",theme:"outlined"},V=function(e,t){return i.createElement(S.a,Object.assign({},e,{ref:t,icon:B}))};V.displayName="EnterOutlined";var W,J=i.forwardRef(V),X=n(236),_=function(e){var t=e.prefixCls,n=e["aria-label"],r=e.className,o=e.style,c=e.direction,s=e.maxLength,p=e.autoSize,d=void 0===p||p,u=e.value,f=e.onSave,y=e.onCancel,b=e.onEnd,h=i.useRef(),v=i.useRef(!1),m=i.useRef(),g=i.useState(u),O=Object(K.a)(g,2),E=O[0],x=O[1];i.useEffect((function(){x(u)}),[u]),i.useEffect((function(){if(h.current&&h.current.resizableTextArea){var e=h.current.resizableTextArea.textArea;e.focus();var t=e.value.length;e.setSelectionRange(t,t)}}),[]);var j=function(){f(E.trim())},C=l()(t,"".concat(t,"-edit-content"),Object(a.a)({},"".concat(t,"-rtl"),"rtl"===c),r);return i.createElement("div",{className:C,style:o},i.createElement(X.a,{ref:h,maxLength:s,value:E,onChange:function(e){var t=e.target;x(t.value.replace(/[\n\r]/g,""))},onKeyDown:function(e){var t=e.keyCode;v.current||(m.current=t)},onKeyUp:function(e){var t=e.keyCode,n=e.ctrlKey,r=e.altKey,a=e.metaKey,i=e.shiftKey;m.current!==t||v.current||n||r||a||i||(t===F.a.ENTER?(j(),null===b||void 0===b||b()):t===F.a.ESC&&y())},onCompositionStart:function(){v.current=!0},onCompositionEnd:function(){v.current=!1},onBlur:function(){j()},"aria-label":n,autoSize:d}),i.createElement(J,{className:"".concat(t,"-edit-content-confirm")}))},q=n(28),G={padding:0,margin:0,display:"inline",lineHeight:"inherit"};function Q(e){if(!e)return 0;var t=e.match(/^\d*(\.\d*)?/);return t?Number(t[0]):0}var Y=function(e,t,n,r,a){W||((W=document.createElement("div")).setAttribute("aria-hidden","true"),document.body.appendChild(W));var o,l=t.rows,c=t.suffix,s=void 0===c?"":c,p=window.getComputedStyle(e),d=(o=p,Array.prototype.slice.apply(o).map((function(e){return"".concat(e,": ").concat(o.getPropertyValue(e),";")})).join("")),u=Q(p.lineHeight),f=Math.round(u*(l+1)+Q(p.paddingTop)+Q(p.paddingBottom));W.setAttribute("style",d),W.style.position="fixed",W.style.left="0",W.style.height="auto",W.style.minHeight="auto",W.style.maxHeight="auto",W.style.top="-999999px",W.style.zIndex="-1000",W.style.textOverflow="clip",W.style.whiteSpace="normal",W.style.webkitLineClamp="none";var y=function(e){var t=[];return e.forEach((function(e){var n=t[t.length-1];"string"===typeof e&&"string"===typeof n?t[t.length-1]+=e:t.push(e)})),t}(Object(x.a)(n));function b(){return W.offsetHeight<f}if(Object(q.render)(i.createElement("div",{style:G},i.createElement("span",{style:G},y,s),i.createElement("span",{style:G},r)),W),b())return Object(q.unmountComponentAtNode)(W),{content:n,text:W.innerHTML,ellipsis:!1};var h=Array.prototype.slice.apply(W.childNodes[0].childNodes[0].cloneNode(!0).childNodes).filter((function(e){return 8!==e.nodeType})),v=Array.prototype.slice.apply(W.childNodes[0].childNodes[1].cloneNode(!0).childNodes);Object(q.unmountComponentAtNode)(W);var m=[];W.innerHTML="";var g=document.createElement("span");W.appendChild(g);var O=document.createTextNode(a+s);function E(e){g.insertBefore(e,O)}function j(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,r=arguments.length>3&&void 0!==arguments[3]?arguments[3]:t.length,a=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,i=Math.floor((n+r)/2),o=t.slice(0,i);if(e.textContent=o,n>=r-1)for(var l=r;l>=n;l-=1){var c=t.slice(0,l);if(e.textContent=c,b()||!c)return l===t.length?{finished:!1,reactNode:t}:{finished:!0,reactNode:c}}return b()?j(e,t,i,r,i):j(e,t,n,i,a)}function C(e,t){var n=e.nodeType;if(1===n)return E(e),b()?{finished:!1,reactNode:y[t]}:(g.removeChild(e),{finished:!0,reactNode:null});if(3===n){var r=e.textContent||"",a=document.createTextNode(r);return E(a),j(a,r)}return{finished:!1,reactNode:null}}return g.appendChild(O),v.forEach((function(e){W.appendChild(e)})),h.some((function(e,t){var n=C(e,t),r=n.finished,a=n.reactNode;return a&&m.push(a),r})),{content:m,text:W.innerHTML,ellipsis:!0}},Z=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},$=Object(M.c)("webkitLineClamp"),ee=Object(M.c)("textOverflow");var te=function(e){Object(O.a)(n,e);var t=Object(E.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.apply(this,arguments)).contentRef=i.createRef(),e.state={edit:!1,copied:!1,ellipsisText:"",ellipsisContent:null,isEllipsis:!1,expanded:!1,clientRendered:!1},e.getPrefixCls=function(){var t=e.props.prefixCls;return(0,e.context.getPrefixCls)("typography",t)},e.onExpandClick=function(t){var n,r=e.getEllipsis().onExpand;e.setState({expanded:!0}),null===(n=r)||void 0===n||n(t)},e.onEditClick=function(){e.triggerEdit(!0)},e.onEditChange=function(t){var n=e.getEditable().onChange;null===n||void 0===n||n(t),e.triggerEdit(!1)},e.onEditCancel=function(){var t,n;null===(n=(t=e.getEditable()).onCancel)||void 0===n||n.call(t),e.triggerEdit(!1)},e.onCopyClick=function(t){t.preventDefault();var n=e.props,a=n.children,i=n.copyable,o=Object(r.a)({},"object"===Object(b.a)(i)?i:null);void 0===o.text&&(o.text=String(a)),C()(o.text||""),e.setState({copied:!0},(function(){o.onCopy&&o.onCopy(),e.copyId=window.setTimeout((function(){e.setState({copied:!1})}),3e3)}))},e.setEditRef=function(t){e.editIcon=t},e.triggerEdit=function(t){var n=e.getEditable().onStart;t&&n&&n(),e.setState({edit:t},(function(){!t&&e.editIcon&&e.editIcon.focus()}))},e.resizeOnNextFrame=function(){L.a.cancel(e.rafId),e.rafId=Object(L.a)((function(){e.syncEllipsis()}))},e}return Object(g.a)(n,[{key:"componentDidMount",value:function(){this.setState({clientRendered:!0}),this.resizeOnNextFrame()}},{key:"componentDidUpdate",value:function(e){var t=this.props.children,n=this.getEllipsis(),r=this.getEllipsis(e);t===e.children&&n.rows===r.rows||this.resizeOnNextFrame()}},{key:"componentWillUnmount",value:function(){window.clearTimeout(this.copyId),L.a.cancel(this.rafId)}},{key:"getEditable",value:function(e){var t=this.state.edit,n=(e||this.props).editable;return n?Object(r.a)({editing:t},"object"===Object(b.a)(n)?n:null):{editing:t}}},{key:"getEllipsis",value:function(e){var t=(e||this.props).ellipsis;return t?Object(r.a)({rows:1,expandable:!1},"object"===Object(b.a)(t)?t:null):{}}},{key:"canUseCSSEllipsis",value:function(){var e=this.state.clientRendered,t=this.props,n=t.editable,r=t.copyable,a=this.getEllipsis(),i=a.rows,o=a.expandable,l=a.suffix,c=a.onEllipsis,s=a.tooltip;return!l&&!s&&(!(n||r||o||!e||c)&&(1===i?ee:$))}},{key:"syncEllipsis",value:function(){var e=this.state,t=e.ellipsisText,n=e.isEllipsis,r=e.expanded,a=this.getEllipsis(),i=a.rows,o=a.suffix,l=a.onEllipsis,c=this.props.children;if(i&&!(i<0)&&this.contentRef.current&&!r&&!this.canUseCSSEllipsis()){Object(p.a)(Object(x.a)(c).every((function(e){return"string"===typeof e})),"Typography","`ellipsis` should use string as children only.");var s=Y(this.contentRef.current,{rows:i,suffix:o},c,this.renderOperations(!0),"..."),d=s.content,u=s.text,f=s.ellipsis;t===u&&n===f||(this.setState({ellipsisText:u,ellipsisContent:d,isEllipsis:f}),n!==f&&l&&l(f))}}},{key:"renderExpand",value:function(e){var t,n=this.getEllipsis(),r=n.expandable,a=n.symbol,o=this.state,l=o.expanded,c=o.isEllipsis;return r&&(e||!l&&c)?(t=a||this.expandStr,i.createElement("a",{key:"expand",className:"".concat(this.getPrefixCls(),"-expand"),onClick:this.onExpandClick,"aria-label":this.expandStr},t)):null}},{key:"renderEdit",value:function(){var e=this.props.editable;if(e){var t=e.icon,n=e.tooltip,r=Object(x.a)(n)[0]||this.editStr,a="string"===typeof r?r:"";return i.createElement(U.a,{key:"edit",title:!1===n?"":r},i.createElement(H.a,{ref:this.setEditRef,className:"".concat(this.getPrefixCls(),"-edit"),onClick:this.onEditClick,"aria-label":a},t||i.createElement(N,{role:"button"})))}}},{key:"renderCopy",value:function(){var e=this.state.copied,t=this.props.copyable;if(t){var n=this.getPrefixCls(),r=t.tooltips,a=Object(x.a)(r);0===a.length&&(a=[this.copyStr,this.copiedStr]);var o=e?a[1]:a[0],c="string"===typeof o?o:"",s=Object(x.a)(t.icon);return i.createElement(U.a,{key:"copy",title:!1===r?"":o},i.createElement(H.a,{className:l()("".concat(n,"-copy"),e&&"".concat(n,"-copy-success")),onClick:this.onCopyClick,"aria-label":c},e?s[1]||i.createElement(R.a,null):s[0]||i.createElement(D,null)))}}},{key:"renderEditInput",value:function(){var e=this.props,t=e.children,n=e.className,r=e.style,a=this.context.direction,o=this.getEditable(),l=o.maxLength,c=o.autoSize,s=o.onEnd;return i.createElement(_,{value:"string"===typeof t?t:"",onSave:this.onEditChange,onCancel:this.onEditCancel,onEnd:s,prefixCls:this.getPrefixCls(),className:n,style:r,direction:a,maxLength:l,autoSize:c})}},{key:"renderOperations",value:function(e){return[this.renderExpand(e),this.renderEdit(),this.renderCopy()].filter((function(e){return e}))}},{key:"renderContent",value:function(){var e=this,t=this.state,n=t.ellipsisContent,o=t.isEllipsis,c=t.expanded,s=this.props,p=s.component,d=s.children,u=s.className,f=s.type,b=s.disabled,m=s.style,g=Z(s,["component","children","className","type","disabled","style"]),O=this.context.direction,E=this.getEllipsis(),x=E.rows,j=E.suffix,C=E.tooltip,w=this.getPrefixCls(),S=Object(h.a)(g,["prefixCls","editable","copyable","ellipsis","mark","code","delete","underline","strong","keyboard"].concat(Object(v.a)(z.a))),k=this.canUseCSSEllipsis(),N=1===x&&k,R=x&&x>1&&k,T=d;if(x&&o&&!c&&!k){var P=g.title,D=P||"";P||"string"!==typeof d&&"number"!==typeof d||(D=String(d)),D=null===D||void 0===D?void 0:D.slice(String(n||"").length),T=i.createElement(i.Fragment,null,n,i.createElement("span",{title:D,"aria-hidden":"true"},"..."),j),C&&(T=i.createElement(U.a,{title:!0===C?d:C},i.createElement("span",null,T)))}else T=i.createElement(i.Fragment,null,d,j);return T=function(e,t){var n=e.mark,r=e.code,a=e.underline,o=e.delete,l=e.strong,c=e.keyboard,s=t;function p(e,t){e&&(s=i.createElement(t,{},s))}return p(l,"strong"),p(a,"u"),p(o,"del"),p(r,"code"),p(n,"mark"),p(c,"kbd"),s}(this.props,T),i.createElement(A.a,{componentName:"Text"},(function(t){var n,o=t.edit,c=t.copy,s=t.copied,d=t.expand;return e.editStr=o,e.copyStr=c,e.copiedStr=s,e.expandStr=d,i.createElement(I.a,{onResize:e.resizeOnNextFrame,disabled:!x},i.createElement(y,Object(r.a)({className:l()((n={},Object(a.a)(n,"".concat(w,"-").concat(f),f),Object(a.a)(n,"".concat(w,"-disabled"),b),Object(a.a)(n,"".concat(w,"-ellipsis"),x),Object(a.a)(n,"".concat(w,"-ellipsis-single-line"),N),Object(a.a)(n,"".concat(w,"-ellipsis-multiple-line"),R),n),u),style:Object(r.a)(Object(r.a)({},m),{WebkitLineClamp:R?x:void 0}),component:p,ref:e.contentRef,direction:O},S),T,e.renderOperations()))}))}},{key:"render",value:function(){return this.getEditable().editing?this.renderEditInput():this.renderContent()}}],[{key:"getDerivedStateFromProps",value:function(e){var t=e.children,n=e.editable;return Object(p.a)(!n||"string"===typeof t,"Typography","When `editable` is enabled, the `children` should use string."),{}}}]),n}(i.Component);te.contextType=s.b,te.defaultProps={children:""};var ne=te,re=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},ae=function(e){var t=e.ellipsis,n=re(e,["ellipsis"]),a=i.useMemo((function(){return t&&"object"===Object(b.a)(t)?Object(h.a)(t,["expandable","rows"]):t}),[t]);return Object(p.a)("object"!==Object(b.a)(t)||!t||!("expandable"in t)&&!("rows"in t),"Typography.Text","`ellipsis` do not support `expandable` or `rows` props."),i.createElement(ne,Object(r.a)({},n,{ellipsis:a,component:"span"}))},ie=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},oe=function(e,t){var n=e.ellipsis,a=e.rel,o=ie(e,["ellipsis","rel"]);Object(p.a)("object"!==Object(b.a)(n),"Typography.Link","`ellipsis` only supports boolean value.");var l=i.useRef(null);i.useImperativeHandle(t,(function(){var e;return null===(e=l.current)||void 0===e?void 0:e.contentRef.current}));var c=Object(r.a)(Object(r.a)({},o),{rel:void 0===a&&"_blank"===o.target?"noopener noreferrer":a});return delete c.navigate,i.createElement(ne,Object(r.a)({},c,{ref:l,ellipsis:!!n,component:"a"}))},le=i.forwardRef(oe),ce=n(123),se=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n},pe=Object(ce.b)(1,2,3,4,5),de=function(e){var t,n=e.level,a=void 0===n?1:n,o=se(e,["level"]);return-1!==pe.indexOf(a)?t="h".concat(a):(Object(p.a)(!1,"Typography.Title","Title only accept `1 | 2 | 3 | 4 | 5` as `level` value. And `5` need 4.6.0+ version."),t="h1"),i.createElement(ne,Object(r.a)({},o,{component:t}))},ue=function(e){return i.createElement(ne,Object(r.a)({},e,{component:"div"}))},fe=y;fe.Text=ae,fe.Link=le,fe.Title=de,fe.Paragraph=ue;t.a=fe}}]);
//# sourceMappingURL=4.3af55f63.chunk.js.map