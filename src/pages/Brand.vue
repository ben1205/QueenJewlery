<style scoped lang="stylus">
.head-img
	height 350px
	position relative
	.ban
		position absolute
		height 350px
		width 100%
		background-image url(../assets/u28_state0.jpg)
		p
			width 316px
			height 96px
			font-size 34px
			font-weight bold
			line-height 45px
			color white
			margin-left 217px
			margin-top 125px
.floor
	margin-top 20px
	.block
		width 100%
		height 330px
		margin-bottom 20px
		.left
			width 220px
			height 100%
			background-color rgb(94, 94, 94)
			overflow hidden
			float left
			p
				color white
				text-align center
				font-weight bold 
				&:nth-of-type(1)
					font-size 40px
					margin-top 110px
				&:nth-of-type(2)
					font-size 24px
					margin-top 38px
		.right
			float right
			width 940px
			height 100%
			.button
				float right
				text-align center
				font-size 12px
				color white
				a
					display inline-block
					height 25px
					line-height 25px
					&:nth-of-type(1)
						background-color rgb(121, 121, 121)
						width 80px
					&:nth-of-type(2)
						width 25px
						background-color rgb(161, 161, 161)
			.down-list
				margin-top 35px
				height 290px
				border-top 2px solid
				ul
					li
						float left
						width 220px
						height 292px
						border-left 1px solid
						border-right 1px solid
						border-bottom 1px solid
						padding 10px
						box-sizing border-box
						&:not(:nth-of-type(1))
							margin-left 20px
						.bg
							width 200px
							height @width
						p
							&:nth-of-type(1)
								width 200px
								height 14px
								margin 15px 0
								a
									float left
									width 100px
									font-size 14px
									&:nth-of-type(2)
										text-align right
							&:nth-of-type(2)
								padding-left 55px
								img
									vertical-align middle
								span
									font-size 14px
									color rgb(121, 121, 121)
					

