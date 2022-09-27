<template>
  <div class="container-form">
    <form class="form-login">
      <div class="title-form">
        <div></div>
        <span class="subtitle2">TallosFlix Admin</span>
      </div>

      <div class="form-group">
        <label class="label" for="exampleInputEmail1">
          <i class="fas fa-user"></i>
          Email
        </label>
        <div class="field">
          <div class="control">
            <input
              type="text"
              id="exampleInputEmail1"
              placeholder="Numero de matrícula"
              required
              v-model="user.email"
              class="input is-link"
            />
          </div>
        </div>
        <label class="label" for="exampleInputEmail2">
          <i class="fas fa-lock"></i>

          Senha</label
        >

        <div class="field has-icons-left has-icons-right">
          <div class="control">
            <input
              v-if="showPassword"
              type="text"
              id="exampleInputEmail2"
              placeholder="Senha"
              required
              v-model="user.password"
              class="input is-link"
            />
            <input
              v-else
              type="password"
              id="exampleInputEmail2"
              placeholder="Senha"
              required
              v-model="user.password"
              class="input is-link"
            />
            <div class="btn-show-pass">
              <button class="btn btn-animate" @click.prevent="togglePassword">
                <span class="icon is-small is-left">
                  <i
                    class="fas"
                    :class="{
                      'fa-eye-slash': showPassword,
                      'fa-eye': !showPassword
                    }"
                  ></i>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      <button
        type="button"
        class="btn btn-white btn-animate"
        @click.prevent="login()"
      >
        Login
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import LoginService from "../../server/login";
import { ref } from "vue";
import { mapMutations } from "vuex";
// import { mapMutations } from "vuex";
const loginService = new LoginService();

export default {
  name: "LoginUser",

  data() {
    return { showPassword: false };
  },
  setup() {
    const user = ref({
      email: "",
      password: "",
      token: ""
    });

    return { user, loginService };
  },
  // computed: {
  //   togglePassword() {
  //     if (this.showPassword) {
  //       return "Hide";
  //     } else {
  //       return "Show";
  //     }
  //   },
  // },

  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },

    ///mapeando minhas mutations e tudo q existem nelas
    //o metodo setToken esta importando do diretório authModule/setToken a mutation
    // ...mapMutations({
    //   setToken: "authModule/setToken",
    // }),

    async login() {
      try {
        const response = await this.loginService.login({
          required: true,
          email: this.user.email,
          password: this.user.password,
          token: this.user.token
        });
        console.log("response do login", response);

        this.$router.push({ name: "DashboardLayout" });
        const token = response.data.access_token;
        //  this.setToken(response.data.access_token)
        localStorage.setItem("token", token);
      } catch (error) {
        throw Error(error);
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Spline+Sans+Mono:wght@500&display=swap");
.control {
  display: flex;
}
label {
  color: white;
  padding: 0.25rem;
  margin: 1rem;
}
input {
  max-width: 100%;
  width: 80%;
}
span {
  position: absolute;
  font-weight: 900;
  font-size: 16px;
  display: flex;
  align-items: center;
  color: #ffffff;
}
.title-form {
  animation: go-back 1s;
}

@keyframes go-back {
  from {
    transform: translateX(100px);
  }
  to {
    transform: translateX(0);
  }
}
.title-form {
  color: rgb(250, 250, 250);
  margin-bottom: 0.25rem;
  padding: 1.25rem;
}

.title-form .form-control {
  width: 70% !important;
}
.container-form {
  font-family: "Roboto", sans-serif;
  overflow: hidden;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgb(50, 50, 50);
  align-items: center;
  justify-content: center;
}
.img-login {
  position: relative;
}
.form-login {
  height: auto;
  width: 43%;
}
.form-group {
  width: 80%;
  align-items: center;
  justify-content: center;
}
.btn:link,
.btn:visited {
  text-transform: uppercase;
  text-decoration: none;
  padding: 15px 40px;
  display: inline-block;
  border-radius: 100px;
  transition: all 0.2s;
  position: absolute;
}

.btn:hover {
  transform: translateY(3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-white {
  background-color: rgb(139, 59, 243);
  color: rgb(246, 246, 246);
}

.btn-white::after {
  background-color: #fff;
}

.btn:hover::after {
  transform: scaleX(1.4) scaleY(1.6);
  opacity: 0;
}

.btn-animated {
  animation: moveInBottom 1s ease-out;
  animation-fill-mode: backwards;
}

@keyframes moveInBottom {
  0% {
    opacity: 0;
    transform: translateY(30px);
  }

  100% {
    opacity: 1;
    transform: translateY(0px);
  }
}

@media only screen and (max-width: 720px) {
  hr {
    border-left: none;
  }
  .subtitle2 {
    position: relative;
  }
  .img-login {
    margin-right: 40%;
    width: 12rem;
    display: none;
  }
  .form-login {
    align-items: center;

    width: 50%;
    height: 100%;
  }
  .container-form {
    -webkit-display: flex;
    -moz-display: flex;
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    background: rgb(50, 50, 50);
    align-items: center;
  }
}
</style>
