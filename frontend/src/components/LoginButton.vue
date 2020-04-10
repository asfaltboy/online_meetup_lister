<template>
  <button @click="login">Login</button>
</template>

<script>
import * as firebase from "firebase";

const provider = new firebase.auth.GoogleAuthProvider();

export default {
  name: 'LoginButton',
  methods: {
  login: function() {
    firebase.auth().signInWithPopup(provider).then(function(result) {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(user)
      // ...
    }).catch(function(error) {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(erroCode, errorMessage)
      // The email of the user's account used.
      const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      const credential = error.credential;
      // ...
    });
  }
  }
}
</script>