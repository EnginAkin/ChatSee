<template>
  <div class="card p-4 mx-auto" style="max-width:600px; box-shadow:9px 14px #888888;" >
    <div style="text-align:center"><h3>{{$t('signUpPageEnter')}}</h3> </div>
    <span class="errorClass"  id="errorClass1"  v-bind:style="{ 'background-color:green': successClass}">{{message}}</span>
    <div class="wrapper" style="text-align: left">
      <div id="formContent">
        <InputTandem
          :label="$t('Name')"
          id="name"
          :value="name"
          @my-data="name = $event"
        />
        <InputTandem
          :label="$t('surname')"
          id="surname"
          :value="surname"
          @my-data="surname = $event"
        />
        <InputTandem
          label="Email"
          id="email"
          type="email"
          :value="email"
          @my-data="email = $event"
        />
        <InputTandem
          :label="$t('password')"
          id="password"
          type="password"
          :value="password"
          @my-data="password = $event"
        />
        <InputTandem
          :label="$t('repeatPassword')"
          id="password2"
          type="password"
          :value="password2"
          @my-data="password2 = $event"
        />
        <div class="mb-3">
          <label for="language" class="form-label"> {{$t('selectMaintlng')}} </label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="selectedMainLanguage"
          >
            <option name="language" selected>
              {{$t('selectMaintlng')}} 
            </option>
            <option
              v-for="language in languages"
              :value="language.key"
              v-bind:key="language.key"
            >
              {{ language.value }}
            </option>
          </select>
             <label for="language" class="form-label">{{$t('selectlearntlng')}} </label>
          <select
            class="form-select"
            aria-label="Default select example"
            v-model="selectedLearnLanguage"
          >
            <option name="language" selected>
              {{$t('selectlearntlng')}}
            </option>
            <option
              v-for="language in languages"
              :value="language.key"
              v-bind:key="language.key"
            >
              {{ language.value }}
            </option>
          </select>
        </div>

        <button style="width: 100%" class="btn btn-primary" @click="signupUser">{{$t('Submit')}}</button>
      </div>
    </div>
  </div>
</template>
<script>
import router from '@/router';

export default {
  name: "Signup",

  data() {
    return {
      name:"",
      surname:"",
      password:null,
      email:"",
      password2:null,
      selectedMainLanguage:null,
      selectedLearnLanguage:null,
      message:null,
      successClass:false,
      languages: [
        {
          key: "TR",
          value: "Turkish",
        },
        {
          key: "FR",
          value: "French",
        },
        {
          key: "EN",
          value: "English",
        },
        {
          key: "DE",
          value: "Deutch",
        },
      ],
    };
  },
  methods: {
    signupUser() {
      this.error=null;
      var validation = this.validateUser();
      if (validation) {
        var user = {
          name:this.name,
          surname:this.surname,
          email:this.email,
          password:this.password,
          wantToLearnLanguage:this.selectedLearnLanguage,
          mainLanguage:this.selectedMainLanguage
        }
        console.log("user : ",user);
       this.$http.request("post","api/v1/users",user,true).then(response=>{
          console.log("signup result..." ,  response);
          this.message=response.data.message;
          if(response.data.message.includes("exist")){
            this.message=this.$t('useremailexistinsystem');
          }
          if(response.data.successfull){
            this.message=this.$t('signupSuccesfullMessage');
            this.successClass=true;
            document.getElementById("errorClass1").style.backgroundColor="green"
            setTimeout(() => {
            router.push("login");
            }, 10000);
          }
        }).catch(error=>{
          console.log("error :",error);
        });
      }

    },
    validateUser() {
      
      if (!this.email) {
        return false;
      }if(this.password!=this.password2){
        this.message="Şifreler Aynı Olmalıdır."
        return false;
      }
      return true;
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
animation: blinker 2s linear infinite;

      font-weight: bold;
      font-family: sans-serif;
}
 @keyframes blinker {  
      50% { opacity: 0; }
      }
</style>