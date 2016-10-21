<style scoped lang="stylus">
	.meter
		position relative
		overflow hidden
		&.step1
			.progress
				border-right-width 705px
				border-left-width 475px
		&.step2
			.progress
				border-right-width 471px
				border-left-width 709px
		&.step3
			.progress
				border-right-style none
				border-left-width 1180px
		.progress
			height 2px
			position absolute
			top 89px
			border-style none solid
			border-right-color rgb(188, 188, 188)
			border-left-color black
		.circle
			position relative
			width 36px
			height @width
			border-width 2px 
			border-style solid
			border-radius 50%
			text-align center
			line-height @height
			margin-top 70px
			float left
			&.normal
				border-color rgb(188, 188, 188)
			&.done
				background-color black
				border-color black
				color white
			&:before
				position absolute
				top -44px
				left ((@width + @border-width*2)/2)
				transform translateX(-50%)
				font-size 15px
				white-space nowrap
				color black
			&:nth-of-type(2)
				margin-left 338px
				&:before
					content "描述您的需求"
			&:nth-of-type(3)
				margin-left 194px
				&:before
					content "预览您的需求"
			&:nth-of-type(4)
				margin-left 194px
				&:before
					content "发送需求成功"
	form
		float left
		margin-top 30px
		width 870px
		padding 14px
		border 1px solid rgb(242, 242, 242)
		label
			font-size 14px
			&:not([for="sltType"])
				display block
		select
			height 25px
		>div
			&:not(:first-of-type)
				margin-top 30px
		.ipt-txt
			margin-top 18px
			height 28px
			border 1px solid rgb(169, 169, 169)
			&#iptReq
				width 651px
			&:not(#iptReq)
				width 208px
		.code
			width 130px
			height 30px
			background-color rgb(242, 242, 242)
			border 1px solid rgb(228, 228, 228)
			corsur pointer
		textarea
			margin-top 18px
			width 653px
			height 183px
		.image
			width 100px
			height @width
			border 1px solid rgb(228, 228, 228)
			border-radius 2px
			background-color rgb(242, 242, 242)
			background-repeat no-repeat
			background-position 50% 50%
			background-size contain
			[type="file"]
				width @height
				height @width
				font-size 0
				opacity 0
				&::-webkit-file-upload-button
					display none
		.next
			margin-top 18px
			width 100px
			height 30px
			border-radius 2px
			background-color rgb(134, 134, 134)
			border-style none
			color white
			cursor pointer
	.info
		width 280px
		float right
		height 680px
		margin-top 30px
		background-color rgb(242, 242, 242)
		span
			display block
		.midle
		.top
			border-bottom 1px dotted
		.midle
		.top
		.down
			width 220px
			margin 0 auto
		.top
			span
				&:nth-of-type(1)
					font-size 16px
					margin 24px 0
				&:nth-of-type(2)
					width 112px
					font-size 14px
					margin-bottom 44px
		.midle
			span
				&:nth-of-type(1)
					font-size 16px
					margin 26px 0
				&:nth-of-type(2)
					line-height 30px
					font-size 14px
				&:nth-of-type(3)
					line-height 30px
					font-size 16px
					font-weight bold
				&:nth-of-type(4)
					line-height 30px
					margin-bottom 44px
		.down
			img
				width 180px
				height @width
				margin-top 38px
				
</style>
<template>
	<div class="apply w1180">
		<div class="meter step2">
			<div class="progress"></div>
			<div class="circle done">1</div>
			<div class="circle done">2</div>
			<div class="circle normal">3</div>
		</div>
		<form>
			<div>
				<label for="sltType">选择类目:</label>
				<select id="sltType" v-model="type">
					<option v-for="item of arrTypes" :value="item.value" v-text="item.name"></option>
				</select>
			</div>
			<div>
				<label for="iptReq">简单描述您的需求:</label>
				<input id="iptReq" class="ipt-txt" v-model="req" @input="handleValidate('req', $event)"/>
			</div>
			<div>
				<label>留下您的联系方式，方便交易顾问联系您：</label>
				<input class="ipt-txt"  placeholder="请输入手机号码" v-model="tel" @input="handleValidate('tel', $event)"/>
				<input class="code" type="button" value="获取手机验证码" />
				<br/>
				<input class="ipt-txt" placeholder="请输入手机号码"  v-model="code" @input="handleValidate('code', $event)"/>
			</div>
			<div>
				<label for="">说说您的具体要求:</label>
				<textarea v-model="detail" @input="handleValidate('detail', $event)"></textarea>
			</div>
			<div>
			<div class="image" :style="{'background-image':'url('+path+')'}">
				<input type="file" @change="handleChange"/>
			</div>
				<span v-text="message">最多可添加5个附件，每个大小不超过2M</span>
				<a>上传遇到问题?</a>
			</div>
			<input class="next" type="button" value="下一步>" @click = "handleNext" />
		</form>
		<div class="info">
			<div class="top">
				<span>保障交易安全</span>
				<span>个人资料绝不泄露
				交易问题一律赔偿
				不收取任何费用</span>
			</div>
			<div class="midle">
				<span>联系客服帮您发需求</span>
				<span>客服电话</span>
				<span>12345678912</span>
				<span>(周一至周日,9:00-21:00)</span>
			</div>
			<div class="down">
				<img src="../assets/QR-code.png">
			</div>
		</div>
	</div>
</template>
<script >
	export default{
		data(){
			return {
				arrTypes : [
					{
						name : "首发申请",
						value : "001"
					},
					{
						name : "创意申请",
						value : "005"
					},
					{
						name : "定制申请",
						value : "002"
					}
				],
				path : "",
				req : "",
				code : "",
				detail : "",
				tel : "",
				type : "001",
				message : ""
			};
		},
		methods : {
			handleChange(e){
				const fileReader = new FileReader(),
					Files = e.target.files;
				fileReader.onload = e => {
					this.path = e.target.result;
				};
				Files.length && /jpe?g|png|gif|bmp/.test(Files[0].type) && fileReader.readAsDataURL(e.target.files[0]);
			},
			handleNext(){
				console.log(this.req, thisreq, this.tel, this.code, this.detail);
			},
			handleValidate(type, e){
				const value = this[type];
				this.message = (/<script>/.test(value) || !({
					tel : /^1[3578]\d{9}$/,
					code : /^\d{6}$/
				}[type] || /.*/).test(value)) ? "您的输入有误" : "";
			}
		}
	};
</script>