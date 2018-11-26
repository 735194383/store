<template>
  <div class='accountinfo'>
    <table>
      <tr>
        <td>
          <button @click="settoken">settoken</button>
        </td>
        <td>
          <input v-model="token" placeholder='null to null'/>
        </td>
      </tr>
      <tr>
        <td>
          <button @click="setusername">setusername</button>
        </td>
        <td>
          <input v-model="username" placeholder='null to null'/>
        </td>
      </tr>
      <tr>
        <td>
          <button @click="setloginis">setloginis</button>
        </td>
        <td>
          <input v-model="loginis" placeholder='true to true, false to false'/>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'accountinfo',
  data: function () {
    return {
      token: null,
      username: null,
      loginis: null
    }
  },
  computed: {
    html_account: function () {
      var objStr = JSON.stringify(this.$store.state.account, null, 4)
      var html = objStr.replace(/\n/g, '<br>').replace(/\s/g, '&nbsp')
      return html
    }
  },
  methods: {
    settoken: function () {
      let token = null
      if (this.token === 'null') {
        token = null
      } else {
        token = this.token
      }
      this.$store.commit('settoken', token)
    },
    setusername: function () {
      let username = null
      if (this.username === 'null') {
        username = null
      } else {
        username = this.username
      }
      this.$store.commit('setusername', username)
    },
    setloginis: function () {
      let loginis = null
      if (this.loginis === 'true') {
        loginis = true
      } else if (this.loginis === 'false') {
        loginis = false
      } else {
        loginis = this.loginis
      }
      this.$store.commit('setloginis', loginis)
    }
  }
}
</script>

<style scoped>
button {
  width: 100%;
}
</style>
