<template>
<v-container fluid
>
<!--  <nuxt-content :document="content"/>-->
  <div
    v-for="(author,i) of content" :key="i">
    <pre>{{author}}</pre>

  </div>
  <v-row
    v-for="tableItem in tableItems"
    :key="tableItem.chartTitle"
  >
    <v-col>
      <div>{{ tableItem.chartTitle }}</div>
      <v-expansion-panels
        focusable
        multiplesss

      >
        <v-expansion-panel
          v-for="(item,i) in tableItem.aOut"
          :key="i"
        >
          <v-expansion-panel-header>
            {{ item.title }}
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-card

            >
              <table
                v-html="item.htmlTable"
              />

              <v-card-subtitle v-if="item.notes">
                {{ item.notes }}
              </v-card-subtitle>

            </v-card>

          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-row>
</v-container>
</template>
<script>
import {mapMutations} from "vuex";
import styleMixin from "~/assets/styleMixin";
//json generated from another project
// import tableItems from "static/flashcards/gen/tableItems.json"
// const tableItems = [];

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
/* overly complicated workaround */
const devHotReload = {


};
if (process.env.NODE_ENV === 'development') {
  devHotReload.plugins = [
    function ({ store }) {
    console.log('this work?');
      // Only in development
        window.onNuxtReady(($nuxt) => {
          $nuxt.$on('content:update', ({ event, path }) => {
            // Refresh the store categories
            store.dispatch('fetchCategories')
          })
        })
    }
  ]
}
export default {

  name: 'tableItemsPage',
  mixins: [styleMixin, scrollingMixin,devHotReload],
  // tableItems,

  /**
   * https://github.com/nuxt/content/tree/dev/example/content
   * https://github.com/nuxt/content/blob/dev/example/pages/articles/_slug.vue
   * for using content for import
   */
  async asyncData(ctx) {
    const {$content,error} = ctx;
    // debugger
    // const content = await $content('tableItems',{deep:true,}).limit(10).fetch()
    // const content = await $content('tableItems',{deep:true,}).limit(10).fetch()
    // const content = await $content('tableItems').fetch()
    // const content = await $content('hello').fetch()
    const content = await $content(`tableItemsJSON5#${Date.now()}`).fetch()
      .catch(err => {
      console.error(err);
      error({ statusCode: 404, message: "Page not found" });
    });
    // console.log(content);
    console.log('content.length: ', content.length);
    return {content};


  },
  // async fetch() {
  //   const oData = await fetch(process.env.baseUrl + 'flashcards/static/tableItems.json');
  //   this.$options.tableItems = await oData.json();
  //   // console.log("graphItems", this.$options.graphItems);
  // },
  data() {
    return {
      // multiples: []
      content:undefined,
    }
  },
  computed: {

    tableItems() {

      return this.content;
      // this.$fetchState.pending;
      // return this.$options.tableItems;
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
    const pageTitle = 'Tables';
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
