<template>
  <v-app>
    <v-navigation-drawer v-model="drawer" app clipped color="blue">
      <v-list dense>
        <v-list-item link>
          <v-list-item-action>
            <v-icon color="white" large>account_circle</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title class="white--text">
              <h1>Annie</h1>
            </v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
      <v-list dense>
        <v-list-item v-for="(item, i) in items" :key="i" link>
          <!-- <v-list-item-action>
              <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>-->
          <v-list-item-content>
            <v-list-item-title class="white--text">{{ item }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar app clipped-left dense>
      <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title class="mr-12 align-center">
        <span class="title">UEDU CMS</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <v-container class="fill-height">
        <router-view></router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    drawer: null,
    items: ["Dashboard", "Textbooks", "Video Material", "Archive"],
    items2: [
      { picture: 28, text: "Joseph" },
      { picture: 38, text: "Apple" },
      { picture: 48, text: "Xbox Ahoy" },
      { picture: 58, text: "Nokia" },
      { picture: 78, text: "MKBHD" }
    ]
  }),

  mounted() {
    this.$router.push("/dashboard");
  }
};
</script>
  