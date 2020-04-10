import Vue from 'vue'
import App from './App.vue'
import * as firebase from "firebase";

Vue.config.productionTip = false

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

new Vue({
  render: h => h(App),
}).$mount('#app')
