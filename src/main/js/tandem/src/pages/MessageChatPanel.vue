<template>
  <div style="text-align: left">
    <div class="panel panel-default">
      <div class="card">
        <label style="margin: auto; padding: 10px 0px 10px 0">{{
          friend.name + " " + friend.surname
        }}</label>
        <label v-if="disabled">Aktifleşmesi bekleniyor...</label>
      </div>
      <div class="panel-body msg_container_base" style="height: 700px">
        <div v-for="msg in messages" :key="msg">
          <MessageSent v-if="msg.isSent" :message="msg" :me="user" />

          <MessageRecieved v-else :message="msg" :friend="friend" />
        </div>
      </div>
      <div class="panel-footer">
        <div class="input-group">
          <input
            id="btn-input"
            type="text"
            class="form-control input-sm chat_input"
            placeholder="Write your message here..."
            v-model="message"
            :disabled="disabled"
            v-on:keyup.enter="sendMessage"
          />
          <span class="input-group-btn">
            <button class="btn btn-primary" @click="sendMessage" id="btn-chat">
              Send
            </button>
          </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import MessageRecieved from "@/components/MessageRecieved";
import MessageSent from "@/components/MessageSent";
export default {
  components: {
    MessageRecieved,
    MessageSent,
  },
  data() {
    return {
      friend: null,
      connection: null,
      user: null,
      messages: [],
      message: null,
      channel: {
        id: null,
        user1_id: null,
        user2_id: null,
      },
      disabled: true,
    };
  },
  methods: {
    createRequestForChat(friendId) {
      this.$http
        .request("post", "api/v1/channels/" + friendId, null, true)
        .then((response) => {
          console.log(response);

          this.channel.id = response.data.elements[0];
          this.channel.user1_id = this.user.id;
          this.channel.user2_id = this.friend.id;
        });
    },
    getFriendInfo(id) {
      this.friend = this.user.friends.find((e) => e.id == id);
    },
    getUserInfoFromApi(friendId) {
      this.$http
        .request(
          "get",
          "api/v1/users/" + this.$util.getUserInfo().id,
          null,
          true
        )
        .then((response) => {
          this.user = response.data.elements[0];
          this.getFriendInfo(friendId);
          this.createRequestForChat(friendId);
        });
    },
    sendMessage() {
      //
      console.log("bu kullanıcı mesajıdır . ", this.message);
      this.messages.push({ isSent: true, message: this.message });
      this.connection.send(this.message);
      this.message = "";
    },

    checkRequestForChat() {
      let self = this;
      let myInterval = setInterval(function () {
        if (self.channel.id != null) {
          self.$http
            .request("get", "api/v1/channels/" + self.channel.id, null, true)
            .then((res) => {
              console.log(res);
              if (res.data.successfull) {
                clearInterval(myInterval);
                self.disabled = false;
                self.webSocketCreater();
              }
            });
        }
      }, 3000);
    },
    webSocketCreater() {
      console.log("Starting connection to WebSocket Server");
      let self = this;

      self.connection = new WebSocket("ws://localhost:4444");

      self.connection.onopen = function (event) {
        console.log(event);
        console.log("Successfully connected to the echo websocket server...");
      };

      let messageFirst =
        self.channel.id +
        "__-__" +
        self.channel.user1_id +
        "__-__" +
        self.channel.user2_id +
        "__-__" +
        localStorage.getItem("token");

      // Log errors
      this.connection.onerror = function (error) {
        console.log("WebSocket Error " + error);
      };

      // Log messages from the server
      this.connection.onmessage = function (e) {
        console.log("Server: " + e.data);
        if (e.data && e.data != "Ping") self.handleIncomeMessage(e.data);
      };
      setTimeout(function () {
        self.connection.send(messageFirst);
      }, 1000);
    },

    handleIncomeMessage(newMessage) {
      console.log(newMessage);
      this.messages.push({ isSent: false, message: newMessage });
    },
  },
  mounted() {
    var friendId = this.$router.currentRoute.value.query.data;
    console.log("chat panel ", friendId);
    this.getUserInfoFromApi(friendId);
    this.disabled = true;
    this.checkRequestForChat();
  },
  unmounted() {
    //1 channel yönetiminden sil rest apisi ile
    this.$http
      .request("delete", "api/v1/channels/" + this.channel.id, null, true)
      .then((res) => {
        console.log(res);
      });
    this.connection.send("CLOSED_ME_BYE");
  },
};
</script>
<style scoped>
body {
  height: 100%;
  position: fixed;
  bottom: 0;
}
.col-md-2,
.col-md-10 {
  padding: 0;
}
.panel {
  margin-bottom: 0px;
}
.chat-window {
  bottom: 0;
  position: fixed;
  float: right;
  margin-left: 10px;
}
.chat-window > div > .panel {
  border-radius: 5px 5px 0 0;
}
.icon_minim {
  padding: 2px 10px;
}
.msg_container_base {
  background: #e5e5e5;
  margin: 0;
  padding: 0 10px 10px;
  overflow-x: hidden;
}
.top-bar {
  background: #666;
  color: white;
  padding: 10px;
  position: relative;
  overflow: hidden;
}
.msg_receive {
  padding-left: 0;
  margin-left: 0;
}
.msg_sent {
  padding-bottom: 20px !important;
  margin-right: 0;
}
.messages {
  background: white;
  padding: 10px;
  border-radius: 2px;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  max-width: 100%;
}
.messages > p {
  font-size: 13px;
  margin: 0 0 0.2rem 0;
}
.messages > time {
  font-size: 11px;
  color: #ccc;
}
.msg_container {
  padding: 10px;
  overflow: hidden;
  display: flex;
}
img {
  display: block;
  width: 100%;
}
.avatar {
  position: relative;
}
.base_receive > .avatar:after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 0;
  height: 0;
  border: 5px solid #fff;
  border-left-color: rgba(0, 0, 0, 0);
  border-bottom-color: rgba(0, 0, 0, 0);
}

.base_sent {
  justify-content: flex-end;
  align-items: flex-end;
}
.base_sent > .avatar:after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 0;
  border: 5px solid white;
  border-right-color: transparent;
  border-top-color: transparent;
  box-shadow: 1px 1px 2px rgba(black, 0.2);
}

.msg_sent > time {
  float: right;
}

.msg_container_base::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #f5f5f5;
}

.msg_container_base::-webkit-scrollbar {
  width: 12px;
  background-color: #f5f5f5;
}

.msg_container_base::-webkit-scrollbar-thumb {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}

.btn-group.dropup {
  position: fixed;
  left: 0px;
  bottom: 0;
}
</style>
