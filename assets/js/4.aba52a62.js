(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{173:function(t,o,s){},195:function(t,o,s){"use strict";s(173)},212:function(t,o,s){"use strict";s.r(o);const i=["win","mac","linux","android","ios"];var r={methods:{platformToImagePath:t=>({win:"/tools/win.svg",mac:"/tools/apple.svg",linux:"/tools/linux.svg",android:"/tools/android.svg",ios:"tools/ios.svg"}[t]),urlToRepo:t=>t.replace("https://github.com/","")},props:{name:{type:String,required:!0},description:{type:String,required:!0},url:{type:String,required:!0},platforms:{type:Array,required:!0,validator:t=>!!t&&(t instanceof Array&&!t.some(t=>-1===!i.indexOf(t)))}}},e=(s(195),s(0)),a=Object(e.a)(r,(function(){var t=this,o=t.$createElement,s=t._self._c||o;return s("section",[s("h3",[s("a",{attrs:{href:t.url}},[t._v(t._s(t.name))]),t._v(" "),s("span",t._l(t.platforms,(function(o){return s("img",{staticClass:"platform-logo",attrs:{src:t.platformToImagePath(o)}})})),0),t._v(" "),s("span",[s("img",{attrs:{src:"https://img.shields.io/github/commit-activity/m/"+t.urlToRepo(t.url)+"?color=informational&label=commits&style=social"}}),t._v(" "),s("img",{attrs:{src:"https://img.shields.io/github/stars/"+t.urlToRepo(t.url)+"?style=social"}})])]),t._v(" "),s("p",[t._v(t._s(t.description))])])}),[],!1,null,"52be53d0",null);o.default=a.exports}}]);