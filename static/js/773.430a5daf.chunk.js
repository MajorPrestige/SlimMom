"use strict";(self.webpackChunkslim_mom=self.webpackChunkslim_mom||[]).push([[773],{5399:function(e,t,r){r.d(t,{Z:function(){return d}});var a="ErrorMessage_errorMessageBlock__6NGFY",n="ErrorMessage_errorMessageTitle__gIqHi",i="ErrorMessage_errorMessageText__TKpdd",s=r(4668),l=r(184),o=function(e){var t=e.status;return(0,l.jsxs)("div",{className:a,children:[(0,l.jsx)("div",{className:s.Z.boo,children:(0,l.jsx)("div",{className:s.Z.face,id:"face"})}),(0,l.jsx)("p",{className:n,children:"\u0429\u043e\u0441\u044c \u043f\u0456\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a..."}),(0,l.jsx)("p",{className:i,children:t})]})},d=o;o.defaultProps={status:{}}},3713:function(e,t,r){r.d(t,{Z:function(){return s}});var a=r(2791),n={overlay:"Modal_overlay__b+zEz",overlayDairyPage:"Modal_overlayDairyPage__h20Vb",modalDairyPage:"Modal_modalDairyPage__wNlXX",modal:"Modal_modal__yEgVW",closeM:"Modal_closeM__mJ3AX",closeOther:"Modal_closeOther__8w+rp",mobileClose:"Modal_mobileClose__wiSFp"},i=r(184),s=function(e){var t=e.setModalOpen,r=e.overlayClass,s=void 0===r?"overlay":r,l=e.modalClass,o=void 0===l?"modal":l,d=e.children;function c(){document.querySelector("body").classList.remove("no-scroll")}(0,a.useEffect)((function(){var e=function(e){"Escape"===e.code&&(c(),t(!1))};return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t]);var u=function(){c(),t(!1)};return(0,i.jsx)("div",{className:n[s],onClick:function(e){e.target===e.currentTarget&&(c(),t(!1))},children:(0,i.jsxs)("div",{className:n[o],children:[(0,i.jsx)("div",{className:n.mobileClose,children:(0,i.jsx)("span",{onClick:u,className:n.closeM})}),(0,i.jsx)("span",{onClick:u,className:n.closeOther}),d]})})}},9833:function(e,t,r){r.d(t,{Z:function(){return i}});var a={btn:"Button_btn__cIIwi",btnLight:"Button_btnLight__TSLTb Button_btn__cIIwi",btnPlus:"Button_btnPlus__VRApt",btnDairyPage:"Button_btnDairyPage__2MLhY"},n=r(184),i=function(e){var t=e.text,r=void 0===t?"+":t,i=e.type,s=void 0===i?"submit":i,l=e.btnClass,o=void 0===l?"btnPlus":l,d=e.handleClick;return(0,n.jsx)("button",{className:a[o],onClick:d,type:s,children:r})}},4834:function(e,t,r){r.d(t,{Z:function(){return a.Z}});var a=r(9833)},8704:function(e,t,r){r.d(t,{E:function(){return a}});var a={name:{name:"name",type:"text",placeholder:"\u0406\u043c\u02bc\u044f*",pattern:".{3,}",title:"\u041d\u0430\u0437\u0432\u0430 \u043c\u0430\u0454 \u0441\u043a\u043b\u0430\u0434\u0430\u0442\u0438\u0441\u044f \u043d\u0435 \u043c\u0435\u043d\u0448\u0435, \u043d\u0456\u0436 \u0437 3 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432",required:!0},email:{name:"email",type:"email",placeholder:"\u0415\u043b\u0435\u043a\u0442\u0440\u043e\u043d\u043d\u0430 \u043f\u043e\u0448\u0442\u0430*",required:!0},password:{name:"password",type:"password",placeholder:"\u041f\u0430\u0440\u043e\u043b\u044c*",required:!0,pattern:".{8,}",title:"\u041f\u0430\u0440\u043e\u043b\u044c \u043c\u0430\u0454 \u0431\u0443\u0442\u0438 \u043d\u0435 \u043c\u0435\u043d\u0448\u0435 8 \u0441\u0438\u043c\u0432\u043e\u043b\u0456\u0432"},height:{name:"height",type:"text",placeholder:"\u0417\u0440\u0456\u0441\u0442*",required:!0,pattern:".{2,3}",title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 100 \u0434\u043e 250."},age:{name:"age",type:"text",placeholder:"\u0412\u0456\u043a*",required:!0,pattern:".{2,}",title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 18 \u0434\u043e 100."},weight:{name:"weight",type:"text",placeholder:"\u041f\u043e\u0442\u043e\u0447\u043d\u0430 \u0432\u0430\u0433\u0430*",required:!0,pattern:".{2,3}",title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 20 \u0434\u043e 250."},desiredWeight:{name:"desiredWeight",type:"text",placeholder:"\u0411\u0430\u0436\u0430\u043d\u0430 \u0432\u0430\u0433\u0430*",required:!0,pattern:".{2,3}",title:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0434\u0456\u0439\u0441\u043d\u0435 \u0447\u0438\u0441\u043b\u043e \u0432\u0456\u0434 20 \u0434\u043e 500."},bloodType:{name:"blodtype",type:"text",placeholder:"\u0413\u0440\u0443\u043f\u0430 \u043a\u0440\u043e\u0432\u0456*"},filter:{type:"text",name:"filter",placeholder:"\u0424\u0456\u043b\u044c\u0442\u0440\u0443\u0432\u0430\u0442\u0438 \u0437\u0430 \u043d\u0430\u0437\u0432\u043e\u044e"}}},2566:function(e,t,r){r.d(t,{Z:function(){return s}});var a="TextFieldDefault_input__TN7oB",n=r(184),i=function(e){var t=e.type,r=e.name,i=e.value,s=e.handleChange,l=e.placeholder,o=e.required,d=e.pattern,c=e.title;return(0,n.jsx)("label",{children:(0,n.jsx)("input",{className:a,type:t,name:r,value:i,onChange:s,placeholder:l,required:o,pattern:d,title:c})})},s=i;i.defaultProps={type:"text",required:!1}},7858:function(e,t,r){r.d(t,{Z:function(){return y}});var a=r(1413),n=r(885),i=r(9434),s=r(6730),l=r(2791),o=r(6382),d=r(2566),c=r(8704),u=function(e){return e.dairyCalendar.date},_={container_sidebar:"SideBar_container_sidebar__YEww0",sum:"SideBar_sum__Jv1xj",title_sidebar:"SideBar_title_sidebar__7GDyI",list_sidebar:"SideBar_list_sidebar__NYb3c",item_sidebar:"SideBar_item_sidebar__lDXgx",data:"SideBar_data__JNg-9",text_sidebar_food:"SideBar_text_sidebar_food__Pg58D",food:"SideBar_food__eIk0d",menuGroupList:"SideBar_menuGroupList__Xvf-8",menuGroupItems:"SideBar_menuGroupItems__PYGmW"},m=r(9869),h=r(8712),v=r(7048),f=r(184),y=function(){var e=(0,i.v9)(u),t=(0,i.v9)(m.U6),r=(0,i.v9)(s.M7),y=(0,i.v9)(s.SP),p=(0,i.v9)(s.vO),x=(0,i.v9)(s.TW),j=(0,i.v9)(s.jj),b=(0,i.v9)(s.Wm),g=(0,i.v9)(s.oj),N=(0,i.v9)(s.EI),D=(0,i.v9)(s.wg),P=(0,i.I0)(),w=(0,l.useState)([]),M=(0,n.Z)(w,2),C=M[0],k=M[1];(0,l.useEffect)((function(){e&&P((0,h.Wd)({date:e}))}),[P,e,t]),(0,l.useEffect)((function(){t&&k(t)}),[t]);return(0,f.jsxs)("div",{className:_.container_sidebar,children:[D&&(0,f.jsx)(v.Z,{}),(0,f.jsxs)("div",{className:_.sum,children:[(0,f.jsxs)("h3",{className:_.title_sidebar,children:["\u0420\u0435\u0437\u044e\u043c\u0435 \u0437\u0430 ",e]}),(0,f.jsxs)("ul",{className:_.list_sidebar,children:[(0,f.jsxs)("li",{className:_.item_sidebar,children:[(0,f.jsx)("p",{className:_.text_sidebar_sum,children:"\u0417\u0430\u043b\u0438\u0448\u0438\u043b\u043e\u0441\u044f"}),(0,f.jsx)("span",{className:_.data,children:r?Math.floor(r)+" kcal":j?Math.floor(j)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:_.item_sidebar,children:[(0,f.jsx)("p",{className:_.text_sidebar,children:"\u0421\u043f\u043e\u0436\u0438\u043b\u043e\u0441\u044f"}),(0,f.jsx)("span",{className:_.data,children:y?Math.floor(y)+" kcal":b?Math.floor(b)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:_.item_sidebar,children:[(0,f.jsx)("p",{className:_.text_sidebar,children:"\u0414\u043e\u0431\u043e\u0432\u0430 \u043d\u043e\u0440\u043c\u0430"}),(0,f.jsx)("span",{className:_.data,children:p?Math.floor(p)+" kcal":g?Math.floor(g)+" kcal":"000 kcal"})]}),(0,f.jsxs)("li",{className:_.item_sidebar,children:[(0,f.jsx)("p",{className:_.text_sidebar,children:"% \u0432\u0456\u0434 \u043d\u043e\u0440\u043c\u0438"}),(0,f.jsx)("span",{className:_.data,children:x?Math.floor(x)+" %":N?Math.floor(N)+" %":"0 %"})]})]})]}),(0,f.jsxs)("div",{className:_.food,children:[(0,f.jsx)("h3",{className:_.title_sidebar,children:"\u041d\u0435 \u0440\u0435\u043a\u043e\u043c\u0435\u043d\u0434\u043e\u0432\u0430\u043d\u0430 \u0457\u0436\u0430"}),(null===t||void 0===t?void 0:t.length)>0&&(0,f.jsx)(d.Z,(0,a.Z)({handleChange:function(e){var r=t.filter((function(t){return t.includes(e.target.value)}));k(r)}},c.E.filter)),(null===t||void 0===t?void 0:t.length)>0&&(0,f.jsx)(f.Fragment,{children:(0,f.jsx)("ol",{className:_.menuGroupList,children:C.map((function(e){return(0,f.jsx)("li",{className:_.menuGroupItems,children:e},(0,o.x0)())}))})}),0===(null===t||void 0===t?void 0:t.length)&&(0,f.jsx)("p",{className:_.text_sidebar_food,children:"\u0422\u0443\u0442 \u0432\u0456\u0434\u043e\u0431\u0440\u0430\u0436\u0430\u0442\u0438\u043c\u0435\u0442\u044c\u0441\u044f \u0432\u0430\u0448 \u0440\u0430\u0446\u0456\u043e\u043d."})]})]})}},7043:function(e,t,r){r.r(t),r.d(t,{default:function(){return Se}});var a,n,i,s=r(885),l=r(4805),o=r(2791),d=r(9434),c=r(7858),u=r(4834),_=r(5290),m=r(5970),h="DiaryAddProductForm_form__72n0e",v="DiaryAddProductForm_btn__Z0Nm7",f="DiaryAddProductForm_overlayLabel__2pr0E",y="DiaryAddProductForm_errorOverlay__oJw8d",p="DiaryAddProductForm_errorMessage__qgNon",x=r(9833),j=r(3713),b=r(5399),g=r(1286),N=function(e){return e.product.items},D=function(e){return e.product.loading},P=function(e){return e.product.error},w=r(1284),M=r(1413),C="DiaryChooseProductList_overlay__5XlnC",k="DiaryChooseProductList_headTitle__LPGci",O="DiaryChooseProductList_list__ccqab",S="DiaryChooseProductList_item__IKqKE",L="DiaryChooseProductList_wrapper__FUGQF",F="DiaryChooseProductList_title__Fgj-Y",I="DiaryChooseProductList_weight__h+CuP",Z="DiaryChooseProductList_kcal__eIhYW",E=r(8712),q="LoaderMini_loader__7crKR",W=r(643),B=r(184),G=function(){return(0,B.jsx)("div",{className:q,children:(0,B.jsx)(W.iT,{height:"50",width:"50",color:"#fc842d",secondaryColor:"transparent"})})};function A(e){var t=e.handleClickClose,r=e.setModalOpen,a=(0,d.I0)(),n=(0,l.useMediaQuery)({maxWidth:767}),i=(0,o.useState)(!1),c=(0,s.Z)(i,2),u=c[0],_=c[1],m=(0,d.v9)(N),h=(0,d.v9)((function(e){return e.dairyCalendar})),v=(0,d.v9)(D);return(0,B.jsx)(B.Fragment,{children:!0===v?(0,B.jsx)(G,{}):(0,B.jsx)(B.Fragment,{children:!u&&(0,B.jsxs)("div",{className:C,children:[(0,B.jsx)("h2",{className:k,children:"\u0412\u0438\u0431\u0435\u0440\u0456\u0442\u044c \u043f\u0440\u043e\u0434\u0443\u043a\u0442:"}),(0,B.jsx)("ul",{className:O,children:m.map((function(e){var i=e._id,s=e.title,l=e.calories,o=e.weight;return(0,B.jsxs)("li",{className:S,onClick:function(){return e=i,a((0,E.sL)((0,M.Z)((0,M.Z)({},h),{},{productId:e}))),_(!1),t(!1),void(n&&(r(!1),document.querySelector("body").classList.remove("no-scroll")));var e},children:[(0,B.jsxs)("p",{className:F,children:[" ",s.ua]}),(0,B.jsxs)("div",{className:L,children:[(0,B.jsxs)("p",{className:I,children:[o," \u0433\u0440"]}),(0,B.jsxs)("p",{className:Z,children:[l," \u043a\u043a\u0430\u043b"]})]})]},i)}))})]})})})}var T=["title","titleId"];function Q(){return Q=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},Q.apply(this,arguments)}function R(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function X(e,t){var r=e.title,s=e.titleId,l=R(e,T);return o.createElement("svg",Q({width:12,height:12,fill:"#f84147",id:"icon-warning",viewBox:"0 0 32 32",ref:t,"aria-labelledby":s},l),r?o.createElement("title",{id:s},r):null,a||(a=o.createElement("path",{d:"M16 2.899l13.409 26.726h-26.819l13.409-26.726zM16 0c-0.69 0-1.379 0.465-1.903 1.395l-13.659 27.222c-1.046 1.86-0.156 3.383 1.978 3.383h27.166c2.134 0 3.025-1.522 1.978-3.383h0l-13.659-27.222c-0.523-0.93-1.213-1.395-1.903-1.395v0z"})),n||(n=o.createElement("path",{d:"M18 26c0 1.105-0.895 2-2 2s-2-0.895-2-2c0-1.105 0.895-2 2-2s2 0.895 2 2z"})),i||(i=o.createElement("path",{d:"M16 22c-1.105 0-2-0.895-2-2v-6c0-1.105 0.895-2 2-2s2 0.895 2 2v6c0 1.105-0.895 2-2 2z"})))}var z,Y=o.forwardRef(X),J=(r.p,r(2566)),K=function(e){var t=e.setModalOpen,r=(0,d.I0)(),a=(0,o.useState)(!1),n=(0,s.Z)(a,2),i=n[0],c=n[1],u=(0,l.useMediaQuery)({maxWidth:767}),N=(0,l.useMediaQuery)({minWidth:768}),D=(0,d.v9)(P),M=(0,_.cI)({defaultValues:{query:"",weight:""}}),C=M.control,k=M.handleSubmit,O=M.reset,S=M.formState.errors;return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsxs)("form",{className:h,onSubmit:k((function(e,t){if(t.preventDefault(),r((0,g.A)(e.query)),r((0,w.nr)(Number(e.weight))),!0===i)return c(!1),c(!0),void O();c(!i),O()})),children:[(0,B.jsxs)("div",{className:f,children:[(0,B.jsx)(_.Qr,{control:C,name:"query",render:function(e){var t=e.field,r=t.onChange,a=t.value;return(0,B.jsx)(J.Z,{value:a,placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443",name:"query",control:C,handleChange:r})},rules:{required:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u043d\u0430\u0437\u0432\u0443 \u043f\u0440\u043e\u0434\u0443\u043a\u0442\u0443"}}),(0,B.jsx)(m.B,{errors:S,name:"query",render:function(e){var t=e.message;return(0,B.jsxs)("div",{className:y,children:[(0,B.jsx)(Y,{}),(0,B.jsx)("p",{className:p,children:t})]})}})]}),(0,B.jsxs)("div",{className:f,children:[(0,B.jsx)(_.Qr,{control:C,name:"weight",render:function(e){var t=e.field,r=t.onChange,a=t.value;return(0,B.jsx)(J.Z,{value:a,placeholder:"\u0412\u0430\u0433\u0430",name:"weight",pattern:"[0-9]+",control:C,handleChange:r})},rules:{required:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0441\u0432\u043e\u044e \u0432\u0430\u0433\u0443"}}),(0,B.jsx)(m.B,{errors:S,name:"weight",render:function(e){var t=e.message;return(0,B.jsxs)("div",{className:y,children:[(0,B.jsx)(Y,{}),(0,B.jsx)("p",{className:p,children:t})]})}})]}),(0,B.jsxs)("div",{className:v,children:[u&&(0,B.jsx)(x.Z,{text:"\u0414\u043e\u0434\u0430\u0442\u0438",btnClass:"btn"}),N&&(0,B.jsx)(x.Z,{text:"+",btnClass:"btnPlus"})]})]}),i&&D&&(0,B.jsx)(j.Z,{setModalOpen:c,children:(0,B.jsx)(b.Z,{status:D.data.message})}),i&&(0,B.jsx)(A,{setModalOpen:t,handleClickClose:function(e){c(e)}})]})},V=r(9513),U=r.n(V),H=r(2426),$=r.n(H),ee=r(5952),te=(r(8639),"DiaryDate\u0421alendar_btnInput__d0154"),re="DiaryDate\u0421alendar_dateOverlay__0WzDh",ae=function(){var e=(0,d.I0)(),t=(0,d.v9)((function(e){return e.dairyCalendar.date})),r=(0,o.useState)(!1),a=(0,s.Z)(r,2),n=a[0],i=a[1],l=(0,o.useState)(new Date),c=(0,s.Z)(l,2),u=c[0],_=c[1];(0,o.useEffect)((function(){e(t?(0,w.As)(t):(0,w.As)($()(new Date).format("yyyy-MM-DD")))}),[]);return(0,B.jsxs)(B.Fragment,{children:[(0,B.jsx)("button",{className:te,onClick:function(e){e.preventDefault(),i(!n)},children:$()(t).format("DD-MM-yyyy")}),n&&(0,B.jsx)("div",{className:re,children:(0,B.jsx)(U(),{selected:u,onChange:function(t){_(t),i(!n),e((0,w.As)($()(t).format("yyyy-MM-DD"))),e((0,E.Wd)({date:$()(t).format("yyyy-MM-DD")}))},locale:ee.Z,maxDate:new Date,inline:!0})})]})},ne="DiaryProductsListItem_item__9H0W0",ie="DiaryProductsListItem_wrapper__yx7FO",se="DiaryProductsListItem_title__4RWxm",le="DiaryProductsListItem_weight__PWfjZ",oe="DiaryProductsListItem_kcal__L0c3T",de="DiaryProductsListItem_btnRemove__ZDqSi",ce=r(6730),ue=["title","titleId"];function _e(){return _e=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},_e.apply(this,arguments)}function me(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function he(e,t){var r=e.title,a=e.titleId,n=me(e,ue);return o.createElement("svg",_e({width:14,height:14,fill:"none",xmlns:"http://www.w3.org/2000/svg",ref:t,"aria-labelledby":a},n),r?o.createElement("title",{id:a},r):null,z||(z=o.createElement("path",{d:"m1 1 12 12M1 13 13 1",stroke:"#9B9FAA",strokeWidth:2})))}var ve=o.forwardRef(he),fe=(r.p,function(){var e=(0,d.I0)(),t=(0,d.v9)(ce.Ni);return(0,B.jsx)(B.Fragment,{children:t&&t.map((function(t){var r=t.id,a=t.title,n=t.weight,i=t.kcal;return(0,B.jsxs)("li",{className:ne,children:[(0,B.jsx)("p",{className:se,children:a}),(0,B.jsxs)("div",{className:ie,children:[(0,B.jsxs)("p",{className:le,children:[n," \u0433\u0440"]}),(0,B.jsxs)("p",{className:oe,children:[Math.round(i)," \u043a\u043a\u0430\u043b"]})]}),(0,B.jsx)("button",{className:de,type:"button",onClick:function(){return function(t){e((0,E.gr)(t))}(r)},children:(0,B.jsx)(ve,{})})]},r)}))})}),ye="DiaryProductsList_overlay__wrEuW",pe="DiaryProductsList_list__Jc0Rv",xe=function(){var e=(0,d.v9)(ce.Cp);return!0===(0,d.v9)(D)?(0,B.jsx)(B.Fragment,{}):(0,B.jsx)(B.Fragment,{children:!0===e?(0,B.jsx)(G,{}):(0,B.jsx)("div",{className:ye,children:(0,B.jsxs)("ul",{className:pe,children:[(0,B.jsx)(fe,{}),(0,B.jsx)("li",{})]})})})},je="DairyPage_wrapper__INA+u",be="DairyPage_overlay__EsMgn",ge="DairyPage_btn__LEm1h",Ne=r(9869),De=r(1087),Pe="GreetingForm_wrapper__JQQab",we="GreetingForm_title__Kdygm",Me="GreetingForm_text__xa0dR",Ce="GreetingForm_btn__IDzco",ke="GreetingForm_btnGreeting__D3Zes";function Oe(){var e=(0,d.v9)(Ne.vW);return(0,B.jsxs)("div",{className:Pe,children:[(0,B.jsxs)("h1",{className:we,children:["\u0414\u043e\u0431\u0440\u0438\u0439 \u0434\u0435\u043d\u044c, ",e]}),(0,B.jsx)("p",{className:Me,children:"\u041d\u0430\u0448 \u0434\u043e\u0434\u0430\u0442\u043e\u043a \u043f\u0440\u043e\u043f\u043e\u043d\u0443\u0454 \u0432\u0430\u043c \u0434\u043e\u0442\u0440\u0438\u043c\u0443\u0432\u0430\u0442\u0438\u0441\u044f \u0434\u0456\u0454\u0442\u0438 \u0442\u0430 \u0440\u043e\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u043a\u0430\u043b\u043e\u0440\u0456\u0457. \u041f\u0435\u0440\u0435\u0439\u0434\u0456\u0442\u044c \u0434\u043e \u0440\u043e\u0437\u0434\u0456\u043b\u0443 \u043a\u0430\u043b\u044c\u043a\u0443\u043b\u044f\u0442\u043e\u0440 \u0442\u0430 \u0440\u043e\u0437\u0440\u0430\u0445\u0443\u0439\u0442\u0435 \u0434\u0456\u0454\u0442\u0443."}),(0,B.jsx)("div",{className:Ce,children:(0,B.jsx)(De.rU,{to:"/calculator-calories",className:ke,children:"\u0420\u043e\u0437\u0440\u0430\u0445\u0443\u0432\u0430\u0442\u0438 \u0434\u0456\u0454\u0442\u0443"})})]})}var Se=function(){var e=(0,l.useMediaQuery)({maxWidth:767}),t=(0,d.v9)(Ne.U6),r=0===(null===t||void 0===t?void 0:t.length),a=(0,l.useMediaQuery)({minWidth:767}),n=(0,o.useState)(!1),i=(0,s.Z)(n,2),_=i[0],m=i[1];return(0,B.jsxs)("main",{className:je,children:[r&&(0,B.jsx)(Oe,{}),!r&&(0,B.jsxs)("div",{className:be,children:[(0,B.jsxs)("div",{children:[(0,B.jsx)(ae,{}),a&&(0,B.jsx)(K,{}),(0,B.jsx)(xe,{})]}),e&&(0,B.jsx)("div",{className:ge,children:(0,B.jsx)(u.Z,{text:"+",btnClass:"btnPlus",type:"button",handleClick:function(){document.querySelector("body").classList.add("no-scroll"),m(!0)}})}),_&&(0,B.jsx)(j.Z,{setModalOpen:m,overlayClass:"overlayDairyPage",modalClass:"modalDairyPage",children:(0,B.jsx)(K,{setModalOpen:m})})]}),(0,B.jsx)(c.Z,{})]})}},6730:function(e,t,r){r.d(t,{Cp:function(){return n},EI:function(){return _},M7:function(){return i},Ni:function(){return a},SP:function(){return s},TW:function(){return o},Wm:function(){return c},jj:function(){return d},oj:function(){return u},vO:function(){return l},wg:function(){return m}});var a=function(e){return e.dayProduct.eatenProducts},n=function(e){return e.dayProduct.loading},i=function(e){var t,r,a=e.dayProduct;return null===a||void 0===a||null===(t=a.aboutDay)||void 0===t||null===(r=t.daySummary)||void 0===r?void 0:r.kcalLeft},s=function(e){var t,r,a=e.dayProduct;return null===a||void 0===a||null===(t=a.aboutDay)||void 0===t||null===(r=t.daySummary)||void 0===r?void 0:r.kcalConsumed},l=function(e){var t,r,a=e.dayProduct;return null===a||void 0===a||null===(t=a.aboutDay)||void 0===t||null===(r=t.daySummary)||void 0===r?void 0:r.dailyRate},o=function(e){var t,r,a=e.dayProduct;return null===a||void 0===a||null===(t=a.aboutDay)||void 0===t||null===(r=t.daySummary)||void 0===r?void 0:r.percentsOfDailyRate},d=function(e){var t,r=e.dayProduct;return null===r||void 0===r||null===(t=r.aboutDay)||void 0===t?void 0:t.kcalLeft},c=function(e){var t,r=e.dayProduct;return null===r||void 0===r||null===(t=r.aboutDay)||void 0===t?void 0:t.kcalConsumed},u=function(e){var t,r=e.dayProduct;return null===r||void 0===r||null===(t=r.aboutDay)||void 0===t?void 0:t.dailyRate},_=function(e){var t,r=e.dayProduct;return null===r||void 0===r||null===(t=r.aboutDay)||void 0===t?void 0:t.percentsOfDailyRate},m=function(e){return e.dayProduct.loading}},4668:function(e,t){t.Z={container:"NotFound_container__KNX4B",title:"NotFound_title__f917b",txt:"NotFound_txt__VshUQ",booWrapper:"NotFound_booWrapper__2b5FM",boo:"NotFound_boo__bQlpM",floating:"NotFound_floating__P8jYD",face:"NotFound_face__jV+a5",shadow:"NotFound_shadow__wSXLX",floatingShadow:"NotFound_floatingShadow__fkJav"}}}]);
//# sourceMappingURL=773.430a5daf.chunk.js.map