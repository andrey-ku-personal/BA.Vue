<template>
  <div>
    <div class="management">
      <p-file-upload
        mode="basic"
        name="demo[]"
        :customUpload="true"
        @uploader="onUpload"
      />
    </div>

    <div v-if="url" class="image-preview">
      <img :src="url" width="200" height="200" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FileModel } from "@/core/models/fileModel";
import axios from "axios";

export default defineComponent({
  name: "upload-image",

  emits: ["upload"],

  props: {
    label: {
      type: String,
      required: true,
    },
    value: {
      type: Object,
      required: true,
    },
  },
  data: function () {
    return {
      file: this.value as FileModel,
      url: "",
    };
  },

  methods: {
    async onUpload(event: any): Promise<void> {
      let formData = new FormData();
      formData.append("file", event.files[0]);

      /*TODO us constant for url and api */
      await axios
        .post("http://localhost:5031/File/Download", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(async (response) => {
          if (response.status === 200) {
            this.file = response.data as FileModel;
          }
        })
        .catch(function (error) {
          console.log(error);
        });

      if (this.file) {
        await this.uploadFile(this.file);
      }

      this.$emit("upload", this.file);
    },

    async uploadFile(fileModel: FileModel): Promise<void> {
      await axios
        /*TODO us constant for url and api */
        .post("http://localhost:5031/File/Upload", fileModel, {
          responseType: "blob",
        })
        .then((response) => {
          if (response.status === 200) {
            const blob = new Blob([response.data]);
            this.url = URL.createObjectURL(blob);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },
  },
});
</script>

<style scoped>
.management {
  background-color: #1d418a17;
  padding: 0.5em;
}

.image-preview {
  display: flex;
  justify-content: center;
}
</style>
