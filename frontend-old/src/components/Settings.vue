<template>
  <div class="container">
    <h1>Time settings</h1>
    <div class="box is-inline-flex">
      <b-field label="Default available time" horizontal>
        <b-field label="Start" label-position="on-border">
          <b-timepicker v-model="defaultStart" inline></b-timepicker>
        </b-field>
        <b-field label="End" label-position="on-border">
          <b-timepicker v-model="defaultEnd" inline></b-timepicker>
        </b-field>
      </b-field>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import * as moment from "moment";

export default {
  watch: {
    defaultStart(val) {
      this.defaultStart = moment(val);
    },
    defaultEnd(val) {
      this.defaultEnd = moment(val);
    }
  },
  computed: {
    ...mapState(["time"])
  }
};
</script>
