<template>
  <v-app style="width:100%">
    <div class="blue--text">Dashboard</div>
    <v-container>
      <v-row style="margin-bottom: 30px">
        <v-col cols="5">
          <label>Youtube ID</label>
          <v-text-field dense placeholder="Video ID" solo></v-text-field>
          <label>Youtube Video Title</label>
          <v-text-field dense placeholder="Video Title" solo></v-text-field>
          <iframe
            width="460"
            height="315"
            src="https://www.youtube.com/embed/D3MJq8g8c3I"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </v-col>
        <v-col cols="3">
          <label>Time Logs</label>
          <v-card outlined>
            <v-card-text style="padding: 5px 25px;">
              1.1244

              <div style="float: right; font-size: 12px;">start | end</div>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="4">
          <label>Start Time</label>
          <v-text-field dense placeholder="Start Time" solo></v-text-field>
          <label>End Time</label>
          <v-text-field dense placeholder="End Time" solo></v-text-field>
          <label>Sentence</label>
          <v-textarea
            solo
            name="input-7-4"
            placeholder="Enter sentence here"
          ></v-textarea>
          <label>Translation</label>
          <v-textarea
            solo
            name="input-7-4"
            placeholder="Enter translation here"
          ></v-textarea>

          <v-btn depressed outlined color="primary">Play</v-btn> &nbsp;
          <v-btn depressed color="primary">Add / Update</v-btn>
        </v-col>
      </v-row>
      <v-simple-table>
        <template v-slot:default>
          <thead>
            <tr>
              <th>No</th>
              <th>Sentence</th>
              <th>Translation</th>
              <th>Start</th>
              <th>End</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>
                <router-link to="/videomaterial/addcontent/tips"
                  ><v-icon>check_circle</v-icon></router-link
                >
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-app>
</template>

<script>
export default {};
</script>
