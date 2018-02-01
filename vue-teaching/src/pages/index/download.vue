<template>
  <div class="index-downlaod">
    <div class="download" v-show="isShow">
      <span class="close" @click="handleDownloadClose">x</span>
      <div class="logo">
        <img :src="this.logo" alt="">
      </div>
      <div class="desc">
        <span>使用去哪儿门票客户端</span>
        <span>享受专属优惠体验更流畅</span>
      </div>
      <router-link to="http://sight.qunarzz.com/com.mqunar.sight/Qunar_Spider_C0010_60001138_release_20160718_1038.apk" class="click" tag="a">
        点击下载
      </router-link>
    </div>
  </div>  
</template>

<script>
  export default {
    name: 'index-download',
    props: {
      logo: String
    },
    data () {
      return {
        isShow: true
      }
    },
    methods: {
      handleDownloadClose () {
        this.isShow = false
      }
    }
  }
</script>

<style scoped lang="stylus">
  .download
    display: flex
    align-items: center
    z-index: 4
    position: fixed
    bottom: 0
    right: 0
    left: 0
    width: 100%
    height: 1rem
    background: rgba(0,0,0,.8)
    font-size: .3rem
    color: #fff
    .close
      display: block
      position: absolute
      top: 0
      left: 0
      width: .5rem;
      height: .5rem;
      line-height: .4rem;
      text-indent: .1rem;
      background: #afafaf;
      border-radius: 0 0 .5rem
    .logo
      width: .7rem
      height: .7rem
      margin-left: .8rem
      img
        width: 100%
    .desc
      display: flex
      flex-direction: column
      margin-left: .1rem
    .click
      line-height: .36rem
      border: .02rem solid #1d8f96
      padding: .1rem .15rem
      border-radius: .1rem
      position: absolute
      right: .2rem
</style>