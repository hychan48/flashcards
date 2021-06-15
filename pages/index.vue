<template>
<v-container fluid>
  <v-row dense>


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
export default {
  name:'indexPage',

  computed: {
    json() {
      return data;
    },
  },
}
</script>
