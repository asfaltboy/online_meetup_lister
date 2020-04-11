<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item href="#">
        <img id="logo" alt="Online Meetup Lister" src="../assets/logo.png" />
        <h3>Online Meetup Lister</h3>
      </b-navbar-item>
    </template>
    <!-- <template slot="start">
      <b-navbar-item href="#">
        Home
      </b-navbar-item>
      <b-navbar-item href="#">
        Documentation
      </b-navbar-item>
      <b-navbar-dropdown label="Info">
        <b-navbar-item href="#">
          About
        </b-navbar-item>
        <b-navbar-item href="#">
          Contact
        </b-navbar-item>
      </b-navbar-dropdown>
    </template> -->

    <template slot="end">
      <AuthControls />
    </template>
  </b-navbar>
</template>

<style>
#logo {
  max-height: 50px;
}
</style>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import AuthControls from "./AuthControls.vue";

export default {
  name: "Navbar",
  components: {
    AuthControls
  }
};
</script>
