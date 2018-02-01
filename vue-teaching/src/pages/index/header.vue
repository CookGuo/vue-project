<template>
  <div class="index-header">
    <span class="iconfont back">&#xe624;</span>
    <div class="search iconfont">&#xe60b;请输入景点/城市/游玩主题</div>
    <router-link to="/city">
    	<span class="city">{{city}}</span>    	
    </router-link>
  </div>
</template>

<script>
  export default {
    name: 'index-header',
    computed: {
      city () {
        return this.$store.state.city
      }
    }
  }
</script>
<style scoped lang="stylus">
  .index-header 
	  display: flex 
	  background: #00bcd4 
	  height: .88rem 
  	.back 
	  	line-height: .88rem 
	  	padding: 0 .2rem 
	  	font-size: .36rem 
	  	color: #fff 
  	.search 
	  	flex: 1 
	  	line-height: .68rem 
	  	margin: .12rem .2rem 
	  	background: #fff 
	  	padding: 0 .6rem 
	  	border-radius: .1rem 
	  	color: #ccc 
	  	font-size: .3rem 
  	.city 
	  	float: right 
	  	line-height: .88rem 
	  	padding: 0 .4rem 0 .1rem 
	  	text-align: center 
	  	color: #fff
	  	font-size: .3rem 
	  	&::after 
		  	content: '\0020' 
		  	position: absolute 
		  	top: .38rem 
		  	right: .09rem 
		  	border-right: .14rem solid transparent
		  	border-left: .14rem solid transparent
		  	border-top: .14rem solid #fff
</style>