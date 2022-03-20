<template>
  <div>
    <team-form></team-form>
  </div>
</template>

<script lang="ts">
import TeamForm from "@/components/team/TeamForm.vue";
import { defineComponent } from "vue";

export default defineComponent({
  components: {
    TeamForm,
  },
});
</script>

<style></style>
