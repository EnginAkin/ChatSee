<template>
  <div class="card p-4 " style="max-width:600px;margin:auto; box-shadow:9px 14px #888888;">
    <div style="text-align:center"><h3>  {{$t('loginPageEnter')}}</h3></div>
    <span class="errorClass">{{error}}</span>
    <div class="wrapper" style="text-align: left">
      <div id="formContent">
        <InputTandem
          label="Email"
          id="email"
          type="email"
         :value="email" @my-data= "email = $event"
        />
         <InputTandem
          :label="$t('password')"
          id="password"
          type="password"
         :value="password" @my-data= "password = $event"
        />
       
        <div class="mb-3 form-check" >
          <input type="checkbox" class="form-check-input" id="exampleCheck1" />
          <label class="form-check-label" for="exampleCheck1"
            >{{$t('rememberMe')}}</label
          >
        </div>
        <button class="btn btn-primary" @click="login">{{$t('Login')}}</button>
        <hr/>
        {{$t('haveAccount')}} 
        <hr>
         <router-link class="btn btn-outline-success"  to="/signup"
              >{{$t('signUp')}}</router-link
            >
      </div>
    </div>
  </div>
</template>
<script>
import router from '@/router';

export default {
  name: "Login",
  data() {
    return {
      email: null,
      password:null,
      error:null,
    };
  },
  methods: {
    login() {
      this.error=null;
      this.$http.request("post","api/v1/login",{
        email:this.email,
        password:this.password
      }).then(response=>{
        console.log(response);
        localStorage.setItem("user",JSON.stringify(response.data.elements[0]));
        localStorage.setItem("token",response.data.token);
        localStorage.setItem("id",response.data.elements[0].id);
        localStorage.setItem("isLoggedIn",true);
        this.$auth.loggedIn(response.data.elements[0])
        router.push("about");
      }).catch(error=>{
        console.log("Hatalı kullanıcı adı veya şifre ...")
        this.error="Hatalı Kullanıcı Adı Veya Şifre";
        console.log(error);
      })
    },
  },
};
</script>
<style scoped>
.errorClass{
    background-color: #7b2828;
    color: #fff;
    width: 230px;
    border-radius: 5px;
    text-align: center;
    margin: auto;
animation: blinker 1.5s linear infinite;

      font-weight: bold;
      font-family: sans-serif;
}
 @keyframes blinker {  
      50% { opacity: 0; }
      }
</style>
