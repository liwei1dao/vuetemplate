<template>
  <v-app>
    <v-app-bar       
      color="deep-purple accent-4"
      dense
      dark>
      <v-toolbar-title>AITools</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-tabs align-with-title>
          <v-tab to="/index">Work</v-tab>
          <v-tab to="/video">New</v-tab>
        </v-tabs>
    </v-app-bar>
    <v-main>
      <router-view></router-view>   
    </v-main>
  </v-app>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
    name: 'Layout',
})
</script>
<style >
    
</style>