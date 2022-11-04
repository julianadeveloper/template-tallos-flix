<template>
  <div class="container-form">
    <Toast />
    <form class="form-login">
      <div class="form-group">
        <div class="field">
          <h2 class="title-login">Login</h2>
          <div class="control">
            <label class="label"> <i class="fas fa-user"></i></label>
            <input
              type="text"
              placeholder="Insert user email"
              v-model="user.email"
            />
          </div>
        </div>

        <div class="field has-icons-left has-icons-right">
          <div class="control">
            <label class="label" for="exampleInputEmail2">
              <i class="fas fa-lock"></i>
            </label>
            <input
              v-if="showPassword"
              type="text"
              placeholder="Password"
              required
              v-model="user.password"
            />
            <input
              v-else
              type="password"
              placeholder="Password"
              required
              v-model="user.password"
            />
            <div class="show-pass">
              <b-button
                class="btn-fill float-center"
                @click.prevent="togglePassword()"
              >
                <span>
                  <i
                  class="fa-solid"
                    :class="{
                      'fa-eye-slash': showPassword,
                      'fa-eye': !showPassword
                    }"
                  ></i>
                </span>
              </b-button>
            </div>
          </div>
        </div>
      </div>

      <button type="button" class="btn btn-white btn-animate" @click="login">
        Login
      </button>
    </form>
  </div>
</template>

<script lang="ts">
import LoginService from "../../server/login";
import { ref } from "vue";
import { mapMutations, mapState } from "vuex";

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
  computed: {
    ...mapState({
      getToken: "authModule/getToken"
    })
  },

  methods: {
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    ...mapMutations({
      setToken: "authModule/setToken"
    }),

    async login() {
      try {
        const response = await this.loginService.login({
          required: true,
          email: this.user.email,
          password: this.user.password
        });

        this.token = response.data.access_token;

        localStorage.setItem("token", response.data.access_token);
        this.setToken(response.data.access_token);
        this.$router.push({ name: "DashboardLayout" });
      } catch (error) {
        this.$toast.add({
          severity: "error",
          summary: "Incorrect email or password",
          life: 3000
        });
        throw Error(error);
      }
    }
  }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&family=Spline+Sans+Mono:wght@500&display=swap");

input::placeholder {
  color: white;
  font-weight: 100;
}
.form-group input {
  border: none;
  background-color: transparent !important;
  border-bottom: 1px solid white;
  color: white;
  font-weight: bold;
}

.tallos-login {
  display: flex;
  width: 25%;
}
.control {
  display: flex;
}

label {
  color: white;
  padding: 0.25rem;
  margin: 1rem;
}

.show-pass {
  margin-left: 10px;
  background-color: transparent;
}

.container-form {
  font-family: "Roboto", sans-serif;
  overflow: hidden;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );

  /* background-image: Url('/img/login/theater-unsplash.jpg'); */
  background-repeat: no-repeat;
  background-size: 100% 100%;
  align-items: center;
  justify-content: center;
}

.title-login {
  text-align: center;
  color: white;
}

.form-login {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 50%;
  width: 43%;
  background-color: rgba(99, 145, 236, 0.315);
  border-radius: 5%;
}

.form-group {
  align-items: center;
  justify-content: center;
  height: auto;
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

.btn:active {
  transform: translateY(-1px);
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
}

.btn-white {
  background-color: #202079;
  color: rgb(246, 246, 246);
  border: none;
  width: 18rem;
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

  .form-group {
    align-items: center;
  }

  .control {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .title-login {
    font-size: 1em;
  }
  .btn-white {
    width: 120px;
  }
}
</style>
