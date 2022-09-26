<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <Login>
          </Login>
        </div>
        <div class="col-md-4">
          <!-- <user-card>
          </user-card> -->
        </div>
      </div>
    </div>
  </div>
</template>
<script>
  import Login from './Login/Login.vue'
  // import UserCard from './UserProfile/UserCard.vue'

  export default {
    components: {
      Login,
      // UserCard
    }
  }

</script>
<style>

</style>
