/*! For license information please see 843.42ba8846.chunk.js.LICENSE.txt */
(self.webpackChunksamurai_way=self.webpackChunksamurai_way||[]).push([[843],{8843:function(A,n,r){"use strict";r.r(n),r.d(n,{UsersContainerSecond:function(){return F},default:function(){return R}});var e=r(5671),t=r(3144),o=r(136),u=r(5716),i=r(2791),s=r(364),a=r(8692),l="users_usersWrapper__rqt2O",c=r(4942),f=r(885),p="pagination_paginator__2iisT",d="pagination_pageNumber__ILuj5",v="pagination_selectedPage__1hjIk",h=r(1694),g=r.n(h),y=r(184),S=function(A){for(var n=A.totalItemsCount,r=A.pageSize,e=A.onPageChanged,t=A.currentPage,o=A.portionSize,u=void 0===o?10:o,s=Math.ceil(n/r),a=[],l=1;l<=s;l++)a.push(l);var h=Math.ceil(s/u),S=(0,i.useState)(1),z=(0,f.Z)(S,2),m=z[0],w=z[1],b=(m-1)*u+1,P=m*u;return(0,y.jsxs)("div",{className:g()(p),children:[m>1&&(0,y.jsx)("button",{onClick:function(){w(m-1)},children:"PREV"}),a.filter((function(A){return A>=b&&A<=P})).map((function(A){return(0,y.jsx)("span",{className:g()((0,c.Z)({},v,t===A),d),onClick:function(){e(A)},children:A},A)})),h>m&&(0,y.jsx)("button",{onClick:function(){w(m+1)},children:"NEXT"})]})},z="user_usersPhoto__T2WEb",m=r(8478),w=r(1523),b=function(A){var n=A.user,r=A.followingInProgress,e=A.follow,t=A.unfollow;return(0,y.jsxs)("div",{children:[(0,y.jsxs)("span",{children:[(0,y.jsx)("div",{children:(0,y.jsx)(w.OL,{to:"/profile/"+n.id,children:(0,y.jsx)("img",{src:null!==n.photos.small?n.photos.small:m,alt:"avatar",className:z})})}),(0,y.jsx)("div",{children:n.followed?(0,y.jsx)("button",{disabled:r.some((function(A){return A===n.id})),onClick:function(){return t(n.id)},children:"UnFollow"}):(0,y.jsx)("button",{disabled:r.some((function(A){return A===n.id})),onClick:function(){return e(n.id)},children:"Follow"})})]}),(0,y.jsxs)("span",{children:[(0,y.jsxs)("span",{children:[(0,y.jsx)("div",{children:n.name}),(0,y.jsx)("div",{children:n.status})]}),(0,y.jsxs)("span",{children:[(0,y.jsx)("div",{children:"u.location.country"}),(0,y.jsx)("div",{children:"u.location.city"})]})]})]})},P=function(A){var n=A.users,r=A.pageSize,e=A.totalUsersCount,t=A.currentPage,o=A.follow,u=A.unfollow,i=A.onPageChanged,s=A.followingInProgress;return(0,y.jsxs)("div",{className:l,children:[(0,y.jsx)(S,{totalItemsCount:e,currentPage:t,onPageChanged:i,pageSize:r,portionSize:10}),n.map((function(A){return(0,y.jsx)(b,{follow:o,unfollow:u,user:A,followingInProgress:s},A.id)}))]})},x=r(6678),U=r(7781),j="NOT_FOUND";var C=function(A,n){return A===n};function T(A,n){var r="object"===typeof n?n:{equalityCheck:n},e=r.equalityCheck,t=void 0===e?C:e,o=r.maxSize,u=void 0===o?1:o,i=r.resultEqualityCheck,s=function(A){return function(n,r){if(null===n||null===r||n.length!==r.length)return!1;for(var e=n.length,t=0;t<e;t++)if(!A(n[t],r[t]))return!1;return!0}}(t),a=1===u?function(A){var n;return{get:function(r){return n&&A(n.key,r)?n.value:j},put:function(A,r){n={key:A,value:r}},getEntries:function(){return n?[n]:[]},clear:function(){n=void 0}}}(s):function(A,n){var r=[];function e(A){var e=r.findIndex((function(r){return n(A,r.key)}));if(e>-1){var t=r[e];return e>0&&(r.splice(e,1),r.unshift(t)),t.value}return j}return{get:e,put:function(n,t){e(n)===j&&(r.unshift({key:n,value:t}),r.length>A&&r.pop())},getEntries:function(){return r},clear:function(){r=[]}}}(u,s);function l(){var n=a.get(arguments);if(n===j){if(n=A.apply(null,arguments),i){var r=a.getEntries(),e=r.find((function(A){return i(A.value,n)}));e&&(n=e.value)}a.put(arguments,n)}return n}return l.clearCache=function(){return a.clear()},l}function q(A){var n=Array.isArray(A[0])?A[0]:A;if(!n.every((function(A){return"function"===typeof A}))){var r=n.map((function(A){return"function"===typeof A?"function "+(A.name||"unnamed")+"()":typeof A})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+r+"]")}return n}function k(A){for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];var t=function(){for(var n=arguments.length,e=new Array(n),t=0;t<n;t++)e[t]=arguments[t];var o,u=0,i={memoizeOptions:void 0},s=e.pop();if("object"===typeof s&&(i=s,s=e.pop()),"function"!==typeof s)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof s+"]");var a=i,l=a.memoizeOptions,c=void 0===l?r:l,f=Array.isArray(c)?c:[c],p=q(e),d=A.apply(void 0,[function(){return u++,s.apply(null,arguments)}].concat(f)),v=A((function(){for(var A=[],n=p.length,r=0;r<n;r++)A.push(p[r].apply(null,arguments));return o=d.apply(null,A)}));return Object.assign(v,{resultFunc:s,memoizedResultFunc:d,dependencies:p,lastResult:function(){return o},recomputations:function(){return u},resetRecomputations:function(){return u=0}}),v};return t}var K=k(T),M=K((function(A){return A.usersPage.users}),(function(A){return A.filter((function(A){return!0}))})),X=function(A){return A.usersPage.pageSize},I=function(A){return A.usersPage.totalUsersCount},E=function(A){return A.usersPage.currentPage},V=function(A){return A.usersPage.isFetching},N=function(A){return A.usersPage.followingInProgress},F=function(A){(0,o.Z)(r,A);var n=(0,u.Z)(r);function r(){var A;(0,e.Z)(this,r);for(var t=arguments.length,o=new Array(t),u=0;u<t;u++)o[u]=arguments[u];return(A=n.call.apply(n,[this].concat(o))).onPageChanged=function(n){var r=A.props.pageSize;A.props.getUsers(n,r)},A}return(0,t.Z)(r,[{key:"componentDidMount",value:function(){var A=this.props,n=A.currentPage,r=A.pageSize;this.props.getUsers(n,r)}},{key:"render",value:function(){return(0,y.jsxs)(y.Fragment,{children:[this.props.isFetching?(0,y.jsx)(x.p,{}):null,(0,y.jsx)(P,{users:this.props.users,pageSize:this.props.pageSize,totalUsersCount:this.props.totalUsersCount,currentPage:this.props.currentPage,onPageChanged:this.onPageChanged,follow:this.props.follow,unfollow:this.props.unfollow,followingInProgress:this.props.followingInProgress})]})}}]),r}(i.Component),R=(0,U.qC)((0,s.$j)((function(A){return{users:M(A),pageSize:X(A),totalUsersCount:I(A),currentPage:E(A),isFetching:V(A),followingInProgress:N(A)}}),{follow:a.AC,unfollow:a.Ow,getUsers:a.Uk}))(F)},1694:function(A,n){var r;!function(){"use strict";var e={}.hasOwnProperty;function t(){for(var A=[],n=0;n<arguments.length;n++){var r=arguments[n];if(r){var o=typeof r;if("string"===o||"number"===o)A.push(r);else if(Array.isArray(r)){if(r.length){var u=t.apply(null,r);u&&A.push(u)}}else if("object"===o)if(r.toString===Object.prototype.toString)for(var i in r)e.call(r,i)&&r[i]&&A.push(i);else A.push(r.toString())}}return A.join(" ")}A.exports?(t.default=t,A.exports=t):void 0===(r=function(){return t}.apply(n,[]))||(A.exports=r)}()},8478:function(A){"use strict";A.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCA8PDw8PDw8PDw8PDw8PDw8PEREPEQ8PGBMZGRgTGBgbIS0kGyIqHxgYJTclKi4xNjQ0GiQ6PzoyPi0zNDEBCwsLEA8QHRISHzMqIyozMzQxMTMzMzMzMTMzMzMxNTMxMzM+MzMxMzMzMzMzMzMzMzYzMzMzMzMzMzMzMzMzM//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAQUBAAAAAAAAAAAAAAAAAgEDBAUGB//EAEAQAAIBAgIFCQUFBwQDAAAAAAABAgMRBCEFBhIxQRRRYXGBkZKh0RMiMlJTB4KxwfAjJEJicqKyY2TC4RUzNP/EABsBAQABBQEAAAAAAAAAAAAAAAAGAQIDBAUH/8QAMxEAAgECAwYFAgUFAQAAAAAAAAECAxEEEyEFEjFBUZFSYaHB0XGBBiNCsfAUImKS4TL/2gAMAwEAAhEDEQA/AO8AB5idoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGv0rpnDYRXr1FGTV404+9Ul1RXDpeRo9b9bFhL4fDtPENe/OykqKayy3OXQ8lx5jzHE4udScpznKUpu8pyblOT53J5s7eA2RKtFVKjtHkub+EYZ1baI73H6/zzWHoQguEq72m/uRsl4maerrpjpbsRCHRTpU7f3Js5IHep7NwsOEF99X63MLqSZ1UNcsen/8AUpdEqdG3+JssLr3io/8Asp0K0f5dqnJ9quvI4MrFtbm11F09n4aas6ceyX7WCqSR7HonWzCYpqLk6FR5KFayUnzRnufU7PoN8eCwxHCWa5zttVNa5UpQw+Km5UJWjTqyd3RfBSfGH+PVu4uO2Nuxc6H+vHs/Z6+bM0Kt9GeiAqUI8ZgAAAAAAAAAAAAAAAAAAAAAAAAAAAajWjTCwGEnWVnUk1SoxfGtK9utJJy+6bc81+0/GOWIw+HT92nR9tJcHOpJxXcof3G7s/DqviIwlw4v6LX1LKkt2Nzi6tSVSUpzk5Tk3KUm7tybu2+0tlShOjSALM6rvluXmVhW5+9AXLoCdwAC9QqbLs/hfkWQAeu6jaVeIwzpTlephnGN27uVFr3G+qzj91c50p5d9nmLccbGN8qtKrRa6UttP+zzPUSFbVoKliXu8Hr34+pu03eIBIic0vAAAAAAAAAAAAAAAAAAAAAAAAB4/r5W29KYhcKao011exhL8ZM9gPEtb6y/8jjXx9vKNv6Ul+R3Ngr8+T/x90YK/BGqLNSpf3Y3d8ss23zInRhUrzhSpQlOc5KMIR3yl+uO5HqeqOpdLB7GIxDjWxVrx406D/kv8Uv5n2JcZROaitTBGDk9DG1Y1JoxwqljqEJ16r23Gd70oW92GTyfF9LtwLOmPs8oSTeFnLDzztCblUpS6Lv3o9d31HflJRTVmauZK97m1lxtax4Fj8BiMFU9liKbhLNrjCcfmhJZNfp2IRkmro9t0toqjiabpV4KpTeavlKMvmi98X0o8r1i1XxGj5OpDarYX6qXvQXNUS3f1burcbEKqlo+JrzpuOvI04KRmmroqZTGbrVSt7PHYV/7mjHsnLYf+R7QeG6DdsVh+itQfaqsT3Qi+34/mwfk/R/9NqhwZEAHAMwAAAAAAAAAAAAAAAAAAAAAAJAETzXF6i4rG47HVp1IYalPE1XSlKLqTqK/xbKasulvs4npRR7zs7Fnu1Jtcbe5ZOClxPJvs5w1sfiHJJyo0pw6pOaTt4WeqUfhXb+JwmrGCdDS2lYNNLbhOL4OFSU55fh2HdUH7vayRVXeXYtoq0S6ADGZAWKlDfbNPfF55F8AHD6X1GwtaTnQk8JUd7qEVOk30wyt91pdByGndXK+AhCdWdKcJz2IuDntbWy5XcWslaL4s9mlBPejj/tBwPtKeCik3GeOpUZ8bKonFPvy7TNTqO6T4GGpCNmzU6A1IxH7tip1YQe3Rqug4yclT24yzlwlsrdbtPSSPVu4EvRHA2297ck/PTy0MkIKPAAkROCXgAAAAAAAAAEgARAAAAAAAJAEQSABEpL9dZUq0bOEr5NVT5cH9P5YGnnCMa0pWW05KLlZXcbtpX5vefezOw73rtMXGxtN9KT/AC/IuQna0kSyE1OKlHgyhmgpGSauipcAAAAW69CFWKjOKcYzp1EnwnCSlGXZKKZcBRu2pQqiZRIqRfH4lV6l48ErL3f86FwIkiJogAAAAAAAAAAAAAAAAAAAAAEiIAAAAMbHUtqKkt8d/TEwqM7ZPsNsYOJwm+UV1x9DtbNxyisqo7dH7P2BWE3Hd2oyYTUt2/mNbCrbJ/8AaL0ZJ7md0oZwMWNSS49+ZX20ujuAMkQae7hx6SxCEpb29kyYpJWW45O0sYoxdKPF8fJfL4AkACPFQRJEQAAAAAAAAAAAAAAAAAAAAACQIgAASaSbbSSzbbskjVYzWDC0rrbdSXNSW0u/d5mehhq1eW7Si5PyXD6vgvuzHVrU6S3qjSXmbUztHYSNTacr2srNZZ8/65zgcXrTXldUoRpfzP35eeXkzdaj6fqOrLD4iUpKq9qlOdl+0tnHqaWXSnzkkwH4erQkquISsv03u/vbTT6s5c9rUZyVOm3d8+C9dfQvacwOIoTlU2VOi90oq6j/AFLg+ncayGLXFNPoZ6XJJqzzTy6zndJas03J1KCUJb3TfwSfR8v4dR1XhFCKVPguRuUsTfSfc52OJk9yl96yMrB4evXlaCv8z3Qj1s2uj9X27TxHur6cXm+trd2eR0VGlGEVGEVGK3KKshTw7estC6riUtI6moxWA9nTUk02spWyST3W7fxMMa5aYeHpRo03atWzut8Kaecu15Lt5jlcNrDVjZVIqp0/C+9ehysd+Hak/wAzCpWt/wCb2d+qvo7+bWtzRW1qVOeXVbv1tf7O2vodUDWYXTWHq2W17OXNU91d+7zNimnms09zXEjeIw1bDy3a0XF+a/Z8H9mdOlWp1VvU5Jry/mhIiSImAygAAAAAAAAAAAAAAAAAAEgAW6tSMIuUmoxSvKUnZJdZzmkNaUrxw0Nr/VndLu3vtt1EdcsS7UqKeUtqpNc9so/8u45YmOxNiUKlGOIrreve0eVr2163tfpbkyO7T2nUhUdKlpbi+fXTkrcDIxeOrV3+1qOS4Rbsl1JZIhToN5vJeZTDxvJdGZmEuhCMIqMVZLklZdkR2cnKW9J3fVkIU4x3LtebJ3e9NxaaaknZxkndNPg0wC8sPR9VtYI4yHs6jUcVTXvx3e0S/jS/FcH2F3WnTawWHbhZ16t40IvPPjNrmV++y4nmL2lKM4SlCpF3jKLcZJ9DW4uV8TXrz9riKkqk1FRi5WVkuCSyRr/063r8jpraMsqzX93X3+p3upen5YqDoV5fvNJXu99Wl83Wr2fY+JvtKaQpYWjKvVdoRWSXxSlwjFcWzySjiKlCpCvRls1KctqL3prjFrimrq3SXNIaSxGNmqmIldRvsU4q0IX5o/m7spKheV+RWntHdpWavJFcdjamJqzr1fim77KzUY/wwXQl+b4lgA2UrHMbbd2DIw2NrUn+zqNLm3p9jyMcFs4RnFxmk0+TV12ZWMpRe9F2fVaHRYPWJO0a8dn/AFIXa7Vv7rm8pVoTipQlGUXuad11HAmx0HiXTrxV/dqtQmuF3kn328yMbT/DtF05VcP/AGySb3eTtyV+D6a28uZ3MDtirvqFbVN2vzV/3V+P7nXgAgxKQAAAAAAAAAAAAAAAAA3ZXKpXOF1nr7WKnHhTjGC7Fd+bZqS9jqvtKtWp89Scl1NtryLJ6zhKOTQp0/DFLstfUgGIqZlWc+rb+3L0MjCr4n1IyC1h1aK6bsumyjWYAAAAAAAAAAAAAAACbWa3qzXWtwBUozvqc1KKkt0lGS6mrkjD0RV2sPRfNG3hk4/kZh5FiKWVVnT8La7Ox6JSnvwjPqk++vuAAYTIAAAAAAAAAAAADHx1XYoVp/LSm117Lt5l6VSMd77OJqdP1pTwtSFOM3KbgslnbaTe7oTNrB0c2vTjyckn9L6+hirycKU5pcE36HCpEjI5BX+jU8EvQLR9e6/Y1N/yS9D1R1YP9S7ogioVV+l9n8F6CtFLoRIvckq/Sn4X6DklX6U/C/QrmQ8S7lmTU8L7P4LIL3JKv0p+F+g5JV+lPwv0GbDxLuMmp4X2fwWQXuSVfpT8L9BySr9KfhfoM2HiXcZNTwvs/gsgvckq/Sn4X6DklX6U/C/QZsPEu4yanhfZ/BZBe5JV+lPwv0HJKv0p+F+gzYeJdxk1PC+z+CyC9ySr9KfhfoOSVfpT8L9Bmw8S7jJqeF9n8FkF7klX6U/C/Qckq/Sn4X6DNh4l3GTU8L7P4Om1bl+7JfLOUO+z/M2ho9ATlSpyhOMl76a3rerceo3Ma0JbnnzPI802xC2Oq24N37pP3Jvs5S/pad1wVu2hMAHLNwAAAkCIAAAAAAALFXD7TbTs3z7iy8PNcL9TM0F6my9TaNe4SW+L7mRNkVaK766F2azWA2Lpx+WPciPsofKiu/HoVzTABnewh8vmU5PDm8yu/HoM0wgZvJ48z72V5PDmfeN+PQrmowQZnJ4dPeV5PDmfeN+PQZqMIGbyeHN5lfYQ+XzG/HoUzTBBnqlD5UV9nH5V3Ipvx6DNNeSUW9yb7GZ6S5ipTfXQZzMJUZv+G3XkXaeG+Z9i9TIBTMfIsdRsAAsLAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACQAIgAAAAAAAAAAAAAAAAAAAABgAAAAAAAAAAAAAAAAAAAEgAAf/9k="},885:function(A,n,r){"use strict";r.d(n,{Z:function(){return t}});var e=r(181);function t(A,n){return function(A){if(Array.isArray(A))return A}(A)||function(A,n){var r=null==A?null:"undefined"!==typeof Symbol&&A[Symbol.iterator]||A["@@iterator"];if(null!=r){var e,t,o=[],u=!0,i=!1;try{for(r=r.call(A);!(u=(e=r.next()).done)&&(o.push(e.value),!n||o.length!==n);u=!0);}catch(s){i=!0,t=s}finally{try{u||null==r.return||r.return()}finally{if(i)throw t}}return o}}(A,n)||(0,e.Z)(A,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=843.42ba8846.chunk.js.map