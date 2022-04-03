<template>
  <header>
    <label>{{ label }}</label>
    <div>
      <slot></slot>
      <slot name="buttons"></slot>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "header-default",

  props: {
    label: {
      type: String,
      required: false,
    },
  },
});
</script>

<style>
header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  height: 3em;
  color: #1d428a;

  border-bottom: 1px solid #1d428a;
}

header label {
  margin: 0 10px;
  font-size: 1.2em;
  font-weight: bolder;
}
</style>
