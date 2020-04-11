<template>
  <b-navbar>
    <template slot="brand">
      <b-navbar-item tag="router-link" :to="{ path: '/' }">
        <img id="logo" alt="Online Meetup Lister" src="../assets/logo.png" />
        <h3>Online Meetup Lister</h3>
      </b-navbar-item>
    </template>

    <template slot="end">
      <b-navbar-item
        tag="router-link"
        :to="{ path: '/settings' }"
        v-if="userLoggedIn"
      >
        Settings
      </b-navbar-item>
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
import { mapGetters } from "vuex";
import AuthControls from "./AuthControls.vue";

export default {
  name: "Navbar",
  computed: {
    userLoggedIn() {
      return this.isLoggedIn();
    }
  },
  components: {
    AuthControls
  },
  methods: {
    ...mapGetters(["isLoggedIn"])
  }
};
</script>
