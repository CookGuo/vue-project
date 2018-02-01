<template>
  <div class="detail-banner">
    <div class="banner" @click="handleClick">
      <img :src="this.imgUrl" alt="">
    </div>
    <div class="img-box" v-show="flag" @click="handleShowClick">
      <swiper class="banner-img" :options="swiperOption">
        <div class="swiper-slide" v-for="item in imgList" :key="item">
          <img :src="item" @click.stop>
        </div>
      </swiper>
      <div class="swiper-pagination"  slot="pagination"></div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'detail-banner',
    data () {
      return {
        flag: false,
        swiperOption: {
          loop: true,
          observer: true,
          observeparents: true,
          pagination: '.swiper-pagination',
          paginationType: 'fraction'
        }
      }
    },
    props: {
      imgUrl: String,
      imgList: Array
    },
    methods: {
      handleClick () {
        this.flag = true
      },
      handleShowClick () {
        this.flag = false
      }
    }
  }
</script>

<style scoped lang="stylus">
  .img-box >>> .swiper-pagination
    color: #fff
    bottom: 1.6rem
  .banner
    width: 100%
    img 
      width: 100%
  .img-box
    position: absolute
    top: 0
    bottom: 0
    right: 0
    left: 0
    background: #000
    display: flex
    align-items: center
    .swiper-slide
      width: 100%
      img
        width: 100%    
</style>