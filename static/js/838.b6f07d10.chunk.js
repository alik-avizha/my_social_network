"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[838],{7838:function(e,s,a){a.r(s),a.d(s,{default:function(){return H}});var n=a(938),i=(a(2791),"Dialogs_dialogs__6Cege"),r="Dialogs_dialogsItems__jftaY",t="Dialogs_messages__DGHNR",d="Dialogs_choose__k9KDw",l="DialogItem_item__GU6Y4",c="DialogItem_activeLink__2AqBr",o="DialogItem_dialogAva__Poo7u",m=a(1523),g=a(4573),_=a(184),u=function(e){return(0,_.jsx)("div",{className:l,children:(0,_.jsxs)(m.OL,{to:"/dialogs/"+e.id,activeClassName:c,children:[(0,_.jsx)("img",{src:g,alt:"ava",className:o}),e.name]})})},h=a(9271),x="Messages_messagesWrapper__PNOle",f="Messages_messages__7smz-",j="MyMessage_myMessage__9cb2W",v="MyMessage_myImageAndText__EgsFU",N="MyMessage_myAvatar__UCNX6",M="MyMessage_myText__u9zT2",p="MyMessage_myName__3zi6b",y="MyMessage_myMessageText__Dqves",b="MyMessage_myTime__mE1N1",k=function(e){return(0,_.jsxs)("div",{className:j,children:[(0,_.jsxs)("div",{className:v,children:[(0,_.jsx)("img",{className:N,alt:"myAvatar",src:e.photo?e.photo:g}),(0,_.jsxs)("div",{className:M,children:[(0,_.jsx)("div",{className:p,children:null!==e.name?e.name:"User Name"}),(0,_.jsx)("pre",{className:y,children:e.message})]})]}),(0,_.jsx)("div",{className:b,children:e.time})]})},A="FriendMessage_friendMessage__mUu8w",D="FriendMessage_friendImageAndText__kULEt",T="FriendMessage_friendAvatar__vHYe4",C="FriendMessage_friendText__TdsyD",P="FriendMessage_friendName__pR8M2",w="FriendMessage_friendMessageText__zVXMk",F="FriendMessage_friendTime__oHtJI",I=function(e){return(0,_.jsxs)("div",{className:A,children:[(0,_.jsxs)("div",{className:D,children:[(0,_.jsx)("img",{className:T,src:g,alt:"friendAvatar"}),(0,_.jsxs)("div",{className:C,children:[(0,_.jsx)("div",{className:P,children:e.name}),(0,_.jsx)("pre",{className:w,children:e.message})]})]}),(0,_.jsx)("div",{className:F,children:e.time})]})},U=a(7290),z=function(e){var s=(0,h.UO)(),a=e.messages[s.id].map((function(a,n){return 0!==a.id?(0,_.jsx)(I,{message:a.message,name:e.names[Number(s.id)-1].name,time:a.time},n):(0,_.jsx)(k,{message:a.message,name:e.login,time:a.time,photo:e.photo},n)}));return(0,_.jsxs)("div",{className:x,children:[(0,_.jsx)("div",{className:f,children:a}),(0,_.jsx)(U.o,{callback:function(a){e.addNewMessage(s.id,a)},placeholder:"Enter your message"})]})},E=a(364),W=a(7781),q=a(2932),H=(0,W.qC)((0,E.$j)((function(e){return{dialogsPage:e.dialogsPage,login:e.auth.login,photo:e.profilePage.profile.photos.large}}),(function(e){return{addMessage:function(s,a){e((0,n.k)(s,a))}}})),q.D)((function(e){var s=e.dialogsPage.dialogs.map((function(e,s){return(0,_.jsx)(u,{name:e.name,id:e.id},s)}));return(0,_.jsxs)("div",{className:i,children:[(0,_.jsx)("div",{className:r,children:s}),(0,_.jsx)("div",{className:t,children:(0,_.jsxs)(h.rs,{children:[(0,_.jsx)(h.AW,{path:"/dialogs/:id",render:function(){return(0,_.jsx)(z,{messages:e.dialogsPage.messages,addNewMessage:e.addMessage,login:e.login,names:e.dialogsPage.dialogs,photo:e.photo})}}),(0,_.jsx)(h.AW,{path:"/dialogs",render:function(){return(0,_.jsx)("div",{className:d,children:(0,_.jsx)("h3",{children:"Please select a dialog"})})}})]})})]})}))},5984:function(e,s,a){a.d(s,{z:function(){return r}});a(2791);var n="Button_btn__fsSX9",i=a(184),r=function(e){return(0,i.jsx)("button",{className:n,onClick:e.callback,disabled:!!e.disabled&&e.disabled,children:e.name})}},7290:function(e,s,a){a.d(s,{o:function(){return l}});var n=a(885),i=a(2791),r="SenderContent_addNewContentWrapper__kiIxe",t=a(5984),d=a(184),l=function(e){var s=(0,i.useState)(""),a=(0,n.Z)(s,2),l=a[0],c=a[1],o=function(){e.callback(l),c("")};return(0,d.jsxs)("div",{className:r,children:[(0,d.jsx)("textarea",{onKeyPress:function(e){"Enter"===e.key&&o()},placeholder:e.placeholder,value:l,onChange:function(e){c(e.currentTarget.value)}}),(0,d.jsx)(t.z,{name:"send",callback:o,disabled:""===l})]})}},2932:function(e,s,a){a.d(s,{D:function(){return o}});var n=a(1413),i=a(5987),r=(a(2791),a(9271)),t=a(364),d=a(184),l=["isAuth"],c=function(e){return{isAuth:e.auth.isAuth}};function o(e){return(0,t.$j)(c)((function(s){s.isAuth;var a=(0,i.Z)(s,l);return s.isAuth?(0,d.jsx)(e,(0,n.Z)({},a)):(0,d.jsx)(r.l_,{to:"/login"})}))}},4573:function(e,s,a){e.exports=a.p+"static/media/dialogsUser.d947cb9d0d13765666b6.png"}}]);
//# sourceMappingURL=838.b6f07d10.chunk.js.map