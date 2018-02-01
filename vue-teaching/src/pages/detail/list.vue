<template>
  <div class="detail-list">
    <ul>
    	<li v-for="(item, index) in detailList" :key="index" class="list">
    		{{item.title}}
    		<div>
    			<div v-for="(items, tindex) in item.list" v-show="items.show" class="detail-cont" :key="tindex" @click.stop="handleClickProvide(index, tindex, $event)">
            <span class="title">{{items.title}}</span>
            <span class="desc">{{items.desc}}</span>
            <span class="price">
              <em>￥</em>
              <i>{{items.price}}</i>
            </span>
            <div v-for="provides in items.provide" class="provides" v-show="items.provideShow">{{provides.name}}</div>
          </div>
          <div class="more" @click.stop="handleClickMore(index, $event)">
            <span>显示更多</span>
          </div>
    		</div>
    	</li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'detail-list',
    props: {
      listInfo: Array
    },
    data () {
      return {
        detailList: []
      }
    },
    watch: {
      listInfo () {
        this.detailList = JSON.parse(JSON.stringify(this.listInfo))
      }
    },
    methods: {
      handleClickMore (index, e) {
        e.target.style.display = 'none'
        this.detailList.list = this.detailList[index].list.map((value, index) => {
          value.show = true
          return value
        })
      },
      handleClickProvide (index, tindex, e) {
        const flag = this.detailList[index].list[tindex].provideShow
        this.detailList[index].list[tindex].provideShow = !flag
      }
    }
  }
</script>

<style scoped lang="stylus">
  .list
    padding: .1rem .2rem
    line-height: .4rem
    font-size: .36rem
    .detail-cont
      background: #00bcd4
      padding: .1rem 0
      color: #fff
      font-size: .36rem
      .provides
        background: skyblue
        line-height: .4rem
        padding: .11rem 0
    .more
      text-align: center
      padding: .1rem 0
</style>