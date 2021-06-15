export const styleMixin = {
  computed: {
    breakpointHeight() {
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
}
export default styleMixin;
