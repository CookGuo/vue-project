<template>
  <div class="index-icons">
    <swiper class="icons-img index-icon" :options="swiperOption">
      <div class="swiper-slide" v-for="item in pages" :key="item.id">
        <div v-for="items in item" class="icons-box">
          <img :src="items.icon" alt="" />
          <p class="icons-title">{{items.keys}}</p>
        </div>
      </div>
      <div class="swiper-pagination" slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
  export default {
    name: 'index-iccons',
    props: {
      pages: Array
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
  	background: #fff 
	  display: flex 
	  flex-wrap: wrap
	  padding-bottom: .6rem 
	  .icons-box 
		  width: 25% 
		  text-align: center 
		  margin-top: .2rem 
	  	img 
			  width: .88rem 
			  height: .88rem 
	  .icons-title 
		  line-height: .6rem 
		  white-space: nowrap 
		  width: 100% 
		  overflow: hidden
</style>

<style lang="stylus">
  .index-icon 
  	.swiper-pagination-bullets 
  		background: #blue
  		bottom: .2rem
</style>