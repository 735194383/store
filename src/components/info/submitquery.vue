<template>
  <div class='submitquery'>
    <button @click="submitquery">submit query</button>
  </div>
</template>

<script>
export default {
  name: 'submitquery',
  data: function () {
    return {
    }
  },
  methods: {
    submitquery: function () {
      this.$store.dispatch('submitquery')
    }
  }
}
</script>

<style scoped>
</style>
