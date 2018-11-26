<template>
  <div class='query'>
    <table>
      <tr>
        <td>
          httpurl
        </td>
        <td>
          <input v-model="httpurl" placeholder='null to null'/>
        </td>
      </tr>
      <tr>
        <td>
          httpmethod
        </td>
        <td>
          <input v-model="httpmethod" placeholder='null to null'/>
        </td>
      </tr>
      <tr>
        <td>
          dburl
        </td>
        <td>
          <input v-model="dburl" placeholder='null to null'/>
        </td>
      </tr>
      <tr>
        <td>
          dbaction
        </td>
        <td>
          <input v-model="dbaction" placeholder='null to null'/>
        </td>
      </tr>
      <tr>
        <td>
          dbname
        </td>
        <td>
          <input v-model="dbname" placeholder='null to null'/>
        </td>
      </tr>
      <tr>
        <td>
          dbcolname
        </td>
        <td>
          <input v-model="dbcolname" placeholder='null to null'/>
        </td>
      </tr>
      <tr>
        <td>
          dblimit
        </td>
        <td>
          <input v-model="dblimit" placeholder='null to null'/>
        </td>
      </tr>
      <tr>
        <td>
          dbdoc
        </td>
        <td>
          <input v-model="dbdoc" placeholder='null to null'/>
        </td>
      </tr>
      <tr>
        <td>
          dbparams
        </td>
        <td>
          <input v-model="dbparams" placeholder='null to null'/>
        </td>
      </tr>
      <tr>
        <td></td>
        <td><button @click="setquery">setquery</button></td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'query',
  data: function () {
    return {
      httpurl: null,
      httpmethod: null,
      dburl: 'mongodb://localhost:27017',
      dbaction: null,
      dbname: null,
      dbcolname: null,
      dblimit: null,
      dbdoc: null,
      dbparams: null
    }
  },
  computed: {
  },
  methods: {
    setquery: function () {
      let query = {
        httpurl: null,
        httpmethod: null,
        dburl: null,
        dbaction: null,
        dbname: null,
        dbcolname: null,
        dblimit: null,
        dbdoc: null,
        dbparams: null

      }
      if (this.httpurl === 'null') {
        query.httpurl = null
      } else {
        query.httpurl = this.httpurl
      }
      if (this.httpmethod === 'null') {
        query.httpmethod = null
      } else {
        query.httpmethod = this.httpmethod
      }
      if (this.dburl === 'null') {
        query.dburl = null
      } else {
        query.dburl = this.dburl
      }
      if (this.dbaction === 'null') {
        query.dbaction = null
      } else {
        query.dbaction = this.dbaction
      }
      if (this.dbname === 'null') {
        query.dbname = null
      } else {
        query.dbname = this.dbname
      }
      if (this.dbcolname === 'null') {
        query.dbcolname = null
      } else {
        query.dbcolname = this.dbcolname
      }
      if (this.dblimit === 'null') {
        query.dblimit = null
      } else {
        query.dblimit = this.dblimit
      }
      if (this.dbdoc === 'null') {
        query.dbdoc = null
      } else {
        query.dbdoc = this.dbdoc
      }
      if (this.dbparams === 'null') {
        query.dbparams = null
      } else {
        query.dbparams = this.dbparams
      }
      this.$store.commit('setquery', query)
    }
  }
}
</script>

<style scoped>
button {
  width: 100%;
}
</style>
