<template>
  <div class="modal-background">
    <div class="modal-content">
      <div>
        <b-button variant="primary" @click="confirm()">Confirmar</b-button>

        <b-button variant="danger" @click="closeModal()">Cancel</b-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    },
    action: {
      type: String
    }
  },
  computed: {},
  methods: {
    //implementar delete
    closeModal() {
      this.$emit("closemymodal");
    },
    //testeuser@gmail.com
    async confirm() {
      (await this.action) === "update"
        ? this.$emit("updateUser", this.user._id)
        : this.$emit("deleteUser", this.user._id);
      this.closeModal();
      // await this.usersApi.deleteUser(this.user._id)
    }
  }
};
</script>
<style scoped>
.modal-background {
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: absolute;
  width: 300px;
  height: 200px;
  margin-left: 50%;
}
.btn {
  margin: 1rem;
}

@media (min-width: 600px) {
  .modal-background {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 300px;
    height: 200px;
  }
}
</style>
