import firebase from "firebase/app";
import "firebase/auth";

export default {
  state: {
    data: null
  },
  mutations: {
    setCount(state, count) {
      state.eventCount = count;
    },
    setUser(state, user) {
      state.data = user;
    },
    unsetUser(state) {
      state.data = null;
    }
  },
  getters: {
    isLoggedIn: state => {
      return state.data !== null;
    }
  },
  actions: {
    login({ commit }) {
      const provider = new firebase.auth.GoogleAuthProvider();
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(function(result) {
          const user = result.user;
          commit("setUser", user);
          // ...
        })
        .catch(function(error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ...
        });
    },
    logout: function({ commit }) {
      console.log("logging out the user");
      firebase
        .auth()
        .signOut()
        .then(function() {
          console.log("got it!");
          commit("unsetUser");
        })
        .catch(function(error) {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
  }
};
