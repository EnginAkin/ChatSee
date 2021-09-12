<template>
  <div class="row msg_container base_receive">
    <div class="col-md-2 col-xs-2 avatar" style="max-width: 67px">
      <img
        class="
          avatar avatar-48
          bg-light
          rounded-circle
          text-white
          p-2
          img-responsive
        "
        src="https://raw.githubusercontent.com/twbs/icons/main/icons/person-fill.svg"
      />
    </div>
    <div class="col-md-10 col-xs-10">
      <div class="messages msg_receive">
        <div class="row">
          <div class="col-12">
            <p>
              {{ message.message }}
            </p>
          </div>
        </div>

        <!-- <time>{{ totalMinute + " Minute ago " }}</time> -->
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    message: Object,
    friend: Object,
  },
/*


  data() {
    return {
      totalSeconds: 0,
      totalMinute: 0,
    };
  },
  methods: {
    setTime() {
      this.totalSeconds = this.totalSeconds + 1;
      this.totalMinute = pad(parseInt(totalSeconds / 60));
    },
    pad(val) {
      var valString = val + "";
      if (valString.length < 2) {
        return "0" + valString;
      } else {
        return valString;
      }
    },
  },
  mounted() {
    setInterval(setTime, 1000);
  },
  */
};
</script>


<style scoped>
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
  border-radius: 10px;

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