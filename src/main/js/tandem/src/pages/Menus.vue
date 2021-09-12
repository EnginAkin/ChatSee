  <template>
  <div class="mb-5">
    <nav
      class="navbar navbar-expand-lg navbar-light bg-light"
      style="width: 100%"
    >
      <div class="container-fluid">
        <a class="navbar-brand" href="# ">CHATSEE</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" active-class="active" to="/about">
                {{ $t("home") }}</router-link
              >
            </li>

            <li
              class="nav-item nav-link words"
              v-if="$auth.isLoggedIn"
              @click="showaddWord"
            >
              {{ $t("AddWord") }}
            </li>
            <li
              class="nav-item nav-link words"
              v-if="$auth.isLoggedIn"
              @click="translateWord"
            >
              Translate
            </li>
            <div
              class="form-popup"
              id="myForm1"
              style="margin-left: 30%; margin-top: 4%"
            >
              <div class="form-container">
                <h1>{{ $t("addwordTxt") }}</h1>
                <h3>{{ responseAddWord }}</h3>
                <label><b>Kelime</b></label>
                <input
                  type="text"
                  v-model="word"
                  placeholder="Kelime Gir"
                  required
                />

                <label><b>Anlamı</b></label>
                <input type="text" v-model="mean" placeholder="Kelime Anlamı" />

                <button type="submit" class="btn" @click="addWord">
                  Kaydet
                </button>
                <button type="button" class="btn cancel" @click="closeForm">
                  Kapat
                </button>
              </div>
            </div>

            <div
              class="form-popup translateform"
              id="myForm2"
              style="margin-left: 30%; margin-top: 4%"
            >
              <form @submit.prevent="translateIt" class="well">
                <textarea
                  v-model="searchText"
                  cols="30"
                  rows="5"
                  class="form-control"
                  placeholder="Çevirmek istediğiniz kelime/cümle yazınız."
                ></textarea>
                <label for="language-picker-select">choose which language to translate</label>
                <select
            class="form-select"
            aria-label="Default select example"
            v-model="translateLang"
          >
            <option
              v-for="language in languages"
              :value="language.key"
              v-bind:key="language.key"
            >
              {{ language.value }}
            </option>
          </select>

                <br />
                <h4 v-if="translatedTextFromApi" >
                  Mean : {{ translatedTextFromApi }}
                </h4>
                <br />
                <button type="submit" class="btn btn-primary btn-block">
                  Çevir Gelsin!
                </button>   
                <button @click="closeTranslateForm" style="display: block;margin-top: 5%;" class="btn btn-primary btn-block">
                 Kapat
                </button>
              </form>
            </div>
            <li class="nav-item" v-if="$auth.isLoggedIn">
              <router-link
                class="nav-link"
                active-class="active"
                to="/WordList"
              >
                {{ $t("MyList") }}</router-link
              >
            </li>

            <li class="nav-item">
              <a
                class="nav-link disabled"
                href="#"
                tabindex="-1"
                aria-disabled="true"
                >{{ $t("comingSoon") }}</a
              >
            </li>
          </ul>
           <ul class="navbar-nav me-5 mb-2 mb-lg-0">
            <li>
              <select
                class="form-select"
                v-model="lang"
                @change="handleChangeLanguage($event)"
              >
                <option value="en">English</option>
                <option value="de">Deutch</option>
                <option value="tr">Turkish</option>
              </select>
            </li>
          </ul>
          <form class="d-flex">
            <router-link
              class="btn btn-outline-success"
              v-if="$auth.isLoggedIn"
              to="/login"
              @click="logout"
              >{{ $t("logout") }}</router-link
            >
            <router-link class="btn btn-outline-success" v-else to="/login">{{
              $t("Login")
            }}</router-link>

            <router-link
              class="btn btn-outline-success"
              v-if="$auth.isLoggedIn"
              to="/account"
              >{{ $auth.user.name + "\t" + $auth.user.surname }}</router-link
            >

            <router-link class="btn btn-outline-success" v-else to="/signup">{{
              $t("signUp")
            }}</router-link>
          </form>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
import axios from "axios";

