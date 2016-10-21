<style scoped lang="stylus">
.current
	background-color rgb(215, 215, 215)
	border none
.app
	.w1180
		>p
			font-size 24px
			font-weight bold
			padding 54px 0
		.floor
			.flor-body
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
		.page
			text-align right
			height 30px
			line-height 30px
			font-size 14px
			margin-top 20px
			.box
				float right
				width 232px
				height @height
				box-sizing border-box
				margin-left 18px
				overflow hidden
				ul
					width 1000px
					li
						float left
						margin-right 20px
						a
							float left
							width 28px
							height 28px
							text-align center
							line-height @height
							border 1px solid rgb(215, 215, 215)
			.next-page
				float right
				width 80px
				height 28px
				text-align center
				line-height @height
				border 1px solid rgb(215, 215, 215)
				margin 0 14px
				i
					display inline-block
					vertical-align middle
					width 5px
					height 100%
					background-image url(../assets/arrow.png)
					background-repeat no-repeat
					background-position 0 center
					margin-left 5px
			.last-page
				float right
				width 50px
				height 28px
				text-align center
				line-height @height
				border 1px solid rgb(215, 215, 215)
			
</style>
<template>
<div class="app">
	<div class="w1180">
	<p>为我代言!</p>
	<div class="floor">
			<div class="flor-body">
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
	<div class="floor">
			<div class="flor-body">
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
	<div class="floor">
			<div class="flor-body">
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
	<div class="page">
		<span>99</span><span>条记录</span>&nbsp;&nbsp;<span>1/9页</span>
		<div class="last-page"><span>尾页</span></div>
		<div class="next-page"><span>下一页</span><i></i></div>
		<div class="box">
			<ul>
				<li v-for="item of navArr"><a :href="item.href">{{item.num}}</a></li>
			</ul>
		</div>
	</div>
	</div>
</div>
</template>
<script>
	export default{
		data(){
			return{
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
				navArr : [
					{
						num : 1,
						href : "/page"
					},
					{
						num : 2,
						href : "/page"
					},
					{
						num : 3,
						href : "/page"
					},
					{
						num : 4,
						href : "/page"
					},
					{
						num : 5,
						href : "/page"
					}
				]
			}
		}
}
</script>