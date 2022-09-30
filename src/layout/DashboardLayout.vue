<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-bank"></i>
        <p>Home</p>
      </sidebar-link>
      <sidebar-link to="/admin/user">
        <i class="nc-icon nc-circle-09"></i>
        <p>User Profile</p>
      </sidebar-link>
      <sidebar-link to="/admin/reports">
        <i class="nc-icon nc-notes"></i>
        <p>Reports</p>
      </sidebar-link>
      <sidebar-link to="/admin/movies">
        <i class="nc-icon nc-button-play"></i>
        <p>Movies List</p>
      </sidebar-link>
      <sidebar-link to="/admin/maps">
        <i class="nc-icon nc-pin-3"></i>
        <p>Theaters</p>
      </sidebar-link>
      <sidebar-link to="/" @click="logout()">
        <i class="nc-icon nc-bell-55"></i>
        <p>Logout</p>
      </sidebar-link>

      <template slot="bottom-links">
        <!-- <sidebar-link class="active" to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p></p>
        </sidebar-link> -->
      </template>
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar"> </dashboard-content>

      <!-- <content-footer></content-footer> -->
    </div>
  </div>
</template>
<style lang="scss"></style>
<script>
import TopNavbar from "./TopNavbar.vue";
// import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
export default {
  components: {
    TopNavbar,
    // ContentFooter,
    DashboardContent,
    MobileMenu
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
    logout(){
        localStorage.removeItem("token")
        this.$router.push({name: 'login'})
      }
  }
};
</script>
