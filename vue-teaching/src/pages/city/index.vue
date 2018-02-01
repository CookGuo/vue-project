<template>
  <div class="city-index">
    <city-header></city-header>
    <city-search :list="list"></city-search>
    <city-list :list="list" 
               :hotcity="hotcity" 
               class="list" 
               ref="cityList"
               @titleChange="handleTitleChange">
               </city-list>
    <city-alphabet :list="list" @touchStart="handleTouchStart" ref="cityAlphabet"></city-alphabet>
  </div>
</template>

<script>
  import CityHeader from './header.vue'
  import CityList from './list.vue'
  import CitySearch from './search.vue'
  import CityAlphabet from './alphabet'
  import axios from 'axios'
  export default {
    name: 'city',
    data () {
      return {
        list: {},
        hotcity: []
      }
    },
    components: {
      CityHeader,
      CityList,
      CitySearch,
      CityAlphabet
    },
    mounted () {
      this.getCityList()
    },
    methods: {
      getCityList () {
        axios.get('/static/city.json')
          .then(this.handleGetCitySucc.bind(this))
          .catch(this.handleGetCityErr.bind(this))
      },
      handleGetCitySucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          res.data.list && (this.list = res.data.list)
          res.data.hotcity && (this.hotcity = res.data.hotcity)
        }
      },
      handleGetCityErr (err) {
        console.log(err)
      },
      handleTouchStart (item) {
        this.$refs.cityList.letScroll(item)
      },
      handleTitleChange (item) {
        // console.log(item)
        this.$refs.cityAlphabet.titleChange(item)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .city-index
    display: flex
    flex-direction: column
    position: absolute
    top: 0
    bottom: 0
    right: 0
    left: 0
    background: #fff
    .list
      flex: 1
      overflow: hidden
</style>