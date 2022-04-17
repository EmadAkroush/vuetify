<script lang="ts" setup>

</script>
<template>
    <div>
        <v-row width="100%">
            <v-col class="md-12 pa-md-8 margin-mobile">
                <p class="grey--text text-center display-1 ">
                    تور های ما
                </p>
            </v-col>
        </v-row>
        <v-row>
            <v-col class="md-4">
                <v-card  class="mx-auto my-4" max-width="374">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>

                    <v-img height="250" src="./شهر+تهران.jpg"></v-img>

                    <v-card-title> تور مشهد از تهران </v-card-title>

                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                            <div class="grey--text ms-4">
                                4.5 (413)
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            شرایط ویژه برای سازمان ها
                        </div>

                        <div>
                            چهار روز سه شب اقامت در هتل سه ستاره میلاد نور همراه با صیحانه
                        </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>زمان حرکت چهارشنبه 20 فروردین</v-card-title>

                    <v-card-text>
                        <v-chip-group active-class="deep-purple accent-4 white--text" column>
                            <v-chip>5:30PM</v-chip>

                            <v-chip class="purple">7:30PM</v-chip>

                            <v-chip>8:00PM</v-chip>

                            <v-chip>9:00PM</v-chip>
                        </v-chip-group>
                    </v-card-text>

                    <v-card-actions>

                        <router-link class="link" to="/form">
                            <v-btn color="deep-purple lighten-2" text @click="">
                                درخواست رزرو
                            </v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col class="md-4">
                <v-card  class="mx-auto my-4" max-width="374">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>

                    <v-img height="250" src="./yazd-city.jpg"></v-img>

                    <v-card-title>تور مشهد از یزد </v-card-title>

                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                            <div class="grey--text ms-4">
                                4.5 (413)
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            شرایط ویژه برای سازمان ها
                        </div>

                        <div>پنج روز چهار شب در هتل پنج ستاره الماس همراه با صبحانه و نهار </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>زمان حرکت شنبه 23 فروردین </v-card-title>

                    <v-card-text>
                        <v-chip-group active-class="deep-purple accent-4 white--text" column>
                            <v-chip>5:30PM</v-chip>

                            <v-chip>7:30PM</v-chip>

                            <v-chip class="purple">8:00PM</v-chip>

                            <v-chip>9:00PM</v-chip>
                        </v-chip-group>
                    </v-card-text>

                    <v-card-actions>
                        <router-link class="link" to="/form">
                            <v-btn color="deep-purple lighten-2" text @click="">
                                درخواست رزرو
                            </v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>
            <v-col class="md-4">
                <v-card  class="mx-auto my-4" max-width="374">
                    <template slot="progress">
                        <v-progress-linear color="deep-purple" height="10" indeterminate></v-progress-linear>
                    </template>

                    <v-img height="250" src="./0265c5a7f37e44b73d3c1798.jpg"></v-img>

                    <v-card-title> تور مشهد از کرمان </v-card-title>

                    <v-card-text>
                        <v-row align="center" class="mx-0">
                            <v-rating :value="4.5" color="amber" dense half-increments readonly size="14"></v-rating>

                            <div class="grey--text ms-4">
                                4.5 (413)
                            </div>
                        </v-row>

                        <div class="my-4 text-subtitle-1">
                            شرایط ویژه برای سازمان ها
                        </div>

                        <div>
                            شش روز پنج شب در هتل امام رضا مشهد همراه با تور گردشگری
                        </div>
                    </v-card-text>

                    <v-divider class="mx-4"></v-divider>

                    <v-card-title>زمان حرکت سه شنبه 26 فروردین </v-card-title>

                    <v-card-text>
                        <v-chip-group  active-class="deep-purple accent-4 white--text" column>
                            <v-chip>5:30PM</v-chip>

                            <v-chip>7:30PM</v-chip>

                            <v-chip>8:00PM</v-chip>

                            <v-chip class="purple">9:00PM</v-chip>
                        </v-chip-group>
                    </v-card-text>

                    <v-card-actions>
                          <router-link class="link" to="/form">
                            <v-btn color="deep-purple lighten-2" text @click="">
                           درخواست رزرو 
                           </v-btn>
                        </router-link>
                    </v-card-actions>
                </v-card>
            </v-col>

        </v-row>

    </div>
</template>
<style>
    @media only screen and (max-width: 600px) {
        .margin-mobile {
            margin-top: 20px;
        }
    }

    .link {
        text-decoration: none;
    }
</style>