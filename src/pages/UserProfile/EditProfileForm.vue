<template>
  <card>
    <div>
      <base-input
        type="text"
        label="Search User"
        placeholder="Insert user email"
        @input="onInput"
      ></base-input>
      <div class="text-center">
        <button
          type="submit"
          class="btn btn-success btn-fill float-right"
          @click.prevent="searchUser()"
        >
          Search
        </button>
      </div>
      <h4 slot="header" class="card-title">Edit Profile</h4>
    </div>
    <form>
      <div class="row">
        <div class="col-md-2">
          <base-input
            type="text"
            label="Id"
            :disabled="true"
            placeholder="User ID"
            v-model="user._id"
          >
          </base-input>
        </div>
        <div class="col-md-2">
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
            type="password"
            label="Password"
            placeholder="Password"
            v-model="user.password"
          >
          </base-input>
          <base-input
            type="password"
            label="Password"
            placeholder="Password"
            v-model="user.passwordConfirm"
          >
          </base-input>
        </div>
      </div>
      <!-- </div> -->
      <!--
      <div class="row">
        <div class="col-md-12">
          <base-input type="text"
                    label="Address"
                    placeholder="Home Address"
                    v-model="user.address">
          </base-input>
        </div> -->
      <!-- </div>

      <div class="row">
        <div class="col-md-4">
          <base-input type="text"
                    label="City"
                    placeholder="City"
                    v-model="user.city">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="text"
                    label="Country"
                    placeholder="Country"
                    v-model="user.country">
          </base-input>
        </div>
        <div class="col-md-4">
          <base-input type="number"
                    label="Postal Code"
                    placeholder="ZIP Code"
                    v-model="user.postalCode">
          </base-input>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <div class="form-group">
            <label>About Me</label>
            <textarea rows="5" class="form-control border-input"
                      placeholder="Here can be your description"
                      v-model="user.aboutMe">
              </textarea>
          </div>
        </div> -->
      <!-- </div> -->

      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click.prevent="updateProfile()"
        >
          Update Profile
        </button>
      </div>
      <div class="clearfix">
        <button @click="deleteUser()">Delete</button>
      </div>
    </form>
  </card>
</template>
<script>
import { ref } from "vue";
import UsersApi from "../../server/users-api";
const usersApi = new UsersApi();

export default {
  data() {
    return {
      search: "",
      usersApi
    };
  },

  setup() {
    const user = ref({
      _id: "",
      username: "",
      name: "",
      password: "",
      role: "",
      email: "",
      passwordConfirm: ""
    });
    return { user };
  },
  methods: {
    onInput(searchValue) {
      // ler o valor do meu input
      this.search = searchValue;
    },
    async searchUser() {
      this.user = await this.usersApi.listUserEmail(this.search);
      this.user.password = "";
      return this.user;
    },

    async updateProfile() {
      const passwordOk = this.user.password == this.user.passwordConfirm || "";

      try {
        if (passwordOk) {
          return await this.usersApi.userUpdate(this.user._id, this.user);
        } else {
        }
      } catch (error) {
        throw new Error(error);
      }
    },

    deleteUser() {
      console.log(this.user._id);
      this.usersApi.deleteUser(this.user._id);
    }
  }
};
</script>
<style></style>
