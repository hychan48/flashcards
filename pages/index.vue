<template>
<v-container fluid>
  <pre>{{json}}</pre>
</v-container>
</template>
<script>

import data from "static/flashcards/dv1_manual.json"
export default {
  name:'indexPage',

  computed: {
    json() {
      return data;
    }
  },
}
</script>
