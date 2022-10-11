<template>
  <div>
    <div class="container-fluid">
      <div class="row">
        <!-- <div class="col-3"> -->
        <Login />
      </div>
    </div>
  </div>
</template>
<script>
import Login from "./Login/Login.vue";
// import UserCard from './UserProfile/UserCard.vue'

export default {
  components: {
    Login
    // UserCard
  }
};
</script>
<style scoped>
.content {
  overflow: hidden;
}
</style>
