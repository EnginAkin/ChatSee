<template>
  <div>
     <div v-if="currentStep==1">
        <span class="errorClass">{{message}}</span>
    <div class="wrapper" style="text-align: left">
      <div id="formContent">
         <InputTandem
          :label="$t('password')"
          id="password"
          type="password"
         :value="password" @my-data= "password = $event"
        />
         <button @click="handlePassword">{{$t('nextStep')}}</button>

      </div>
    </div>
    </div>
      <div class="card mb-3 mt-3"  v-if="currentStep==2">
            <div class="row" style="padding: 20px"> 
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

        <button class="btn btn-primary" @click="saveChangeUserDetail" >{{$t('ChangeSubmitforData')}}</button>
            </div>
      </div>

  </div>
  </div>
  </div>
</template>

<script>
export default {
    props: {
    user: Object,
  },
  data() {
    return {
      currentStep:1,
      name:this.user.name,
      surname:this.user.surname ,
      password:null,
      email:this.user.email,
      selectedMainLanguage:null,
      selectedLearnLanguage:null,
      message:null,
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
  methods:{
    handlePassword(){
       this.$http.request("post","api/v1/handlePassword",
         this.password
         ,true).then(response=>{
           if(response.data.successfull){
             this.currentStep=2;
           }else{
             this.message=this.$t('passwordError');
             this.password=null;
           }
      })
    },
    saveChangeUserDetail(){
      var user = {
          id:localStorage.getItem('id'),
          name:this.name,
          surname:this.surname,
          email:this.email,
          wantToLearnLanguage:this.selectedLearnLanguage,
          mainLanguage:this.selectedMainLanguage
        }
         this.$http.request("post","api/v1/saveChangeUserDetail",user,true).then(response=>{
          this.message="Bilgiler Değiştirildi";
         console.log("response ",response);
          localStorage.setItem("user",JSON.stringify(response.data.elements[0]));
          setTimeout(() =>{
            location.reload();
          },2000);
          
        }).catch(error=>{
          console.log("error :",error);
        });
    }
  },
  mounted(){

  }

}
</script>

<style>
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
</style>