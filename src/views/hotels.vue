 <script lang="ts" setup>

</script>
<template>
     <div>
       <v-row width="100%">
            <v-col class="md-12 pa-md-8 margin-mobile">
                <p class="grey--text text-center display-1 ">
                   هتل های طرف قرارداد ما 
                </p>
            </v-col>
        </v-row>


    <v-card
    
    >
    <v-tabs
      color="deep-purple accent-4"
       
    >
      <v-tab>Landscape</v-tab>
      <v-tab>City</v-tab>
      <v-tab>Abstract</v-tab>

      <v-tab-item
        v-for="n in 3"
        :key="n"
      >
        <v-container fluid>
          <v-row>
            <v-col
              v-for="i in 6"
              :key="i"
              cols="12"
              md="4"
            >
            
            </v-col>
          </v-row>
        </v-container>
      </v-tab-item>
    </v-tabs>
  </v-card>
  </div>
</template>
<style>

</style>