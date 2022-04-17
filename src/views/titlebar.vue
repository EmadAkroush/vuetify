<script setup lang="ts">
import { ref } from 'vue-demi';
import signinpopup from '../views/signinpopup.vue';
var drawer = ref(false)

</script>

<template>
   <div>
     <v-navigation-drawer  v-model="drawer" app class="indigo"
     right
     >
       
    </v-navigation-drawer>
    <v-app-bar
     
      color="primary"
      dense
      dark
    >
    
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>

      <v-toolbar-title> قاره پیما آسیا </v-toolbar-title>

      <v-spacer></v-spacer>

  
      <signinpopup></signinpopup>
      <v-btn icon>

        <v-icon>mdi-magnify</v-icon>

      </v-btn>
     
      <v-menu
        left
        bottom
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>

        <v-list>
          <v-list-item
            v-for="n in 5"
            :key="n"
            @click="() => {}"
          >
            <v-list-item-title>Option {{ n }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-menu>
    </v-app-bar>
  </div>
</template>
