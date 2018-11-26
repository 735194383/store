<template>
  <div class='info'>
    <state2html/>
    <accountinfo/>
    <query/>
    <state/>
    <result/>
    <submitquery/>
  </div>
</template>

<script>
import state2html from '@/components/info/state2html.vue'
import accountinfo from '@/components/info/accountinfo.vue'
import query from '@/components/info/query.vue'
import state from '@/components/info/state.vue'
import result from '@/components/info/result.vue'
import submitquery from '@/components/info/submitquery.vue'
export default {
  components: {
    state2html,
    accountinfo,
    query,
    state,
    result,
    submitquery
  },
  name: 'info'
}
</script>

<style scoped>
.info {
  border: 1px solid lightgray;
  overflow: auto;
}
.info>div {
  background-color: #f0f0f0;
  margin-bottom: 1px;
}
</style>