</style>
<template>
<div class="main">
	<div class="head-img">
		<div class="ban">
		<div class="w1180">
				<p>我是女王，我做主！
				我的品牌我代言！</p>
			</div>
		</div>
	</div>
	<div class="floor">
		<div class="w1180">
			<div class="block">
				<div class="left">
					<p>LOGO</p>
					<p>女王珠宝</p>
				</div>
				<div class="right">
					<div class="button"><a>了解更多</a><a>>></a></div>
					<div class="down-list">
						<ul>
							<li v-for="item of listArr">
								<img :src="item.bg" class="bg">
								<p class="title"><a>{{item.title}}</a><a>{{item.price}}</a></p>
								<p>
									<img src="../assets/love2.png">
									<span>{{item.like}}</span>
									<img src="../assets/good.png">
									<span>{{item.zan}}</span>
									<img src="../assets/chat.png">
									<span>{{item.chat}}</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="left">
					<p>LOGO</p>
					<p>女王珠宝</p>
				</div>
				<div class="right">
					<div class="button"><a>了解更多</a><a>>></a></div>
					<div class="down-list">
						<ul>
							<li v-for="item of listArr">
								<img :src="item.bg" class="bg">
								<p class="title"><a>{{item.title}}</a><a>{{item.price}}</a></p>
								<p>
									<img src="../assets/love2.png">
									<span>{{item.like}}</span>
									<img src="../assets/good.png">
									<span>{{item.zan}}</span>
									<img src="../assets/chat.png">
									<span>{{item.chat}}</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="left">
					<p>LOGO</p>
					<p>女王珠宝</p>
				</div>
				<div class="right">
					<div class="button"><a>了解更多</a><a>>></a></div>
					<div class="down-list">
						<ul>
							<li v-for="item of listArr">
								<img :src="item.bg" class="bg">
								<p class="title"><a>{{item.title}}</a><a>{{item.price}}</a></p>
								<p>
									<img src="../assets/love2.png">
									<span>{{item.like}}</span>
									<img src="../assets/good.png">
									<span>{{item.zan}}</span>
									<img src="../assets/chat.png">
									<span>{{item.chat}}</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="left">
					<p>LOGO</p>
					<p>女王珠宝</p>
				</div>
				<div class="right">
					<div class="button"><a>了解更多</a><a>>></a></div>
					<div class="down-list">
						<ul>
							<li v-for="item of listArr">
								<img :src="item.bg" class="bg">
								<p class="title"><a>{{item.title}}</a><a>{{item.price}}</a></p>
								<p>
									<img src="../assets/love2.png">
									<span>{{item.like}}</span>
									<img src="../assets/good.png">
									<span>{{item.zan}}</span>
									<img src="../assets/chat.png">
									<span>{{item.chat}}</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="left">
					<p>LOGO</p>
					<p>女王珠宝</p>
				</div>
				<div class="right">
					<div class="button"><a>了解更多</a><a>>></a></div>
					<div class="down-list">
						<ul>
							<li v-for="item of listArr">
								<img :src="item.bg" class="bg">
								<p class="title"><a>{{item.title}}</a><a>{{item.price}}</a></p>
								<p>
									<img src="../assets/love2.png">
									<span>{{item.like}}</span>
									<img src="../assets/good.png">
									<span>{{item.zan}}</span>
									<img src="../assets/chat.png">
									<span>{{item.chat}}</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="left">
					<p>LOGO</p>
					<p>女王珠宝</p>
				</div>
				<div class="right">
					<div class="button"><a>了解更多</a><a>>></a></div>
					<div class="down-list">
						<ul>
							<li v-for="item of listArr">
								<img :src="item.bg" class="bg">
								<p class="title"><a>{{item.title}}</a><a>{{item.price}}</a></p>
								<p>
									<img src="../assets/love2.png">
									<span>{{item.like}}</span>
									<img src="../assets/good.png">
									<span>{{item.zan}}</span>
									<img src="../assets/chat.png">
									<span>{{item.chat}}</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="left">
					<p>LOGO</p>
					<p>女王珠宝</p>
				</div>
				<div class="right">
					<div class="button"><a>了解更多</a><a>>></a></div>
					<div class="down-list">
						<ul>
							<li v-for="item of listArr">
								<img :src="item.bg" class="bg">
								<p class="title"><a>{{item.title}}</a><a>{{item.price}}</a></p>
								<p>
									<img src="../assets/love2.png">
									<span>{{item.like}}</span>
									<img src="../assets/good.png">
									<span>{{item.zan}}</span>
									<img src="../assets/chat.png">
									<span>{{item.chat}}</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="left">
					<p>LOGO</p>
					<p>女王珠宝</p>
				</div>
				<div class="right">
					<div class="button"><a>了解更多</a><a>>></a></div>
					<div class="down-list">
						<ul>
							<li v-for="item of listArr">
								<img :src="item.bg" class="bg">
								<p class="title"><a>{{item.title}}</a><a>{{item.price}}</a></p>
								<p>
									<img src="../assets/love2.png">
									<span>{{item.like}}</span>
									<img src="../assets/good.png">
									<span>{{item.zan}}</span>
									<img src="../assets/chat.png">
									<span>{{item.chat}}</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="left">
					<p>LOGO</p>
					<p>女王珠宝</p>
				</div>
				<div class="right">
					<div class="button"><a>了解更多</a><a>>></a></div>
					<div class="down-list">
						<ul>
							<li v-for="item of listArr">
								<img :src="item.bg" class="bg">
								<p class="title"><a>{{item.title}}</a><a>{{item.price}}</a></p>
								<p>
									<img src="../assets/love2.png">
									<span>{{item.like}}</span>
									<img src="../assets/good.png">
									<span>{{item.zan}}</span>
									<img src="../assets/chat.png">
									<span>{{item.chat}}</span>
								</p>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div class="block">
				<div class="left">
					<p>LOGO</p>
					<p>女王珠宝</p>
				</div>
				<div class="right">
					<div class="button"><a>了解更多</a><a>>></a></div>
					<div class="down-list">
						<ul>
							<li v-for="item of listArr">
								<img :src="item.bg" class="bg">
								<p class="title"><a>{{item.title}}</a><a>{{item.price}}</a></p>
								<p>
									<img src="../assets/love2.png">
									<span>{{item.like}}</span>
									<img src="../assets/good.png">
									<span>{{item.zan}}</span>
									<img src="../assets/chat.png">
									<span>{{item.chat}}</span>
								</p>
							</li>
						</ul>
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
				listArr : [
					{
						bg : require("../assets/6TKm6BEG-0.jpg"),
						title : "QueenJewlery",
						price : "￥99",
						like : 999,
						zan : 99,
						chat : 99
					},
					{
						bg : require("../assets/6TKm6BEG-1.jpg"),
						title : "QueenJewlery",
						price : "￥99",
						like : 999,
						zan : 99,
						chat : 99
					},
					{
						bg : require("../assets/6TKm6BEG-2.jpg"),
						title : "QueenJewlery",
						price : "￥99",
						like : 999,
						zan : 99,
						chat : 99
					},
					{
						bg : require("../assets/6TKm6BEG-4.jpg"),
						title : "QueenJewlery",
						price : "￥99",
						like : 999,
						zan : 99,
						chat : 99
					}
				]
			}
		}
	}

</script>