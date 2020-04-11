<template>
  <div class="container">
    <h1>Time settings</h1>
    <div class="box is-inline-flex">
      <b-field label="Default available time" horizontal>
        <b-field label="Start" label-position="on-border">
          <b-timepicker v-model="time.defaultAvailable.start" inline></b-timepicker>
        </b-field>
        <b-field label="End" label-position="on-border">
          <b-timepicker v-model="time.defaultAvailable.end" inline></b-timepicker>
        </b-field>
      </b-field>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: {
    ...mapState(["time"])
  }
};
</script>
