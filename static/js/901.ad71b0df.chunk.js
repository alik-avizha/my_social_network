"use strict";(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[901],{3901:function(n,e,r){r.r(e),r.d(e,{UsersContainerSecond:function(){return A},default:function(){return F}});var s=r(5671),o=r(3144),t=r(136),u=r(5716),i=r(2791),a=r(364),l=r(9170),c="users_usersWrapper__rqt2O",f="users_users__HxCrt",g="users_pagination__PISPk",p="user_userWrapper__h4XUp",d="user_userPhoto__CbBHr",h="user_userName__iy9Zd",w="user_userId__d7QCD",P=r(8478),_=r(1523),m=r(5984),j=r(184),x=function(n){var e=n.user,r=n.followingInProgress,s=n.follow,o=n.unfollow;return(0,j.jsxs)("div",{className:p,children:[(0,j.jsx)(_.OL,{to:"/profile/"+e.id,children:(0,j.jsx)("img",{src:null!==e.photos.small?e.photos.small:P,alt:"avatar",className:d})}),(0,j.jsx)("span",{className:h,children:e.name.length>8?e.name.slice(0,9)+"...":e.name}),(0,j.jsxs)("span",{className:w,children:["userId: ",n.user.id]}),(0,j.jsx)("div",{children:e.followed?(0,j.jsx)(m.z,{name:"UnFollow",callback:function(){return o(e.id)},disabled:r.some((function(n){return n===e.id}))}):(0,j.jsx)(m.z,{name:"Follow",callback:function(){return s(e.id)},disabled:r.some((function(n){return n===e.id}))})})]})},C=r(1677),v=function(n){var e=n.users,r=n.pageSize,s=n.totalUsersCount,o=(n.currentPage,n.follow),t=n.unfollow,u=n.onPageChanged,i=n.followingInProgress;return(0,j.jsxs)("div",{className:c,children:[(0,j.jsx)("div",{className:g,children:(0,j.jsx)(C.Z,{count:Math.ceil(s/r),onChange:function(n,e){return u(e)}})}),(0,j.jsx)("div",{className:f,children:e.map((function(n){return(0,j.jsx)(x,{follow:o,unfollow:t,user:n,followingInProgress:i},n.id)}))})]})},b=r(2935),k=r(7781),U=(0,r(6916).P1)((function(n){return n.usersPage.users}),(function(n){return n.filter((function(n){return!0}))})),z=function(n){return n.usersPage.pageSize},I=function(n){return n.usersPage.totalUsersCount},S=function(n){return n.usersPage.currentPage},N=function(n){return n.usersPage.isFetching},Z=function(n){return n.usersPage.followingInProgress},y=r(2932),A=function(n){(0,t.Z)(r,n);var e=(0,u.Z)(r);function r(){var n;(0,s.Z)(this,r);for(var o=arguments.length,t=new Array(o),u=0;u<o;u++)t[u]=arguments[u];return(n=e.call.apply(e,[this].concat(t))).onPageChanged=function(e){var r=n.props.pageSize;n.props.getUsers(e,r)},n}return(0,o.Z)(r,[{key:"componentDidMount",value:function(){var n=this.props,e=n.currentPage,r=n.pageSize;this.props.getUsers(e,r)}},{key:"render",value:function(){return(0,j.jsxs)(j.Fragment,{children:[this.props.isFetching?(0,j.jsx)(b.p,{}):null,(0,j.jsx)(v,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),r}(i.Component),F=(0,k.qC)((0,a.$j)((function(n){return{users:U(n),pageSize:z(n),totalUsersCount:I(n),currentPage:S(n),isFetching:N(n),followingInProgress:Z(n)}}),{follow:l.AC,unfollow:l.Ow,getUsers:l.Uk}),y.D)(A)},5984:function(n,e,r){r.d(e,{z:function(){return t}});r(2791);var s="Button_btn__fsSX9",o=r(184),t=function(n){return(0,o.jsx)("button",{className:s,onClick:n.callback,disabled:!!n.disabled&&n.disabled,children:n.name})}},2932:function(n,e,r){r.d(e,{D:function(){return c}});var s=r(1413),o=r(5987),t=(r(2791),r(9271)),u=r(364),i=r(184),a=["isAuth"],l=function(n){return{isAuth:n.auth.isAuth}};function c(n){return(0,u.$j)(l)((function(e){e.isAuth;var r=(0,o.Z)(e,a);return e.isAuth?(0,i.jsx)(n,(0,s.Z)({},r)):(0,i.jsx)(t.l_,{to:"/login"})}))}}}]);
//# sourceMappingURL=901.ad71b0df.chunk.js.map