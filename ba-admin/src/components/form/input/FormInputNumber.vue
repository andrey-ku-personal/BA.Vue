<template>
  <div>
    <label>{{ label }}</label>
    <p-input-number
      class="input-number"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "form-input-number",

  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: {
      type: Number,
      default: 0,
    },
  },
});
</script>

<style scoped>
.input-number {
  width: 200px;
}
</style>
