<template>
  <div id="app">
    <Navbar />
    <section class="section">
      <Settings />
    </section>
  </div>
</template>

<script>
import Navbar from "./components/Navbar.vue";
import Settings from "./components/Settings.vue";

export default {
  name: "App",
  components: {
    Navbar,
    Settings
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#header {
  display: flex;
  justify-content: space-between;
  /* flex: 2; */
}
#title {
  display: flex;
  justify-items: self-start;
}
</style>
