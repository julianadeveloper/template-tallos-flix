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
          <i class="fa-solid fa-magnifying-glass"></i>
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
      <Modal v-if="modal" class="modal" @closemymodal="close" :user="user" />
      <!--save datas-->
      <div class="text-center">
        <button
          type="submit"
          class="btn btn-info btn-fill float-right"
          @click.prevent="updateProfile()"
        >
          <i class="fa-solid fa-floppy-disk"></i>
        </button>
      </div>
      <!--delete user-->
      <div class="clearfix">
        <b-button variant="danger" @click="open()"
          ><i class="fa-solid fa-trash"></i
        ></b-button>
      </div>
    </form>
  </card>
</template>
<script>
import { mapActions } from "vuex";
import UsersApi from "../../server/users-api";
import Modal from "../../components/Modal/Modal.vue";
const usersApi = new UsersApi();

export default {
  components: {
    Modal
  },

  data() {
    return {
      user: {},
      search: "",
      usersApi,
      showPassword: false,
      modal: false
    };
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
        }
      } catch (error) {
        throw new Error(error);
      }
    },
    togglePassword() {
      this.showPassword = !this.showPassword;
    },
    open() {
      this.modal = !this.modal;
    },
    close() {
      this.modal = !this.modal;
    }
  }
};
</script>
;
