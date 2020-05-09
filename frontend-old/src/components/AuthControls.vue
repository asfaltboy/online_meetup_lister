<template>
  <b-navbar-item tag="div">
    <div class="buttons" v-if="showLoginButton">
      <a class="button" @click="login">Login</a>
    </div>
    <div class="media" v-else>
      <figure class="media-right">
        <div class="columns">
          <div class="column">
            <strong>{{ user.data.displayName }}</strong>
          </div>
          <div class="column">
            <p class="image is-48x48">
              <img id="user-photo" :src="user.data.photoURL" alt="photo" />
            </p>
          </div>
        </div>
      </figure>
      <div class="buttons">
        <a @click="logout" class="button is-primary">Logout</a>
      </div>
    </div>
  </b-navbar-item>
</template>

<style>
#user-photo {
  max-width: 50px;
  max-height: 50px;
}
</style>

<script>
import { mapState, mapGetters, mapActions } from "vuex";

export default {
  name: "AuthControls",
  computed: {
    showLoginButton() {
      return !this.isLoggedIn();
    },
    ...mapState(["user"])
  },
  methods: {
    ...mapActions(["login", "logout"]),
    ...mapGetters(["isLoggedIn"])
  }
};
</script>
