<template>
  <div>
    <label>{{ label }}</label>
    <p-dropdown
      class="input-text"
      v-model="selectedValue"
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
import { Conferences } from "@/core/enums/conferences";
import { Divisions } from "@/core/enums/divisions";
import { KeyValueModel } from "@/core/models/keyValueModel";

export default defineComponent({
  name: "dropdown-default",

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
    value: {
      type: String,
      required: false,
      default: null,
    },
    modelValue: [String],
  },

  data: function () {
    return {
      selectedValue: this.value,
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
