<template>
  <card>
    <Toast />

    <div>
      <div class="text-center">
        <button
          type="submit"
          class="btn btn-success btn-fill float-right"
          @click.prevent="createUser()"
        >
          Create
        </button>
      </div>
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
        <div class="col-md-4">
          <base-input
            type="password"
            label="Password"
            placeholder="Password"
            v-model="user.password"
          >
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input
            type="password"
            label="Password"
            placeholder="Password"
            v-model="user.passwordConfirm"
          >
          </base-input>
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
      usersApi
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
    }
  }
};
</script>
<style></style>
