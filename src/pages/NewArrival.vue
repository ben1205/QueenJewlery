<style scoped lang="stylus">
.main
	margin-top 50px
	.main-lf
		position relative
		width 890px
		float left
		>span
			position absolute
			width 100px
			height 30px
			background-color rgb(121, 121, 121)
			text-align center
			line-height @height
		.box
			width 880px
			height 260px
			box-shadow 2px 2px 5px rgb(188, 188, 188)
			margin-bottom 20px
			.explain
				float right
				width 280px
				height 100%
				text-align center
				.logo
					font-size 40px
					font-weight bold
					margin-top 40px
				.title
					width 201px
					border-bottom 1px solid
					margin 0 auto
					padding-bottom 14px
					margin-top 10px
				.represent
					font-size 18px
					height 42px
					line-height 42px
					color white
					background-repeat no-repeat
					background-image url(../assets/u12.png)
					background-position 30px 0
					margin-top 30px
				.count
					line-height 28px
					font-size 14px
	.main-rg
		float left
		margin-left 8px
		.declaration
			width 240px
			height 270px
			border 1px solid rgb(188, 188, 188)
			border-top-width 2px
			border-top-color black
			padding 0 20px
			.title
				display block
				margin-top 10px
				font-size 14px
			.cont
				padding 20px 0
				&:not(:first-of-type)
					border-top 1px solid
				span
					font-size 18px
				p
					font-size 14px
					line-height 20px
		.recom
			border-top 2px solid
			.title
				padding-left 20px
				padding-top 10px 
				padding-bottom 10px
			.sidebox
				width 280px
				border-bottom 1px solid
				.bg
					margin 20px 0
					width 280px
					height @width
				.title2
					font-size 14px
				.state
					margin 10px 0
					span
						&:nth-of-type(1)
							font-weight bold
					img
						vertical-align middle
						&:nth-of-type(1)
							margin-left 30px
				.buy-now
					width 100%
					height 42px
					text-align center
					line-height @height
					background-color rgb(134, 134, 134)
					color white
					font-size 14px
					cursor pointer
					margin-bottom 30px
		
</style>
<template>
<div class="app">
	<div class="w1180">
		<div class="main">
			<div class="main-lf">
				<span>今日首发</span>
				<div class="box" v-for="item of leftArr">
					<img :src="item.bg">
					<div class="explain">
						<p class="logo" v-text="item.logo"></p>
						<p class="title">{{item.title}}</p>
						<div class="represent">我要代言</div>
						<p class="count">{{item.count}}</p>
					</div>
				</div>
			</div>
			<div class="main-rg">
				<div class="declaration">
					<span class="title">女王宣言</span>
					<div class="cont">
						<span>我是女王我做主</span>
						<p>我是女王我做主,我是女王我做主,我是女王我做主,我是女王我做主,我是女王我做主</p>
					</div>
					<div class="cont">
						<span>我是女王我做主</span>
						<p>我是女王我做主,我是女王我做主,我是女王我做主,我是女王我做主,我是女王我做主</p>
					</div>
				</div>
				<div class="recom">
					<p class="title">爆款推荐</p>
					<div class="sidebox" v-for="item of rightArr">
						<img :src="item.bg" class="bg">
						<p class="title2">{{item.title}}</p>
						<p class="state">
						<span>{{item.price}}</span>
						<img src="../assets/love2.png">
						<span>{{item.like}}</span>
						<img src="../assets/good.png">
						<span>{{item.zan}}</span>
						<img src="../assets/chat.png">
						<span>{{item.chat}}</span>
						</p>
						<div class="buy-now">马上购买</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
				leftArr : [
					{
						logo : "logo",
						bg : require("../assets/5lpk6BEG-0.jpg"),
						title : "Queen Jewlery 新宠",
						count : "距首发结束:12天12时12分12秒"
					},
					{
						logo : "logo",
						bg : require("../assets/5lpk6BEG-1.jpg"),
						title : "Queen Jewlery 新宠",
						count : "距首发结束:12天12时12分12秒"
					},
					{
						logo : "logo",
						bg : require("../assets/5lpk6BEG-3.jpg"),
						title : "Queen Jewlery 新宠",
						count : "距首发结束:12天12时12分12秒"
					},
					{
						logo : "logo",
						bg : require("../assets/5lpk6BEG-4.jpg"),
						title : "Queen Jewlery 新宠",
						count : "距首发结束:12天12时12分12秒"
					},
					{
						logo : "logo",
						bg : require("../assets/5lpk6BEG-5.jpg"),
						title : "Queen Jewlery 新宠",
						count : "距首发结束:12天12时12分12秒"
					},
					{
						logo : "logo",
						bg : require("../assets/5lpk6BEG-0.jpg"),
						title : "Queen Jewlery 新宠",
						count : "距首发结束:12天12时12分12秒"
					},
					{
						logo : "logo",
						bg : require("../assets/5lpk6BEG-1.jpg"),
						title : "Queen Jewlery 新宠",
						count : "距首发结束:12天12时12分12秒"
					},
					{
						logo : "logo",
						bg : require("../assets/5lpk6BEG-3.jpg"),
						title : "Queen Jewlery 新宠",
						count : "距首发结束:12天12时12分12秒"
					},
					{
						logo : "logo",
						bg : require("../assets/5lpk6BEG-4.jpg"),
						title : "Queen Jewlery 新宠",
						count : "距首发结束:12天12时12分12秒"
					},
					{
						logo : "logo",
						bg : require("../assets/5lpk6BEG-5.jpg"),
						title : "Queen Jewlery 新宠",
						count : "距首发结束:12天12时12分12秒"
					}
				],
				rightArr : [
					{
						bg : require("../assets/6TKm6BEG-0.jpg"),
						title : "某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
						price : "￥999.00",
						like : 999,
						zan : 99,
						chat : 99
					},
					{
						bg : require("../assets/6TKm6BEG-1.jpg"),
						title : "某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
						price : "￥999.00",
						like : 999,
						zan : 99,
						chat : 99
					},
					{
						bg : require("../assets/6TKm6BEG-2.jpg"),
						title : "某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
						price : "￥999.00",
						like : 999,
						zan : 99,
						chat : 99
					},
					{
						bg : require("../assets/6TKm6BEG-4.jpg"),
						title : "某某系列珠宝首饰,采用设计平凡设计理念打造平凡时尚",
						price : "￥999.00",
						like : 999,
						zan : 99,
						chat : 99
					}
				]
			}
		}
	}
</script>