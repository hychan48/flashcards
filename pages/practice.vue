<template>

<v-row>
  <info-card :height="height" :show="show"/>
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

