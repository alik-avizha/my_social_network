"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[824],{4824:function(e,t,a){a.r(t),a.d(t,{UsersContainerSecond:function(){return Ze},default:function(){return Ce}});var o=a(5671),n=a(3144),r=a(136),i=a(5716),s=a(2791),l=a(364),c=a(9232),u="users_usersWrapper__lX8OC",d="users_users__Gyr0H",p="users_pagination__RrQLn",v="user_userWrapper__0vdw-",g="user_userPhoto__z-VdA",f="user_userName__u5iD5",h="user_userId__Ab0wN",m=a(8478),b=a(1523),x=a(8360),y=a(184),Z=function(e){var t=e.user,a=e.followingInProgress,o=e.follow,n=e.unfollow;return(0,y.jsxs)("div",{className:v,children:[(0,y.jsx)(b.OL,{to:"/profile/"+t.id,children:(0,y.jsx)("img",{src:null!==t.photos.small?t.photos.small:m,alt:"avatar",className:g})}),(0,y.jsx)("span",{className:f,children:t.name.length>8?t.name.slice(0,9)+"...":t.name}),(0,y.jsxs)("span",{className:h,children:["userId: ",e.user.id]}),(0,y.jsx)("div",{children:t.followed?(0,y.jsx)(x.zx,{name:"UnFollow",callback:function(){return n(t.id)},disabled:a.some((function(e){return e===t.id}))}):(0,y.jsx)(x.zx,{name:"Follow",callback:function(){return o(t.id)},disabled:a.some((function(e){return e===t.id}))})})]})},C=a(2793),w=a(1048),P=a(8182),z=a(4419),k=a(1046),N=a(5878),S=a(7225);function j(e){return(0,S.Z)("MuiPagination",e)}(0,N.Z)("MuiPagination",["root","ul","outlined","text"]);var O=a(2982),R=a(885),M=a(8637),L=["boundaryCount","componentName","count","defaultPage","disabled","hideNextButton","hidePrevButton","onChange","page","showFirstButton","showLastButton","siblingCount"];var I=a(4942),_=a(2065);function B(e){return(0,S.Z)("MuiPaginationItem",e)}var F=(0,N.Z)("MuiPaginationItem",["root","page","sizeSmall","sizeLarge","text","textPrimary","textSecondary","outlined","outlinedPrimary","outlinedSecondary","rounded","ellipsis","firstLast","previousNext","focusVisible","disabled","selected","icon"]),A=a(3967),U=a(5236),W=a(4036),q=a(9201),T=(0,q.Z)((0,y.jsx)("path",{d:"M18.41 16.59L13.82 12l4.59-4.59L17 6l-6 6 6 6zM6 6h2v12H6z"}),"FirstPage"),E=(0,q.Z)((0,y.jsx)("path",{d:"M5.59 7.41L10.18 12l-4.59 4.59L7 18l6-6-6-6zM16 6h2v12h-2z"}),"LastPage"),V=(0,q.Z)((0,y.jsx)("path",{d:"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}),"NavigateBefore"),D=(0,q.Z)((0,y.jsx)("path",{d:"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}),"NavigateNext"),G=a(4502),H=["className","color","component","components","disabled","page","selected","shape","size","slots","type","variant"],Q=function(e,t){var a=e.ownerState;return[t.root,t[a.variant],t["size".concat((0,W.Z)(a.size))],"text"===a.variant&&t["text".concat((0,W.Z)(a.color))],"outlined"===a.variant&&t["outlined".concat((0,W.Z)(a.color))],"rounded"===a.shape&&t.rounded,"page"===a.type&&t.page,("start-ellipsis"===a.type||"end-ellipsis"===a.type)&&t.ellipsis,("previous"===a.type||"next"===a.type)&&t.previousNext,("first"===a.type||"last"===a.type)&&t.firstLast]},X=(0,G.ZP)("div",{name:"MuiPaginationItem",slot:"Root",overridesResolver:Q})((function(e){var t=e.theme,a=e.ownerState;return(0,C.Z)({},t.typography.body2,(0,I.Z)({borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,padding:"0 6px",margin:"0 3px",color:(t.vars||t).palette.text.primary,height:"auto"},"&.".concat(F.disabled),{opacity:(t.vars||t).palette.action.disabledOpacity}),"small"===a.size&&{minWidth:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===a.size&&{minWidth:40,borderRadius:20,padding:"0 10px",fontSize:t.typography.pxToRem(15)})})),$=(0,G.ZP)(U.Z,{name:"MuiPaginationItem",slot:"Root",overridesResolver:Q})((function(e){var t,a,o=e.theme,n=e.ownerState;return(0,C.Z)({},o.typography.body2,(a={borderRadius:16,textAlign:"center",boxSizing:"border-box",minWidth:32,height:32,padding:"0 6px",margin:"0 3px",color:(o.vars||o).palette.text.primary},(0,I.Z)(a,"&.".concat(F.focusVisible),{backgroundColor:(o.vars||o).palette.action.focus}),(0,I.Z)(a,"&.".concat(F.disabled),{opacity:(o.vars||o).palette.action.disabledOpacity}),(0,I.Z)(a,"transition",o.transitions.create(["color","background-color"],{duration:o.transitions.duration.short})),(0,I.Z)(a,"&:hover",{backgroundColor:(o.vars||o).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}}),(0,I.Z)(a,"&.".concat(F.selected),(t={backgroundColor:(o.vars||o).palette.action.selected,"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.selected," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.hoverOpacity,"))"):(0,_.Fq)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:(o.vars||o).palette.action.selected}}},(0,I.Z)(t,"&.".concat(F.focusVisible),{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.selected," / calc(").concat(o.vars.palette.action.selectedOpacity," + ").concat(o.vars.palette.action.focusOpacity,"))"):(0,_.Fq)(o.palette.action.selected,o.palette.action.selectedOpacity+o.palette.action.focusOpacity)}),(0,I.Z)(t,"&.".concat(F.disabled),{opacity:1,color:(o.vars||o).palette.action.disabled,backgroundColor:(o.vars||o).palette.action.selected}),t)),a),"small"===n.size&&{minWidth:26,height:26,borderRadius:13,margin:"0 1px",padding:"0 4px"},"large"===n.size&&{minWidth:40,height:40,borderRadius:20,padding:"0 10px",fontSize:o.typography.pxToRem(15)},"rounded"===n.shape&&{borderRadius:(o.vars||o).shape.borderRadius})}),(function(e){var t=e.theme,a=e.ownerState;return(0,C.Z)({},"text"===a.variant&&(0,I.Z)({},"&.".concat(F.selected),(0,C.Z)({},"standard"!==a.color&&(0,I.Z)({color:(t.vars||t).palette[a.color].contrastText,backgroundColor:(t.vars||t).palette[a.color].main,"&:hover":{backgroundColor:(t.vars||t).palette[a.color].dark,"@media (hover: none)":{backgroundColor:(t.vars||t).palette[a.color].main}}},"&.".concat(F.focusVisible),{backgroundColor:(t.vars||t).palette[a.color].dark}),(0,I.Z)({},"&.".concat(F.disabled),{color:(t.vars||t).palette.action.disabled}))),"outlined"===a.variant&&(0,I.Z)({border:t.vars?"1px solid rgba(".concat(t.vars.palette.common.onBackgroundChannel," / 0.23)"):"1px solid ".concat("light"===t.palette.mode?"rgba(0, 0, 0, 0.23)":"rgba(255, 255, 255, 0.23)")},"&.".concat(F.selected),(0,C.Z)({},"standard"!==a.color&&(0,I.Z)({color:(t.vars||t).palette[a.color].main,border:"1px solid ".concat(t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / 0.5)"):(0,_.Fq)(t.palette[a.color].main,.5)),backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / ").concat(t.vars.palette.action.activatedOpacity,")"):(0,_.Fq)(t.palette[a.color].main,t.palette.action.activatedOpacity),"&:hover":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / calc(").concat(t.vars.palette.action.activatedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,_.Fq)(t.palette[a.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"&.".concat(F.focusVisible),{backgroundColor:t.vars?"rgba(".concat(t.vars.palette[a.color].mainChannel," / calc(").concat(t.vars.palette.action.activatedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,_.Fq)(t.palette[a.color].main,t.palette.action.activatedOpacity+t.palette.action.focusOpacity)}),(0,I.Z)({},"&.".concat(F.disabled),{borderColor:(t.vars||t).palette.action.disabledBackground,color:(t.vars||t).palette.action.disabled}))))})),J=(0,G.ZP)("div",{name:"MuiPaginationItem",slot:"Icon",overridesResolver:function(e,t){return t.icon}})((function(e){var t=e.theme,a=e.ownerState;return(0,C.Z)({fontSize:t.typography.pxToRem(20),margin:"0 -8px"},"small"===a.size&&{fontSize:t.typography.pxToRem(18)},"large"===a.size&&{fontSize:t.typography.pxToRem(22)})})),K=s.forwardRef((function(e,t){var a=(0,k.Z)({props:e,name:"MuiPaginationItem"}),o=a.className,n=a.color,r=void 0===n?"standard":n,i=a.component,s=a.components,l=void 0===s?{}:s,c=a.disabled,u=void 0!==c&&c,d=a.page,p=a.selected,v=void 0!==p&&p,g=a.shape,f=void 0===g?"circular":g,h=a.size,m=void 0===h?"medium":h,b=a.slots,x=void 0===b?{}:b,Z=a.type,N=void 0===Z?"page":Z,S=a.variant,j=void 0===S?"text":S,O=(0,w.Z)(a,H),R=(0,C.Z)({},a,{color:r,disabled:u,selected:v,shape:f,size:m,type:N,variant:j}),M=(0,A.Z)(),L=function(e){var t=e.classes,a=e.color,o=e.disabled,n=e.selected,r=e.size,i=e.shape,s=e.type,l=e.variant,c={root:["root","size".concat((0,W.Z)(r)),l,i,"standard"!==a&&"".concat(l).concat((0,W.Z)(a)),o&&"disabled",n&&"selected",{page:"page",first:"firstLast",last:"firstLast","start-ellipsis":"ellipsis","end-ellipsis":"ellipsis",previous:"previousNext",next:"previousNext"}[s]],icon:["icon"]};return(0,z.Z)(c,B,t)}(R),I=("rtl"===M.direction?{previous:x.next||l.next||D,next:x.previous||l.previous||V,last:x.first||l.first||T,first:x.last||l.last||E}:{previous:x.previous||l.previous||V,next:x.next||l.next||D,first:x.first||l.first||T,last:x.last||l.last||E})[N];return"start-ellipsis"===N||"end-ellipsis"===N?(0,y.jsx)(X,{ref:t,ownerState:R,className:(0,P.Z)(L.root,o),children:"\u2026"}):(0,y.jsxs)($,(0,C.Z)({ref:t,ownerState:R,component:i,disabled:u,className:(0,P.Z)(L.root,o)},O,{children:["page"===N&&d,I?(0,y.jsx)(J,{as:I,ownerState:R,className:L.icon}):null]}))})),Y=K,ee=["boundaryCount","className","color","count","defaultPage","disabled","getItemAriaLabel","hideNextButton","hidePrevButton","onChange","page","renderItem","shape","showFirstButton","showLastButton","siblingCount","size","variant"],te=(0,G.ZP)("nav",{name:"MuiPagination",slot:"Root",overridesResolver:function(e,t){var a=e.ownerState;return[t.root,t[a.variant]]}})({}),ae=(0,G.ZP)("ul",{name:"MuiPagination",slot:"Ul",overridesResolver:function(e,t){return t.ul}})({display:"flex",flexWrap:"wrap",alignItems:"center",padding:0,margin:0,listStyle:"none"});function oe(e,t,a){return"page"===e?"".concat(a?"":"Go to ","page ").concat(t):"Go to ".concat(e," page")}var ne=s.forwardRef((function(e,t){var a=(0,k.Z)({props:e,name:"MuiPagination"}),o=a.boundaryCount,n=void 0===o?1:o,r=a.className,i=a.color,s=void 0===i?"standard":i,l=a.count,c=void 0===l?1:l,u=a.defaultPage,d=void 0===u?1:u,p=a.disabled,v=void 0!==p&&p,g=a.getItemAriaLabel,f=void 0===g?oe:g,h=a.hideNextButton,m=void 0!==h&&h,b=a.hidePrevButton,x=void 0!==b&&b,Z=a.renderItem,N=void 0===Z?function(e){return(0,y.jsx)(Y,(0,C.Z)({},e))}:Z,S=a.shape,I=void 0===S?"circular":S,_=a.showFirstButton,B=void 0!==_&&_,F=a.showLastButton,A=void 0!==F&&F,U=a.siblingCount,W=void 0===U?1:U,q=a.size,T=void 0===q?"medium":q,E=a.variant,V=void 0===E?"text":E,D=(0,w.Z)(a,ee),G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.boundaryCount,a=void 0===t?1:t,o=e.componentName,n=void 0===o?"usePagination":o,r=e.count,i=void 0===r?1:r,s=e.defaultPage,l=void 0===s?1:s,c=e.disabled,u=void 0!==c&&c,d=e.hideNextButton,p=void 0!==d&&d,v=e.hidePrevButton,g=void 0!==v&&v,f=e.onChange,h=e.page,m=e.showFirstButton,b=void 0!==m&&m,x=e.showLastButton,y=void 0!==x&&x,Z=e.siblingCount,P=void 0===Z?1:Z,z=(0,w.Z)(e,L),k=(0,M.Z)({controlled:h,default:l,name:n,state:"page"}),N=(0,R.Z)(k,2),S=N[0],j=N[1],I=function(e,t){h||j(t),f&&f(e,t)},_=function(e,t){var a=t-e+1;return Array.from({length:a},(function(t,a){return e+a}))},B=_(1,Math.min(a,i)),F=_(Math.max(i-a+1,a+1),i),A=Math.max(Math.min(S-P,i-a-2*P-1),a+2),U=Math.min(Math.max(S+P,a+2*P+2),F.length>0?F[0]-2:i-1),W=[].concat((0,O.Z)(b?["first"]:[]),(0,O.Z)(g?[]:["previous"]),(0,O.Z)(B),(0,O.Z)(A>a+2?["start-ellipsis"]:a+1<i-a?[a+1]:[]),(0,O.Z)(_(A,U)),(0,O.Z)(U<i-a-1?["end-ellipsis"]:i-a>a?[i-a]:[]),(0,O.Z)(F),(0,O.Z)(p?[]:["next"]),(0,O.Z)(y?["last"]:[])),q=function(e){switch(e){case"first":return 1;case"previous":return S-1;case"next":return S+1;case"last":return i;default:return null}},T=W.map((function(e){return"number"===typeof e?{onClick:function(t){I(t,e)},type:"page",page:e,selected:e===S,disabled:u,"aria-current":e===S?"true":void 0}:{onClick:function(t){I(t,q(e))},type:e,page:q(e),selected:!1,disabled:u||-1===e.indexOf("ellipsis")&&("next"===e||"last"===e?S>=i:S<=1)}}));return(0,C.Z)({items:T},z)}((0,C.Z)({},a,{componentName:"Pagination"})),H=G.items,Q=(0,C.Z)({},a,{boundaryCount:n,color:s,count:c,defaultPage:d,disabled:v,getItemAriaLabel:f,hideNextButton:m,hidePrevButton:x,renderItem:N,shape:I,showFirstButton:B,showLastButton:A,siblingCount:W,size:T,variant:V}),X=function(e){var t=e.classes,a={root:["root",e.variant],ul:["ul"]};return(0,z.Z)(a,j,t)}(Q);return(0,y.jsx)(te,(0,C.Z)({"aria-label":"pagination navigation",className:(0,P.Z)(X.root,r),ownerState:Q,ref:t},D,{children:(0,y.jsx)(ae,{className:X.ul,ownerState:Q,children:H.map((function(e,t){return(0,y.jsx)("li",{children:N((0,C.Z)({},e,{color:s,"aria-label":f(e.type,e.page,e.selected),shape:I,size:T,variant:V}))},t)}))})}))})),re=ne,ie=function(e){var t=e.users,a=e.pageSize,o=e.totalUsersCount,n=(e.currentPage,e.follow),r=e.unfollow,i=e.onPageChanged,s=e.followingInProgress;return(0,y.jsxs)("div",{className:u,children:[(0,y.jsx)("div",{className:p,children:(0,y.jsx)(re,{count:Math.ceil(o/a),onChange:function(e,t){return i(t)},sx:{button:{borderRadius:"2px",marginRight:"20px",marginLeft:"0px",width:"24px",height:"24px",padding:"4px 8px",fontSize:"14px",fontWeight:400,backgroundColor:"transparent","&:hover":{backgroundColor:"#0066CC",color:"#fff"},"&.Mui-selected":{backgroundColor:"#0066CC",color:"#fff"}}}})}),(0,y.jsx)("div",{className:d,children:t.map((function(e){return(0,y.jsx)(Z,{follow:n,unfollow:r,user:e,followingInProgress:s},e.id)}))})]})},se=a(7781),le="NOT_FOUND";var ce=function(e,t){return e===t};function ue(e,t){var a="object"===typeof t?t:{equalityCheck:t},o=a.equalityCheck,n=void 0===o?ce:o,r=a.maxSize,i=void 0===r?1:r,s=a.resultEqualityCheck,l=function(e){return function(t,a){if(null===t||null===a||t.length!==a.length)return!1;for(var o=t.length,n=0;n<o;n++)if(!e(t[n],a[n]))return!1;return!0}}(n),c=1===i?function(e){var t;return{get:function(a){return t&&e(t.key,a)?t.value:le},put:function(e,a){t={key:e,value:a}},getEntries:function(){return t?[t]:[]},clear:function(){t=void 0}}}(l):function(e,t){var a=[];function o(e){var o=a.findIndex((function(a){return t(e,a.key)}));if(o>-1){var n=a[o];return o>0&&(a.splice(o,1),a.unshift(n)),n.value}return le}return{get:o,put:function(t,n){o(t)===le&&(a.unshift({key:t,value:n}),a.length>e&&a.pop())},getEntries:function(){return a},clear:function(){a=[]}}}(i,l);function u(){var t=c.get(arguments);if(t===le){if(t=e.apply(null,arguments),s){var a=c.getEntries(),o=a.find((function(e){return s(e.value,t)}));o&&(t=o.value)}c.put(arguments,t)}return t}return u.clearCache=function(){return c.clear()},u}function de(e){var t=Array.isArray(e[0])?e[0]:e;if(!t.every((function(e){return"function"===typeof e}))){var a=t.map((function(e){return"function"===typeof e?"function "+(e.name||"unnamed")+"()":typeof e})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+a+"]")}return t}function pe(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),o=1;o<t;o++)a[o-1]=arguments[o];var n=function(){for(var t=arguments.length,o=new Array(t),n=0;n<t;n++)o[n]=arguments[n];var r,i=0,s={memoizeOptions:void 0},l=o.pop();if("object"===typeof l&&(s=l,l=o.pop()),"function"!==typeof l)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof l+"]");var c=s,u=c.memoizeOptions,d=void 0===u?a:u,p=Array.isArray(d)?d:[d],v=de(o),g=e.apply(void 0,[function(){return i++,l.apply(null,arguments)}].concat(p)),f=e((function(){for(var e=[],t=v.length,a=0;a<t;a++)e.push(v[a].apply(null,arguments));return r=g.apply(null,e)}));return Object.assign(f,{resultFunc:l,memoizedResultFunc:g,dependencies:v,lastResult:function(){return r},recomputations:function(){return i},resetRecomputations:function(){return i=0}}),f};return n}var ve=pe(ue),ge=ve((function(e){return e.usersPage.users}),(function(e){return e.filter((function(e){return!0}))})),fe=function(e){return e.usersPage.pageSize},he=function(e){return e.usersPage.totalUsersCount},me=function(e){return e.usersPage.currentPage},be=function(e){return e.usersPage.isFetching},xe=function(e){return e.usersPage.followingInProgress},ye=a(8535),Ze=function(e){(0,r.Z)(a,e);var t=(0,i.Z)(a);function a(){var e;(0,o.Z)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).onPageChanged=function(t){var a=e.props.pageSize;e.props.getUsers(t,a)},e}return(0,n.Z)(a,[{key:"componentDidMount",value:function(){var e=this.props,t=e.currentPage,a=e.pageSize;this.props.getUsers(t,a)}},{key:"componentWillUnmount",value:function(){this.props.getUsers(1,this.props.pageSize)}},{key:"render",value:function(){return(0,y.jsxs)(y.Fragment,{children:[this.props.isFetching?(0,y.jsx)(x.p9,{}):null,(0,y.jsx)(ie,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),a}(s.Component),Ce=(0,se.qC)((0,l.$j)((function(e){return{users:ge(e),pageSize:fe(e),totalUsersCount:he(e),currentPage:me(e),isFetching:be(e),followingInProgress:xe(e)}}),{follow:c.AC,unfollow:c.Ow,getUsers:c.Uk}),ye.D)(Ze)}}]);
//# sourceMappingURL=824.16c523bd.chunk.js.map