<template>
  <div class="detail-index">
    <detail-banner :imgUrl="imgUrl" :imgList="imgList"></detail-banner>
    <detail-list :listInfo="listInfo"></detail-list>
  </div>
</template>

<script>
  import DetailBanner from './banner.vue'
  import DetailList from './list.vue'
  import axios from 'axios'
  export default {
    name: 'detail',
    data () {
      return {
        imgUrl: '',
        imgList: [],
        listInfo: []
      }
    },
    components: {
      DetailBanner,
      DetailList
    },
    methods: {
      handleGetSucc (res) {
        res && (res = res.data)
        if (res && res.data) {
          res.data.img && (this.imgUrl = res.data.img)
          res.data.imgList && (this.imgList = res.data.imgList)
          res.data.tickeList && (this.listInfo = res.data.tickeList)
        }
      },
      handleGetError (err) {
        console.log(err)
      }
    },
    mounted () {
      axios.get('/static/detail.json')
           .then(this.handleGetSucc.bind(this))
           .catch(this.handleGetError.bind(this))
    }
  }
</script>

<style scoped lang="stylus">

</style>