<template>
  <div class="city-list">
    <div class="title city-title border-topbottom" v-show="title" ref="titleShow">{{letter}}</div>
    <div class="city-cont">
      <div>
        <div  class="city-select">
          <div class="title border-topbottom" ref="current">你选择的城市</div>
          <div class="content">
            <div class="select">{{city || "北京"}}</div>
          </div>
          <div class="title border-topbottom" ref="hotcity">热门城市选择</div>
          <div class="content">
            <div class="is-select" v-for="item in hotcity" 
            :class="{'select': item.city === city }" 
            :key="item.id"
            @click="handleCityClick(item.city)"
            >{{item.city}}</div>
          </div>
        </div>

        <div class="city-content">
          <div v-for="(item, key) in list" :key="key" :ref="key">
            <div class="title border-topbottom">{{key}}</div>
            <div class="city-each" v-for="items in item" @click="handleCityClick(items.name)">{{items.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'city-list',
    props: {
      list: Object,
      hotcity: Array
    },
    data () {
      return {
        letter: '',
        title: false
      }
    },
    computed: {
      city () {
        return this.$store.state.city
      },
      cityPositions () {
        const arr = []
        const { current, hotcity } = this.$refs
        arr.push({
          top: current.offsetTop,
          text: current.innerHTML
        })
        arr.push({
          top: hotcity.offsetTop,
          text: hotcity.innerHTML
        })
        for (let i in this.list) {
          arr.push({
            top: this.$refs[i][0].offsetTop,
            text: i
          })
        }
        return arr
      }
    },
    mounted () {
      this.createScroll()
    },
    watch: {
      list () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    methods: {
      handleCityClick (changeCity) {
        this.$store.commit('changeCity', changeCity)
      },
      createScroll () {
        this.scroll = new BScroll('.city-cont', {
          probeType: 3
        })
        this.scroll.on('scroll', this.handleScroll.bind(this))
      },
      letScroll (item) {
        this.scroll.scrollToElement(this.$refs[item][0], 2000)
      },
      handleScroll (e) {
        let y = -e.y
        let differ = 0
        let letter = this.letter
        for (let i in this.cityPositions) {
          let position = this.cityPositions[i]
          if (y > position.top - 27 && y <= position.top) {
            differ = y - position.top + 27
            this.$emit('titleChange', position.text)
            console.log(position.text)
          }
          if (y >= position.top) {
            letter = position.text
          }
        }
        this.title = y > 0
        this.letter = letter
        this.$refs.titleShow.style.top = (82 - differ) + 'px'
      }
    }
  }
</script>
  
<style scoped lang="stylus">
  .city-list
    position: relative
    .city-cont
      height: 100%
    .city-title
      z-index: 1
      position: fixed
      top: 1.64rem
      left: 0
      right: 0
      line-height: .54rem
      padding: 0 .2rem
      background: #eee
      font-size: .26rem
      color: #616161
      &::before, &::after
        border-color: #9e9e9e 
  .city-select, .city-content
    .city-each
      line-height: .6rem
      font-size: .26rem
      padding: .1rem .2rem
    .title
      line-height: .54rem
      padding: 0 .2rem
      background: #eee
      font-size: .26rem
      color: #616161
      &::before, &::after
        border-color: #9e9e9e
    .content
      padding: 0 .2rem
      overflow: hidden
      .is-select
        width: 27%
        height: .66rem
        float: left
        line-height: .66rem
        border: .01rem solid #999
        color: #212121
        margin: .2rem
        overflow: hidden
        border-radius: .1rem
        text-align: center
      .select
        width: 27%
        height: .66rem
        float: left
        line-height: .66rem
        border: .01rem solid #00bcd4
        color: #00bcd4
        margin: .2rem
        overflow: hidden
        border-radius: .1rem
        text-align: center
</style>