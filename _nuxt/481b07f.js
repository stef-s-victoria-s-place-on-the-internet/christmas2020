(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{311:function(t,e,r){var content=r(315);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("62d6e664",content,!0,{sourceMap:!1})},313:function(t,e,r){var content=r(323);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("2d0742ad",content,!0,{sourceMap:!1})},314:function(t,e,r){"use strict";r(311)},315:function(t,e,r){(e=r(71)(!1)).push([t.i,'.logo[data-v-49e31973]{width:100%;height:0;position:-webkit-sticky;position:sticky;align-self:flex-start;top:2rem;font-size:3.25rem;font-family:"Nova-Regular",sans-serif;line-height:1em;padding-bottom:100%;border:1px solid;border-radius:50%;background:#fff;cursor:pointer;display:flex;align-items:center;justify-content:center}@media (max-width:767px){.logo[data-v-49e31973]{width:100%;height:auto;top:0;border:0;border-bottom:1px solid;border-radius:0;padding:1rem 0 .5rem}}@media (max-width:480px){.logo[data-v-49e31973]{font-size:3rem;padding:.5rem 0}}.logo .logo-o[data-v-49e31973]{width:50%;top:50%;position:absolute;transform:translateY(-50%)}@media (max-width:767px){.logo .logo-o[data-v-49e31973]{display:none}}@media (min-width:767px){.logo span[data-v-49e31973]{display:none}}',""]),t.exports=e},319:function(t,e,r){"use strict";var o={name:"LetterSVG"},n=r(41),c={name:"LogoCircle",components:{LetterSVG:Object(n.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("svg",{staticClass:"logo-o",staticStyle:{"enable-background":"new 0 0 250 295.7"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 250 295.7","xml:space":"preserve"}},[e("g",[e("path",{attrs:{d:"M243.7,50.8c2,1.7,3.5,4.1,4.7,7.2c1.1,3.1,1.7,5.8,1.7,8v141.3c0,2.3-0.6,4.9-1.7,8c-1.1,3.1-2.7,5.5-4.7,7.2l-66.8,66.8\n  \t\tc-1.7,1.7-4,3.2-7,4.4c-3,1.3-5.7,1.9-8.2,1.9H88.8c-2.5,0-5.4-0.6-8.5-1.9c-3.1-1.3-5.5-2.7-7.2-4.4L6.3,222.5\n  \t\tc-1.7-1.7-3.2-4.1-4.4-7.2c-1.3-3.1-1.9-5.8-1.9-8V66c0-2.3,0.6-4.9,1.9-8c1.3-3.1,2.7-5.5,4.4-7.2l44-44c2-2,4.4-3.6,7.4-4.9\n  \t\tC60.7,0.6,63.5,0,66,0h118c2.5,0,5.4,0.6,8.5,1.9c3.1,1.3,5.5,2.9,7.2,4.9L243.7,50.8z M227.6,49.1c0-3.1-0.8-6.2-2.3-9.3\n  \t\tc-1.6-3.1-3.6-5.9-6.1-8.5c-2.5-2.5-5.4-4.6-8.5-6.1c-3.1-1.5-6.2-2.3-9.3-2.3H49.1c-6.5,0-12.5,2.7-18,8.2\n  \t\tc-5.5,5.5-8.2,11.5-8.2,18v175.1c0,2.5,0.6,5.3,1.9,8.2c1.3,3,2.8,5.4,4.4,7.4l27.1,26.6c1.7,2,4.1,3.6,7.2,4.9\n  \t\tc3.1,1.3,5.8,1.9,8,1.9h107c2.5,0,5.3-0.6,8.2-1.9c3-1.3,5.4-2.9,7.4-4.9l26.6-26.6c2-2,3.6-4.4,4.9-7.4c1.3-3,1.9-5.7,1.9-8.2\n  \t\tV49.1z"}})])])}),[],!1,null,"5f49f322",null).exports}},d=(r(314),Object(n.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[e("LetterSVG"),this._v(" "),e("span",[this._v("oneacre.online")])],1)}),[],!1,null,"49e31973",null));e.a=d.exports},320:function(t,e,r){"use strict";var o={props:{product:{type:Object,required:!0}},methods:{addShopItem:function(t){this.$store.commit("addShopItem",this.product),this.$router.push({path:"/more/payment"})}}},n=(r(322),r(41)),component=Object(n.a)(o,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"shop-purchase"},[r("p",[t._v("Price")]),t._v(" "),r("p",{staticClass:"price"},[t._v("€"+t._s(t.product.price))]),t._v(" "),r("div",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.addShopItem(e)}}},[t._v("Purchase")])])}),[],!1,null,"9f88a802",null);e.a=component.exports},322:function(t,e,r){"use strict";r(313)},323:function(t,e,r){(e=r(71)(!1)).push([t.i,'.shop-purchase[data-v-9f88a802]{border-top:1px solid;padding-top:.75rem;margin-top:4rem;display:flex;justify-content:space-between;flex-wrap:wrap}@media (max-width:767px){.shop-purchase[data-v-9f88a802]{width:100%;position:fixed;left:50%;bottom:0;transform:translateX(-50%);padding:1rem 2rem 2rem;border-top:0;background:#fff}}@media (max-width:767px) and (max-width:480px){.shop-purchase[data-v-9f88a802]{padding:1rem 1rem 2rem}}@media (max-width:767px){.shop-purchase[data-v-9f88a802]:before{content:"";width:calc(100% - 4rem);height:1px;background:#1a1a1a;position:absolute;top:0}}@media (max-width:767px) and (max-width:480px){.shop-purchase[data-v-9f88a802]:before{width:calc(100% - 2rem)}}.shop-purchase p[data-v-9f88a802]{color:rgba(26,26,26,.4);font-size:1.375rem}.shop-purchase p.price[data-v-9f88a802]{color:#1a1a1a}.shop-purchase .button[data-v-9f88a802]{width:100%;padding:1rem 1.5rem .875rem;line-height:1em;text-transform:uppercase;color:#fff;background:#1a1a1a;letter-spacing:2px;border-radius:.375rem;margin-top:2rem;cursor:pointer;display:flex;align-items:center;justify-content:center}@media (max-width:767px){.shop-purchase .button[data-v-9f88a802]{margin-top:1.5rem}}@media (max-width:480px){.shop-purchase .button[data-v-9f88a802]{margin-top:1rem}}',""]),t.exports=e},350:function(t,e,r){var content=r(359);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("41d0aac8",content,!0,{sourceMap:!1})},358:function(t,e,r){"use strict";r(350)},359:function(t,e,r){(e=r(71)(!1)).push([t.i,'.shop-wrapper[data-v-88688786]{width:100%;max-width:1600px;padding:2rem 2rem 4rem;margin:0 auto;display:grid;grid-template-columns:15rem minmax(-webkit-min-content,80rem);grid-template-columns:15rem minmax(min-content,80rem);grid-gap:4rem;align-items:flex-start;justify-content:center}@media (max-width:1200px){.shop-wrapper[data-v-88688786]{grid-gap:3rem}}@media (max-width:992px){.shop-wrapper[data-v-88688786]{grid-template-columns:12.5rem 1fr}}@media (max-width:767px){.shop-wrapper[data-v-88688786]{grid-template-columns:1fr;padding:0 2rem 10rem}}@media (max-width:480px){.shop-wrapper[data-v-88688786]{padding:0 2rem 10rem}}.shop-wrapper .shop-side[data-v-88688786]{height:calc(100vh - 2rem);position:-webkit-sticky;position:sticky;display:flex;flex-direction:column;justify-content:space-between;top:2rem;padding:0 0 2rem}@media (max-width:767px){.shop-wrapper .shop-side[data-v-88688786]{top:0;height:auto}}.shop-wrapper .shop-side .shop-purchase[data-v-88688786]{border-top:1px solid;padding-top:.75rem;margin-top:4rem;display:flex;justify-content:space-between;flex-wrap:wrap}@media (max-width:767px){.shop-wrapper .shop-side .shop-purchase[data-v-88688786]{width:100%;position:fixed;left:50%;bottom:0;transform:translateX(-50%);padding:1rem 2rem 2rem;border-top:0;background:#fff}}@media (max-width:767px) and (max-width:480px){.shop-wrapper .shop-side .shop-purchase[data-v-88688786]{padding:1rem 1rem 2rem}}@media (max-width:767px){.shop-wrapper .shop-side .shop-purchase[data-v-88688786]:before{content:"";width:calc(100% - 4rem);height:1px;background:#1a1a1a;position:absolute;top:0}}@media (max-width:767px) and (max-width:480px){.shop-wrapper .shop-side .shop-purchase[data-v-88688786]:before{width:calc(100% - 2rem)}}.shop-wrapper .shop-side .shop-purchase p[data-v-88688786]{color:rgba(26,26,26,.4);font-size:1.375rem}.shop-wrapper .shop-side .shop-purchase p.price[data-v-88688786]{color:#1a1a1a}.shop-wrapper .shop-side .shop-purchase a[data-v-88688786]{width:100%;padding:1rem 1.5rem .875rem;line-height:1em;text-transform:uppercase;color:#fff;background:#1a1a1a;letter-spacing:2px;border-radius:.375rem;margin-top:2rem;display:flex;align-items:center;justify-content:center}@media (max-width:767px){.shop-wrapper .shop-side .shop-purchase a[data-v-88688786]{margin-top:1.5rem}}@media (max-width:480px){.shop-wrapper .shop-side .shop-purchase a[data-v-88688786]{margin-top:1rem}}.shop-wrapper .order-wrapper[data-v-88688786]{display:grid;grid-auto-rows:auto;grid-gap:2rem;border-top:1px solid}@media (max-width:767px){.shop-wrapper .order-wrapper[data-v-88688786]{border-top:0;padding-top:15vh;grid-gap:4rem}}',""]),t.exports=e},368:function(t,e,r){"use strict";var o=r(319),n=r(320),c={components:{LogoCircle:o.a,PurchaseButton:n.a},props:["product"]},d=(r(358),r(41)),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"shop-wrapper"},[e("div",{staticClass:"shop-side"},[e("LogoCircle"),this._v(" "),this.product?e("PurchaseButton",{attrs:{product:this.product}}):this._e()],1),this._v(" "),e("div",{staticClass:"order-wrapper"},[this._t("default")],2)])}),[],!1,null,"88688786",null);e.a=component.exports},370:function(t,e,r){var content=r(416);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("45f37b1c",content,!0,{sourceMap:!1})},372:function(t,e,r){var content=r(426);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("5e394f80",content,!0,{sourceMap:!1})},373:function(t,e,r){var content=r(428);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(72).default)("3b6d3f65",content,!0,{sourceMap:!1})},415:function(t,e,r){"use strict";r(370)},416:function(t,e,r){(e=r(71)(!1)).push([t.i,".header[data-v-d4352318]{grid-template-columns:1fr auto;grid-gap:1rem;padding:.5rem 0;border-bottom:1px solid #d9d9d9;font-size:1rem;line-height:1em;text-transform:uppercase;letter-spacing:2px}.header[data-v-d4352318],.header .profile[data-v-d4352318]{display:grid;align-items:center;gap:1rem}.header .profile[data-v-d4352318]{grid-template-columns:2.5rem 1fr;grid-gap:1rem}.header img[data-v-d4352318]{border-radius:100%;padding:.2rem;border:1px solid;width:100%}.header .button[data-v-d4352318]{color:rgba(26,26,26,.4);background:#fff;transition:color .125s;cursor:pointer}.header .button[data-v-d4352318]:hover{color:#1a1a1a}",""]),t.exports=e},425:function(t,e,r){"use strict";r(372)},426:function(t,e,r){(e=r(71)(!1)).push([t.i,".small[data-v-59b878ad]{display:grid;grid-template-columns:auto 1fr auto;grid-gap:.5rem;gap:.5rem}.customer-item[data-v-59b878ad]{display:grid;grid-auto-columns:auto;grid-gap:2rem;border:1px solid #d9d9d9;padding:1.5rem 1.5rem 2rem;border-radius:.5rem}.customer-item h4[data-v-59b878ad]{display:grid;grid-template-columns:1fr auto;margin:0;padding-bottom:2rem;font-size:1rem;line-height:1em;text-transform:uppercase;letter-spacing:2px}@media (max-width:480px){.customer-item h4[data-v-59b878ad]{padding-bottom:2.5rem}}.customer-item .customer-status[data-v-59b878ad]{width:200px}.customer-item .select-item[data-v-59b878ad]{display:inline-block;padding:0 .5rem;border-radius:.6rem;color:#fff;background:#d3d3d3}.customer-item .customer-info[data-v-59b878ad]{display:grid;grid-auto-rows:auto;grid-gap:.75rem;margin:0 0 2rem;padding:0;list-style:none}.customer-item .customer-info li[data-v-59b878ad]{display:grid;grid-template-columns:fit-content(1rem) 5fr;grid-gap:1rem;padding-bottom:.25rem;border-bottom:1px solid #d9d9d9}.customer-item .customer-info li span[data-v-59b878ad]:first-of-type{color:rgba(26,26,26,.4);white-space:nowrap;min-width:12rem}.table .table-content[data-v-59b878ad]{display:grid;grid-auto-rows:auto;grid-gap:1rem}.table .table-content .header.row[data-v-59b878ad]{font-size:1rem;line-height:1em;text-transform:uppercase;letter-spacing:2px;color:rgba(26,26,26,.3);border-bottom:1px solid #d9d9d9}.table .table-content .row[data-v-59b878ad]{padding-bottom:.75rem;border-bottom:1px solid #d9d9d9;display:grid;grid-template-columns:1fr 10rem 10rem;grid-gap:2rem}button[data-v-59b878ad]{font-size:1rem;line-height:1em;text-transform:uppercase;letter-spacing:2px;padding:.75rem 1rem;background:#1a1a1a;color:#fff;justify-self:flex-end;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;border-radius:.375rem;opacity:.2;transition:opacity .15s;cursor:pointer}button.active[data-v-59b878ad],button[data-v-59b878ad]:hover{opacity:1}.pricing[data-v-59b878ad]{border-top:1px solid;border-bottom:1px solid;padding:1rem 0 .75rem;transform:translateY(calc(-1rem - 1px))}.pricing p[data-v-59b878ad]{display:grid;grid-template-columns:1fr 10rem;grid-gap:2rem;line-height:1em;color:rgba(26,26,26,.5)}@media (max-width:767px){.pricing p[data-v-59b878ad]{grid-template-columns:1fr minmax(-webkit-min-content,6.5rem);grid-template-columns:1fr minmax(min-content,6.5rem)}}.pricing p.total[data-v-59b878ad]{color:#1a1a1a}.order-buttons[data-v-59b878ad]{display:grid;grid-template-columns:repeat(2,fit-content(1rem));grid-gap:1rem;padding-top:2rem}.order-buttons button[data-v-59b878ad]{white-space:nowrap}",""]),t.exports=e},427:function(t,e,r){"use strict";r(373)},428:function(t,e,r){(e=r(71)(!1)).push([t.i,'h1[data-v-6814793a]{font-size:6rem;font-family:"Nova-Regular",sans-serif;line-height:1em;padding-bottom:6rem;text-transform:lowercase;margin:0}@media (max-width:1200px){h1[data-v-6814793a]{font-size:5.5rem}}@media (max-width:992px){h1[data-v-6814793a]{font-size:5rem}}@media (max-width:767px){h1[data-v-6814793a]{padding-bottom:0}}@media (max-width:480px){h1[data-v-6814793a]{font-size:4rem}}.order-list[data-v-6814793a]{display:grid;grid-auto-columns:auto;grid-gap:6rem}button[data-v-6814793a]{font-size:1rem;line-height:1em;text-transform:uppercase;letter-spacing:2px;padding:.75rem 1rem;background:#1a1a1a;color:#fff;justify-self:flex-end;-webkit-appearance:none;-moz-appearance:none;appearance:none;border:none;border-radius:.375rem;opacity:1;transition:opacity .15s;cursor:pointer}button.active[data-v-6814793a],button[data-v-6814793a]:hover{opacity:.6}button+button[data-v-6814793a]{margin-left:.2rem}',""]),t.exports=e},518:function(t,e,r){"use strict";r.r(e);r(74),r(18),r(15),r(8),r(46);var o=r(42),n=(r(12),r(9),r(2)),c=r(32),d={data:function(){return{user:this.$store.state.auth.user}},methods:{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout("google");case 2:case"end":return e.stop()}}),e)})))()}}},m=(r(415),r(41)),l=Object(m.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"header"},[r("div",{staticClass:"profile"},[r("img",{attrs:{src:t.user.picture,alt:"user profile"}}),t._v(" "),r("div",{staticClass:"name"},[t._v("\n      "+t._s(t.user.name)+"\n    ")])]),t._v(" "),r("div",{staticClass:"logout"},[r("div",{staticClass:"button",on:{click:function(e){return e.preventDefault(),t.logout(e)}}},[t._v("Logout")])])])}),[],!1,null,"d4352318",null).exports,h=r(73),v=(r(417),r(371)),f=r.n(v),x={props:["index","customer","customers","statuses"],data:function(){return{toggle:!1}},filters:{currency:function(t){return Object(h.b)(t)},percentage:function(t){return Object(h.c)(t)}},methods:{stc:function(label){return f()(label)},toggleSize:function(){this.toggle=!this.toggle},getStatus:function(t){return t.status?t.status:c.has(t,["paid"])?t.paid?"paid":"in-process":"unknown"},updateStatus:function(t,e){var r=this;return Object(n.a)(regeneratorRuntime.mark((function o(){var n;return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,r.$axios.$patch("/shop/customers/".concat(t.id),{status:e.label});case 2:n=o.sent,r.$set(r.customers,r.index,n),r.$toast.success("Updated ".concat(t.name," status to ").concat(e.label)).goAway(1500);case 5:case"end":return o.stop()}}),o)})))()},generateInvoice:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return o=t.id,console.log("generateInvoice",o),"".concat(o,".pdf"),r.next=5,e.$axios.$get("/shop/customers/generate-invoice/".concat(o),{},{responseType:"blob"});case 5:r.sent,window.open("http://localhost:8080/api/v2/shop/customers/generate-invoice/".concat(o));case 7:case"end":return r.stop()}}),r)})))()},customerInfo:function(t){var e="";return e+="".concat(t.name,"\n"),e+="".concat(t.address,"\n"),e+="".concat(t.postalcode,"\n"),e+="".concat(t.country.name,"\n")}}};r(425);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var y={middleware:"auth",components:{Header:l,ListItem:Object(m.a)(x,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[t.toggle?t._e():r("div",{staticClass:"small"},[r("div",[r("div",{staticClass:"select-item",style:{backgroundColor:t.stc(t.getStatus(t.customer))}},[t._v("\n       "+t._s(t.getStatus(t.customer))+"\n      ")])]),t._v(" "),r("div",[r("span",[t._v("Name")]),r("span",[t._v(t._s(t.customer.name))])]),t._v(" "),r("button",{on:{click:t.toggleSize}},[t._v("toggle")])]),t._v(" "),t.toggle?r("div",{staticClass:"big"},[r("h4",[r("div",[r("span",[t._v("Order: #"+t._s(t.customer.invoicenr))]),t._v(" "),r("span",[t._v(t._s(t.customer.date))])]),t._v(" "),r("button",{on:{click:t.toggleSize}},[t._v("toggle")])]),t._v(" "),r("ul",{staticClass:"customer-info"},[r("li",[r("span",[t._v("Status")]),t._v(" "),r("span",[r("v-select",{staticClass:"customer-status",attrs:{value:t.getStatus(t.customer),options:t.statuses},on:{input:function(e){return t.updateStatus(t.customer,e)}},scopedSlots:t._u([{key:"option",fn:function(e){var label=e.label;return[r("div",{staticClass:"select-item",style:{backgroundColor:t.stc(label)}},[t._v(t._s(label))])]}},{key:"selected-option",fn:function(e){var label=e.label;return[r("div",{staticClass:"select-item",style:{backgroundColor:t.stc(label)}},[t._v(t._s(label))])]}}],null,!1,2228303373)})],1)]),t._v(" "),r("li",[r("span",[t._v("Name")]),r("span",[t._v(t._s(t.customer.name))])]),t._v(" "),r("li",[r("span",[t._v("Email")]),r("span",[t._v(t._s(t.customer.email))])]),t._v(" "),r("li",[r("span",[t._v("Address")]),r("span",[t._v(t._s(t.customer.address))])]),t._v(" "),t.customer.number?r("li",[r("span",[t._v("House Number")]),r("span",[t._v(t._s(t.customer.number))])]):t._e(),t._v(" "),r("li",[r("span",[t._v("Postal Code")]),r("span",[t._v(" "+t._s(t.customer.postalcode))])]),t._v(" "),r("li",[r("span",[t._v("Country")]),r("span",[t._v(t._s(t.customer.country.iso)+", "+t._s(t.customer.country.name))])]),t._v(" "),r("li",[r("span",[t._v("Paid")]),r("span",[t._v(t._s(t.customer.paid))])]),t._v(" "),r("li",[r("span",[t._v("Invoice Number")]),r("span",[t._v(t._s(t.customer.invoicenr))])])]),t._v(" "),r("div",{staticClass:"table"},[r("h4",[t._v("Products")]),t._v(" "),r("div",{staticClass:"table-content"},[r("div",{staticClass:"header row"},t._l(t.customer.products.cols,(function(col,e){return r("div",{key:e,staticClass:"cell"},[t._v("\n            "+t._s(col)+"\n          ")])})),0),t._v(" "),t._l(t.customer.products.rows,(function(e,o){return r("div",{key:o,staticClass:"row"},t._l(t.customer.products.cols,(function(col,o){return r("div",{key:o,staticClass:"cell"},[t._v("\n            "+t._s(e[col])+"\n          ")])})),0)})),t._v(" "),r("div",{staticClass:"pricing"},[r("p",{staticClass:"total"},[r("span",[t._v("Total")]),t._v(" "),r("span",{staticClass:"pricing-amount"},[t._v(t._s(t._f("currency")(t.customer.pricing.total)))])])])],2)]),t._v(" "),r("div",{staticClass:"order-buttons"},[r("button",{on:{click:function(e){return t.generateInvoice(t.customer)}}},[t._v("Generate Invoice")]),t._v(" "),r("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.customerInfo(t.customer),expression:"customerInfo(customer)"}]},[t._v("Copy customer")])])]):t._e()])}),[],!1,null,"59b878ad",null).exports,ShopWrapper:r(368).a},data:function(){return{}},asyncData:function(t){return Object(n.a)(regeneratorRuntime.mark((function e(){var r,o,n,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.$axios,t.error,t.query,e.prev=1,o=["all","paid","in-process","packaged","shipped","delivered"],e.next=5,r.$get("/shop/customers/paid");case 5:return n=e.sent,c=o.map((function(t){return{label:t,count:Object(h.a)(n,t)}})),e.abrupt("return",{statusOptions:o,customersCount:n.length,customers:n,currentStatus:"all",statuses:c});case 10:return e.prev=10,e.t0=e.catch(1),console.log(e.t0),e.abrupt("return",{customers:[]});case 14:case"end":return e.stop()}}),e,null,[[1,10]])})))()},computed:{customerEmails:function(){return this.customers.reduce((function(t,e){return t+"".concat(e.name,", ").concat(e.email,"\n")}),"")},GridCustomers:function(){return this.customers.map((function(t){t.products.map((function(t){return c.values(t)}));return _(_({},t),{},{products:{rows:t.products,cols:["name","quantity","price"]}})}))}},methods:{stc:function(label){return f()(label)},filterList:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var label,o;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return label=t.label,console.log("status",label),r.next=4,e.$axios.$get("/shop/customers/paid");case 4:if(o=r.sent,"all"!==label){r.next=9;break}return e.currentStatus=label,e.customersCount=o.length,r.abrupt("return",e.customers=o);case 9:e.customers=o.filter((function(t){return label===e.getStatus(t)})),e.currentStatus=label;case 11:case"end":return r.stop()}}),r)})))()},getStatus:function(t){return t.status?t.status:c.has(t,["paid"])?t.paid?"paid":"in-process":"unknown"}}},k=(r(427),Object(m.a)(y,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("ShopWrapper",[r("Header"),t._v(" "),r("h1",[t._v("Order History")]),t._v(" "),r("button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:t.customerEmails,expression:"customerEmails"}]},[t._v("Copy all customer emails")]),t._v(" "),r("div",{staticClass:"filters"},[r("h4",[t._v("Filters")]),t._v(" "),r("div",{staticClass:"buttons"},t._l(t.statuses,(function(e){return r("button",{key:e.label,class:t.currentStatus===e.label&&"active",style:{backgroundColor:t.stc(e.label)},on:{click:function(r){return t.filterList(e)}}},[t._v("\n        "+t._s(e.label)+" "+t._s(e.count)+"/"+t._s(t.customersCount)+"\n      ")])})),0)]),t._v(" "),t.GridCustomers?r("div",{staticClass:"order-list"},t._l(t.GridCustomers,(function(e,o){return r("ListItem",{key:e._id,staticClass:"customer-item",attrs:{index:o,statuses:t.statuses,customer:e,customers:t.customers}})})),1):t._e(),t._v(" "),0===t.GridCustomers.length?r("div",[r("h4",[t._v("no customers with this status")])]):t._e()],1)}),[],!1,null,"6814793a",null));e.default=k.exports}}]);