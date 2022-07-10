<script setup lang="ts">
import slider from "../components/slider.vue";
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
</script>
<template>
<v-app>
    <v-navigation-drawer app>
      <!--  -->
      <slider/>
    </v-navigation-drawer>

    <v-app-bar app>
      <!-- -->
      <v-btn class="text-none" stacked>
        <v-badge content="2" color="error">
          <v-icon icon="mdi-bell-outline" color="green"></v-icon>
        </v-badge>
      </v-btn>
    </v-app-bar>
      
    <!-- Sizes your content based upon application components -->
    <v-main>

      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
</v-app>
</template>