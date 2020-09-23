<template>
  <v-app style="width: 100%">
    <div class="blue--text">Add Tips</div>
    <v-container>
      <v-row>
        <v-col cols="6">
          <label>Tips</label>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>This is the title</v-list-item-title>
              <v-list-item-subtitle
                >Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-col>
        <v-col cols="6">
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Start Time</v-list-item-title>
              <v-list-item-subtitle>1.1234</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>End Time</v-list-item-title>
              <v-list-item-subtitle>3.1234</v-list-item-subtitle>
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Sentence</v-list-item-title>
              <v-list-item-subtitle
                >Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
          <v-list-item two-line>
            <v-list-item-content>
              <v-list-item-title>Translation</v-list-item-title>
              <v-list-item-subtitle
                >Lorem ipsum dolor sit amet, consectetur adipiscing
                elit.</v-list-item-subtitle
              >
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
      <v-btn color="error">Delete</v-btn> &nbsp;
      <v-dialog v-model="dialog" persistent max-width="600">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="primary" dark v-bind="attrs" v-on="on">
            Add / Update
          </v-btn>
        </template>
        <v-card>
          <v-card-title class="headline">Add / Update Tips</v-card-title>
          <v-card-text>
            <v-textarea
              solo
              name="input-7-4"
              placeholder="Enter tips here"
            ></v-textarea>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="error" @click="dialog = false">Close</v-btn>
            <v-btn color="primary" @click="dialog = false">Add / Update</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
