(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{228:function(t,e,n){},229:function(t,e,n){},255:function(t,e,n){"use strict";n(8),n(5),n(6),n(12),n(7),n(13);var r=n(2),o=n(53);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var l={data:function(){return{clipped:!1,drawer:!1,fixed:!1,items:[{icon:"mdi-apps",title:"Flashcard Graphs",to:"/"},{icon:"mdi-chart-bubble",title:"Table Items",to:"/tableItemsPage"},{icon:"mdi-chart-bubble",title:"Multichoice 60",to:"/multichoice60"},{icon:"mdi-chart-bubble",title:"Legal",to:"/legal"}],miniVariant:!1,right:!0,rightDrawer:!1}},computed:function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},Object(o.b)(["pageTitle"]))},v=n(30),h=n(36),f=n.n(h),d=n(349),m=n(361),_=n(350),w=n(257),x=n(362),O=n(351),y=n(176),V=n(177),k=n(113),T=n(178),j=n(89),P=n(352),C=n(354),S=n(353),D=n(252),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{"mini-variant":t.miniVariant,clipped:t.clipped,fixed:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-list",t._l(t.items,(function(e,i){return n("v-list-item",{key:i,attrs:{to:e.to,router:"",exact:""}},[n("v-list-item-action",[n("v-icon",[t._v(t._s(e.icon))])],1),t._v(" "),n("v-list-item-content",[n("v-list-item-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})),1)],1),t._v(" "),n("v-app-bar",{attrs:{"clipped-left":t.clipped,fixed:"",app:""}},[n("v-app-bar-nav-icon",{on:{click:function(e){e.stopPropagation(),t.drawer=!t.drawer}}}),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.miniVariant=!t.miniVariant}}},[n("v-icon",[t._v("mdi-"+t._s("chevron-"+(t.miniVariant?"right":"left")))])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.clipped=!t.clipped}}},[n("v-icon",[t._v("mdi-application")])],1),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.fixed=!t.fixed}}},[n("v-icon",[t._v("mdi-minus")])],1),t._v(" "),n("v-toolbar-title",[t._v(t._s(t.pageTitle))]),t._v(" "),n("v-spacer"),t._v(" "),n("v-btn",{attrs:{icon:""},on:{click:function(e){e.stopPropagation(),t.rightDrawer=!t.rightDrawer}}},[n("v-icon",[t._v("mdi-menu")])],1)],1),t._v(" "),n("v-main",[n("v-container",[n("nuxt")],1)],1),t._v(" "),n("v-navigation-drawer",{attrs:{right:t.right,temporary:"",fixed:""},model:{value:t.rightDrawer,callback:function(e){t.rightDrawer=e},expression:"rightDrawer"}},[n("v-list",[n("v-list-item",{nativeOn:{click:function(e){t.right=!t.right}}},[n("v-list-item-action",[n("v-icon",{attrs:{light:""}},[t._v("\n            mdi-repeat\n          ")])],1),t._v(" "),n("v-list-item-title",[t._v("Switch drawer (click me)")])],1)],1)],1),t._v(" "),n("v-footer",{attrs:{absolute:!t.fixed,app:""}},[n("span",[t._v("© "+t._s((new Date).getFullYear()))])])],1)}),[],!1,null,null,null);e.a=component.exports;f()(component,{VApp:d.a,VAppBar:m.a,VAppBarNavIcon:_.a,VBtn:w.a,VContainer:x.a,VFooter:O.a,VIcon:y.a,VList:V.a,VListItem:k.a,VListItemAction:T.a,VListItemContent:j.a,VListItemTitle:j.b,VMain:P.a,VNavigationDrawer:C.a,VSpacer:S.a,VToolbarTitle:D.a})},256:function(t,e,n){"use strict";n(65);var r={name:"NuxtLoading",data:function(){return{percent:0,show:!1,canSucceed:!0,reversed:!1,skipTimerCount:0,rtl:!1,throttle:200,duration:5e3,continuous:!1}},computed:{left:function(){return!(!this.continuous&&!this.rtl)&&(this.rtl?this.reversed?"0px":"auto":this.reversed?"auto":"0px")}},beforeDestroy:function(){this.clear()},methods:{clear:function(){clearInterval(this._timer),clearTimeout(this._throttle),this._timer=null},start:function(){var t=this;return this.clear(),this.percent=0,this.reversed=!1,this.skipTimerCount=0,this.canSucceed=!0,this.throttle?this._throttle=setTimeout((function(){return t.startTimer()}),this.throttle):this.startTimer(),this},set:function(t){return this.show=!0,this.canSucceed=!0,this.percent=Math.min(100,Math.max(0,Math.floor(t))),this},get:function(){return this.percent},increase:function(t){return this.percent=Math.min(100,Math.floor(this.percent+t)),this},decrease:function(t){return this.percent=Math.max(0,Math.floor(this.percent-t)),this},pause:function(){return clearInterval(this._timer),this},resume:function(){return this.startTimer(),this},finish:function(){return this.percent=this.reversed?0:100,this.hide(),this},hide:function(){var t=this;return this.clear(),setTimeout((function(){t.show=!1,t.$nextTick((function(){t.percent=0,t.reversed=!1}))}),500),this},fail:function(t){return this.canSucceed=!1,this},startTimer:function(){var t=this;this.show||(this.show=!0),void 0===this._cut&&(this._cut=1e4/Math.floor(this.duration)),this._timer=setInterval((function(){t.skipTimerCount>0?t.skipTimerCount--:(t.reversed?t.decrease(t._cut):t.increase(t._cut),t.continuous&&(t.percent>=100||t.percent<=0)&&(t.skipTimerCount=1,t.reversed=!t.reversed))}),100)}},render:function(t){var e=t(!1);return this.show&&(e=t("div",{staticClass:"nuxt-progress",class:{"nuxt-progress-notransition":this.skipTimerCount>0,"nuxt-progress-failed":!this.canSucceed},style:{width:this.percent+"%",left:this.left}})),e}},o=(n(297),n(30)),component=Object(o.a)(r,undefined,undefined,!1,null,null,null);e.a=component.exports},295:function(t,e,n){"use strict";n(228)},297:function(t,e,n){"use strict";n(229)},298:function(t,e,n){},355:function(t,e,n){"use strict";n.r(e);var r={name:"about"},o=n(30),c=n(36),l=n.n(c),v=n(363),h=n(23),f=n(381),d=n(176),m=n(403),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{notes:"About"}},[n("v-card",{attrs:{hover:""}},[n("v-card-title",{attrs:{notes:"About"}},[n("v-icon",{attrs:{left:""}},[t._v("\n        mdi-bell-ring\n      ")]),t._v(" "),n("span",{staticClass:"title font-weight-light"},[t._v("\n        About\n      ")])],1),t._v(" "),n("v-card-text",[n("pre",[t._v("Quick and dirty flashcards to help study for\n      ")])])],1)],1)],1)}),[],!1,null,"5fd2b6ec",null);e.default=component.exports;l()(component,{VCard:v.a,VCardText:h.b,VCardTitle:h.c,VCol:f.a,VIcon:d.a,VRow:m.a})},356:function(t,e,n){"use strict";n.r(e);var r={name:"legal"},o=n(30),c=n(36),l=n.n(c),v=n(363),h=n(23),f=n(381),d=n(176),m=n(403),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("v-col",{attrs:{notes:"About"}},[n("v-card",{attrs:{hover:""}},[n("v-card-title",{attrs:{notes:"About"}},[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-bell-ring\n          ")]),t._v(" "),n("span",{staticClass:"title font-weight-light"},[t._v("\n        About\n      ")])],1),t._v(" "),n("v-card-text",[n("pre",[t._v("Quick and dirty flashcards implementation\n"),n("a",{attrs:{href:"https://github.com/hychan48/flashcards",target:"_blank"}},[t._v("https://github.com/hychan48/flashcards")]),t._v("\n"),n("a",{attrs:{href:"https://hychan48.github.io/flashcards/",target:"_blank"}},[t._v("https://hychan48.github.io/flashcards/")]),t._v("\n\nAGPL-3.0 License\nExtending licence and credits\n"),n("a",{attrs:{href:"https://ketaminenightmares.com/admin/legal.html",target:"_blank"}},[t._v("https://ketaminenightmares.com/admin/legal.html")]),t._v("\n\nInitial content is for studying for\n"),n("a",{attrs:{href:"https://ketaminenightmares.com/",target:"_blank"}},[t._v("https://ketaminenightmares.com/")]),t._v("\n\nPrimarily\n"),n("a",{attrs:{href:"https://ketaminenightmares.com/pex/other/memorisation_material/",target:"_blank"}},[t._v("https://ketaminenightmares.com/pex/other/memorisation_material/")]),t._v("\n\n\nGood luck studying\n      ")])])],1)],1)],1)}),[],!1,null,"a16e704a",null);e.default=component.exports;l()(component,{VCard:v.a,VCardText:h.b,VCardTitle:h.c,VCol:f.a,VIcon:d.a,VRow:m.a})},357:function(t,e,n){"use strict";n.r(e);var r=n(17),o=(n(37),n(50),n(64),n(341)),c={name:"multichoice60",created:function(){this.$options.aLoremObject60=o.a,this.radioGroups=new Array(this.aQuestionSets.length+1)},mounted:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$nextTick();case 2:if(!(n=t.$route.hash)){e.next=6;break}return e.next=6,t.$vuetify.goTo(n);case 6:case"end":return e.stop()}}),e)})))()},computed:{showFab:function(){return this.offsetTop>0},devFirstEntry:function(){var t;return null===(t=this.$options.aLoremObject60)||void 0===t?void 0:t[0]},devFiveEntries:function(){var t;return null===(t=this.$options.aLoremObject60)||void 0===t?void 0:t.slice(0,5)},aQuestionSets:function(){return this.$options.aLoremObject60},questionSetStates:function(){var t=this;return this.aQuestionSets.map((function(e,i){var n=e.question,r=(e.answers,e.iAnswer),o=t.radioGroups[i],c={id:n+i};return void 0!==o&&null!=o&&(c.color=o===r?"success":"error",c.colorMdiIcon=o===r?"mdi-check-bold":"mdi-close"),c}))}},data:function(){return{radioGroup:{},radioGroups:[],offsetTop:0}},methods:{navToQuestion:function(t){try{this.$vuetify.goTo(this.$refs[t][0]),console.log(this.$route)}catch(t){console.error(t)}},devSandbox:function(){console.log(this.$route),console.log(this.$route.hash)},onScroll:function(t){this.offsetTop=window.scrollY},toTop:function(t){this.$vuetify.goTo(0)}}},l=n(30),v=n(36),h=n.n(v),f=n(257),d=n(363),m=n(23),_=n(381),w=n(91),x=n(176),O=n(410),y=n(404),V=n(403),k=n(174),T=n.n(k),j=n(100),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{attrs:{id:"rowId",sclass:"overflow-y-auto"}},[n("v-col",{attrs:{notes:"Multi Choice 60",cols:"8"}},[n("v-card",{attrs:{hover:""}},[n("v-card-title",{attrs:{notes:"Multi Choice 60"}},[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-bell-ring\n          ")]),t._v(" "),n("span",{staticClass:"title font-weight-light"},[t._v("\n        Multi Choice 60\n      ")])],1),t._v(" "),n("v-card-text",[t._l(t.aQuestionSets,(function(e,i){return n("div",{key:e.question+i,ref:e.question+i,refInFor:!0,attrs:{id:e.question+i}},[t._v("\n            "+t._s(e.question)+"\n            "),n("v-radio-group",{model:{value:t.radioGroups[i],callback:function(e){t.$set(t.radioGroups,i,e)},expression:"radioGroups[i]"}},t._l(e.answers,(function(t,e){return n("v-radio",{key:e+t,attrs:{label:""+t,value:e}})})),1)],1)})),t._v(" "),n("hr"),t._v(" "),n("pre",[t._v(t._s(t.radioGroup))]),t._v(" "),n("pre",[t._v(t._s(t.devFirstEntry.question))]),t._v(" "),n("v-radio-group",{model:{value:t.radioGroup,callback:function(e){t.radioGroup=e},expression:"radioGroup"}},t._l(t.devFirstEntry.answers,(function(t,e){return n("v-radio",{key:e+t,attrs:{label:""+t,value:e}})})),1)],2)],1)],1),t._v(" "),n("v-col",{attrs:{notes:"Nav Demo",cols:"4",sssclass:"float-right"}},[n("v-card",{attrs:{hover:"",ssclass:"float-right"}},[n("v-card-title",{attrs:{notes:"Nav Demo"}},[n("v-icon",{attrs:{left:""}},[t._v("\n            mdi-bell-ring\n          ")]),t._v(" "),n("span",{staticClass:"title font-weight-light"},[t._v("\n            Nav Demo\n          ")])],1),t._v(" "),n("v-card-text",[n("pre",[t._v("todo make absolute / prettier")]),t._v(" "),t._l(t.questionSetStates,(function(e){return n("div",[n("v-btn",{attrs:{color:e.color},on:{click:function(n){return t.navToQuestion(e.id)}}},[t._v("\n              "+t._s(e.id)+"\n              "),n("v-icon",[t._v("\n                "+t._s(e.colorMdiIcon)+"\n              ")])],1)],1)})),t._v(" "),n("hr"),t._v(" "),n("pre",[t._v("offsetTop: "+t._s(t.offsetTop)+" - hash / anchor not working..\nscroll not being triggered")]),t._v(" "),n("a",{attrs:{href:"http://localhost:3000/multichoice60#leo4",target:"_blank"}},[t._v("http://localhost:3000/multichoice60#leo4")]),t._v(" "),n("v-btn",{on:{click:function(e){return t.navToQuestion("leo4")}}},[t._v("\n            dev navToQuestion leo4\n          ")]),t._v(" "),n("v-btn",{on:{click:t.devSandbox}},[t._v("\n            devSandbox\n          ")])],2)],1)],1),t._v(" "),n("v-fab-transition",[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:t.showFab,expression:"showFab"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],attrs:{color:"primary",fixed:"",bottom:"",right:"",fab:"","aria-label":"Nav to top",title:"Nav to top"},on:{click:t.toTop}},[n("v-icon",[t._v("mdi-chevron-up")])],1)],1)],1)}),[],!1,null,"4453d81a",null);e.default=component.exports;h()(component,{VBtn:f.a,VCard:d.a,VCardText:m.b,VCardTitle:m.c,VCol:_.a,VFabTransition:w.b,VIcon:x.a,VRadio:O.a,VRadioGroup:y.a,VRow:V.a}),T()(component,{Scroll:j.b})},358:function(t,e,n){"use strict";n.r(e);n(25);var r={name:"practice",computed:{height:function(){switch(this.$vuetify.breakpoint.name){case"xs":return null;case"sm":return 400;case"md":return 500;case"lg":return 600;case"xl":return 800}}},data:function(){return{show:!1}}},o=n(30),c=n(36),l=n.n(c),v=n(403),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",[n("info-card",{attrs:{height:t.height,show:t.show}})],1)}),[],!1,null,null,null);e.default=component.exports;l()(component,{VRow:v.a})},359:function(t,e,n){"use strict";n.r(e);n(8),n(5),n(6),n(12),n(7),n(13);var r=n(2),o=n(17),c=(n(64),n(53));function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h={name:"tableItemsPage",mixins:[n(175).a],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.error,e.next=3,n("tableItems").fetch().catch((function(t){console.error(t),r({statusCode:404,message:"Page not found"})}));case 3:return o=e.sent,e.abrupt("return",{aContent:o});case 5:case"end":return e.stop()}}),e)})))()},data:function(){return{aContent:[]}},computed:{tableItems:function(){return this.aContent}},methods:v(v({},Object(c.c)(["setPageTitle","setDefaultPageTitle"])),{},{expandAll:function(){}}),head:function(){var t="Tables";return this.setPageTitle(t),{title:t}},beforeDestroy:function(){this.setDefaultPageTitle()}},f=n(30),d=n(36),m=n.n(d),_=n(363),w=n(23),x=n(381),O=n(362),y=n(405),V=n(406),k=n(407),T=n(408),j=n(403),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},t._l(t.tableItems,(function(e){return n("v-row",{key:e.chartTitle},[n("v-col",[n("div",[t._v(t._s(e.chartTitle))]),t._v(" "),n("v-expansion-panels",{attrs:{focusable:"",multiplesss:""}},t._l(e.aOut,(function(e,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("v-expansion-panel-content",[n("v-card",[n("table",{domProps:{innerHTML:t._s(e.htmlTable)}}),t._v(" "),e.notes?n("v-card-subtitle",[t._v("\n                "+t._s(e.notes)+"\n              ")]):t._e()],1)],1)],1)})),1)],1)],1)})),1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:_.a,VCardSubtitle:w.a,VCol:x.a,VContainer:O.a,VExpansionPanel:y.a,VExpansionPanelContent:V.a,VExpansionPanelHeader:k.a,VExpansionPanels:T.a,VRow:j.a})},360:function(t,e,n){"use strict";n.r(e),n.d(e,"scrollingMixin",(function(){return f}));n(8),n(5),n(6),n(12),n(7),n(13);var r=n(2),o=n(17),c=(n(64),n(53)),l=n(175);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var f={data:function(){return{offsetTop:0}},computed:{showButton:function(){return this.offsetTop>0}},methods:{onScroll:function(t){this.offsetTop=t.target.scrollTop}}},d={name:"indexPage",mixins:[l.a,f],data:function(){return{multiples:[]}},graphItems:[],asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.error,e.next=3,n("graphItems").fetch().catch((function(t){console.error(t),r({statusCode:404,message:"Page not found"})}));case 3:return o=e.sent,e.abrupt("return",{aContent:o});case 5:case"end":return e.stop()}}),e)})))()},computed:{graphItems:function(){return this.aContent}},methods:h(h({},Object(c.c)(["setPageTitle","setDefaultPageTitle"])),{},{expandAll:function(){}}),head:function(){var t="Graphs";return this.setPageTitle(t),{title:t}},beforeDestroy:function(){this.setDefaultPageTitle()}},m=n(30),_=n(36),w=n.n(_),x=n(257),O=n(363),y=n(23),V=n(381),k=n(362),T=n(405),j=n(406),P=n(407),C=n(408),S=n(91),D=n(150),E=n(403),I=n(174),$=n.n(I),A=n(100),component=Object(m.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[t._e(),t._v(" "),t._e(),t._v(" "),t._l(t.graphItems,(function(e){return n("v-row",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],key:e.chartTitle},[n("v-col",[n("div",[t._v(t._s(e.chartTitle))]),t._v(" "),n("v-expansion-panels",{attrs:{focusable:"",multiplessss:""}},t._l(e.aOut,(function(e,i){return n("v-expansion-panel",{key:i},[n("v-expansion-panel-header",[t._v("\n            "+t._s(e.title)+"\n          ")]),t._v(" "),n("v-expansion-panel-content",t._l(e.imgURLs,(function(r){return n("v-card",{key:r},[n("v-img",{attrs:{"max-height":t.breakpointHeight,src:r,contain:"",width:"auto"}}),t._v(" "),e.notes?n("v-card-subtitle",[t._v("\n                "+t._s(e.notes)+"\n              ")]):t._e()],1)})),1)],1)})),1)],1),t._v(" "),t._l(t.json,(function(e){return t._e()})),t._v(" "),t._l(t.graphItems,(function(section){return t._e()}))],2)}))],2)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VBtn:x.a,VCard:O.a,VCardSubtitle:y.a,VCol:V.a,VContainer:k.a,VExpansionPanel:T.a,VExpansionPanelContent:j.a,VExpansionPanelHeader:P.a,VExpansionPanels:C.a,VFabTransition:S.b,VImg:D.a,VRow:E.a}),$()(component,{Scroll:A.b})},77:function(t,e,n){"use strict";var r={layout:"empty",props:{error:{type:Object,default:null}},data:function(){return{pageNotFound:"404 Not Found",otherError:"An error occurred"}},head:function(){return{title:404===this.error.statusCode?this.pageNotFound:this.otherError}}},o=(n(295),n(30)),c=n(36),l=n.n(c),v=n(349),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[404===t.error.statusCode?n("h1",[t._v("\n    "+t._s(t.pageNotFound)+"\n  ")]):n("h1",[t._v("\n    "+t._s(t.otherError)+"\n  ")]),t._v(" "),n("NuxtLink",{attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)}),[],!1,null,"bfedb7fe",null);e.a=component.exports;l()(component,{VApp:v.a})}}]);