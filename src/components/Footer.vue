<style scoped lang="stylus">
	.footer
		margin-top 55px
	.bottom0
		overflow hidden
		border-top 1px solid rgb(215, 215, 215)
		ul
			float left
			padding 55px 0 45px 
			width 200px
			li
				&:nth-child(1)
					margin-bottom 30px
					font-size 18px
					font-weight bold
				a
					line-height 2
		.phone
			display inline-block
			padding 55px 0 45px
			width 220px
			p
				margin-bottom 30px
				font-size 18px
				font-weight bold
				&:before
					content ""
					float left
					background-image url(../assets/phone.png)
					background-position 2px 2px
					width 20px
					height @width
					
			.number
				font-size 24px
				font-weight bold
				span
					display block
					font-size 14px
					font-weight 100
		.QR-code
			float right
			padding 55px 0 45px
			width 160px
			text-align center
			p
				margin-bottom 30px
				font-size 18px
				font-weight bold
			span
				float left
				height 112px
				line-height 200px
				width 100%
				font-size 14px
				background-image url(../assets/QR-code.png)
				background-repeat no-repeat
				background-position center 0
			
	.bottom1
		height 40px
		background-color rgb(228, 228, 228)
		.w1180
			height @height
			line-height @height
			a
				font-size 12px
				margin-right 20px
	.bottom2
		padding 24px 0
		background-color rgb(242, 242, 242)
		p
			font-size 12px
			line-height 15px
</style>
<template>
	<div class="footer">
		<div class="bottom0 w1180">
			<ul v-for = "list of arrBottom1Anchors">
				<li>{{list.name}}</li>
				<li v-for="anchor of list.anchor">
					<a :href="list.anchor.href">{{anchor.name}}</a>
				</li>
			</ul>
			<div class="phone">
				<p>客服热线</p>
				<div class="number">
					12345678912
					<span>（周一至周日，9:00-21:00）</span>
				</div>
			</div>
			<div class="QR-code">
				<p>女王微信</p>
				<span>女王官方微信</span>
			</div>
		</div>
		<div class="bottom1">
			<div class="w1180">
				<a v-for= "anchor of arrAnchors" :href="anchor.href">{{anchor.name}}</a>
			</div>
		</div>
		<div class="bottom2">
			<div class="w1180">
				<p>COPYRIGHT © 2010-2015 女王珠宝有限公司   anqueen.com 保留一切权利。 客服热线：12345678912</p>
				<p>深圳公网安备 XXXXXXXXXX | 京ICP证XXXXXX号 | 营业执照</p>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		data(){
			return{
				arrBottom1Anchors : [
					{
						name : "使用帮助",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					},
					{
						name : "支付方式",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					},
					{
						name : "配送方式",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					},
					{
						name : "售后服务",
						anchor : [
							{
								name : "新手指南",
								href : "/rookie"
							},
							{
								name : "常见问题",
								href : "/qa"
							},
							{
								name : "帮助中心",
								href : "/help"
							},
							{
								name : "用户协议",
								href : "/agreement"
							}
						]
					}
				],
				arrAnchors : [
				{
					name : "关于女王珠宝",
					href : "/about"
				},
				{
					name : "申请代言",
					href : "/apply"
				},
				{
					name : "加入女王珠宝",
					href : "/join"
				},
				{
					name : "品牌街",
					href : "/brand"
				},
				{
					name : "媒体报告",
					href : "/media"
				},
				{
					name : "商务合作",
					href : "/business"
				}
				]
			}
		}
	}

</script>