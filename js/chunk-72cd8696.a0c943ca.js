(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-72cd8696"],{"97fc":function(t,a,e){"use strict";var s=e("aebb"),i=e.n(s);i.a},aebb:function(t,a,e){},badb:function(t,a,e){"use strict";var s=e("dc37"),i=e.n(s);i.a},d784:function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("header",{staticClass:"m-header is-fixed"},[e("div",{staticClass:"m-header-button is-left"},[t._t("left")],2),e("h1",{staticClass:"m-header-title",domProps:{textContent:t._s(t.title)}}),e("div",{staticClass:"m-header-button is-right"},[t._t("right")],2)])},i=[],n={props:{title:{type:String,default:""}}},d=n,r=(e("97fc"),e("2877")),o=Object(r["a"])(d,s,i,!1,null,"48061a4a",null);a["a"]=o.exports},dc37:function(t,a,e){},eb41:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading",value:t.isLoading,expression:"isLoading"}],staticClass:"main"},[e("m-header",{attrs:{title:"地址列表"}},[e("a",{attrs:{slot:"left",href:"javascript:;"},on:{click:t.goPrev},slot:"left"},[e("i",{staticClass:"el-icon-arrow-left"})])]),t.address_list.length?e("ul",{staticClass:"address_list"},t._l(t.address_list,function(a){return e("li",{key:a.gain_id},[e("div",{staticClass:"top"},[e("p",[e("span",[t._v(t._s(a.gain_name))]),e("span",[t._v(t._s(a.gain_phone))]),t.defau_address==a.gain_id?e("span",{staticClass:"defau_sign"},[t._v("默认")]):t._e()]),e("p",[t._v(t._s(a.gain_address+" "+a.gain_addrdetail))])]),e("div",{staticClass:"bottom"},[e("el-radio",{attrs:{label:a.gain_id},on:{change:function(e){return t.changeDefau(a.gain_id)}},model:{value:t.defau_address,callback:function(a){t.defau_address=a},expression:"defau_address"}},[t._v(t._s(t.defau_address==a.gain_id?"默认地址":"设为默认"))]),e("div",{staticClass:"right"},[e("p",[e("router-link",{attrs:{to:{name:"alter_address",query:{alter_type:1,gain_id:a.gain_id}}}},[e("i",{staticClass:"el-icon-edit-outline"}),e("span",[t._v("编辑")])])],1),e("p",{on:{click:function(e){return t.addrDelete(a.gain_id)}}},[e("i",{staticClass:"el-icon-delete"}),e("span",[t._v("删除")])])])],1)])}),0):t._e(),e("div",{staticClass:"address_tab"},[e("router-link",{attrs:{to:"/alter_address?alter_type=0"}},[t._v("添加新地址")])],1)],1)},i=[],n=e("2b0e"),d=e("d784"),r={components:{mHeader:d["a"]},data:function(){return{isLoading:!1,user_info:JSON.parse(localStorage.getItem("yice_user"))||null,defau_address:"",address_list:[]}},methods:{goPrev:function(){window.history.length>1?this.$router.back():this.$router.push("/")},addressInit:function(){var t=this;n["default"].axios.get("http://114.215.242.13:8010/api/yicemall/addressList",{params:{user_id:this.user_info.user_id}}).then(function(a){200==a.status&&a.data.length&&(t.address_list=a.data,t.address_list[0].gain_default?t.defau_address=t.address_list[0].gain_default:t.changeDefau(t.address_list[0].gain_id))}).catch(function(t){alert(t)})},addrDelete:function(t){var a=this;this.$weui.confirm("确定删除该收货地址吗？",function(){a.isLoading=!0;var e={alter_type:2,gain_id:t,user_id:a.user_info.user_id};n["default"].axios({url:"http://114.215.242.13:8010/api/yicemall/alterAddress",method:"post",data:e,transformRequest:function(t){var a=[];for(var e in t)a.push(encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return a.join("&")}}).then(function(t){200==t.status&&t.data.code&&(a.addressInit(),a.isLoading=!1)}).catch(function(t){alert(t)})})},changeDefau:function(t){var a=this;a.isLoading=!0;var e={gain_default:t,user_id:a.user_info.user_id};n["default"].axios({url:"http://114.215.242.13:8010/api/yicemall/defauAddress",method:"post",data:e,transformRequest:function(t){var a=[];for(var e in t)a.push(encodeURIComponent(e)+"="+encodeURIComponent(t[e]));return a.join("&")}}).then(function(t){200==t.status&&t.data.code&&(a.addressInit(),a.isLoading=!1)}).catch(function(t){alert(t)})}},mounted:function(){this.user_info?this.addressInit():this.$router.push("/login")}},o=r,l=(e("badb"),e("2877")),u=Object(l["a"])(o,s,i,!1,null,"65c3a080",null);a["default"]=u.exports}}]);