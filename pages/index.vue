<template>
<v-container fluid
>

  <div
    v-if="false"
    notes="<%=NODE_ENV%>"
    dev-notes="vue stuff dont work"
    >notes
  </div>
<!--  Pending: {{this.$fetchState.pending}}-->
  <v-fab-transition v-if="false">
    <v-btn
      v-if="false"
      absolute
      bottom
      color="pink"
      dark
      fab
      notes="fab is circular"
      right
      vshow="!hidden"
    >
      <!--      <v-icon>mdi-plus</v-icon>-->
      {{ showButton }} {{ offsetTop }}
    </v-btn>
  </v-fab-transition>
  <v-row
    v-for="graphItem in graphItems"
    :key="graphItem.chartTitle"
    v-scroll="onScroll"
  >
    <v-col>
      <div>{{ graphItem.chartTitle }}</div>
      <v-expansion-panels
        focusable
        multiplessss

      >
        <v-expansion-panel
          v-for="(item,i) in graphItem.aOut"
          :key="i"
        >
          <v-expansion-panel-header>
            {{ item.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card
              v-for="imgURL in item.imgURLs"
              :key="imgURL"
            >
              <v-img
                :max-height="breakpointHeight"
                :src="imgURL"
                contain
                width="auto"
              />

              <v-card-subtitle v-if="item.notes">
                {{ item.notes }}
              </v-card-subtitle>

            </v-card>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>


    <info-card
      v-if="1===12"
      v-for="row in json"
      :key="row.i"
      :value="row"

    />

    <!--    can be lazy and just use expansion bar...-->
    <!--    let's try the index thing-->
    <!--    <h1>sup</h1>-->
    <div
      v-for="section in graphItems"
      v-if="1===12"
      id="i"
      :key="section.chartTitle"
    >
      <div class="text-h1">{{ section.chartTitle }}</div>
      <pre>{{ section.aOut }}</pre>
      <!--      {{section}}-->
    </div>


  </v-row>
<!--  <pre>{{json}}</pre>-->
</v-container>
</template>
<script>
import {mapMutations} from "vuex";
//json generated from another project
// import graphItems from "static/flashcards/gen/graphItems.json"
import styleMixin from "~/assets/styleMixin";

// https://vuetifyjs.com/en/directives/scroll/#usage
export const scrollingMixin = {
  data: () => ({
    offsetTop: 0,
  }),
  computed: {
    showButton() {
      return this.offsetTop > 0;
    }
  },
  methods: {
    onScroll(e) {
      this.offsetTop = e.target.scrollTop
    },
  },
}

export default {
  name: 'indexPage',
  mixins: [styleMixin, scrollingMixin],
  data() {
    return {
      multiples: []
    }
  },
  //testing better way
  graphItems: [],//options
  async asyncData(ctx) {
    const {$content,error} = ctx;
    const aContent = await $content('graphItems').fetch()
      .catch(err => {
        console.error(err);
        error({ statusCode: 404, message: "Page not found" });
      });
    return {aContent};
  },
  // async fetch() {
  //   // alert(process.env.BASE_URL)
  //   // const router = this.$router;
  //   // debugger
  //   // const oData = await fetch('/flashcards/flashcards/gen/tableItems.json');// todo append the path / baseurl
  //   // const oData = await fetch(process.env.baseUrl + 'flashcards/gen/tableItems.json');// todo append the path / baseurl
  //   // console.log(('fetch options', this.$options.graphItems));
  //   // const oData = await fetch(process.env.baseUrl + 'flashcards/gen/graphItems.json');// todo append the path / baseurl
  //   const oData = await fetch(process.env.baseUrl + 'flashcards/static/graphItems.json');// todo append the path / baseurl
  //   // const oData = await fetch('http://localhost:3000/flashcards/flashcards/gen/tableItems.json')
  //   // const oData = await this.$axios('/static/flashcards/gen/tableItems.json')
  //   // debugger
  //   // alert(JSON.stringify(await oData.json()))
  //   this.$options.graphItems = await oData.json();
  //   // console.log("graphItems", this.$options.graphItems);
  // },
  computed: {
    // ...mapGetters(["pageTitle"]),
    // json() {
    //   // return data;
    //   return this.graphItems[0].aOut
    // },
    graphItems() {
      return this.aContent;
      //testing this logic for performance
      // this.$fetchState.pending;
      // return this.$options.graphItems;
      // if(!this.$options.graphItems){
      //   return this.$options.graphItems;
      // }else if(!this.$fetchState.pending){
      //   return this.$options.graphItems;
      // }else{
      //   return [];
      // }
      // return graphItems;
      //best way would be to cache this with a computed
      // if(!this.$fetchState.pending){
      //
      // }
      // if(this.$options.length > 0){
      //   this.$fetchState.pending;
      // }
      // !this.$fetchState.error
      // return this.$options.graphItems;

      // return graphItems;
    },
  },
  methods: {
    ...mapMutations(['setPageTitle', 'setDefaultPageTitle']),
    expandAll() {

    },

  },
  //maybe make this a mixin?
  head() {
    // alert('head is called')
    // const pageTitle = 'Cardiovascular Physiology Graphs';
    const pageTitle = 'Graphs';
    this.setPageTitle(pageTitle);

    return {
      title: pageTitle
    }
  },
  beforeDestroy() {
    this.setDefaultPageTitle();
  }
}
</script>
