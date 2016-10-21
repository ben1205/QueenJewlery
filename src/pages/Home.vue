<style scoped lang="stylus">
.current
	z-index 20
.floor1
	height 610px
	.w1180
		.flo1-body
			width @width 
			height 550px
			ul
				li
					float left
					width 220px
					height 255px
					margin-right 16px
					margin-top 20px
					text-align center
					a
						img
							&:nth-of-type(1)
								display block
								margin-bottom 10px
.floor2
	.flor2-body
		.box
			position relative
			width 100%
			height 340px
			overflow hidden
			margin-bottom 30px
			h2
				position absolute
				top 38px
				left 38px
				color white
			.id-box
				width 400px
				height 300px
				position absolute
				top 20px
				right 20px
				background-color white
				>p
					background-color rgb(188, 188, 188)
					text-align center
					color white
					height 30px
					line-height @height
					font-size 15px
				.box-left
					float left
					width 200px
					height 270px
					img
						width 180px
						height 180px
						margin-left 10px
						margin-top 45px
				.box-right
					float left
					width 170px
					height 270px
					padding-left 30px
					p
						margin-top 10px
						&:nth-of-type(1)
							margin-top 45px
							margin-bottom 26px
						&:nth-of-type(2)
							width 128px
							font-size 14px
							margin-bottom 20px
						&:nth-of-type(3)
							img
								margin-top 5px
								margin-left 8px
							a
								float right
								width 100px
								height 30px
								text-align center
								line-height @height
								font-size 12px
								color white
								background-color rgb(188, 188, 188)
						&:nth-of-type(4)
							font-size 14px
						&:nth-of-type(5)
							font-size 14px						
.floor3
	.w1180
		.flor3-body
			height 420px
			width 100%
			ul
				li
					float left
					width 580px
					height 	200px
					margin-bottom 10px
					>img
						float left
					.word
						position relative
						float left
						padding-left 20px
						height 100%
						p
							font-size 14px
							margin-top 10px
						h2
							margin-top 10px
							margin-bottom 50px
						.touch
							position absolute
							top 60px
							left 97px
							a
								display block
								width 100px
								height 30px
								text-align center
								line-height @height 
								color white
								font-size 14px
								&:nth-of-type(1)
									background-color rgb(81, 81, 81)
									margin-bottom 10px
								&:nth-of-type(2)
									background-color rgb(121, 121, 121)
.floor4
	.w1180
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
															
</style>

<template>
<div class="app">
	<banner :data="arrBanner"></banner>
	<div class="floor1">
		<div class="w1180">
			<div class="flo1-head">
				<span>女王人气Top 10</span>
				<div class="add">+</div>
			</div>
			<div class="flo1-body">
				<ul>
					<li v-for="item of godArr">
						<a :href="item.href"><img :src="item.src"></a>
						<span>{{item.name}}</span>
						<img src="../assets/love.png">
						<span>{{item.hot}}</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="floor2">
		<div class="w1180">
			<div class="flo1-head">
				<span>首发品牌</span>
				<div class="add">+</div>
			</div>
			<div class="flor2-body">
				<div class="box" v-for="item of firstBrand">
					<h2>LOGO</h2>
					<img :src="item.bg">
					<div class="id-box">
						<p>距首发结束：20天18时18分18秒</p>
						<div class="box-left">
							<img :src="item.pic">
						</div>
						<div class="box-right">
							<p>代言人:<span>{{item.name}}</span></p>
							<p>拒绝平庸，追求卓越
							凸显个性，绝不将就</p>
							<p><img src="../assets/love2.png">
							<img src="../assets/good.png">
							<a>立刻购买</a>
							</p>
							<p><span>{{item.like}}</span>人喜欢</p>
							<p><span>{{item.buy}}</span>人已经购买</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
	<div class="floor3">
		<div class="w1180">
			<div class="flo1-head">
				<span>为我代言</span>
				<div class="add">+</div>
			</div>
			<div class="flor3-body">
				<ul>
					<li v-for="list of MeArr">
						<img :src="list.bg">
						<div class="word">
							<h2>{{list.name}}</h2>
							<p><img src="../assets/love2.png">
							<img src="../assets/good.png">
							</p>
							<p><span>{{list.like}}</span>人喜欢</p>
							<p><span>{{list.buy}}</span>人已经购买</p>
							<div class="touch">
								<a>我要代言</a>
								<a>立刻购买</a>
							</div>
						</div>
					</li>
				</ul>
			</div>
		</div>
	</div>
	<div class="floor4">
		<div class="w1180">
			<div class="flo1-head">
				<span>我的时尚</span>
				<div class="add">+</div>
			</div>
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
	</div>
