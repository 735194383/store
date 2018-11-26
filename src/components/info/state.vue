<template>
  <div class='state'>
    <table>
      <tr>
        <td>
          <button @click="setstate">setstate</button>
        </td>
        <td>
          <input v-model="state" placeholder='null to null'/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'state',
  data: function () {
    return {
      state: null
    }
  },
  methods: {
    setstate: function () {
      let state = null
      if (this.state === 'null') {
        state = null
      } else {
        state = this.state
      }
      this.$store.commit('setstate', state)
    }
  }
}
</script>

<style scoped>
button {
  width: 100%;
}
</style>
