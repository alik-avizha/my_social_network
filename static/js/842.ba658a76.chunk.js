"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[842],{6842:function(e,a,s){s.r(a),s.d(a,{default:function(){return f}});var n=s(2982),t=s(885),c=s(2791),r="chat-page_chatWrapper__hJnmo",i="chat-page_messages__aK5je",u="chat-page_message__As1ex",l="chat-page_imageAndText__uxSB1",d="chat-page_avatar__nHf5L",h="chat-page_text__+Khqt",m="chat-page_name__3lMYS",o="chat-page_messageText__5NOrs",_=s(4409),p=s(890),x=s(184),g=new WebSocket("wss://social-network.samuraijs.com/handlers/ChatHandler.ashx"),f=function(){return(0,x.jsx)("div",{className:r,children:(0,x.jsx)(j,{})})},j=function(){return(0,x.jsxs)("div",{children:[(0,x.jsx)(v,{}),(0,x.jsx)(_.BZ,{callback:function(e){g.send(e)},placeholder:"type new message"})]})},v=function(){var e=(0,c.useState)([]),a=(0,t.Z)(e,2),s=a[0],r=a[1];return(0,c.useEffect)((function(){g.addEventListener("message",(function(e){r((function(a){return[].concat((0,n.Z)(a),(0,n.Z)(JSON.parse(e.data)))}))}))}),[]),(0,x.jsx)("div",{className:i,children:null===s||void 0===s?void 0:s.map((function(e){return(0,x.jsx)(N,{photo:e.photo,userName:e.userName,message:e.message},e.userId)}))})},N=function(e){var a=e.photo,s=e.userName,n=e.message;return(0,x.jsx)("div",{className:u,children:(0,x.jsxs)("div",{className:l,children:[(0,x.jsx)("img",{className:d,alt:"myAvatar",src:a}),(0,x.jsxs)("div",{className:h,children:[(0,x.jsx)("div",{className:m,children:(0,x.jsx)(p.Z,{variant:"subtitle1",children:s})}),(0,x.jsx)("pre",{className:o,children:(0,x.jsx)(p.Z,{variant:"body2",children:n})})]})]})})}}}]);
//# sourceMappingURL=842.ba658a76.chunk.js.map