import Vuex from 'vuex'
import Vue from 'vue'
import Axios from 'axios'

Vue.use(Vuex)

const account = {
  token: null,
  username: null,
  loginis: false
}

const mongodb = {
  query: {
    httpurl: null,
    httpmethod: null,
    dburl: null,
    dbaction: null,
    dbname: null,
    dbcolname: null,
    dblimit: null,
    dbdoc: null,
    dbparams: null
  },
  state: null,
  result: {
    data: null,
    err: false
  }
}

const store = new Vuex.Store({
  state: {
    account: account,
    mongodb: mongodb
  },
  mutations: {
    settoken (state, token) {
      account.token = token
    },
    setusername (state, username) {
      account.username = username
    },
    setloginis (state, loginis) {
      account.loginis = loginis
    },
    setquery (state, query) {
      let str = JSON.stringify(query)
      mongodb.query = JSON.parse(str)
    },
    setstate (state, states) {
      mongodb.state = states
    },
    setdata (state, data) {
      mongodb.result.data = data
    },
    seterr (state, err) {
      mongodb.result.err = err
    },
    setresult (state, result) {
      let str = JSON.stringify(result)
      mongodb.result = JSON.parse(str)
    }
  },
  actions: {
    async submitquery ({ commit, state }) {
      try {
        const response = await this.axios({
          method: mongodb.query.httpmethod,
          url: mongodb.query.httpurl,
          data: {
            query: mongodb.query
          }
        })
        commit('setdata', response.data)
        commit('seterr', false)
      } catch (err) {
        commit('setdata', null)
        commit('seterr', 'NET ERR')
      }
    }
  }
})

store.axios = Axios

export default store
