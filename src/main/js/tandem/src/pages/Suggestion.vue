<template>
  <div>
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-12 col-sm-8 col-lg-6">
          <!-- Section Heading-->
          <div
            class="section_heading text-center wow fadeInUp"
            data-wow-delay="0.2s"
            style="
              visibility: visible;
              animation-delay: 0.2s;
              animation-name: fadeInUp;
            "
          >
            <h3> {{$t('suggestionfriendsTxt')}} </h3>
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-12 col-sm-6 col-lg-3"
          v-for="friend in friends"
          :key="friend.id"
        >
          <div
            class="single_advisor_profile wow fadeInUp"
            data-wow-delay="0.2s"
            style="
              visibility: visible;
              animation-delay: 0.2s;
              animation-name: fadeInUp;
            "
          >
            <div class="advisor_thumb">
              <i
                class="bi bi-person-bounding-box"
                style="font-size: 14.5rem; color: black"
              ></i>
              <div class="social-info">
                <a href="#" style="margin: 5px"><i class="bi bi-facebook"></i></a
                ><a href="#" style="margin: 5px"><i class="bi bi-twitter"></i></a
                ><a href="#" style="margin: 5px"><i class="bi bi-linkedin"></i></a>
              </div>
            </div>
            <div class="single_advisor_details_info">
              <h6>{{ friend.name + " " + friend.surname }}</h6>
              <p class="designation">
                {{ friend.wantToLearnLanguage }} &amp; {{ friend.mainLanguage }}
              </p>
              <button @click="addFriend(friend)"><i class=""></i>Ekle</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Suggestion",
  data() {
    return {
      friends: [],
    };
  },
  props:{
      refreshFriends:Function
  },
  methods: {
    getSuggestFriends() {
      this.$http
        .request("get", "api/v1/suggestions", null, true)
        .then((response) => {
          this.friends = response.data.elements[0];
          console.log(" friends :  ",this.friends);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    addFriend(friend) {
      this.$http
        .request("post", "api/v1/friends/"+friend.id, null, true)
        .then((response) => {
          console.log("added.....",response);
         // this.getSuggestFriends();
          this.friends=this.friends.filter(f=> f.id!=friend.id);
          this.refreshFriends();
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getSuggestFriends();
  },
};
</script>
