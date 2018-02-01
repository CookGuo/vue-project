<template>
  <div class="index">
    <index-header></index-header>
    <index-banner :bannerInfo="bannerInfo"></index-banner>
    <index-icons :pages="pages"></index-icons>
    <index-scroll :recommendInfo="recommendInfo" class="scroller"></index-scroll>
    <index-download :logo="logo"></index-download>
  </div>
</template>

<script>
  import IndexBanner from './banner.vue'
  import IndexIcons from './icons.vue'
  import IndexScroll from './scroll.vue'
  import IndexDownload from './download.vue'
  import mixins from 'mixins/mixins.js'
  import axios from 'axios'
  export default {
    name: 'index',
    mixins: [mixins],
    data () {
      return {
        bannerInfo: [],
        iconsInfo: [],
        recommendInfo: [],
        logo: ''
      }
    },
    components: {
      // 组件异步打包
      IndexHeader: () => import('./header.vue'),
      IndexBanner,
      IndexIcons,
      IndexScroll,
      IndexDownload
    },
    mounted () {
      axios.get('/static/index.json')
        .then(this.handleSuccAjax.bind(this))
    },
    methods: {
      handleSuccAjax (resquest) {
        const res = resquest.data
        if (res.ret && res.data) {
          this.bannerInfo = res.data.swiper ? res.data.swiper : null
          this.iconsInfo = res.data.icons ? res.data.icons : null
          this.recommendInfo = res.data.recommend ? res.data.recommend : null
          this.logo = res.data.logo ? res.data.logo : null
        }
      },
      handleDownload () {
        console.log('方法已经重写')
      }
    },
    computed: {
      pages () {
        const pages = []
        this.iconsInfo.forEach((value, index) => {
          let page = Math.floor(index / 8)
          if (!pages[page]) {
            pages[page] = []
          }
          pages[page].push(value)
        })
        return pages
      }
    }
  }
</script>

<style scoped lang="stylus">
  .index 
	  display: flex 
	  flex-direction: column 
	  position: absolute 
	  top: 0 
	  left: 0 
	  bottom: 0 
	  right: 0 
	  .scroller 
		  flex: 1 
		  overflow: hidden
</style>