<template>
  <div class='result'>
    <table>
      <tr>
        <td>
          <button @click="setdata">setdata</button>
        </td>
        <td>
          <input v-model="data" placeholder='null to null'/>
        </td>
      </tr>
      <tr>
        <td>
          <button @click="seterr">seterr</button>
        </td>
        <td>
          <input v-model="err" placeholder='true to true, false to false'/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'result',
  data: function () {
    return {
      data: null,
      err: null
    }
  },
  methods: {
    setdata: function () {
      let data = null
      if (this.data === 'null') {
        data = null
      } else {
        data = this.data
      }
      this.$store.commit('setdata', data)
    },
    seterr: function () {
      let err = null
      if (this.err === 'null') {
        err = null
      } else if (this.err === 'false') {
        err = false
      } else {
        err = this.err
      }
      this.$store.commit('seterr', err)
    },
    setresult: function () {
      let result = {
        data: null,
        err: null
      }

      if (this.data === 'null') {
        result.data = null
      } else {
        result.data = this.data
      }

      if (this.err === 'true') {
        result.err = true
      } else if (this.err === 'false') {
        result.err = false
      } else {
        result.err = this.err
      }

      this.$store.commit('setresult', result)
    }
  }
}
</script>

<style scoped>
button {
  width: 100%;
}
</style>
