<template>
  <div id="app">
    <b-table hover striped
      :items="this.$store.state.crypto"
      :fields="fields"
      :sort-by.sync="sortBy"
      :sort-desc.sync="sortDesc"
    >
      <template slot="CoinInfo.ImageUrl" slot-scope="data">
        <img :src="'https://www.cryptocompare.com/' + data.item.CoinInfo.ImageUrl"
             :alt="data.item.CoinInfo.ImageUrl"
             height="30px">
      </template>
    </b-table>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      timer: '',
      sortBy: 'RAW.USD.PRICE',
      sortDesc: true,
      fields: [
        { key: 'CoinInfo.ImageUrl', label: 'Image', sortable: false },
        { key: 'CoinInfo.FullName', label: 'Full Name', sortable: true },
        { key: 'CoinInfo.Name', label: 'Name', sortable: true },
        { key: 'RAW.USD.PRICE', label: 'Price', sortable: true },
        { key: 'RAW.USD.SUPPLY', label: 'Supply', sortable: true }
      ]
    }
  },
  methods: {
    reload: function () {
      this.$store.dispatch('getList')
    }
  },
  beforeMount: function () {
    this.reload()
    this.timer = window.setInterval(this.reload, 300000)
  },
  beforeDestroy: function () {
    window.clearInterval(this.timer)
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
}
</style>
