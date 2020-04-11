import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase/app";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";
import Buefy from "buefy";
import "buefy/dist/buefy.css";

import user from "./store/user";
import time from "./store/time";

Vue.config.productionTip = false;

const configOptions = {
  apiKey: "AIzaSyDSvnMa1SFKiiLhibtutMWELebVJsi_QYM",
  authDomain: "online-meetup-lister.firebaseapp.com",
  databaseURL: "https://online-meetup-lister.firebaseio.com",
  projectId: "online-meetup-lister",
  storageBucket: "",
  messagingSenderId: "",
  appId: ""
};

firebase.initializeApp(configOptions);

Vue.use(Vuex);
Vue.use(Buefy);

const vuexPersist = new VuexPersist({
  key: "online-meetup-lister",
  storage: window.localStorage
});

const store = new Vuex.Store({
  plugins: [vuexPersist.plugin],
  state: {
    eventCount: 0
  },

  modules: {
    user,
    time
  }
});

new Vue({
  render: h => h(App),
  store
}).$mount("#app");
