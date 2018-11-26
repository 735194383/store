<template>
  <div id="app">
    <div class="top">
      <topmenu/>
      <accountmenu/>
    </div>
    <div class="main">
      <router-view name='main'/>
    </div>
    <div class="foot">
      foot
    </div>
    <info/>
  </div>
</template>

<script>
import topmenu from '@/components/top/topmenu/topmenu.vue'
import accountmenu from '@/components/top/accountmenu/accountmenu.vue'
import info from '@/components/info/info.vue'
export default {
  components: { topmenu, accountmenu, info },
  name: 'App'
}
</script>

<style>
#app {
  border: 1px solid lightgray;
}

#app>div {
  border: 1px solid lightgray;
  margin: 1px;
  overflow: auto;
}
.main {
  min-height: 200px;
  overflow: auto;
  background-image: url('./assets/velociraptor.jpg');
  background-size:  auto 100%;
  background-repeat: no-repeat;
  background-position: center;
}
</style>
