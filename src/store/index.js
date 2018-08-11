import Vue from 'vue'
import Vuex from 'vuex'
import VuexORM from '@vuex-orm/core'
import database from './database'

Vue.use(Vuex)

const store = new Vuex.Store({
  plugins: [
    VuexORM.install(
      database,
      {
        http: {
          baseURL: 'http://localhost:3000/api',
          headers: {
            'Content-Type': 'application/json'
          },
          timeout: 30000,
          responseInterceptors: [
            response => {
              console.log(response)
              return response.data
            }
          ]
        }
      }
    )
  ]
})

export default store