</div>
</template>

<script>
	import Banner from "../components/Banner";
	export default{
		data(){
			return{
				godArr : [
					{
						name : "QueenJewlery",
						src : require("../assets/5ayl5mHk-0.png"),
						hot : 999,
						href : "/queen"
					},
					{
						name : "QueenJewlery",
						src :  require("../assets/5ayl5mHk-1.png"),
						hot : 999,
						href : "/queen"
					},
						{
						name : "QueenJewlery",
						src :  require("../assets/5ayl5mHk-2.png"),
						hot : 999,
						href : "/queen"
					},
						{
						name : "QueenJewlery",
						src :  require("../assets/5ayl5mHk-3.png"),
						hot : 999,
						href : "/queen"
					},
						{
						name : "QueenJewlery",
						src :  require("../assets/5ayl5mHk-4.png"),
						hot : 999,
						href : "/queen"
					},
					{
						name : "QueenJewlery",
						src :  require("../assets/5ayl5mHk-5.png"),
						hot : 999,
						href : "/queen"
					},
					{
						name : "QueenJewlery",
						src :  require("../assets/5ayl5mHk-6.png"),
						hot : 999,
						href : "/queen"
					},
					{
						name : "QueenJewlery",
						src :  require("../assets/5ayl5mHk-7.png"),
						hot : 999,
						href : "/queen"
					},
					{
						name : "QueenJewlery",
						src :  require("../assets/5ayl5mHk-8.png"),
						hot : 999,
						href : "/queen"
					},
					{
						name : "QueenJewlery",
						src :  require("../assets/5ayl5mHk-9.png"),
						hot : 999,
						href : "/queen"
					}
				],
				firstBrand : [
					{
						bg : require("../assets/5zcX5mHk-0.jpg"),
						name : "QueenJewlery",
						like : 9999,
						buy : 10000,
						pic : require("../assets/5ayl5mHk-0.png")
					},
					{
						bg : require("../assets/5zcX5mHk-2.jpg"),
						name : "QueenJewlery",
						like : 9999,
						buy : 10000,
						pic : require("../assets/5ayl5mHk-0.png")
					},
					{
						bg : require("../assets/5zcX5mHk-4.jpg"),
						name : "QueenJewlery",
						like : 9999,
						buy : 10000,
						pic : require("../assets/5ayl5mHk-0.png")
					}
				],
				MeArr : [
					{
						bg : require("../assets/5sOW5mHk-0.jpg"),
						name : "QueenJewlery",
						like : 9999,
						buy : 10000
					},
					{
						bg : require("../assets/5sOW5mHk-1.jpg"),
						name : "QueenJewlery",
						like : 9999,
						buy : 10000
					},
					{
						bg : require("../assets/5sOW5mHk-2.jpg"),
						name : "QueenJewlery",
						like : 9999,
						buy : 10000
					},
					{
						bg : require("../assets/5sOW5mHk-3.jpg"),
						name : "QueenJewlery",
						like : 9999,
						buy : 10000
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

				],
				arrBanner : [
					{
						name : "图片1",
						src : require("../assets/u28_state0.jpg")
					},
					{
						name : "图片2",
						src : require("../assets/u28_state1.jpg")
					},
					{
						name : "图片3",
						src : require("../assets/u28_state2.jpg")
					},
					{
						name : "图片4",
						src : require("../assets/u28_state3.jpg")
					}
				]
			}
		},
		components : {
			Banner
		}
	};	
</script>