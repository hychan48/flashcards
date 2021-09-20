<template>
<!--  v-scroll.self="onScroll"-->
  <v-row
    id="rowId"
    sclass="overflow-y-auto"
  >
    <v-col notes="Multi Choice 60" cols="8"
    >
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
        <v-card-text


        >
<!--          <pre>{{devFiveEntries}}</pre>-->
<!--          <pre>{{aQuestionSets}}</pre>-->
          <div
            v-for="(entry,i) in aQuestionSets"
            :key="entry.question + i"
            :ref="entry.question + i"
            :id="entry.question + i"
          >
<!--            {{entry.question + i}}-->
            {{entry.question}}
            <v-radio-group v-model="radioGroups[i]">
              <v-radio
                v-for="(answer,n) in entry.answers"
                :key="n + answer"
                :label="`${answer}`"
                :value="n"
              ></v-radio>
            </v-radio-group>
          </div>
          <hr/>
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
    <v-col notes="Nav Demo" cols="4" sssclass="float-right">
      <v-card
        hover
        ssclass="float-right"


      >

        <v-card-title notes="Nav Demo"

        >
          <v-icon
            left
          >
            mdi-bell-ring
          </v-icon>
          <span class="title font-weight-light">
            Nav Demo
          </span>
        </v-card-title>
        <v-card-text>
          <pre>todo make absolute / prettier</pre>
<!--          <pre>{{radioGroups}}</pre>-->
<!--          <pre>{{questionSetStates}}</pre>-->
          <div
            v-for="buttonState in questionSetStates"
          >
            <v-btn
              :color="buttonState.color"
              @click="navToQuestion(buttonState.id)"
            >
              {{buttonState.id}}
              <v-icon>
                {{buttonState.colorMdiIcon}}
              </v-icon>
            </v-btn>
          </div>

          <hr/>
          <pre>offsetTop: {{offsetTop}} - hash / anchor not working..
scroll not being triggered</pre>
          <a
            href="http://localhost:3000/multichoice60#leo4"
            target="_blank"
          >http://localhost:3000/multichoice60#leo4</a>
          <v-btn
            @click="navToQuestion('leo4')"
          >
            dev navToQuestion leo4
          </v-btn>
          <v-btn
            @click="devSandbox"
          >
            devSandbox
          </v-btn>
        </v-card-text>

      </v-card>
    </v-col>



<!--    https://vuetifyjs.com/en/api/v-fab-transition/ -->
    <v-fab-transition>
      <v-btn
        color="primary"
        fixed
        bottom
        right
        v-show="showFab"
        v-scroll="onScroll"
        @click="toTop"
        fab

        aria-label="Nav to top"
        title="Nav to top"

      >
        <v-icon>mdi-chevron-up</v-icon>
      </v-btn>
    </v-fab-transition>

<!--    <v-btn-->
<!--      color="primary"-->
<!--      fixed-->
<!--      bottom-->
<!--      left-->
<!--      v-show="showFab"-->
<!--      v-scroll="onScroll"-->
<!--      @click="toTop"-->
<!--      fab-->

<!--      aria-label="Nav to top"-->
<!--      title="Nav to top"-->
<!--      key="s"-->

<!--    >-->
<!--      <v-icon>mdi-chevron-up</v-icon>-->
<!--    </v-btn>-->

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
  /**
   * Initialize the test object.. lazy way
   */
  created() {
    this.$options.aLoremObject60 = aLoremObject60;
    // this.radioGroups = new Array(aLoremObject60.length);//production
    this.radioGroups = new Array(this.aQuestionSets.length + 1);//lazy dev way
  },
  /*
   Must be missing a directive or something... this seems wrong
   */
  async mounted(){
    await this.$nextTick();
    const {hash} = this.$route;
    if(hash){
      await this.$vuetify.goTo(hash);
    }
    // console.log(hash);
  },
  computed: {
    //todo refactor the scroll button
    showFab(){
      return this.offsetTop > 0;

    },
    /**
     * @returns {{question: string, answers: string[], iAnswer: number}}
     */
    devFirstEntry() {
      return this.$options.aLoremObject60?.[0]
    },
    devFiveEntries() {
      return this.$options.aLoremObject60?.slice(0,5);
    },
    aQuestionSets(){
      return this.$options.aLoremObject60;
      // return this.devFiveEntries;
    },

    /**
     * Should convert right and wrong. maybe also add key generated for refs
     * interesting..
     *
     * so if null.. not answered i guess?
     */
    questionSetStates(){
      const aOut = this.aQuestionSets.map((row,i) =>{

        const {question,answers,iAnswer} = row;
        const iGivenAnswer = this.radioGroups[i];
        const tmp = {
          //should make it a method or somethign
          id:question+i,

          /* if exact success. else null stay neutral */
          //color to be populated
          // color:iGivenAnswer === iAnswer ? 'success' : 'error'
        }
        //pesky 0 - annoying type i guess example here
        // console.log('type of ',typeof iGivenAnswer);
        if(typeof(iGivenAnswer) != 'undefined' && iGivenAnswer != null){
          tmp.color = iGivenAnswer === iAnswer ? 'success' : 'error';
          tmp.colorMdiIcon = iGivenAnswer === iAnswer ? 'mdi-check-bold' : 'mdi-close';

        }
        // console.log(iGivenAnswer,tmp);
        return tmp;

      });


      return aOut;

    },
  },
  data() {
    return {
      radioGroup: {},//let's see
      radioGroups: [],//size initialized on crete

      //scroll
      offsetTop:0,
    }
  },
  methods: {
    /**
     * https://vuetifyjs.com/en/features/scrolling/#use-with-router
     :ref="entry.question + i"
     Lorem0

     http://localhost:3000/multichoice60#leo4

     questionable hash?
     https://vuetifyjs.com/en/features/scrolling/#use-with-router
     * @param ref
     */
    navToQuestion(ref) {
      // debugger
      // this.$vuetify.goTo(this.$refs[ref]);
      // this.$vuetify.goTo(this.$refs['leo4']);
      // this.$vuetify.goTo('#leo4');
      try{
        // console.log(typeof this.$refs.leo4);
        // console.log(this.$refs.leo4[0]);
        // this.$vuetify.goTo(this.$refs.leo4[0]);//since when? cuz it's a div?
        this.$vuetify.goTo(this.$refs[ref][0]);
        console.log(this.$route);
      }catch (e){
        console.error(e);

      }



    },
    devSandbox(){
      console.log(this.$route);
      console.log(this.$route.hash);

    },

    /**
     * scroll directive?
     * https://vuetifyjs.com/en/directives/scroll/#usage
     * update anchor / hash while scrolling pass
     *
     * fix later... giving up now
     */

    onScroll(e){
      // console.log('scroll',e);
      // debugger
      // this.offsetTop = e.target.scrollTop
      if(process.client){
        this.offsetTop = window.scrollY;
      }


    //  window.scrollY



    },
    toTop(e){
      this.$vuetify.goTo(0);
    },
  },

}
</script>

<style scoped>

</style>
