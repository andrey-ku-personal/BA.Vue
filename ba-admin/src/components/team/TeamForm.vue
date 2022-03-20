<template>
  <form class="form" @submit.prevent>
    <div class="grid">
      <div class="col-6">
        <form-input-text label="Name" v-model.trim="team.name" />
      </div>
      <div class="col-6">
        <label>Logo</label>
        <!-- <p-file-loader
          mode="basic"
          name="demo[]"
          url="http://localhost:5031/File/Download"
          accept="image/*"
          @change="onUpload"
        /> -->
      </div>
    </div>

    <div class="grid">
      <div class="col-6">
        <form-input-text label="City" v-model.trim="team.city" />
      </div>
      <div class="col-6">
        <form-input-text label="Code" v-model.trim="team.code" />
      </div>
    </div>

    <div class="grid">
      <div class="col-6">
        <form-input-text label="Stadium" v-model.trim="team.stadium" />
      </div>
      <div class="col-6">
        <form-input-number label="Founded" v-model.number="team.founded" />
      </div>
    </div>

    <div class="grid">
      <div class="col-6">
        <form-dropdown
          v-model="team.conference"
          :currentValue="team.conference"
          label="Conference"
          :enumObj="conferences"
          placeholder="Select a conference"
        />
      </div>
      <div class="col-6">
        <form-dropdown
          v-model="team.division"
          :currentValue="team.division"
          label="Division"
          :enumObj="divisions"
          placeholder="Select a division"
        />
      </div>
    </div>
    <button @click="save">Save</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TeamModel } from "@/models/teamModel";
import { Divisions } from "@/enums/divisions";
import { Conferences } from "@/enums/conferences";
import { FileModel } from "@/models/fileModel";

export default defineComponent({
  name: "team-form",

  data: function () {
    return {
      team: {
        id: 0,
        name: "",
        code: "",
        conference: Conferences.Eastern,
        division: Divisions.Atlantic,
        city: "",
        stadium: "",
        founded: 0,
        logo: {} as FileModel,
      } as TeamModel,

      conferences: Conferences,
      divisions: Divisions,
    };
  },

  methods: {
    oUpload(event: any) {
      console.log(event);
    },

    //   async save() {
    //   //   await axios({
    //   //     method: "POST",
    //   //     url: "http://localhost:5031/team/create",
    //   //     data: JSON.stringify(this.team),
    //   //     headers: { "Content-Type": "application/json" },
    //   //   })
    //   //     .then((response) => {
    //   //       if (response.status === 200) {
    //   //         this.team = response.data.JSON as TeamModel;
    //   //       }
    //   //     })
    //   //     .catch(function (error) {
    //   //       console.log(error);
    //   //     });
    //   // },
    //   console.log(this.team);
    //},
  },
});
</script>

<style scoped>
.form {
  width: 480px;
  border: #ffc107 1px solid;
  border-radius: 1em;
  padding: 20px;
}
</style>
