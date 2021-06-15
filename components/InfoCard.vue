<template>
  <v-col notes="Practice Title"

         cols="auto"

         xl="8"
         offset-xl="2"

         lg="8"
         offset-lg="2"

         md="8"
         offset-md="2"

         sm="12"
         offset-sm="0"

         xs="12"
         offset-xs="0"




  >
    <v-card
        class="mx-auto"
    >
<!--      todo... should be for item here..-->
      <v-img
          :src="url"
          :max-height="breakpointHeight"
          width="auto"
          contain
      ></v-img>

      <v-card-title
        class="white--text text-align"
      >
        {{title}}
      </v-card-title>

      <v-card-subtitle v-if="notes">
        {{notes}}
      </v-card-subtitle>

<!--      todo add popup here-->
      <v-card-actions
        v-if="1===12"
      >
        <v-btn
            color="orange lighten-2"
            text
        >
          Explore
        </v-btn>

        <v-spacer></v-spacer>

        <v-btn
            icon
            @click="show = !show"
        >
          <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
        </v-btn>
      </v-card-actions>

      <v-expand-transition>
        <div v-show="show">
          <v-divider></v-divider>

          <v-card-text>
            I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for
            sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you
            add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to
            escape.
          </v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>
<script>

import styleMixin from "~/assets/styleMixin";

export default {
  name: 'info-card',
  mixins:[styleMixin],
  props: {
    value:{
      required:true,
    }

  },
  data() {
    return {
      show: false
    }
  },
  /**
    v1

   {
    "i": 3,
    "index": 4,
    "title": "Wigger’s diagramme",
    "notes": "Note the LV and aortic pressure waveforms are\n  frequently drawn incorrectly.",
    "url": "https://ketaminenightmares.com/pex/other/memorisat…rdiovascular_physiology_graphs_files/image004.jpg"
  },
   */
  computed:{
    //quick n dirty copy pasta
    title(){
      return this.$props.value.title;
    },
    notes(){
      return this.$props.value.notes;
    },
    url(){
      return this.$props.value.url;
    },
  }
}
</script>
