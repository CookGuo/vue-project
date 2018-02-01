<template>
  <div class="city-alphabet">
      <div class="alphabet-list" ref="list">
        <div class="list-content" 
             v-for="(item, index) in alphabetlist"
             :key="item"
             @touchstart.stop.prevent="handleTouchstart($event, item)"
             @touchmove.stop.prevent="handleTouchMove"
             :ref="item">
             {{item}}</div>
      </div>
  </div>
</template>

<script>
  export default {
    name: 'city-alphabet',
    props: {
      list: Object
    },
    computed: {
      alphabetlist () {
        const arr = []
        for (let i in this.list) {
          arr.push(i)
        }
        return arr
      },
      listHeight () {
        return this.$refs.list.offsetTop + 82 - (this.$refs.list.offsetHeight / 2)
      }
    },
    methods: {
      handleTouchstart (e, item) {
        for (let i in this.$refs) {
          if (i !== 'list') {
            this.$refs[i][0].classList.remove('active')
          }
        }
        e.target.classList.add('active')
        this.$emit('touchStart', item)
      },
      handleTouchMove (e) {
        let index = Math.floor((e.touches[0].clientY - this.listHeight) / 25)
        index = index < 0 ? 0 : index
        index = (index >= this.alphabetlist.length) ? (this.alphabetlist.length - 1) : index
        let key = this.alphabetlist[index]
        for (let i in this.$refs) {
          if (i !== 'list') {
            this.$refs[i][0].classList.remove('active')
          }
        }
        this.$refs[key][0].classList.add('active')
        this.$emit('touchStart', key)
      },
      titleChange (item) {
        if (item !== '热门城市选择' && item !== '你选择的城市') {
          for (let i in this.$refs) {
            if (i !== 'list') {
              this.$refs[i][0].classList.remove('active')
            }
          }
          this.$refs[item][0].classList.add('active')
        }
      }
    }
  }
</script>

<style scoped lang="stylus">
  .active
    color: #00bcd4
    background: #ccc
    border-radius: 50%
  .city-alphabet
    position: fixed
    top: 1.64rem
    right: 0
    width: .5rem
    height: 100%
    .alphabet-list
      width: 100%
      position: absolute
      top: 50%
      right: 0
      transform: translateY(-50%)
      height: auto
      .list-content
        line-height: .5rem
        width: 100%
        text-align: center
        font-size: .3rem
</style>