<template>
  <div class='topmenu'>
    <router-link to="/hello">hello</router-link>
    <router-link to="/about">about</router-link>
  </div>
</template>

<script>
export default {
  name: 'topmenu'
}
</script>

<style scoped>
.topmenu {
  float: left;
}
</style>
