<template>
  <div>
    <label>{{ label }}</label>
    <p-input-text
      class="input-text"
      type="text"
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "form-input-text",

  props: {
    label: {
      type: String,
      required: true,
    },
    modelValue: [String],
  },
});
</script>

<style scoped>
.input-text {
  width: 200px;
}
</style>
