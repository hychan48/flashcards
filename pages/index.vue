<template>
<v-container fluid>
  <v-row>


<!--  <info-card-->
<!--    :value="json[0]"-->
<!--  />-->
    <!--    <pre>{{graphItems}}</pre>-->
    <info-card
      v-for="row in json"
      :key="row.i"
      :value="row"

    />
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
