<template>
  <v-row dense>
    <v-col
      v-for="card in cardItems"
      :key="card.title"
      :cols="card.flex"
    >
      <v-card>
        <v-img
          :src="card.src"
          class="white--text align-end"
          gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
          height="200px"
        >
          <v-card-title v-text="card.title"></v-card-title>
        </v-img>

        <v-card-actions>
          <v-spacer></v-spacer>

          <v-btn icon>
            <v-icon>mdi-heart</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-bookmark</v-icon>
          </v-btn>

          <v-btn icon>
            <v-icon>mdi-share-variant</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
export default {
  name: "flashcard_two",
  computed: {
    cardItems() {
      const tmp = [  { title: 'Favorite road trips', src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg', flex: 6 },

        // { title: 'Best airlines', src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg', flex: 6 },]
        { title: 'Best airlines', src: 'https://ketaminenightmares.com/pex/other/memorisation_material/graphs/cardiovascular_physiology_graphs_files/image001.jpg', flex: 6 },]

      return tmp;
      return tmp[0]
    }
  },
}
</script>

<style scoped>

</style>
