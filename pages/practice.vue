<template>

<v-row>
<v-col notes="Practice Title"

       cols="auto"


>
  <v-card
    class="mx-auto"
    smax-width="300"

  >
    <v-img
      ssrc="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      src="https://ketaminenightmares.com/pex/other/memorisation_material/graphs/cardiovascular_physiology_graphs_files/image001.jpg"
      :max-height="height"
      width="auto"
      contain
    ></v-img>

    <v-card-title

    >
      Top western road trips
    </v-card-title>

    <v-card-subtitle>
      1,000 miles of wonder {{height}}
    </v-card-subtitle>

    <v-card-actions>
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
          I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</v-col>
</v-row>
</template>

<script>
export default {
  name: "practice",
  computed: {
    height() {
      switch (this.$vuetify.breakpoint.name) {
        case 'xs':
          // return 220
          return null
        case 'sm':
          return 400
        case 'md':
          return 500
        case 'lg':
          return 600
        case 'xl':
          return 800
      }
    },
  },
  data() {
    return {
      show: false
    }
  },
}
</script>

<style scoped>

</style>
