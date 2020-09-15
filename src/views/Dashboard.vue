<template>
  <v-app style="width:100%">
    <div class="blue--text">Dashboard</div>
    <v-container>
      <v-row>
        <v-col cols="9">
          <v-tabs>
            <v-tab>UPDATES</v-tab>
            <v-tab>ERROR REPORT</v-tab>
            <v-tab-item>
              <v-simple-table style="background-color:#FFFFEF" class="mt-5">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Material</th>
                      <th>Activity</th>
                      <th>By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01-01-2020</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-tab-item>
            <v-tab-item>
              <v-simple-table style="background-color:#FFF3F7" class="mt-5">
                <template v-slot:default>
                  <thead>
                    <tr>
                      <th>Date</th>
                      <th>Material</th>
                      <th>Unit</th>
                      <th>Error</th>
                      <th>Correction</th>
                      <th>By</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>01-01-2020</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                      <td>test</td>
                    </tr>
                  </tbody>
                </template>
              </v-simple-table>
            </v-tab-item>
          </v-tabs>
        </v-col>
        <v-col cols="3">
          <div class="text--secondary mb-6 mt-5">CREATE</div>
          <v-card color="#ECFBFF" class="mb-10">
            <v-container>
              <v-row align="center" justify="center">
                <v-col>
                  <v-btn
                    block
                    class="white--text"
                    color="#00ABDA"
                    @click="curriculumDialog = true"
                  >+ CURRICULUM</v-btn>
                </v-col>
                <v-col>
                  <v-btn block class="white--text" color="#00ABDA">+ VIDEO MATERIAL</v-btn>
                </v-col>
              </v-row>
            </v-container>
          </v-card>
          <div class="text--secondary mb-3 mt-5">IMPORTANT !!</div>
          <v-card color="#ECFBFF" height="100%"></v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-dialog v-model="curriculumDialog" max-width="600">
      <v-card class="pa-5">
        <div class="blue--text">ADD NEW CURRICULUM</div>
        <v-container>
          <div class="text--secondary">Title</div>
          <v-row>
            <v-col cols="6">
              <v-text-field outlined label="EN" dense></v-text-field>
            </v-col>
            <v-col cols="6">
              <v-text-field outlined label="KR" dense></v-text-field>
            </v-col>
          </v-row>
          <div class="text--secondary">Applicable Level/s</div>
          <v-row>
            <v-col cols="6">
              <v-select :items="levels" outlined dense label="From"></v-select>
            </v-col>
            <v-col cols="6">
              <v-select :items="levels" outlined dense label="To"></v-select>
            </v-col>
          </v-row>
          <div class="text--secondary">Description</div>
          <v-row>
            <v-col cols="6">
              <v-textarea outlined dense label="EN"></v-textarea>
            </v-col>
            <v-col cols="6">
              <v-textarea outlined dense label="KR"></v-textarea>
            </v-col>
          </v-row>
          <v-row justify="end">
            <v-btn color="grey" outlined class="mr-3" @click="curriculumDialog = false">Cancel</v-btn>
            <v-btn color="#00ABDA" class="white--text">Submit</v-btn>
          </v-row>
        </v-container>
      </v-card>
    </v-dialog>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      curriculumDialog: false,
      levels: [
        "Low Beginner",
        "Beginner",
        "High Beginner",
        "Low Intermediate",
        "Intermediate",
        "High Intermediate",
        "Pre Advance",
        "Advance",
        "Post Advance"
      ]
    };
  }
};
</script>
  