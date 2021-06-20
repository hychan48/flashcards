export default function ({ store }) {
  console.log('this work?');
  // Only in development
  window.onNuxtReady(($nuxt) => {
    $nuxt.$on('content:update', ({ event, path }) => {
      // Refresh the store categories
      store.dispatch('fetchCategories')
    })
  })
};
