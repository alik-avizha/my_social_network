"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[917],{917:function(e,s,t){t.r(s),t.d(s,{default:function(){return re}});var n=t(5671),i=t(3144),r=t(136),o=t(5716),a=t(2791),l=t(885),c="ProfileInfo_profileInfoWrapper__Vhv8t",u="ProfileInfo_descriptionBlock__mxMse",d="ProfileInfo_avatarAndStatusBlock__lknAX",p="ProfileInfo_inputContainer__mFCTQ",f="ProfileInfo_mainPhoto__fZA9Y",h="ProfileInfo_mainPhotoInput__Pt1KU",m=t(2935),x="Description_descriptionWrapper__QlbNG",j="Description_description__dnouL",_="ContactsDesc_contactsItem__UHyPE",v=t(184),g=function(e){return(0,v.jsx)("div",{className:_,children:(0,v.jsxs)("span",{children:[(0,v.jsxs)("b",{children:[e.title,": "]}),e.value]})})},b="MainData_mainDataWrapper__t4Q3B",k=function(e){return(0,v.jsxs)("div",{className:b,children:[(0,v.jsxs)("span",{children:[(0,v.jsx)("b",{children:"Full Name: "}),e.profile.fullName]}),(0,v.jsxs)("span",{children:[(0,v.jsx)("b",{children:"About me: "}),e.profile.aboutMe]}),(0,v.jsxs)("span",{children:[(0,v.jsx)("b",{children:"Looking for a job: "}),e.profile.lookingForAJob?"yes":"no"]}),(0,v.jsxs)("span",{children:[(0,v.jsx)("b",{children:"My professional skills: "}),e.profile.lookingForAJobDescription]})]})},P=t(5984),N=function(e){return(0,v.jsxs)("div",{className:x,children:[e.isOwner&&(0,v.jsx)("div",{children:(0,v.jsx)(P.z,{name:"Settings",callback:e.toEditMode})}),(0,v.jsxs)("div",{className:j,children:[(0,v.jsx)(k,{profile:e.profile}),(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:(0,v.jsx)("b",{children:"Contacts :"})}),Object.entries(e.profile.contacts).map((function(e,s){return(0,v.jsx)(g,{title:e[0],value:e[1]},s)}))]})]})]})},Z="Status_status__e7vA5",y="Status_editModeStatus__gq-d0",I=function(e){var s=(0,a.useState)(!1),t=(0,l.Z)(s,2),n=t[0],i=t[1],r=(0,a.useState)(e.status),o=(0,l.Z)(r,2),c=o[0],u=o[1];(0,a.useEffect)((function(){u(e.status)}),[e.status]);return n?(0,v.jsx)("input",{className:y,autoFocus:!0,onBlur:function(){e.updateStatus(c),i(!1)},value:c,onChange:function(e){u(e.currentTarget.value)}}):(0,v.jsx)("span",{className:Z,onDoubleClick:function(){i(!0)},children:e.status||"no status"})},S=t(1812),C=t(704),A=t(5027),D=(0,C.Z)({form:"edit-profile"})((function(e){var s=e.handleSubmit,t=e.initialValues,n=e.error;return(0,v.jsxs)("form",{onSubmit:s,children:[(0,v.jsx)("div",{children:(0,v.jsx)(P.z,{name:"Save"})}),n&&(0,v.jsx)("div",{className:A.Z.formSummaryError,children:n}),(0,v.jsx)("div",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("b",{children:"Full Name: "}),(0,S.Gr)("Full Name","fullName",[],S.II)]})}),(0,v.jsx)("div",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("b",{children:"About me: "}),(0,S.Gr)("About me","aboutMe",[],S.II)]})}),(0,v.jsx)("div",{children:(0,v.jsxs)("span",{style:{display:"flex"},children:[(0,v.jsx)("b",{children:"Looking for a job: "}),(0,S.Gr)("Looking for a job","lookingForAJob",[],S.II,{type:"checkbox"})]})}),(0,v.jsx)("div",{children:(0,v.jsxs)("span",{children:[(0,v.jsx)("b",{children:"My professional skills: "}),(0,S.Gr)("My professional skills","lookingForAJobDescription",[],S.gx)]})}),(0,v.jsxs)("div",{children:[(0,v.jsx)("span",{children:(0,v.jsx)("b",{children:"Contacts :"})}),t.contacts&&Object.keys(t.contacts).map((function(e,s){return(0,v.jsx)("div",{children:(0,v.jsxs)("span",{children:[(0,v.jsxs)("b",{children:[e,": "]}),(0,S.Gr)(e,"contacts."+e,[],S.II)]})},s)}))]})]})})),F=function(e){var s=e.profile,t=e.status,n=e.updateStatus,i=e.savePhoto,r=(0,a.useState)(!1),o=(0,l.Z)(r,2),x=o[0],j=o[1];return s?(0,v.jsx)("div",{className:c,children:(0,v.jsxs)("div",{className:u,children:[(0,v.jsxs)("div",{className:d,children:[(0,v.jsx)("label",{htmlFor:"mainPhotoInput",children:(0,v.jsx)("img",{src:e.profile.photos.large||"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQh0tWNyZDN7-7a-G9uggn83aL_U-kbfne1sA&usqp=CAU",alt:"avatar",className:f})}),e.isOwner&&(0,v.jsx)("div",{className:p,children:(0,v.jsx)("input",{type:"file",id:"mainPhotoInput",onChange:function(e){e.target.files&&e.target.files.length&&i(e.target.files[0])},className:h})}),(0,v.jsx)(I,{status:t,updateStatus:n})]}),x?(0,v.jsx)(D,{onSubmit:function(s){e.saveProfile(s).then((function(){j(!1)}))},initialValues:s}):(0,v.jsx)(N,{toEditMode:function(){j(!0)},profile:s,isOwner:e.isOwner})]})}):(0,v.jsx)(m.p,{})},M=t(7753),L="MyPosts_postsBlock__qnyuF",E="MyPosts_posts__fuXeW",w="Post_item__qWWoo",U="Post_userPhoto__sDYdY",G="Post_loginAndDate__qRMel",O="Post_userName__MVkTE",W="Post_date__yzE00",z="Post_postMessage__5SPf6",q="Post_message__r9x3b",B="Post_activities__3Iso1",Q=t(8478);var T=t.p+"static/media/like.707e36c9c2be88d1f3b80d80c69b8536.svg";var J=t.p+"static/media/dislike-svgrepo-com.0d1444cf059d222652e695a2bc20dee8.svg";var V=t.p+"static/media/delete-svgrepo-com.4d5ae6036c285fb8e87135e3fdca1e34.svg",X=function(e){return(0,v.jsxs)("div",{className:w,children:[e.photo?(0,v.jsx)("img",{className:U,src:e.photo,alt:"avatar"}):(0,v.jsx)("img",{className:U,src:Q,alt:"avatar"}),(0,v.jsx)("div",{className:z,children:(0,v.jsx)("span",{className:q,children:e.post.message})}),(0,v.jsxs)("div",{className:B,children:[(0,v.jsx)("img",{src:V,alt:"deletePost",onClick:function(){e.deletePost(e.post.id)}}),(0,v.jsx)("img",{onClick:function(){e.post.isDislike||e.changeLikesAndDislikes(e.post.id,"dislike")},src:J,alt:"dislikePost"}),(0,v.jsx)("span",{children:e.post.dislikesCount}),(0,v.jsx)("img",{onClick:function(){e.post.isLike||e.changeLikesAndDislikes(e.post.id,"like")},src:T,alt:"likePost"}),(0,v.jsx)("span",{children:e.post.likesCount})]}),(0,v.jsxs)("div",{className:G,children:[(0,v.jsx)("span",{className:O,children:e.userName}),(0,v.jsx)("span",{className:W,children:e.post.date})]})]})},Y=t(7290),$=a.memo((function(e){var s=e.posts.map((function(s){return(0,v.jsx)(X,{post:s,deletePost:e.deletePost,photo:e.photo,userName:e.userName,changeLikesAndDislikes:e.changeLikesAndDislikes},s.id)}));return(0,v.jsxs)("div",{className:L,children:[(0,v.jsx)(Y.o,{callback:e.addPost,placeholder:"Enter your post"}),(0,v.jsx)("div",{className:E,children:s})]})})),K=t(364),R=(0,K.$j)((function(e){return{posts:e.profilePage.posts,photo:e.profilePage.profile.photos.large,userName:e.profilePage.profile.fullName}}),(function(e){return{addPost:function(s){e((0,M.Wl)(s))},deletePost:function(s){e((0,M.TU)(s))},changeLikesAndDislikes:function(s,t){e((0,M.u9)(s,t))}}}))($),H="Profile_profileWrapper__E3h9f",ee=function(e){return(0,v.jsxs)("div",{className:H,children:[(0,v.jsx)(F,{profile:e.profile,status:e.status,updateStatus:e.updateStatus,isOwner:e.isOwner,savePhoto:e.savePhoto,saveProfile:e.saveProfile}),(0,v.jsx)(R,{})]})},se=t(9271),te=t(7781),ne=t(2932),ie=function(e){(0,r.Z)(t,e);var s=(0,o.Z)(t);function t(){return(0,n.Z)(this,t),s.apply(this,arguments)}return(0,i.Z)(t,[{key:"refreshProfile",value:function(){var e=this.props.match.params.userId;e||(null!==this.props.authorizedUserId?e=String(this.props.authorizedUserId):this.props.history.push("/login")),this.props.getUserProfile(e),this.props.getStatus(e)}},{key:"componentDidMount",value:function(){this.refreshProfile()}},{key:"componentDidUpdate",value:function(e){this.props.match.params.userId!==e.match.params.userId&&this.refreshProfile()}},{key:"render",value:function(){return(0,v.jsx)("div",{children:(0,v.jsx)(ee,{isOwner:!this.props.match.params.userId,profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus,savePhoto:this.props.savePhoto,saveProfile:this.props.saveProfile})})}}]),t}(a.Component),re=(0,te.qC)((0,K.$j)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}}),{getUserProfile:M.om,getStatus:M.xD,updateStatus:M.NN,savePhoto:M.m2,saveProfile:M.Gi}),se.EN,ne.D)(ie)},5984:function(e,s,t){t.d(s,{z:function(){return r}});t(2791);var n="Button_btn__fsSX9",i=t(184),r=function(e){return(0,i.jsx)("button",{className:n,onClick:e.callback,disabled:!!e.disabled&&e.disabled,children:e.name})}},1812:function(e,s,t){t.d(s,{ZL:function(){return x},II:function(){return h},gx:function(){return m},Gr:function(){return j}});var n=t(5987),i=t(1413),r=(t(2791),"FormsControls_formControl__4tOrb"),o="FormsControls_error__Q4DIq",a=t(6139),l=t(5591),c=t(184),u=["input","meta"],d=["input","meta"],p=["input","meta"],f=function(e){e.input;var s=e.meta,t=s.touched,n=s.error,a=e.children,l=t&&n;return(0,c.jsxs)("div",(0,i.Z)((0,i.Z)({className:r+" "+(l?o:"")},e),{},{children:[(0,c.jsx)("div",{children:a}),l&&(0,c.jsx)("span",{children:n})]}))},h=function(e){var s=e.input,t=(e.meta,(0,n.Z)(e,u));return(0,c.jsx)(f,(0,i.Z)((0,i.Z)({},e),{},{children:(0,c.jsx)("input",(0,i.Z)((0,i.Z)({},s),t))}))},m=function(e){var s=e.input,t=(e.meta,(0,n.Z)(e,d));return(0,c.jsx)(f,(0,i.Z)((0,i.Z)({},e),{},{children:(0,c.jsx)("textarea",(0,i.Z)((0,i.Z)({},s),t))}))},x=function(e){var s=e.input,t=(e.meta,(0,n.Z)(e,p));return(0,c.jsx)(f,(0,i.Z)((0,i.Z)({},e),{},{children:(0,c.jsx)(l.Z,(0,i.Z)((0,i.Z)({},s),t))}))},j=function(e,s,t,n,r){var o=arguments.length>5&&void 0!==arguments[5]?arguments[5]:"";return(0,c.jsxs)("div",{style:{display:"flex",gap:"10px",justifyContent:"center",alignItems:"center",color:"black"},children:[(0,c.jsx)(a.Z,(0,i.Z)({placeholder:e,name:s,component:n,validate:t},r)),o]})}},7290:function(e,s,t){t.d(s,{o:function(){return l}});var n=t(885),i=t(2791),r="SenderContent_addNewContentWrapper__kiIxe",o=t(5984),a=t(184),l=function(e){var s=(0,i.useState)(""),t=(0,n.Z)(s,2),l=t[0],c=t[1],u=function(){e.callback(l),c("")};return(0,a.jsxs)("div",{className:r,children:[(0,a.jsx)("textarea",{onKeyPress:function(e){"Enter"===e.key&&u()},placeholder:e.placeholder,value:l,onChange:function(e){c(e.currentTarget.value)}}),(0,a.jsx)(o.z,{name:"send",callback:u,disabled:""===l})]})}},2932:function(e,s,t){t.d(s,{D:function(){return u}});var n=t(1413),i=t(5987),r=(t(2791),t(9271)),o=t(364),a=t(184),l=["isAuth"],c=function(e){return{isAuth:e.auth.isAuth}};function u(e){return(0,o.$j)(c)((function(s){s.isAuth;var t=(0,i.Z)(s,l);return s.isAuth?(0,a.jsx)(e,(0,n.Z)({},t)):(0,a.jsx)(r.l_,{to:"/login"})}))}},5027:function(e,s){s.Z={formControl:"loginForm_formControl__u6OBx",formLabel:"loginForm_formLabel__Lnxv6",rememberMy:"loginForm_rememberMy__vgFuE",captcha:"loginForm_captcha__UlzRG",btn:"loginForm_btn__7B8je",formSummaryError:"loginForm_formSummaryError__suXwL"}}}]);
//# sourceMappingURL=917.45070d20.chunk.js.map