<template>
  <card>
    <Toast />

    <div>
     
      <h4 slot="header" class="card-title">Insert Datas</h4>
    </div>
    <form>
      <div class="row">
        <div class="col-md-3">
          <base-input
            type="text"
            label="Username"
            placeholder="Username"
            v-model="user.name"
          >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input
            type="email"
            label="Email"
            placeholder="Email"
            v-model="user.email"
          >
          </base-input>
        </div>
        <div class="col-md-6">
          <base-input
            v-if="showPassword"
            type="password"
            label="Password"
            placeholder="Password"
            v-model="user.password"
          >
          </base-input>
          <base-input
            v-else
            type="text"
            label="Password"
            placeholder="Password"
            v-model="user.password"
          >
          </base-input>
          <base-input
            v-if="showPassword"
            type="password"
            label="Password"
            placeholder="Password"
            v-model="user.passwordConfirm"
          >
          </base-input>
          <base-input
            v-else
            type="text"
            label="Password"
            placeholder="Password"
            v-model="user.passwordConfirm"
          >
          </base-input>
          <b-button @click.prevent="togglePassword()">
            <span class="icon is-small is-center">
              <i
                class="fas"
                :class="{
                  'fa-eye-slash': showPassword,
                  'fa-eye': !showPassword
                }"
              ></i>
            </span>
          </b-button>
        </div>
      </div>
      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click.prevent="createUser()"
        >
          Create Profile
        </button>
      </div>
      <div class="clearfix"></div>
    </form>
  </card>
</template>
<script>
import UsersApi from "../../server/users-api";
const usersApi = new UsersApi();

export default {
  data() {
    return {
      user: {},
      usersApi,
      showPassword: false,

    };
  },

  methods: {
    async createUser() {
      try {
        const passwordOk =
          this.user.password == this.user.passwordConfirm || "";
        if (passwordOk) {
          await this.usersApi.userCreate(this.user);
          this.$toast.add({
            severity: "success",
            summary: "registered user",
            life: 3000
          });
        } else {
          this.$toast.add({
            severity: "error",
            summary: "incompatible passwords",
            life: 3000
          });
        }
      } catch (error) {
        throw new Error(error);
      }
    },

    togglePassword() {
      this.showPassword = !this.showPassword;
    },
  }
};
</script>
<style></style>
