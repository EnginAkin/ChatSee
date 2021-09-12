<template>
  <div class="row" style="text-align: center; margin: auto">
    <!-- <div class="row" style="text-align: center">
      <div class="col-5"></div>
      <div class="col-3" style="border: 1px solid black">
        <h4>YENİ BİR BİLDİRİMİNİZ VAR !!!!!</h4>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row">
      <div class="col-5"></div>
      <div class="col-3" style="border: 1px solid black">
        <h5 id="nameRequest"></h5>
      </div>
      <div class="col-3"></div>
    </div>
    <div class="row">
      <div class="col-5"></div>
      <div class="col-3">
        <div class="row">
          <div class="col-6" style="border: 1px solid black; padding: 0">
            <button class="btn btn-primary" style="width: 100%">Evet</button>
          </div>
          <div class="col-6" style="border: 1px solid black; padding: 0">
            <button class="btn btn-primary" style="width: 100%">Hayır</button>
          </div>
        </div>
      </div>
      <div class="col-3"></div>
    </div> -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      channel: null,
      hasRequest: false,
      friendInfo: "",
   
    };
  },
  methods: {
    setTimeoutForChat() {
      var self = this;
      var setintervalId = setInterval(function () {
        if (self.$auth.isLoggedIn) {
          self.$http
            .request("get", "api/v1/channel/", null, true)
            .then((res) => {
              if (res.data.successfull) {
                console.log("chat requeest : res : ", res);
                let temp = res.data.elements[0];
                if (temp[0]) {
                  self.channel = temp[0];
                  var tempuser = JSON.parse(localStorage.getItem("user"));

                  if (
                    temp[0].user2_accept == false &&
                    temp[0].user2_id == tempuser.id &&
                    temp[0].user1_id != null
                  )
                    if (!self.hasRequest) {
                      self.hasRequest = true;
                      self.friendInfo = self.$util
                        .getUserInfo()
                        .friends.find((e) => (e.id = self.channel.user1_id));
                      console.log("içerdeyim : " + self.friendInfo);

                  
                       let result = confirm(
                         self.friendInfo.name +
                           " " +
                           self.friendInfo.surname +
                           " seninle konuşmak istiyor. Konuşmaya katılmak istermisiniz?"
                       );
                       if (result == true) {
                         console.log("You pressed OK!");
                        clearInterval(setintervalId);
                         self.acceptRequest();
                       } else {
                         console.log("You pressed Cancel!");
                       }
                    }
                }
              }
            });
        }
      }, 2000);
    },
    acceptRequest() {
      this.goToChatWithFriend();
    },
    goToChatWithFriend() {
      this.$router.push({
        path: "/chat-panel",
        query: { data: this.friendInfo.id },
      });
    },
  },
  mounted() {
    this.setTimeoutForChat();
  },
};
</script>
<style scoped>
</style>