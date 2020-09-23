<template>
  <v-app style="width: 100%">
    <div class="blue--text">Video Material</div>
    <v-container>
      <router-link to="/videomaterial/addcontent"
        ><v-btn depressed color="primary">Add New</v-btn></router-link
      >
      <v-simple-table class="mt-5">
        <template v-slot:default>
          <thead>
            <tr>
              <th>No</th>
              <th>Video ID</th>
              <th>Video Title</th>
              <th>Date Created</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01-01-2020</td>
              <td>test</td>
              <td>test</td>
              <td>test</td>
              <td>
                <router-link to="/videomaterial/addcontent"
                  ><v-icon>check_circle</v-icon></router-link
                >
                <v-icon>block</v-icon>
              </td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </v-container>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      headers: [
        { text: "Video ID" },
        { text: "Video Title" },
        { text: "Date Created" },
        { text: "Actions" }
      ],
      videos: [
        {
          id: "m9_70poLEvU",
          title: "Why She Fell in Love With You | Simon Sinek",
          link: "https://www.youtube.com/watch?v=m9_70poLEvU",
          created_at: "09-17-2020"
        },
        {
          id: "aLJMEs_9ZZE",
          title: "In the Bag: Emma Watson",
          link: "https://www.youtube.com/watch?v=m9_70poLEvU",
          created_at: "09-17-2020"
        }
      ]
    };
  }
};
</script>
