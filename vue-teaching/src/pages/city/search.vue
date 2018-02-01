<template>
  <div>
    <div class="search">
      <div class="city-search">
        <input type="text" placeholder="请输入城市名字或者拼音" class="search-input" @input="handleInputClick" ref="inputValue"/>
      </div>
      <div class="search-list" v-show="show">
        <ul>
          <li v-for="item in filterArr" class="list-content border-bottom" @click="handleClick">{{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    name: 'city-search',
    props: {
      list: Object
    },
    data () {
      return {
        show: null,
        filterArr: []
      }
    },
    computed: {
      result () {
        const result = []
        for (let i in this.list) {
          this.list[i].forEach((val) => {
            result.push({
              name: val.name,
              spell: val.spell
            })
          })
        }
        return result
      }
    },
    watch: {
      filterArr () {
        this.$nextTick(() => {
          this.scroll.refresh()
        })
      }
    },
    methods: {
      handleInputClick () {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          let inputValue = this.$refs.inputValue.value.toLowerCase()
          if (inputValue) {
            this.show = true
            this.filterArr = this.result.filter((value) => {
              if (value.spell.indexOf(inputValue) > -1 || value.name.indexOf(inputValue) > -1) {
                return true
              }
            })
          } else {
            this.show = false
          }
        }, 30)
      },
      handleClick (e) {
        const city = e.target.innerHTML
        this.show = false
        this.$refs.inputValue.value = ''
        this.$store.commit('changeCity', city)
      }
    },
    mounted () {
      this.scroll = new BScroll('.search-list')
    }
  }
</script>

<style scoped lang="stylus">
  .city-search
    position: relative
    z-index: 2
    height: .74rem
    background: #00bcd4
    padding: .1rem .3rem 0 .3rem
    .search-input 
      box-sizing: border-box
      line-height: .64rem 
      width: 100%
      padding: 0 .4rem
      border-radius: .1rem
      text-align: center
  .search-list
    overflow: hidden
    z-index: 1
    position: absolute
    top: 1.62rem
    bottom: 0
    right: 0
    left: 0
    background: #fff
    .list-content
      padding-left: .2rem
      line-height: .8rem
      background: #fff
      color: #333 
</style>