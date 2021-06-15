<template>
<v-container fluid>
  <v-row>


<!--  <info-card-->
<!--    :value="json[0]"-->
    <!--  />-->
    <!--    <pre>{{graphItems}}</pre>-->
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
      v-for="section,i in graphItems"
      :id="i"
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

//json generated from another project
import graphItems from "static/flashcards/gen/graphItems.json"
import {mapMutations} from "vuex";

export default {
  name:'indexPage',

  computed: {
    // ...mapGetters(["pageTitle"]),
    json() {
      // return data;
      return this.graphItems[0].aOut
    },
    graphItems() {
      return graphItems;
    },
  },
  methods:{
    ...mapMutations(['setPageTitle','setDefaultPageTitle'])
  },
  //maybe make this a mixin?
  head() {
    // alert('head is called')
    const pageTitle = 'Cardiovascular Physiology Graphs';
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
