<script lang="ts" setup>
  import {
    ref
  } from '@vue/composition-api';

  var dialog = ref(false)
</script>
<template>
  <div class="text-center">
    <v-dialog v-model="dialog" width="500" >
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="primary" dark dense v-bind="attrs" v-on="on" active>
          ثبت نام ورود
          <v-icon>mdi-exit-to-app</v-icon>
        </v-btn>


      </template>

      <v-card height="200px" class="d-flex flex-column justify-center
" >

            
            <v-form 
            ref="form" 
            v-model="valid" 
            lazy-validation
            class="px-6 login-form align-center  "
            width="100%"
            >
            
          <v-text-field class=""  v-model="name" :counter="11" :rules="number" label="شماره تلفن" required></v-text-field>
          
        </v-form>


       

        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color=" primary align-end"  class="mt-14" text @click="dialog = false">
            ثبت نام ورود
          </v-btn>
        </v-card-actions>
    
      </v-card>
    </v-dialog>
  </div>
</template>
<style>

</style>