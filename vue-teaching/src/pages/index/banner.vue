<template>
  <div class="index-banner">
    <swiper class="banner-img" :options="swiperOption">
      <div class="swiper-slide" v-for="item in bannerInfo" :key="item.id">
        <img :src="item.imgUrl">
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'index-banner',
    props: {
      bannerInfo: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination'
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .swiper-slide 
	  height: 0 
	  padding-bottom: 31.25% 
	  width: 100% 
	  overflow: hidden 
	  img 
	  	width: 100%
	.banner-img >>> .swiper-pagination-bullet
	  background: #fff
</style>