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
          <pre>{{radioGroup}}</pre>
<!--          <pre>question: {{devFirstEntry.question}}</pre>-->
          <pre>{{devFirstEntry.question}}</pre>
          <v-radio-group v-model="radioGroup">
            <v-radio
              v-for="(answer,n) in devFirstEntry.answers"
              :key="n + answer"
              :label="`${answer}`"
              :value="n"
            ></v-radio>
          </v-radio-group>


        </v-card-text>
      </v-card>
    </v-col>
  </v-row>

</template>

<script>
import {aLoremObject60} from "static/multichoice60/lorem360words.mjs";


/**
 * I probably want state of sorts that would reflect the row...
 * answered, correct, wrong
 *
 *
 * Potential
 * https://vuetifyjs.com/en/components/paginations/#usage
 * https://vuetifyjs.com/en/components/subheaders/#menu
 */
const questionSetMixin = {

};

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
  },
  computed: {
    /**
     * @returns {{question: string, answers: string[], iAnswer: number}}
     */
    devFirstEntry() {
      return this.$options.aLoremObject60?.[0]
    }
  },
  data() {
    return {
      radioGroup: {},//let's see
    }
  },

}
</script>

<style scoped>

</style>
