<style scoped lang="stylus">
.header
	height 330px
	background-image url(../assets/u28_state1.jpg)
	.w1180
		overflow hidden
		.head-port
			margin-top 50px
			img
				width 156px
				height @width
				vertical-align top
			i
				display inline-block
				width 156px
				border-radius 50%
				height @width
				line-height @width
				font-size 40px
				text-align center
				background-color rgb(215, 215, 215)
		>span
			display inline-block
			margin-right 10px
			font-size 36px
			margin-top 24px
		>a
			display inline-block
			width 110px
			height 30px
			text-align center
			line-height @height
			margin-top 24px
			background-color rgb(188, 188, 188)
		>p
			margin-top 20px
			img
				vertical-align middle
			span
				margin-right 20px
				margin-left 5px
.hot-th
	margin-top 40px
	p
		border-bottom 2px solid
		font-size 14px
		line-height 24px
	.min
		width 230px
		height 300px
	.max
		width 466px
		height 300px
.my-brand
	overflow hidden
	p
		border-bottom 2px solid
		font-size 14px
		line-height 24px
	ul
		li
			float left
			width 295px
			height 310px
			background-size 70%
			background-repeat no-repeat
			background-position center 0
			text-align center
			line-height 580px
			font-size 14px
.fashion
	margin-top 20px
	height 350px
	p
		font-size 30px
		font-weight bold
		margin-bottom 40px
	ul
		li
			float left
			width 380px
			height 280px
			margin-right 20px
			&:nth-of-type(3)
				margin-right 0
			h2
				font-size 20px
				font-weight normal
				margin-bottom 20px
			.content
				height 168px
				width 100%
				overflow hidden
				margin-bottom 15px
				img
					width 180px
					height 162px
				span
					float right
					width 180px
					height 168px
					font-size 14px
					line-height 24px
			.down
				img
					width 16px
					height 16px
				span
					margin-right 12px
.map
	margin-top 20px
	height 350px
	p
		font-size 30px
		font-weight bold
		margin-bottom 40px
		span
			margin-left 20px
			font-size 16px
			font-weight 100
	a
		display inline-block
		width 762px
		height 300px
		background-image url(../assets/u199.jpg)
	>span
		float right
		width 208px
		height 100px
		text-align center
		background-image url(../assets/QR-code.png)
		background-repeat no-repeat
		background-size 80%
		background-position center 20px
		padding-top 200px
		i
			margin-top 10px
			display inline-block
		
</style>

<template>
	<div class="main">
		<div class="header">
			<div class="w1180">
				<div class="head-port"><img src="../assets/5ayl5mHk-1.png"><i>LOGO</i></div>
				<span>QueenJewlery</span><a>+ 关注</a>
				<p><img src="../assets/love2.png"><span>999</span><img src="../assets/good.png"><span>99</span></p>
			</div>
		</div>
		<div class="w1180">
			<div class="hot-th">
				<p>人气单品</p>
				<img src="../assets/u219.jpg" class="min">
				<img src="../assets/u221.jpg" class="min">
				<img src="../assets/u223.jpg" class="max">
				<img src="../assets/u227.jpg" class="min">
				<img src="../assets/u225.jpg" class="max">
				<img src="../assets/u227.jpg" class="min">
				<img src="../assets/u229.jpg" class="min">
				<img src="../assets/u231.jpg" class="min">
			</div>
			<div class="my-brand">
				<p>我的品牌</p>
				<ul>
					<li v-for="item of myBrand" :style ="{'background-image':'url(' + item.src + ')'}">{{item.name}}</li>
				</ul>
			</div>
			<div class="fashion">
			<p>我的时尚</p>
				<ul>
					<li v-for="item of fanArr">
					<h2>{{item.title}}</h2>
					<div class="content">
						<img :src="item.bg">
						<span>黑色之所以经久不衰,小编猜应该有不少原因,不过肯定逃不脱穿腻了夏日缤纷色彩的心理,不妨从一周中抽出一天来,穿上黑寡妇斯嘉丽最爱的AllBlack造型,这种帅气简单,也能让别人眼前一亮。</span>
					</div>
					<div class="down">
						<span>{{item.name}}</span>
						<span>{{item.time}}</span>
						<img src="../assets/love2.png">
						<span>{{item.like}}</span>
						<img src="../assets/good.png">
						<span>{{item.zan}}</span>
						<img src="../assets/chat.png">
						<span>{{item.chat}}</span>
					</div>
					</li>
				</ul>
			</div>
			<div class="map">
				<p>我的时尚<span>深圳市罗湖区洪湖店</span></p>
				<a></a>
				<span>
					<i>我的微信号</i>
					<i>扫一扫 新品首发早知道</i>
				</span>
				<span>
					<i>我的微博</i>
					<i>扫一扫 新品首发早知道</i>
				</span>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				myBrand : [
					{
						name : "QueenJewlery",
						src : require('../assets/66xc62oR-0.jpg')
					},
					{
						name : "QueenJewlery",
						src : require('../assets/66xc62oR-1.jpg')
					},
					{
						name : "QueenJewlery",
						src : require('../assets/66xc62oR-2.jpg')
					},
					{
						name : "QueenJewlery",
						src : require('../assets/66xc62oR-3.jpg')
					},
					{
						name : "QueenJewlery",
						src : require('../assets/66xc62oR-4.jpg')
					},
					{
						name : "QueenJewlery",
						src : require('../assets/66xc62oR-5.jpg')
					},
					{
						name : "QueenJewlery",
						src : require('../assets/66xc62oR-6.jpg')
					},
					{
						name : "QueenJewlery",
						src : require('../assets/66xc62oR-7.jpg')
					}
				],
				fanArr : [
					{
						title : "2015春夏流行色:魅惑黑色",
						bg : require("../assets/6Ezw5mHk-0.jpg"),
						name : "Queen",
						time : "2015-06-02",
						like : 999,
						zan : 99,
						chat : 99
					},
					{
						title : "2015春夏流行色:魅惑黑色",
						bg : require("../assets/6Ezw5mHk-1.jpg"),
						name : "Queen",
						time : "2015-06-02",
						like : 999,
						zan : 99,
						chat : 99
					},
					{
						title : "2015春夏流行色:魅惑黑色",
						bg : require("../assets/6Ezw5mHk-2.jpg"),
						name : "Queen",
						time : "2015-06-02",
						like : 999,
						zan : 99,
						chat : 99
					}

				]
			}	
		}
	}
</script>