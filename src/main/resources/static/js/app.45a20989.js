(function(e){function t(t){for(var a,r,l=t[0],c=t[1],s=t[2],u=0,d=[];u<l.length;u++)r=l[u],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&d.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);b&&b(t);while(d.length)d.shift()();return i.push.apply(i,s||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var l=n[r];0!==o[l]&&(a=!1)}a&&(i.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function l(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-0c87d3a2":"5045e862","chunk-1cd9b4e8":"31de1190","chunk-22c4e8ae":"5aae596e","chunk-26c179d2":"341ab916","chunk-2d213dff":"93dcf4fa","chunk-ac261684":"846f0c74","chunk-b8269a0e":"d9e32db4"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-0c87d3a2":1,"chunk-1cd9b4e8":1,"chunk-22c4e8ae":1,"chunk-26c179d2":1,"chunk-ac261684":1,"chunk-b8269a0e":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0c87d3a2":"9506eff7","chunk-1cd9b4e8":"69fbc1bc","chunk-22c4e8ae":"13a2d92e","chunk-26c179d2":"8411b613","chunk-2d213dff":"31d6cfe0","chunk-ac261684":"b94b45fc","chunk-b8269a0e":"1b7f5b3f"}[e]+".css",o=c.p+a,i=document.getElementsByTagName("link"),l=0;l<i.length;l++){var s=i[l],u=s.getAttribute("data-href")||s.getAttribute("href");if("stylesheet"===s.rel&&(u===a||u===o))return t()}var d=document.getElementsByTagName("style");for(l=0;l<d.length;l++){s=d[l],u=s.getAttribute("data-href");if(u===a||u===o)return t()}var b=document.createElement("link");b.rel="stylesheet",b.type="text/css",b.onload=t,b.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],b.parentNode.removeChild(b),n(i)},b.href=o;var g=document.getElementsByTagName("head")[0];g.appendChild(b)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var s,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=l(e);var d=new Error;s=function(t){u.onerror=u.onload=null,clearTimeout(b);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",d.name="ChunkLoadError",d.type=a,d.request=r,n[1](d)}o[e]=void 0}};var b=setTimeout((function(){s({type:"timeout",target:u})}),12e4);u.onerror=u.onload=s,document.head.appendChild(u)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var d=0;d<s.length;d++)t(s[d]);var b=u;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},2512:function(e,t,n){"use strict";n("c132")},"2be1":function(e){e.exports=JSON.parse('{"home":"Heim","profile":"Mein Profil","Login":"Anmeldung","signUp":"Einloggen","Name":"Name","surname":"Nachname","logout":"Ausloggen","languageSupport":"Sprachunterstützung","comingSoon":"Kommt bald","loginPageEnter":"Loginseite","signUpPageEnter":"Anmeldeseite","rememberMe":"Schau mich an","password":"Passwort","repeatPassword":"Passwort wiederholen","haveAccount":"Wenn Sie kein Konto haben, können Sie sich anmelden","Submit":"einreichen","selectlearntlng":"Wählen Sie die Sprache aus, die Sie lernen möchten","selectMaintlng":"Wählen Sie Ihre Hauptsprache","signupSuccesfullMessage":"Registrierung erfolgreich","useremailexistinsystem":"Benutzer-E-Mail im System vorhanden.","myfriendsTxt":"Meine Freunde","suggestionFriendsTxt":"Vorschlag Freunde","aboutMeTxt":"Über mich","CreationDateTxt":"Erstellungsdatum","wanttolearnlang":"Sprache lernen wollen","myfriendListTxt":"Meine Freundesliste","suggestionfriendsTxt":"Vorschlag Freunde","editaboutMeTxt":"bearbeite meine Infos    ","ChangeSubmitforData":"Änderungen speichern    ","AddWord":"Wort zu meiner Liste hinzufügen  ","MyList":"Wortliste"}')},4034:function(e,t,n){},"41cb":function(e,t,n){"use strict";n("d3b7"),n("3ca3"),n("ddb0");var a=n("6c02"),r=[{path:"/about",name:"about",component:function(){return n.e("chunk-22c4e8ae").then(n.bind(null,"a1d1"))}},{path:"/aboutMe",name:"aboutMe",component:function(){return n.e("chunk-b8269a0e").then(n.bind(null,"636c"))}},{path:"/login",name:"login",component:function(){return n.e("chunk-26c179d2").then(n.bind(null,"013f"))}},{path:"/AboutWebSite",name:"AboutWebSite",component:function(){return n.e("chunk-2d213dff").then(n.bind(null,"af15"))}},{path:"/signup",name:"signup",component:function(){return n.e("chunk-ac261684").then(n.bind(null,"e422"))}},{path:"/chat-panel",name:"chat-panel",component:function(){return n.e("chunk-1cd9b4e8").then(n.bind(null,"90df"))}},{path:"/",name:"index",component:function(){return n.e("chunk-2d213dff").then(n.bind(null,"af15"))}},{path:"/WordList",name:"WordList",component:function(){return n.e("chunk-0c87d3a2").then(n.bind(null,"fd2b"))}}],o=Object(a["a"])({history:Object(a["b"])(),routes:r});t["a"]=o},"52eb":function(e){e.exports=JSON.parse('{"home":"Anasayfa","profile":"Profilim","signUp":"Kayıt Ol","Login":"Giriş Yap","Name":"İsim","surname":"Soyad","logout":"Çıkış Yap","languageSupport":"Dil Desteği","comingSoon":"Yakında Gelecek","loginPageEnter":"Giriş Yap ","signUpPageEnter":"Üye Ol Sayfası","rememberMe":"Beni Hatırla","password":"Şifre","repeatPassword":"Şifre Tekrarı","haveAccount":"Eğer Hesabın Yoksa , Kayıt Olabilirsiniz.","Submit":"Üye Ol","selectlearntlng":"Öğrenmek istediğin dili seç","selectMaintlng":"Anadilini Seç","signupSuccesfullMessage":"Kayıt Başarılı","useremailexistinsystem":"Bu mail adresi kullanılmış.","myfriendsTxt":"Arkadaşlarım","suggestionFriendsTxt":"Önerilen Arkadaşlar","aboutMeTxt":"Hakkımda","CreationDateTxt":"Oluşturulma Tarihi","wanttolearnlang":"Öğrenmek istediğin dil","myfriendListTxt":"Arkadaşlarımın Listesi","suggestionfriendsTxt":"Önerilen Arkadaşlar","editaboutMeTxt":"Bilgilerimi Düzenle","ChangeSubmitforData":"Değişiklikleri Kaydet","nextStep":"Sonraki Adım","passwordError":"Şifre Hatalı","AddWord":"Kelime Ekle","MyList":"Kelime Listesi","addwordTxt":"Kelime Ekle"}')},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d"),n("ab8b"),n("7b17");var a=n("7a23"),r={class:"mb-3"},o={for:"exampleInput",class:"form-label"};function i(e,t,n,i,l,c){return Object(a["t"])(),Object(a["e"])("div",r,[Object(a["i"])("label",o,Object(a["C"])(n.label),1),Object(a["I"])(Object(a["i"])("input",{type:n.type?n.type:"text",class:n.clazz?n.clazz:"form-control",id:n.id?n.id:"form-control","onUpdate:modelValue":t[1]||(t[1]=function(e){return l.inputValue=e}),onKeyup:t[2]||(t[2]=function(){return c.inputKeyup&&c.inputKeyup.apply(c,arguments)})},null,42,["type","id"]),[[a["E"],l.inputValue]])])}var l={name:"InputTandem",props:{label:String,type:String,id:String,clazz:String,value:String},data:function(){return{inputValue:this.value}},methods:{inputKeyup:function(){console.log("from child ",this.inputValue),this.$emit("my-data",this.inputValue)}}};l.render=i;var c=l,s=n("41cb"),u=Object(a["L"])("data-v-31f95150");Object(a["w"])("data-v-31f95150");var d={class:"container"},b={style:{}},g={class:"layout-main"};Object(a["u"])();var p=u((function(e,t,n,r,o,i){var l=Object(a["A"])("Menus"),c=Object(a["A"])("ChatRequest"),s=Object(a["A"])("router-view");return Object(a["t"])(),Object(a["e"])("div",null,[Object(a["i"])(l,{addWordcontent:e.addWordcontent,onMyData:t[1]||(t[1]=function(t){return e.addWordcontent=t})},null,8,["addWordcontent"]),Object(a["i"])(c),Object(a["i"])("div",d,[Object(a["i"])("div",b,[Object(a["i"])("div",g,[Object(a["i"])(s)])])])])})),m=Object(a["L"])("data-v-0e42f19f");Object(a["w"])("data-v-0e42f19f");var f={class:"row",style:{"text-align":"center",margin:"auto"}};Object(a["u"])();var h=m((function(e,t,n,r,o,i){return Object(a["t"])(),Object(a["e"])("div",f)})),O=(n("7db0"),n("b0c0"),{data:function(){return{channel:null,hasRequest:!1,friendInfo:""}},methods:{setTimeoutForChat:function(){var e=this,t=setInterval((function(){e.$auth.isLoggedIn&&e.$http.request("get","api/v1/channel/",null,!0).then((function(n){if(n.data.successfull){console.log("chat requeest : res : ",n);var a=n.data.elements[0];if(a[0]){e.channel=a[0];var r=JSON.parse(localStorage.getItem("user"));if(0==a[0].user2_accept&&a[0].user2_id==r.id&&null!=a[0].user1_id&&!e.hasRequest){e.hasRequest=!0,e.friendInfo=e.$util.getUserInfo().friends.find((function(t){return t.id=e.channel.user1_id})),console.log("içerdeyim : "+e.friendInfo);var o=confirm(e.friendInfo.name+" "+e.friendInfo.surname+" seninle konuşmak istiyor. Konuşmaya katılmak istermisiniz?");1==o?(console.log("You pressed OK!"),clearInterval(t),e.acceptRequest()):console.log("You pressed Cancel!")}}}}))}),2e3)},acceptRequest:function(){this.goToChatWithFriend()},goToChatWithFriend:function(){this.$router.push({path:"/chat-panel",query:{data:this.friendInfo.id}})}},mounted:function(){this.setTimeoutForChat()}});O.render=h,O.__scopeId="data-v-0e42f19f";var y=O,v=Object(a["L"])("data-v-fd412d52");Object(a["w"])("data-v-fd412d52");var j={class:"mb-5"},k={class:"navbar navbar-expand-lg navbar-light bg-light",style:{width:"100%"}},S={class:"container-fluid"},x=Object(a["i"])("a",{class:"navbar-brand",href:"# "},"CHATSEE",-1),w=Object(a["i"])("button",{class:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(a["i"])("span",{class:"navbar-toggler-icon"})],-1),T={class:"collapse navbar-collapse",id:"navbarSupportedContent"},I={class:"navbar-nav me-auto mb-2 mb-lg-0"},L={class:"nav-item"},C={class:"form-popup",id:"myForm1",style:{"margin-left":"30%","margin-top":"4%"}},A={class:"form-container"},E=Object(a["i"])("label",null,[Object(a["i"])("b",null,"Kelime")],-1),P=Object(a["i"])("label",null,[Object(a["i"])("b",null,"Anlamı")],-1),M={class:"form-popup translateform",id:"myForm2",style:{"margin-left":"30%","margin-top":"4%"}},F=Object(a["i"])("label",{for:"language-picker-select"},"choose which language to translate",-1),W=Object(a["i"])("br",null,null,-1),$={key:0},_=Object(a["i"])("br",null,null,-1),K=Object(a["i"])("button",{type:"submit",class:"btn btn-primary btn-block"}," Çevir Gelsin! ",-1),U={key:2,class:"nav-item"},q={class:"nav-item"},z={class:"nav-link disabled",href:"#",tabindex:"-1","aria-disabled":"true"},D={class:"navbar-nav me-5 mb-2 mb-lg-0"},N=Object(a["i"])("option",{value:"en"},"English",-1),B=Object(a["i"])("option",{value:"de"},"Deutch",-1),V=Object(a["i"])("option",{value:"tr"},"Turkish",-1),R={class:"d-flex"};Object(a["u"])();var G=v((function(e,t,n,r,o,i){var l=Object(a["A"])("router-link");return Object(a["t"])(),Object(a["e"])("div",j,[Object(a["i"])("nav",k,[Object(a["i"])("div",S,[x,w,Object(a["i"])("div",T,[Object(a["i"])("ul",I,[Object(a["i"])("li",L,[Object(a["i"])(l,{class:"nav-link","active-class":"active",to:"/about"},{default:v((function(){return[Object(a["h"])(Object(a["C"])(e.$t("home")),1)]})),_:1})]),e.$auth.isLoggedIn?(Object(a["t"])(),Object(a["e"])("li",{key:0,class:"nav-item nav-link words",onClick:t[1]||(t[1]=function(){return i.showaddWord&&i.showaddWord.apply(i,arguments)})},Object(a["C"])(e.$t("AddWord")),1)):Object(a["f"])("",!0),e.$auth.isLoggedIn?(Object(a["t"])(),Object(a["e"])("li",{key:1,class:"nav-item nav-link words",onClick:t[2]||(t[2]=function(){return i.translateWord&&i.translateWord.apply(i,arguments)})}," Translate ")):Object(a["f"])("",!0),Object(a["i"])("div",C,[Object(a["i"])("div",A,[Object(a["i"])("h1",null,Object(a["C"])(e.$t("addwordTxt")),1),Object(a["i"])("h3",null,Object(a["C"])(e.responseAddWord),1),E,Object(a["I"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":t[3]||(t[3]=function(t){return e.word=t}),placeholder:"Kelime Gir",required:""},null,512),[[a["G"],e.word]]),P,Object(a["I"])(Object(a["i"])("input",{type:"text","onUpdate:modelValue":t[4]||(t[4]=function(t){return e.mean=t}),placeholder:"Kelime Anlamı"},null,512),[[a["G"],e.mean]]),Object(a["i"])("button",{type:"submit",class:"btn",onClick:t[5]||(t[5]=function(){return i.addWord&&i.addWord.apply(i,arguments)})}," Kaydet "),Object(a["i"])("button",{type:"button",class:"btn cancel",onClick:t[6]||(t[6]=function(){return i.closeForm&&i.closeForm.apply(i,arguments)})}," Kapat ")])]),Object(a["i"])("div",M,[Object(a["i"])("form",{onSubmit:t[10]||(t[10]=Object(a["K"])((function(){return i.translateIt&&i.translateIt.apply(i,arguments)}),["prevent"])),class:"well"},[Object(a["I"])(Object(a["i"])("textarea",{"onUpdate:modelValue":t[7]||(t[7]=function(t){return e.searchText=t}),cols:"30",rows:"5",class:"form-control",placeholder:"Çevirmek istediğiniz kelime/cümle yazınız."},null,512),[[a["G"],e.searchText]]),F,Object(a["I"])(Object(a["i"])("select",{class:"form-select","aria-label":"Default select example","onUpdate:modelValue":t[8]||(t[8]=function(t){return e.translateLang=t})},[(Object(a["t"])(!0),Object(a["e"])(a["a"],null,Object(a["z"])(e.languages,(function(e){return Object(a["t"])(),Object(a["e"])("option",{value:e.key,key:e.key},Object(a["C"])(e.value),9,["value"])})),128))],512),[[a["F"],e.translateLang]]),W,e.translatedTextFromApi?(Object(a["t"])(),Object(a["e"])("h4",$," Mean : "+Object(a["C"])(e.translatedTextFromApi),1)):Object(a["f"])("",!0),_,K,Object(a["i"])("button",{onClick:t[9]||(t[9]=function(){return i.closeTranslateForm&&i.closeTranslateForm.apply(i,arguments)}),style:{display:"block","margin-top":"5%"},class:"btn btn-primary btn-block"}," Kapat ")],32)]),e.$auth.isLoggedIn?(Object(a["t"])(),Object(a["e"])("li",U,[Object(a["i"])(l,{class:"nav-link","active-class":"active",to:"/WordList"},{default:v((function(){return[Object(a["h"])(Object(a["C"])(e.$t("MyList")),1)]})),_:1})])):Object(a["f"])("",!0),Object(a["i"])("li",q,[Object(a["i"])("a",z,Object(a["C"])(e.$t("comingSoon")),1)])]),Object(a["i"])("ul",D,[Object(a["i"])("li",null,[Object(a["I"])(Object(a["i"])("select",{class:"form-select","onUpdate:modelValue":t[11]||(t[11]=function(t){return e.lang=t}),onChange:t[12]||(t[12]=function(e){return i.handleChangeLanguage(e)})},[N,B,V],544),[[a["F"],e.lang]])])]),Object(a["i"])("form",R,[e.$auth.isLoggedIn?(Object(a["t"])(),Object(a["e"])(l,{key:0,class:"btn btn-outline-success",to:"/login",onClick:i.logout},{default:v((function(){return[Object(a["h"])(Object(a["C"])(e.$t("logout")),1)]})),_:1},8,["onClick"])):(Object(a["t"])(),Object(a["e"])(l,{key:1,class:"btn btn-outline-success",to:"/login"},{default:v((function(){return[Object(a["h"])(Object(a["C"])(e.$t("Login")),1)]})),_:1})),e.$auth.isLoggedIn?(Object(a["t"])(),Object(a["e"])(l,{key:2,class:"btn btn-outline-success",to:"/account"},{default:v((function(){return[Object(a["h"])(Object(a["C"])(e.$auth.user.name+"\t"+e.$auth.user.surname),1)]})),_:1})):(Object(a["t"])(),Object(a["e"])(l,{key:3,class:"btn btn-outline-success",to:"/signup"},{default:v((function(){return[Object(a["h"])(Object(a["C"])(e.$t("signUp")),1)]})),_:1}))])])])])])})),H=n("1da1"),Y=(n("96cf"),n("bc3a")),J=n.n(Y),Q={name:"xx",data:function(){var e=localStorage.getItem("lang")||"en";return{word:null,lang:e,mean:null,translateTo:"en",responseAddWord:"",translatedText:null,translateLang:null,searchText:"",translatedTextFromApi:null,languages:[{key:"tr",value:"Turkish"},{key:"fr",value:"French"},{key:"en",value:"English"},{key:"de",value:"Deutch"}]}},methods:{translateIt:function(){var e=this;return Object(H["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return n={method:"GET",url:"https://language-translation.p.rapidapi.com/translateLanguage/translate",params:{text:e.searchText,type:"plain",target:e.translateLang},headers:{"x-rapidapi-key":"e70f986ad3msh55defb5055665edp143552jsn82f13d371ab5","x-rapidapi-host":"language-translation.p.rapidapi.com"}},t.next=3,J.a.request(n);case 3:a=t.sent,console.log("response : ",a),console.log("response.data.translatedText : ",a.data.translatedText),e.translatedTextFromApi=a.data.translatedText;case 7:case"end":return t.stop()}}),t)})))()},closeForm:function(){document.getElementById("myForm1").style.display="none"},closeTranslateForm:function(){document.getElementById("myForm2").style.display="none"},translateWord:function(){"block"==document.getElementById("myForm1").style.display&&(document.getElementById("myForm1").style.display="none"),document.getElementById("myForm2").style.display="block"},showaddWord:function(){"block"==document.getElementById("myForm2").style.display&&(document.getElementById("myForm2").style.display="none"),document.getElementById("myForm1").style.display="block"},logout:function(){var e=this;this.$http.request("post","api/v1/logout",null,!0).then((function(t){console.log("işlem başarılı",t.message),e.$util.loggedOut(),e.$auth.loggedOut()}))},handleChangeLanguage:function(e){localStorage.setItem("lang",e.target.value),window.location.reload()},addWord:function(){var e=this,t={word:this.word,means:this.mean};console.log("words : ",t),this.$http.request("post","api/v1/addWord",t,!0).then((function(t){console.log("response word : ",t),e.responseAddWord=t.data.message,e.mean="",e.word="",window.reload()}))}}};n("2512");Q.render=G,Q.__scopeId="data-v-fd412d52";var X=Q,Z={name:"App",components:{Menus:X,ChatRequest:y}};n("a1bb");Z.render=p,Z.__scopeId="data-v-31f95150";var ee=Z,te=n("2106"),ne=n.n(te),ae=n("d4ec"),re=n("bee2"),oe=function(){function e(){Object(ae["a"])(this,e)}return Object(re["a"])(e,null,[{key:"requestPrivate",value:function(e,t,n,a){switch(e.toUpperCase()){case"GET":return ie(a).get(t,n);case"POST":return ie(a).post(t,n);case"PUT":return ie(a).put(t,n);case"DELETE":return ie(a).delete(t,n);default:console.log("hatali type...")}}},{key:"request",value:function(t,n,a,r){return e.requestPrivate(t,n,a,r).then((function(e){return e.successfull,console.log(e.message),e}))}}]),e}();function ie(e){return e&&localStorage.getItem("token")&&(J.a.defaults.headers["Authorization"]=localStorage.getItem("token")),J.a}var le=function(){function e(){Object(ae["a"])(this,e)}return Object(re["a"])(e,null,[{key:"isLoggedIn",value:function(){return"true"==localStorage.getItem("isLoggedIn")}},{key:"getUserInfo",value:function(){return JSON.parse(localStorage.getItem("user"))}},{key:"loggedOut",value:function(){localStorage.setItem("user",null),localStorage.setItem("isLoggedIn",!1)}}]),e}(),ce=n("47e2"),se=n("6a6a"),ue=n("2be1"),de=n("52eb"),be={en:se,tr:de,de:ue},ge=Object(ce["a"])({locale:localStorage.getItem("lang")||"en",messages:be,fallbackLocale:localStorage.getItem("lang")||"en"}),pe=ge;s["a"].beforeEach((function(e,t,n){window.scrollTo(0,0),n()}));var me=Object(a["d"])(ee);me.use(s["a"]),me.use(pe),me.use(ne.a,J.a),me.config.globalProperties.$http=oe,me.config.globalProperties.$util=le,me.config.globalProperties.$auth=Object(a["x"])({isLoggedIn:me.config.globalProperties.$util.isLoggedIn(),user:me.config.globalProperties.$util.getUserInfo(),loggedIn:function(e){me.config.globalProperties.$auth.isLoggedIn=!0,me.config.globalProperties.$auth.user=e},loggedOut:function(){me.config.globalProperties.$auth.isLoggedIn=!1,me.config.globalProperties.$auth.user=null}}),me.component("InputTandem",c),me.mount("#app")},"6a6a":function(e){e.exports=JSON.parse('{"home":"Home","profile":"My Profile","Login":"Login","signUp":"Sign Up","Name":"Name","surname":"Surname","logout":"Logout","languageSupport":"Language Support","comingSoon":"Coming Soon","loginPageEnter":"Login Page","signUpPageEnter":"Sign Up Page","rememberMe":"Check me out","password":"Password","repeatPassword":"Repeat Password","haveAccount":"if you dont have acccount , You can signup.","Submit":"Submit","selectlearntlng":"Select Language Which You Want to Learn","selectMaintlng":"Select your main Language","signupSuccesfullMessage":"Sign Up Successful","useremailexistinsystem":"User email exist in system.","myfriendsTxt":"My Friends","suggestionFriendsTxt":"Suggestion Friends","aboutMeTxt":"About Me","CreationDateTxt":"Creation Date","wanttolearnlang":"want to learn Language","myfriendListTxt":"My Friends List","suggestionfriendsTxt":"Suggestion Friends","editaboutMeTxt":"Edit My Info ","ChangeSubmitforData":"Save Changes","nextStep":"Next Step","passwordError":"Password Not Matched","AddWord":"Add word to My List","MyList":"Word List","addwordTxt":"Add Word"}')},a1bb:function(e,t,n){"use strict";n("4034")},c132:function(e,t,n){}});
//# sourceMappingURL=app.45a20989.js.map