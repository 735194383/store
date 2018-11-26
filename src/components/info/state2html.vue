<template>
  <div class='state2html'>
    <div v-html=html_store></div>
  </div>
</template>

<script>
export default {
  name: 'state2html',
  computed: {
    html_store: function () {
      var objStr = JSON.stringify(this.$store.state, null, 4)
      var html = objStr.replace(/\n/g, '<br>').replace(/\s/g, '&nbsp')
      return html
    }
  }
}
</script>

<style scoped>
.state2html {
  background-color: #f0f0f0;
  max-height: 300px;
  overflow: auto;
  margin-bottom: 1px;
}
</style>
