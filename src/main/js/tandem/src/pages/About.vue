<template>
  <div class="container">
    <div>
      <!-- Nav tabs -->
      <ul class="nav nav-tabs" role="tablist">
       
        <li role="presentation" class="nav-item">
          <label class="nav-link" @click="activeTab = 0"
            ><i class="bi bi-people"></i>{{$t('myfriendsTxt')}}</label
          >
        </li>
        <li role="presentation" class="nav-item">
          <label class="nav-link" @click="activeTab = 1">
            <i class="bi bi-person-plus"></i> {{$t('suggestionFriendsTxt')}}</label
          >
        </li>
        <li role="presentation" class="nav-item">
          <label class="nav-link" @click="activeTab = 2">
            <i class="bi bi-person-plus"></i>{{$t('aboutMeTxt')}}</label
          >
        </li>
          <li role="presentation" class="nav-item">
          <label class="nav-link" @click="activeTab = 3">
            <i class="bi bi-person-plus"></i>{{$t('editaboutMeTxt')}}</label
          >
        </li>
      </ul>

      <!-- Tab panes -->
      <div class="tab-content">
       
        <div
          role="tabpanel"
          class="tab-pane active"
          id="friend"
          v-if="activeTab == 0"
        >
          <AboutFriends :user="user" />
        </div>
        <div
          role="tabpanel"
          class="tab-pane active"
          id="suggestion"
          v-if="activeTab == 1"
        >
          <Suggestion :user="user" :refreshFriends="refreshFriends" />
        </div>
         <div
          role="tabpanel"
          class="tab-pane active"
          id="suggestion"
          v-if="activeTab == 2"
        >
          <AboutMe :user="user" />
        </div>
        <div
          role="tabpanel"
          class="tab-pane active"
          id="suggestion"
          v-if="activeTab == 3"
        >
          <EditAboutMe :user="user" />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import AboutFriends from "./AboutFriends";
import AboutMe from "./AboutMe";
import Suggestion from "./Suggestion";
import EditAboutMe from "./EditAboutMe";
export default {
  name: "About",
  data() {
    return {
      user: null,
      activeTab: 0,
    };
  },
  components: {
    AboutFriends,
    AboutMe,
    Suggestion,
    EditAboutMe
  },
  methods: {
    getUserInfoFromApi() {
      if(this.$util.getUserInfo().id!=null){
      this.user = this.$http
        .request(
          "get",
          "api/v1/users/" + this.$util.getUserInfo().id,
          null,
          true
        )
        .then((response) => {
          this.user = response.data.elements[0];
        });
        }
    },
    refreshFriends() {
      this.getUserInfoFromApi();
    },
  },
  mounted() {
     this.getUserInfoFromApi();
  },
  created() {
if (!this.$auth.isLoggedIn) {
      // kullanıcı giriş yapmamışşsa
      this.$router.push({
        path: "/AboutWebSite",
      });
    } 
  },
};
</script>
<style scoped>
.nav-item :hover
{
    background-color:#198754;
    color :whitesmoke;
    transition: background-color 1s;
    cursor: pointer;
}
</style>