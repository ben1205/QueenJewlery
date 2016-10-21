<style scoped lang="stylus">
	.nav
		height 40px
		background-color rgb(188, 188, 188)
		.w1180
			.all
				width 180px
				float left
				height @height 
				text-align center
				line-height @height
			>a
				line-height @height
				font-size 14px
				padding 0 30px
</style>
<template>
	<div class="nav">
	<div class="w1180">
		<div class="all">全部商品</div>
		<router-link v-for="item of list" :to="item.href">{{item.name}}</router-link>
	</div>
	</div>
</template>
<script>
	export default{
		data(){
			return{
				list : [
					{
						name : "首页",
						href : "/"
					},
					{
						name : "品牌首发",
						href : "/brandNew"
					},
					{
						name : "品牌街",
						href : "/brand"
					},
					{
						name : "为我代言",
						href : "/me"
					},
					{
						name : "创意申请",
						href : "/apply"
					},
					{
						name : "活动",
						href : "/activity"
					}
				]
			}
		}
	}
</script>