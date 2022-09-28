<template>
  <div class="modal-background">
    <div class="modal-content">
      <div>
       <b-button variant="primary">Confirmar</b-button>

        <b-button variant="danger" @click="closeModal">Cancel</b-button>
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
    }
  },
  methods: {
    //implementar delete
    closeModal() {
      this.$emit("closemymodal");
    }
  }
};
</script>
<style scoped>
.modal-background {
  display: flex;
  justify-content: center;
  position: absolute;
  width: 300px;
  height: 200px;
}
.btn {
  margin: 1rem;
}
</style>
