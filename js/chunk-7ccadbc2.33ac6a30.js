(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7ccadbc2"],{"040b":function(t,e,a){"use strict";var s=a("7424");e["a"]={apply:function(t){return console.log(t),Object(s["a"])().post("passport",t)},getAll:function(){return Object(s["a"])().get("passport")}}},"0e8f":function(t,e,a){"use strict";a("20f6");var s=a("e8f2");e["a"]=Object(s["a"])("flex")},"615b":function(t,e,a){},"8adc":function(t,e,a){},"8ce9":function(t,e,a){},a6e7:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"dashboard"},[a("h3",{staticClass:"subheading grey--text"},[t._v("Xác thực")]),a("v-container",{staticClass:"my-5",staticStyle:{"max-width":"900px"}},t._l(t.passports,(function(e){return a("v-card",{key:e.title,attrs:{flat:""}},[a("v-layout",{class:"pa-3 passport "+e.tinhtrang,attrs:{row:"",wrap:""}},[a("v-flex",{attrs:{xs12:"",md6:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Họ tên")]),a("div",[t._v(t._s(e.hoten))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("CMND")]),a("div",[t._v(t._s(e.cmnd))])]),a("v-flex",{attrs:{xs6:"",sm4:"",md2:""}},[a("div",{staticClass:"caption grey--text"},[t._v("Giới tính")]),a("div",[t._v(t._s(e.gioitinh))])]),a("v-flex",{attrs:{xs2:"",sm4:"",md2:""}},[a("div",{staticClass:"right"},[a("v-chip",{class:e.tinhtrang+" white--text my-2 caption",attrs:{small:""}},[t._v(t._s(e.tinhtrang))])],1)])],1),a("v-divider")],1)})),1)],1)},i=[],n=(a("96cf"),a("1da1")),r=a("040b"),c={data:function(){return{passports:{}}},mounted:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,r["a"].getAll();case 2:t.passports=e.sent.data,console.log(t.passports);case 4:case"end":return e.stop()}}),e)})))()}},o=c,l=(a("badc"),a("2877")),h=a("6544"),d=a.n(h),u=a("b0af"),p=a("cc20"),v=a("a523"),f=a("ce7e"),g=a("0e8f"),b=a("a722"),m=Object(l["a"])(o,s,i,!1,null,null,null);e["default"]=m.exports;d()(m,{VCard:u["a"],VChip:p["a"],VContainer:v["a"],VDivider:f["a"],VFlex:g["a"],VLayout:b["a"]})},a722:function(t,e,a){"use strict";a("20f6");var s=a("e8f2");e["a"]=Object(s["a"])("layout")},b0af:function(t,e,a){"use strict";a("0481"),a("4069"),a("a9e3");var s=a("5530"),i=(a("615b"),a("10d2")),n=a("297c"),r=a("1c87"),c=a("58df");e["a"]=Object(c["a"])(n["a"],r["a"],i["a"]).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},outlined:Boolean,raised:Boolean,shaped:Boolean},computed:{classes:function(){return Object(s["a"])({"v-card":!0},r["a"].options.computed.classes.call(this),{"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--outlined":this.outlined,"v-card--raised":this.raised,"v-card--shaped":this.shaped},i["a"].options.computed.classes.call(this))},styles:function(){var t=Object(s["a"])({},i["a"].options.computed.styles.call(this));return this.img&&(t.background='url("'.concat(this.img,'") center center / cover no-repeat')),t}},methods:{genProgress:function(){var t=n["a"].options.methods.genProgress.call(this);return t?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[t]):null}},render:function(t){var e=this.generateRouteLink(),a=e.tag,s=e.data;return s.style=this.styles,this.isClickable&&(s.attrs=s.attrs||{},s.attrs.tabindex=0),t(a,this.setBackgroundColor(this.color,s),[this.genProgress(),this.$slots.default])}})},badc:function(t,e,a){"use strict";var s=a("ccc7"),i=a.n(s);i.a},cc20:function(t,e,a){"use strict";a("4de4"),a("4160");var s=a("3835"),i=a("5530"),n=(a("8adc"),a("58df")),r=a("0789"),c=a("9d26"),o=a("a9ad"),l=a("4e82"),h=a("7560"),d=a("f2e7"),u=a("1c87"),p=a("af2b"),v=a("d9bd");e["a"]=Object(n["a"])(o["a"],p["a"],u["a"],h["a"],Object(l["a"])("chipGroup"),Object(d["b"])("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default:function(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:function(){return{proxyClass:"v-chip--active"}},computed:{classes:function(){return Object(i["a"])({"v-chip":!0},u["a"].options.computed.classes.call(this),{"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose},this.themeClasses,{},this.sizeableClasses,{},this.groupClasses)},hasClose:function(){return Boolean(this.close)},isClickable:function(){return Boolean(u["a"].options.computed.isClickable.call(this)||this.chipGroup)}},created:function(){var t=this,e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((function(e){var a=Object(s["a"])(e,2),i=a[0],n=a[1];t.$attrs.hasOwnProperty(i)&&Object(v["a"])(i,n,t)}))},methods:{click:function(t){this.$emit("click",t),this.chipGroup&&this.toggle()},genFilter:function(){var t=[];return this.isActive&&t.push(this.$createElement(c["a"],{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(r["b"],t)},genClose:function(){var t=this;return this.$createElement(c["a"],{staticClass:"v-chip__close",props:{right:!0,size:18},on:{click:function(e){e.stopPropagation(),e.preventDefault(),t.$emit("click:close"),t.$emit("update:active",!1)}}},this.closeIcon)},genContent:function(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render:function(t){var e=[this.genContent()],a=this.generateRouteLink(),s=a.tag,n=a.data;n.attrs=Object(i["a"])({},n.attrs,{draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:n.attrs.tabindex}),n.directives.push({name:"show",value:this.active}),n=this.setBackgroundColor(this.color,n);var r=this.textColor||this.outlined&&this.color;return t(s,this.setTextColor(r,n),e)}})},ccc7:function(t,e,a){},ce7e:function(t,e,a){"use strict";var s=a("5530"),i=(a("8ce9"),a("7560"));e["a"]=i["a"].extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render:function(t){var e;return this.$attrs.role&&"separator"!==this.$attrs.role||(e=this.vertical?"vertical":"horizontal"),t("hr",{class:Object(s["a"])({"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical},this.themeClasses),attrs:Object(s["a"])({role:"separator","aria-orientation":e},this.$attrs),on:this.$listeners})}})}}]);
//# sourceMappingURL=chunk-7ccadbc2.33ac6a30.js.map