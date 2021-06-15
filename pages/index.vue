<template>
<v-container fluid
>
  <v-fab-transition>
    <v-btn
      v-show="false"
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
    v-scroll="onScroll"
  >


    <!--  <info-card-->
    <!--    :value="json[0]"-->
    <!--  />-->
    <!--    <pre>{{graphItems}}</pre>-->
    <v-col>
      <div>{{ graphItem.chartTitle }}</div>
      <v-expansion-panels
        focusable
        multiple

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
import graphItems from "static/flashcards/gen/graphItems.json"
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
