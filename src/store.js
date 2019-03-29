import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    crypto: [
      {
        CoinInfo: {
          ImageUrl: '/media/19633/btc.png',
          FullName: 'No Data',
          Name: 'No Data'
        },
        RAW: {
          USD: {
            PRICE: 'No Data',
            SUPPLY: 'No Data'
          }
        }
      }
    ]
  },
  mutations: {
    setList (state, data) {
      state.crypto = data
      console.log('updated!')
    }
  },
  actions: {
    async getList ({ commit }) {
      try {
        let response = await Vue.http.get('https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=USD', {})
        commit('setList', response.body.Data)
        return response.body.Data
      } catch (e) {
        console.log(e)
      }
    }
  }
})
