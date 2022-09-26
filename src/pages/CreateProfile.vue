<template>
  <div class="content">
    <div class="container-fluid">
      <div class="row">
        <div class="col-12">
          <CreateProfileForm> </CreateProfileForm>
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
import CreateProfileForm from "./CreateUser/CreateProfileForm.vue";
// import UserCard from './UserProfile/UserCard.vue'

export default {
  components: {
    CreateProfileForm
    // UserCard
  }
};
</script>
<style></style>
