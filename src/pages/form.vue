<script lang="ts" setup>

</script>
<template>
  <div class="ma-md-16 ma-5">
    <v-sheet color="white" elevation="3" height="auto" outlined rounded shaped width="100%">
      <v-form class="pa-4 px-md-14">
        <v-row>
          <v-col md="6" sm="12" cols="12">
            <v-text-field label="نام"  prepend-icon="mdi-account"></v-text-field>
          </v-col>
          <v-col md="6" xs="12" sm="12" cols="12">
            <v-text-field label="نام خانوادگی"  prepend-icon="mdi-account"></v-text-field>
          </v-col>
          <v-col md="6" sm="12" cols="12">
            <v-text-field label="تعداد نفرات" prepend-icon="mdi-account-multiple"></v-text-field>
          </v-col>
        </v-row>

        <v-row>
          <v-col>
            <v-radio-group  row>
              <label class="pr-5"> نوع وسیله سفر </label>
              <v-radio label="قطار" value="radio-1"></v-radio>
              <v-radio label="اتوبوس" value="radio-2"></v-radio>
              <v-radio label="هواپیما" value="radio-3"></v-radio>
            </v-radio-group>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" sm="12" cols="12">
            <v-text-field label="نام سازمان محل خدمت "  prepend-icon="mdi-account-multiple">
            </v-text-field>
          </v-col>
          <v-col md="6" sm="12" cols="12">
            <v-text-field label="شماره موبایل"  prepend-icon="mdi-cellphone"></v-text-field>
          </v-col>
        </v-row>
        <v-row>
          <v-col md="6" sm="12" cols="12" >
            <v-file-input truncate-length="19" label="درصورت داشتن معرفی نامه آن را بارگذاری فرمایید"></v-file-input>
          </v-col>
        </v-row>
        <v-row>
          <v-btn  class="my-4 mr-12 deep-purple accent-4" dense
      dark @click="" width="150px">ارسال </v-btn>
        </v-row>


      </v-form>
    </v-sheet>
  </div>
</template>
<style>

</style>