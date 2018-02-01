<template>
  <div class="city-header">
    <span class="iconfont back" @click="handleClickBack">&#xe624;</span>
    <div class="title">国内城市选择</div>
  </div>
</template>

<script>
  export default {
    name: 'city-header',
    methods: {
      handleClickBack () {
        this.$router.go(-1)
      }
    }
  }
</script>

<style scoped lang="stylus">
  .city-header
    position: relative
    z-index: 2
  .title
    line-height: .8rem
    text-align: center
    background: #00bcd4
    color: #fff
    font-size: .36rem
  .back
    position: absolute
    top: 0
    left: 0	
    line-height: .8rem
    padding: 0 .2rem
    font-size: .36rem
    color: #fff
    font-weight: 900
</style>