<template>
<v-container fluid>
  <v-row>


<!--  <info-card-->
<!--    :value="json[0]"-->
<!--  />-->
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

import data from "static/flashcards/dv1_manual.json"
import {mapMutations} from "vuex";

export default {
  name:'indexPage',

  computed: {
    // ...mapGetters(["pageTitle"]),
    json() {
      return data;
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
