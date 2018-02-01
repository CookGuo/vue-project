<template>
	  <div class="recommend">
      <div>
  	    <div>
          <transition name="isLoading">
            <div class="loading" v-show="!isLoading">正在加载.....</div>
          </transition>
          <router-link v-for="recommends in list" :key="recommends.id" class="recommend-count" tag="div" :to="'/detail/' + recommends.id">
  	        <div class="address-img">
  	          <img v-lazy="recommends.imgUrl" alt="" />
  	        </div>
  	        <div class="describe">
  	          <p>{{recommends.address}}</p>
  	          <p>{{recommends.describe}}</p>
  	          <p>
  	            <span>￥</span>
  	            <em class="price">{{recommends.price}}</em>
  	            <span class="price-up">起</span>
  	          </p>
  	        </div>
  	      </router-link>
  	    </div>
      </div>
	  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  export default {
    name: 'index-scroll',
    props: {
      recommendInfo: Array
    },
    data () {
      return {
        swiperOption: {
          pagination: '.swiper-pagination'
        },
        isLoading: true,
        moreList: [],
        pageNumber: 1
      }
    },
    computed: {
      list () {
        return this.recommendInfo.concat(this.moreList)
      },
      city () {
        return this.$store.state.city
      }
    },
    methods: {
      createScroll () {
        this.scroll = new BScroll('.recommend', {
          probeType: 3
        })
      },
      bindEvends () {
        this.scroll.on('scroll', this.handleScroll.bind(this))
        this.scroll.on('scrollEnd', this.handleScrollEnd.bind(this))
      },
      handleScroll (e) {
        if (e.y > 60 && this.isLoading) {
          this.isLoading = false
          this.getListInfo()
        }
      },
      handleScrollEnd () {
        this.isLoading = true
      },
      getListInfo () {
        axios.get('/static/citylist.json?city=' + this.city + '&pageNumber=' + this.pageNumber)
          .then(this.handleGetListSucc.bind(this))
          .catch(this.handleGetListErr.bind(this))
      },
      handleGetListSucc (res) {
        res && (res = res.data)
        if (res.data) {
          if (res.data.list) {
            this.moreList = this.moreList.concat(res.data.list)
            this.pageNumber += 1
            this.isLoading = true
          }
        }
      },
      handleGetListErr (err) {
        console.log(err)
      }
    },
    mounted () {
      this.createScroll()
      this.bindEvends()
    },
    watch: {
      list () {
        this.$nextTick(function () {
          this.scroll.refresh()
        })
      }
    }
  }
</script>

<style scoped>
  .isLoading-enter-active, .isLoading-leave-active {
    transition: opacity 3s
  }
  .isLoading-enter, .isLoading-leave-to {
    opacity: 0
  }
  .recommend {
    display: flex;
    flex-direction: column;
  }
  .recommend-count {
    display: flex;
    box-sizing: border-box;
    padding: 0.2rem 0.8rem 0.2rem 0;
    height: 1.88rem;
    background: #fff;
    padding-left: 0.24rem;
    border-bottom: 0.01rem solid #ccc;
  }
  .recommend-count .address-img {
    float: left;
    margin-right: 0.22rem;
    height: 100%;
  }
  .recommend-count .address-img img {
    height: 100%;
  }
  .describe {
    width: 0.52rem;
    flex: 1;
  }
  .describe p:first-child {
    font-size: .26rem;
    color: #202020;
    margin-top: 0.04rem;
  }
  .describe p:nth-child(2) {
    font-size: 0.26rem;
    color: #a5a5a5;
    line-height: .72rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .describe p:nth-child(3) {
    color: #e78021;
    font-size: .16rem;
  }
  .describe .price {
    font-size: .36rem;
  }
  .describe .price-up {
    color: #a5a5a5;
  }
  .loading {
    text-align: center;
    font-size: .3rem;
    line-height: 1.6rem;
    overflow: hidden;
  }
</style>