(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-22c4e8ae","chunk-b8269a0e"],{"187b":function(e,t,i){},"1dde":function(e,t,i){var a=i("d039"),n=i("b622"),c=i("2d00"),s=n("species");e.exports=function(e){return c>=51||!a((function(){var t=[],i=t.constructor={};return i[s]=function(){return{foo:1}},1!==t[e](Boolean).foo}))}},"29cc":function(e,t,i){"use strict";i("977e")},4199:function(e,t,i){"use strict";i("b763")},"4de4":function(e,t,i){"use strict";var a=i("23e7"),n=i("b727").filter,c=i("1dde"),s=c("filter");a({target:"Array",proto:!0,forced:!s},{filter:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}})},"636c":function(e,t,i){"use strict";i.r(t);i("b0c0");var a=i("7a23"),n=Object(a["L"])("data-v-50cc6c44");Object(a["w"])("data-v-50cc6c44");var c={class:"card mb-3 mt-3"},s={class:"row",style:{padding:"20px"}},l=Object(a["i"])("hr",null,null,-1),r={class:"col-6"},o={class:"row"},b={class:"col-3"},u=Object(a["h"])(" : "),d={class:"col-8"},j={class:"col-6"},O={class:"row"},v={class:"col-3"},f=Object(a["h"])(" : "),g={class:"col-8"},p={class:"col-6"},m={class:"row"},h=Object(a["i"])("div",{class:"col-3"},[Object(a["i"])("legend",null,"Email")],-1),y=Object(a["h"])(" : "),w={class:"col-8"},C={class:"col-6"},k={class:"row"},$={class:"col-3"},L=Object(a["h"])(" : "),T={class:"col-8"},F={class:"col-6"},I={class:"row"},x={class:"col-3"},_=Object(a["h"])(" : "),A={class:"col-8"};Object(a["u"])();var U=n((function(e,t,i,n,U,M){return Object(a["t"])(),Object(a["e"])("div",null,[Object(a["i"])("div",c,[Object(a["i"])("div",s,[Object(a["i"])("h4",null,Object(a["C"])(e.$t("profile")),1),l,Object(a["i"])("div",r,[Object(a["i"])("div",o,[Object(a["i"])("div",b,[Object(a["i"])("legend",null,Object(a["C"])(e.$t("Name")),1)]),u,Object(a["i"])("div",d,[Object(a["i"])("legend",null,Object(a["C"])(i.user.name),1)])])]),Object(a["i"])("div",j,[Object(a["i"])("div",O,[Object(a["i"])("div",v,[Object(a["i"])("legend",null,Object(a["C"])(e.$t("surname")),1)]),f,Object(a["i"])("div",g,[Object(a["i"])("legend",null,Object(a["C"])(i.user.surname),1)])])]),Object(a["i"])("div",p,[Object(a["i"])("div",m,[h,y,Object(a["i"])("div",w,[Object(a["i"])("legend",null,Object(a["C"])(i.user.email),1)])])]),Object(a["i"])("div",C,[Object(a["i"])("div",k,[Object(a["i"])("div",$,[Object(a["i"])("legend",null,Object(a["C"])(e.$t("CreationDateTxt")),1)]),L,Object(a["i"])("div",T,[Object(a["i"])("legend",null,Object(a["C"])(i.user.created),1)])])]),Object(a["i"])("div",F,[Object(a["i"])("div",I,[Object(a["i"])("div",x,[Object(a["i"])("legend",null,Object(a["C"])(e.$t("wanttolearnlang")),1)]),_,Object(a["i"])("div",A,[Object(a["i"])("legend",null,Object(a["C"])(i.user.wantToLearnLanguage),1)])])])])])])})),M={name:"AboutMe",props:{user:Object},methods:{userInfo:function(){console.log("abaout user : ",this.user)}},unmounted:function(){this.userInfo()}};i("f361");M.render=U,M.__scopeId="data-v-50cc6c44";t["default"]=M},"8f4f":function(e,t,i){"use strict";i("f50e")},"977e":function(e,t,i){},a1d1:function(e,t,i){"use strict";i.r(t);var a=i("7a23"),n=Object(a["L"])("data-v-47095d81");Object(a["w"])("data-v-47095d81");var c={class:"container"},s={class:"nav nav-tabs",role:"tablist"},l={role:"presentation",class:"nav-item"},r=Object(a["i"])("i",{class:"bi bi-people"},null,-1),o={role:"presentation",class:"nav-item"},b=Object(a["i"])("i",{class:"bi bi-person-plus"},null,-1),u={role:"presentation",class:"nav-item"},d=Object(a["i"])("i",{class:"bi bi-person-plus"},null,-1),j={role:"presentation",class:"nav-item"},O=Object(a["i"])("i",{class:"bi bi-person-plus"},null,-1),v={class:"tab-content"},f={key:0,role:"tabpanel",class:"tab-pane active",id:"friend"},g={key:1,role:"tabpanel",class:"tab-pane active",id:"suggestion"},p={key:2,role:"tabpanel",class:"tab-pane active",id:"suggestion"},m={key:3,role:"tabpanel",class:"tab-pane active",id:"suggestion"};Object(a["u"])();var h=n((function(e,t,i,n,h,y){var w=Object(a["A"])("AboutFriends"),C=Object(a["A"])("Suggestion"),k=Object(a["A"])("AboutMe"),$=Object(a["A"])("EditAboutMe");return Object(a["t"])(),Object(a["e"])("div",c,[Object(a["i"])("div",null,[Object(a["i"])("ul",s,[Object(a["i"])("li",l,[Object(a["i"])("label",{class:"nav-link",onClick:t[1]||(t[1]=function(e){return h.activeTab=0})},[r,Object(a["h"])(Object(a["C"])(e.$t("myfriendsTxt")),1)])]),Object(a["i"])("li",o,[Object(a["i"])("label",{class:"nav-link",onClick:t[2]||(t[2]=function(e){return h.activeTab=1})},[b,Object(a["h"])(" "+Object(a["C"])(e.$t("suggestionFriendsTxt")),1)])]),Object(a["i"])("li",u,[Object(a["i"])("label",{class:"nav-link",onClick:t[3]||(t[3]=function(e){return h.activeTab=2})},[d,Object(a["h"])(Object(a["C"])(e.$t("aboutMeTxt")),1)])]),Object(a["i"])("li",j,[Object(a["i"])("label",{class:"nav-link",onClick:t[4]||(t[4]=function(e){return h.activeTab=3})},[O,Object(a["h"])(Object(a["C"])(e.$t("editaboutMeTxt")),1)])])]),Object(a["i"])("div",v,[0==h.activeTab?(Object(a["t"])(),Object(a["e"])("div",f,[Object(a["i"])(w,{user:h.user},null,8,["user"])])):Object(a["f"])("",!0),1==h.activeTab?(Object(a["t"])(),Object(a["e"])("div",g,[Object(a["i"])(C,{user:h.user,refreshFriends:y.refreshFriends},null,8,["user","refreshFriends"])])):Object(a["f"])("",!0),2==h.activeTab?(Object(a["t"])(),Object(a["e"])("div",p,[Object(a["i"])(k,{user:h.user},null,8,["user"])])):Object(a["f"])("",!0),3==h.activeTab?(Object(a["t"])(),Object(a["e"])("div",m,[Object(a["i"])($,{user:h.user},null,8,["user"])])):Object(a["f"])("",!0)])])])})),y=(i("b0c0"),Object(a["L"])("data-v-33193e7c"));Object(a["w"])("data-v-33193e7c");var w={class:"container"},C={class:"row justify-content-center"},k={class:"col-12 col-sm-8 col-lg-6"},$={class:"section_heading text-center wow fadeInUp","data-wow-delay":"0.2s",style:{visibility:"visible","animation-delay":"0.2s","animation-name":"fadeInUp"}},L=Object(a["i"])("hr",null,null,-1),T={class:"row"},F={class:"single_advisor_profile wow fadeInUp","data-wow-delay":"0.2s",style:{visibility:"visible","animation-delay":"0.2s","animation-name":"fadeInUp"}},I=Object(a["g"])('<div class="advisor_thumb" data-v-33193e7c><i class="bi bi-person-bounding-box" style="font-size:14.5rem;color:black;" data-v-33193e7c></i><div class="social-info" data-v-33193e7c><a href="#" data-v-33193e7c><i class="bi bi-facebook" data-v-33193e7c></i></a><a href="#" data-v-33193e7c><i class="bi bi-twitter" data-v-33193e7c></i></a><a href="#" data-v-33193e7c><i class="bi bi-linkedin" data-v-33193e7c></i></a></div></div>',1),x={class:"single_advisor_details_info"},_=Object(a["i"])("i",{class:"bi bi-chat-dots"},null,-1),A={class:"designation"};Object(a["u"])();var U=y((function(e,t,i,n,c,s){return Object(a["t"])(),Object(a["e"])("div",null,[Object(a["i"])("div",w,[Object(a["i"])("div",C,[Object(a["i"])("div",k,[Object(a["i"])("div",$,[Object(a["i"])("h3",null,Object(a["C"])(e.$t("myfriendListTxt")),1),L])])]),Object(a["i"])("div",T,[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(i.user.friends,(function(e){return Object(a["t"])(),Object(a["e"])("div",{onClick:function(t){return s.goToChatWithFriend(e)},class:"col-12 col-sm-6 col-lg-3",key:e.id},[Object(a["i"])("div",F,[I,Object(a["i"])("div",x,[Object(a["i"])("h6",{onClick:function(t){return s.goToChatWithFriend(e)}},[Object(a["h"])(Object(a["C"])(e.name+" "+e.surname)+" ",1),_],8,["onClick"]),Object(a["i"])("p",A,Object(a["C"])(e.wantToLearnLanguage)+" & "+Object(a["C"])(e.mainLanguage),1)])])],8,["onClick"])})),128))])])])})),M={name:"AboutFriends",props:{user:Object},methods:{goToChatWithFriend:function(e){this.$router.push({path:"/chat-panel",query:{data:e.id}})}}};i("29cc");M.render=U,M.__scopeId="data-v-33193e7c";var D=M,S=i("636c"),E={class:"container"},q={class:"row justify-content-center"},z={class:"col-12 col-sm-8 col-lg-6"},N={class:"section_heading text-center wow fadeInUp","data-wow-delay":"0.2s",style:{visibility:"visible","animation-delay":"0.2s","animation-name":"fadeInUp"}},P={class:"row"},W={class:"single_advisor_profile wow fadeInUp","data-wow-delay":"0.2s",style:{visibility:"visible","animation-delay":"0.2s","animation-name":"fadeInUp"}},J=Object(a["g"])('<div class="advisor_thumb"><i class="bi bi-person-bounding-box" style="font-size:14.5rem;color:black;"></i><div class="social-info"><a href="#" style="margin:5px;"><i class="bi bi-facebook"></i></a><a href="#" style="margin:5px;"><i class="bi bi-twitter"></i></a><a href="#" style="margin:5px;"><i class="bi bi-linkedin"></i></a></div></div>',1),B={class:"single_advisor_details_info"},R={class:"designation"},V=Object(a["i"])("i",{class:""},null,-1),G=Object(a["h"])("Ekle");function H(e,t,i,n,c,s){return Object(a["t"])(),Object(a["e"])("div",null,[Object(a["i"])("div",E,[Object(a["i"])("div",q,[Object(a["i"])("div",z,[Object(a["i"])("div",N,[Object(a["i"])("h3",null,Object(a["C"])(e.$t("suggestionfriendsTxt")),1)])])]),Object(a["i"])("div",P,[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(c.friends,(function(e){return Object(a["t"])(),Object(a["e"])("div",{class:"col-12 col-sm-6 col-lg-3",key:e.id},[Object(a["i"])("div",W,[J,Object(a["i"])("div",B,[Object(a["i"])("h6",null,Object(a["C"])(e.name+" "+e.surname),1),Object(a["i"])("p",R,Object(a["C"])(e.wantToLearnLanguage)+" & "+Object(a["C"])(e.mainLanguage),1),Object(a["i"])("button",{onClick:function(t){return s.addFriend(e)}},[V,G],8,["onClick"])])])])})),128))])])])}i("4de4");var K={name:"Suggestion",data:function(){return{friends:[]}},props:{refreshFriends:Function},methods:{getSuggestFriends:function(){var e=this;this.$http.request("get","api/v1/suggestions",null,!0).then((function(t){e.friends=t.data.elements[0],console.log(" friends :  ",e.friends)})).catch((function(e){console.log(e)}))},addFriend:function(e){var t=this;this.$http.request("post","api/v1/friends/"+e.id,null,!0).then((function(i){console.log("added.....",i),t.friends=t.friends.filter((function(t){return t.id!=e.id})),t.refreshFriends()})).catch((function(e){console.log(e)}))}},mounted:function(){this.getSuggestFriends()}};K.render=H;var Q=K,X={key:0},Y={class:"errorClass"},Z={class:"wrapper",style:{"text-align":"left"}},ee={id:"formContent"},te={key:1,class:"card mb-3 mt-3"},ie={class:"row",style:{padding:"20px"}},ae={class:"wrapper",style:{"text-align":"left"}},ne={id:"formContent"},ce={class:"mb-3"},se={for:"language",class:"form-label"},le={name:"language",selected:""},re={for:"language",class:"form-label"},oe={name:"language",selected:""};function be(e,t,i,n,c,s){var l=Object(a["A"])("InputTandem");return Object(a["t"])(),Object(a["e"])("div",null,[1==c.currentStep?(Object(a["t"])(),Object(a["e"])("div",X,[Object(a["i"])("span",Y,Object(a["C"])(c.message),1),Object(a["i"])("div",Z,[Object(a["i"])("div",ee,[Object(a["i"])(l,{label:e.$t("password"),id:"password",type:"password",value:c.password,onMyData:t[1]||(t[1]=function(e){return c.password=e})},null,8,["label","value"]),Object(a["i"])("button",{onClick:t[2]||(t[2]=function(){return s.handlePassword&&s.handlePassword.apply(s,arguments)})},Object(a["C"])(e.$t("nextStep")),1)])])])):Object(a["f"])("",!0),2==c.currentStep?(Object(a["t"])(),Object(a["e"])("div",te,[Object(a["i"])("div",ie,[Object(a["i"])("div",ae,[Object(a["i"])("div",ne,[Object(a["i"])(l,{label:e.$t("Name"),id:"name",value:c.name,onMyData:t[3]||(t[3]=function(e){return c.name=e})},null,8,["label","value"]),Object(a["i"])(l,{label:e.$t("surname"),id:"surname",value:c.surname,onMyData:t[4]||(t[4]=function(e){return c.surname=e})},null,8,["label","value"]),Object(a["i"])(l,{label:"Email",id:"email",type:"email",value:c.email,onMyData:t[5]||(t[5]=function(e){return c.email=e})},null,8,["value"]),Object(a["i"])("div",ce,[Object(a["i"])("label",se,Object(a["C"])(e.$t("selectMaintlng")),1),Object(a["I"])(Object(a["i"])("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[6]||(t[6]=function(e){return c.selectedMainLanguage=e})},[Object(a["i"])("option",le,Object(a["C"])(e.$t("selectMaintlng")),1),(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(c.languages,(function(e){return Object(a["t"])(),Object(a["e"])("option",{value:e.key,key:e.key},Object(a["C"])(e.value),9,["value"])})),128))],512),[[a["F"],c.selectedMainLanguage]]),Object(a["i"])("label",re,Object(a["C"])(e.$t("selectlearntlng")),1),Object(a["I"])(Object(a["i"])("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[7]||(t[7]=function(e){return c.selectedLearnLanguage=e})},[Object(a["i"])("option",oe,Object(a["C"])(e.$t("selectlearntlng")),1),(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(c.languages,(function(e){return Object(a["t"])(),Object(a["e"])("option",{value:e.key,key:e.key},Object(a["C"])(e.value),9,["value"])})),128))],512),[[a["F"],c.selectedLearnLanguage]])]),Object(a["i"])("button",{class:"btn btn-primary",onClick:t[8]||(t[8]=function(){return s.saveChangeUserDetail&&s.saveChangeUserDetail.apply(s,arguments)})},Object(a["C"])(e.$t("ChangeSubmitforData")),1)])])])])):Object(a["f"])("",!0)])}var ue={props:{user:Object},data:function(){return{currentStep:1,name:this.user.name,surname:this.user.surname,password:null,email:this.user.email,selectedMainLanguage:null,selectedLearnLanguage:null,message:null,languages:[{key:"TR",value:"Turkish"},{key:"FR",value:"French"},{key:"EN",value:"English"},{key:"DE",value:"Deutch"}]}},methods:{handlePassword:function(){var e=this;this.$http.request("post","api/v1/handlePassword",this.password,!0).then((function(t){t.data.successfull?e.currentStep=2:(e.message=e.$t("passwordError"),e.password=null)}))},saveChangeUserDetail:function(){var e=this,t={id:localStorage.getItem("id"),name:this.name,surname:this.surname,email:this.email,wantToLearnLanguage:this.selectedLearnLanguage,mainLanguage:this.selectedMainLanguage};this.$http.request("post","api/v1/saveChangeUserDetail",t,!0).then((function(t){e.message="Bilgiler Değiştirildi",console.log("response ",t),localStorage.setItem("user",JSON.stringify(t.data.elements[0])),setTimeout((function(){location.reload()}),2e3)})).catch((function(e){console.log("error :",e)}))}},mounted:function(){}};i("8f4f");ue.render=be;var de=ue,je={name:"About",data:function(){return{user:null,activeTab:0}},components:{AboutFriends:D,AboutMe:S["default"],Suggestion:Q,EditAboutMe:de},methods:{getUserInfoFromApi:function(){var e=this;null!=this.$util.getUserInfo().id&&(this.user=this.$http.request("get","api/v1/users/"+this.$util.getUserInfo().id,null,!0).then((function(t){e.user=t.data.elements[0]})))},refreshFriends:function(){this.getUserInfoFromApi()}},mounted:function(){this.getUserInfoFromApi()},created:function(){this.$auth.isLoggedIn||this.$router.push({path:"/AboutWebSite"})}};i("4199");je.render=h,je.__scopeId="data-v-47095d81";t["default"]=je},b763:function(e,t,i){},f361:function(e,t,i){"use strict";i("187b")},f50e:function(e,t,i){}}]);
//# sourceMappingURL=chunk-22c4e8ae.5aae596e.js.map