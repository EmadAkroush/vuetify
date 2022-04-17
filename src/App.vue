<script setup lang="ts">
import titlebar from './views/titlebar.vue'
import ourtor from './views/ourtor.vue'
import  useRouter   from 'vue-router';

</script>

<template>
  <v-app>
<v-main>
  <titlebar>

  </titlebar>
   
<router-view></router-view>
    
   

  </v-main>

 
  </v-app>
  
</template>

<style></style>
