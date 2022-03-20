<template>
  <div>
    <label>{{ label }}</label>
    <p-dropdown
      class="input-text"
      v-model="chosenValue"
      :options="transformEnum(enumObj)"
      optionLabel="value"
      optionValue="key"
      :v-model="modelValue"
      @change="$emit('update:modelValue', $event.value)"
      :placeholder="placeholder"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Conferences } from "@/enums/conferences";
import { Divisions } from "@/enums/divisions";
import { KeyValueModel } from "@/models/keyValueModel";

export default defineComponent({
  name: "form-dropdown",
  props: {
    label: {
      type: String,
      required: true,
    },
    placeholder: {
      type: String,
      required: false,
    },
    enumObj: {
      required: true,
    },
    currentValue: {
      type: String,
      required: false,
      default: null,
    },
    modelValue: [String],
  },
  data: function () {
    return {
      chosenValue: this.currentValue,
    };
  },
  methods: {
    transformEnum<T extends Divisions | Conferences>(
      enumData: T
    ): Array<KeyValueModel> {
      const values: Array<KeyValueModel> = [];
      for (let key in enumData) {
        values.push({ key: key, value: enumData[key] } as KeyValueModel);
      }

      return values;
    },
  },
});
</script>

<style scoped>
.input-text {
  width: 200px;
}
</style>
