<template>
  <v-row>
    <v-col notes="Multi Choice 60">
      <v-card
        hover
      >

        <v-card-title notes="Multi Choice 60"

        >
          <v-icon
            left
          >
            mdi-bell-ring
          </v-icon>
          <span class="title font-weight-light">
        Multi Choice 60
      </span>
        </v-card-title>
        <v-card-text>
          <pre>{{$options.aLoremObject60}}</pre>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
import {aLoremObject60} from "static/multichoice60/lorem360words.mjs";

export default {
  name: "multichoice60",

  //lazy way of importing
  // async fetch() {
  //   //maybe use $content later
  //   const oData = await fetch(process.env.baseUrl +
  //     'multichoice60/lorem360words.mjs'
  //   );
  //   console.log(oData);
  //   // this.$options.graphItems = await oData.json();
  // },
  created() {
    this.$options.aLoremObject60 = aLoremObject60;
  }

}
</script>

<style scoped>

</style>
