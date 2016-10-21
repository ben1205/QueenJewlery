
<style scoped lang="stylus">
.header-nav
	height 30px
	background-color rgb(242, 242, 242)
	.nav-content
		line-height @height
	ul
		float right
		padding-top 6px
		li
			float left
			border-right 1px solid #000
			height 16px
			&:last-child
				border-style none
			a
				float left
				margin 0 12px
				font-size 16px
.header-search
	height 110px
	.w1180
		.city
			float left
			height 110px
			line-height @height
			.logo
				float left
				width 108px
				text-align center
				line-height @height
				font-weight bold
				font-size 24px
			.city-box
				position relative
				float left
				margin-top 48px
				&:hover
					.window
						display block
				.window
					position absolute
					z-index 5
					top 19px
					border 1px solid #000
					width 439px
					padding 18px 12px
					display none
					background-color white
					div
						margin 5px 0
						a
							margin-right 12px
							font-size 14px
		.search
			float left
			padding 34px 0
			margin-left 156px
			.main-sear
				position relative
				width 548px
				height 40px
				border 1px solid #000
				float left
				input
					border-style none
					margin 10px 10px
					font-size 16px
					outline none
					width 477px
				i
					float right
					width 40px
					border-left 1px solid #000
					height 100%
					background-image url(../assets/big.png)
					background-repeat no-repeat
					background-position 50%
				.cloud
					position absolute
					top 12px
					left 287px
					span
						background-color rgb(243, 243, 243)
						margin-right 12px
						font-size 14px
			.my-jewlerybox
				float left
				width 132px 
				height 40px
				margin-left 20px
				line-height 40px
				text-align center
				border 1px solid
				&:hover
					.cloud-box
						display block
				a
					font-size 14px
				.cloud-box
					text-align left
					width 321px
					height 171px
					margin-left -82px
					border 1px solid #000
					display none
					.boxHeader
						height 36px
						width 100%
						background-color rgb(242, 242, 242)
						border-bottom 1px solid
						.w280
							line-height @height
							a
								float right
								margin-top 10px
					.boxBody
						position relative
						border-bottom 1px solid
						height 50px
						padding 12px 0
						i
							float left
							width 50px
							height 50px
						.th-name
							float left
							margin-left 20px
							width 120px
							height 50px
							line-height 50px
						.th-price
							float right
							width 74px
							height 50px
						a
							position absolute
							top 39px
							left 251px
					.boxFoot
						padding 12px 0
						.sum
							float left
						a
							float right
							width 100px
							height 32px
							background-color rgb(242, 242, 242)
							text-align center
							line-height 32px
		.code
			float right
			width 72px 
			height 110px
			line-height 180px
			text-align center
			background-image url(../assets/QR-code.png)
			background-repeat no-repeat
			background-size 100%
			background-position  0px 10px
.down-nav
	height 40px
	background-color rgb(188, 188, 188)
	.all
		position relative
		float left
		width 180px
		height 40px
		text-align center
		line-height 40px
		background-color rgb(174, 174, 174)
		overflow hidden
		&:hover
			overflow visible
		.dialog
			position absolute
			top 40px
			text-align left
			width 180px
			height 420px
			background-color white
			border 1px solid
			padding 10px
			box-sizing border-box
			ul
				li
					margin-top 10px
					margin-bottom 20px
					h2
						font-size 16px
						margin-bottom 15px
					a
						margin-right 10px
	.w1180	
		>a
			line-height @height
			font-size 14px
			padding 0 30px		
									
</style>

