<template>
  <div>
    <team-form></team-form>
  </div>
</template>

<script lang="ts">
import TeamForm from "@/pages/team/TeamForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TeamForm,
  },
});
</script>

<style>
html {
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0;
}

body {
  margin: 0px;
  padding: 0px;
}
</style>
