<template>
  <form class="form" @submit.prevent>
    <header-default>
      <template v-slot:buttons>
        <div class="form-buttons">
          <p-button
            v-if="team.id === 0"
            label="Save"
            class="p-button-outlined p-button-success"
            @click="save()"
          />
          <p-button
            v-else
            label="Update"
            class="p-button-outlined"
            @click="update()"
          />
          <p-button label="Cancel" class="p-button-outlined p-button-danger" />
        </div>
      </template>
    </header-default>

    <div class="form-widgets">
      <div class="general-info-widget">
        <div class="grid">
          <div class="col-6">
            <input-text label="Name" v-model.trim="team.name" />
          </div>
          <div class="col-6">
            <input-text label="Code" v-model.trim="team.code" />
          </div>
        </div>

        <div class="grid">
          <div class="col-6">
            <input-text label="City" v-model.trim="team.city" />
          </div>
          <div class="col-6">
            <input-text label="Stadium" v-model.trim="team.stadium" />
          </div>
        </div>

        <div class="grid">
          <div class="col-6">
            <dropdown-default
              v-model="team.conference"
              :value="team.conference"
              label="Conference"
              :enumObj="conferences"
              placeholder="Select a conference"
            />
          </div>
          <div class="col-6">
            <dropdown-default
              v-model="team.division"
              :value="team.division"
              label="Division"
              :enumObj="divisions"
              placeholder="Select a division"
            />
          </div>
        </div>

        <div class="grid">
          <div class="col-6">
            <input-number label="Founded" v-model.number="team.founded" />
          </div>
        </div>
      </div>

      <div class="logo-widget">
        <upload-image
          accept="image/*"
          label="Logotype"
          :value="team.logo"
          @upload="onFileUpload"
        />
      </div>
    </div>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { TeamModel } from "@/core/models/teamModel";
import { Divisions } from "@/core/enums/divisions";
import { Conferences } from "@/core/enums/conferences";
import { FileModel } from "@/core/models/fileModel";
import axios from "axios";

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
        logo: { id: 0, name: "", link: "" } as FileModel,
      } as TeamModel,

      conferences: Conferences,
      divisions: Divisions,
    };
  },

  methods: {
    async save() {
      await axios
        .post("http://localhost:5031/team/create", this.team)
        .then((response) => {
          if (response.status === 200) {
            this.team = response.data as TeamModel;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    async update() {
      await axios
        .post("http://localhost:5031/team/update", this.team)
        .then((response) => {
          if (response.status === 200) {
            console.log(response.data);
            this.team = response.data as TeamModel;
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    },

    // async cancel(){},

    onFileUpload(file: FileModel) {
      this.team.logo = file;
    },
  },
});
</script>

<style scoped>
.form-widgets {
  display: flex;
  flex-direction: row;
  column-gap: 2em;
  padding: 1em;
}

.general-info-widget {
  width: 480px;
  border: #ffc107 1px solid;
  border-radius: 1em;
  padding: 20px;
}

.logo-widget {
  width: 350px;
  border: #ffc107 1px solid;
  border-radius: 1em;
  padding: 20px;
}

.form-buttons {
  display: flex;
  flex-direction: row;
  column-gap: 1em;
  margin-right: 1em;
}
</style>