<template>
	<div class="header">
		<div class="header-nav">
			<div class="nav-content w1180">
				<span>热线电话:12345678912</span>
				<ul><li v-for= "nav of Arrnav" :href="nav.href"><a>{{nav.name}}</a></li></ul>
			</div>
		</div>
		<div class="header-search">
			<div class="w1180">
				<div class="city">
					<div class="logo">LOGO</div>
					<div class="city-box">
					<div class="window">
						<div v-for ="list of cityArr">
						<a>{{list.name}}</a>
						<a v-for = "anchor of list.anchor" :href="anchor.href">{{anchor.name}}</a>
						</div>
					</div>
					<span class="city-list">广东</span>
					</div>
				</div>
				<div class="search">
					<div class="main-sear">
						<div class="cloud">
							<span v-for="span of searArr">{{span}}</span>
						</div>
						<input type="text">
						<i></i>
					</div>
					<div class="my-jewlerybox">
						<a>我的首饰盒</a>
						<div class="cloud-box">
							<div class="boxHeader">
							<div class="w280">
								<span>最新加入的商品</span>
								<a>清空首饰盒</a>
							</div>
							</div>
							<div class="boxBody w280">
								<i>123</i>
								<span class="th-name">123</span>
								<span class="th-price">123</span>
								<a>删除</a>
							</div>
							<div class="boxFoot w280">
								<div class="sum">
									<div class="num">
										共<span></span>件商品
									</div>
									<div class="mon-sum">共计:￥</div>
								</div>
								<a>查看首饰盒</a>
							</div>
						</div>
					</div>
				</div>
				<div class="code">
					关注微信
				</div>
			</div>
		</div>
		<div class="down-nav">
			<div class="w1180">
				<div class="all">
				<span>全部商品</span>
				<div class="dialog">
					<ul>
						<li v-for="list of dialogArr">
							<h2>{{list.name}}</h2>
							<a v-for = "anchor of list.son" :href="anchor.href">{{anchor.name}}</a>
						</li>
					</ul>
				</div>
				</div>
				<router-link v-for="item of list" :to="item.href">{{item.name}}</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				Arrnav : [
				{
					name : "登录",
					href : "/logn"
				},
				{
					name : "注册",
					href : "/for"
				},
				{
					name : "品牌商",
					href : "/business"
				},
				{
					name : "女王帮助",
					href : "/help"
				},
				],
				cityArr : [
					{
						name : "A-G",
						anchor : [
							{
								name : "北京",
								href : "/beijing"
							},
							{
								name : "安徽",
								href : "/anhui"
							},
							{
								name : "重庆",
								href : "/chongqing"
							},
							{
								name : "福建",
								href : "/fujian"
							},
							{
								name : "广东",
								href : "/guangdong"
							},
							{
								name : "广西",
								href : "/guangxi"
							},
							{
								name : "甘肃",
								href : "/gansu"
							},
							{
								name : "贵州",
								href : "/guizhou"
							}
						]
					},
					{
						name : "H-J",
						anchor : [
							{
								name : "河北",
								href : "/hb"
							},
							{
								name : "河南",
								href : "/hn"
							},
							{
								name : "海南",
								href : "/hain"
							},
							{
								name : "湖北",
								href : "/huib"
							},
							{
								name : "湖南",
								href : "/huin"
							},
							{
								name : "黑龙江",
								href : "/hlj"
							},
							{
								name : "吉林",
								href : "/jl"
							},
							{
								name : "江苏",
								href : "/js"
							},
							{
								name : "江西",
								href : "jx"
							}
						]
					},
					{
						name : "L-S",
						anchor : [
							{
								name : "辽宁",
								href : "/ln"
							},
							{
								name : "内蒙古",
								href : "/nmg"
							},
							{
								name : "宁夏",
								href : "/nx"
							},
							{
								name : "青海",
								href : "/qh"
							},
							{
								name : "上海",
								href : "/sh"
							},
							{
								name : "四川",
								href : "/sc"
							},
							{
								name : "山东",
								href : "/sd"
							},
							{
								name : "山西",
								href : "/sx"
							},
							{
								name : "陕西",
								href : "shanxi"
							}
						]
					},
					{
						name : "T-Z",
						anchor : [
							{
								name : "天津",
								href : "/tj"
							},
							{
								name : "新疆",
								href : "/xj"
							},
							{
								name : "西藏",
								href : "/xz"
							},
							{
								name : "云南",
								href : "/yn"
							},
							{
								name : "浙江",
								href : "/zj"
							}
						]
					},
				],
				searArr : [
					"QueenJewlery","钻戒","铂金对戒"
				],
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
				],
				dialogArr : [
					{
						name : "钻石",
						son : [
							{
								name : "30分",
								href : "/30fen"
							},
							{
								name : "50分",
								href : "/50fen"
							},
							{
								name : "克拉钻",
								href : "/kela"
							}
						]
					},
					{
						name : "钻戒",
						son : [
							{
								name : "30分",
								href : "/30fen"
							},
							{
								name : "50分",
								href : "/50fen"
							},
							{
								name : "铂金",
								href : "/bojin"
							}
						]
					},
					{
						name : "对戒",
						son : [
							{
								name : "铂金对戒",
								href : "/30fen"
							},
							{
								name : "K金对戒",
								href : "/50fen"
							}
						]
					},
					{
						name : "配饰",
						son : [
							{
								name : "吊坠",
								href : "/30fen"
							},
							{
								name : "项链",
								href : "/50fen"
							},
							{
								name : "套链",
								href : "/kela"
							}
						]
					},
					{
						name : "系列产品",
						son : [
							{
								name : "宠爱婚戒",
								href : "/30fen"
							}
						]
					},
					{
						name : "热门产品",
						son : [
							{
								name : "50分裸钻",
								href : "/30fen"
							},
							{
								name : "70分裸钻",
								href : "/50fen"
							}
						]
					},
				]
			}
		}
	}


</script>