export default {
  name: "xx",
  data: function () {
    const lang = localStorage.getItem("lang") || "en";
    return {
      word: null,
      lang: lang,
      mean: null,
      translateTo: "en",
      responseAddWord: "",
      translatedText: null,
      translateLang:null,
      searchText: "",
      translatedTextFromApi: null,
       languages: [
        {
          key: "tr",
          value: "Turkish",
        },
        {
          key: "fr",
          value: "French",
        },
        {
          key: "en",
          value: "English",
        },
        {
          key: "de",
          value: "Deutch",
        },
      ],
    };
  },

  methods: {
    async translateIt() {
      const options = {
        method: "GET",
        url: "https://language-translation.p.rapidapi.com/translateLanguage/translate",
        params: {
          text: this.searchText,
          type: "plain",
          target: this.translateLang,
        },
        headers: {
          "x-rapidapi-key":
            "e70f986ad3msh55defb5055665edp143552jsn82f13d371ab5",
          "x-rapidapi-host": "language-translation.p.rapidapi.com",
        },
      };

    var response=  await axios.request(options);
    console.log("response : ",response);
    console.log("response.data.translatedText : ",response.data.translatedText);
    this.translatedTextFromApi=response.data.translatedText;
       
    },

    closeForm() {
      document.getElementById("myForm1").style.display = "none";
    },

    closeTranslateForm() {
      document.getElementById("myForm2").style.display = "none";
    },
    translateWord() {
      if (document.getElementById("myForm1").style.display == "block") {
        document.getElementById("myForm1").style.display = "none";
      }
      document.getElementById("myForm2").style.display = "block";
    },
    showaddWord() {
      if (document.getElementById("myForm2").style.display == "block") {
        document.getElementById("myForm2").style.display = "none";
      }
      document.getElementById("myForm1").style.display = "block";
    },
    logout() {
      this.$http
        .request("post", "api/v1/logout", null, true)
        .then((response) => {
          console.log("işlem başarılı", response.message);
          this.$util.loggedOut();
          this.$auth.loggedOut();
        });
    },
    handleChangeLanguage(event) {
      localStorage.setItem("lang", event.target.value);
      window.location.reload();
    },
    addWord() {
      var ObjWord = {
        word: this.word,
        means: this.mean,
      };
      console.log("words : ", ObjWord);
      this.$http
        .request("post", "api/v1/addWord", ObjWord, true)
        .then((response) => {
          console.log("response word : ", response);
          this.responseAddWord = response.data.message;
          this.mean="";
          this.word="";
          window.reload();
        });
    },
  },
};
</script>
<style scoped>
.translateform {
  background-color: teal;
}
.words {
  color: rgba(0, 0, 0, 0.9);
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  display: block;
  padding: 0.5rem 1rem;
  text-decoration: none;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
    border-color 0.15s ease-in-out;
  cursor: pointer;
}
.open-button {
  background-color: #555;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  opacity: 0.8;
  position: fixed;
  width: 280px;
}

/* The popup form - hidden by default */
.form-popup {
  display: none;
  position: fixed;
  border: 3px solid #f1f1f1;
  z-index: 9;
}

/* Add styles to the form container */
.form-container {
  max-width: 500px;
  padding: 10px;
  background-color: white;
}

/* Full-width input fields */
.form-container input[type="text"],
.form-container input[type="password"] {
  width: 100%;
  padding: 15px;
  margin: 5px 0 22px 0;
  border: none;
  background: #f1f1f1;
}

/* When the inputs get focus, do something */
.form-container input[type="text"]:focus,
.form-container input[type="password"]:focus {
  background-color: #ddd;
  outline: none;
}

/* Set a style for the submit/login button */
.form-container .btn {
  background-color: #04aa6d;
  color: white;
  padding: 16px 20px;
  border: none;
  cursor: pointer;
  width: 100%;
  margin-bottom: 10px;
  opacity: 0.8;
}

/* Add a red background color to the cancel button */
.form-container .cancel {
  background-color: red;
}

/* Add some hover effects to buttons */
.form-container .btn:hover,
.open-button:hover {
  opacity: 1;
}
</style>

