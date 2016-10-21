<style scoped lang="stylus">
	.banner
		position relative
		height 350px
		text-align center
		a
			position absolute
			top 0
			left 0
			width 100%
			height 100%
			&.current
				z-index 1
		em
			position relative
			top -20px
			margin 0 10px
			padding 2.5px 30px
			background-color rgb(188, 188, 188)
			font-size 0
			vertical-align top
			z-index 6
			&.current
				background-color white
		.w1180
			height 100%
			p
				text-align left
				position absolute
				margin-left 140px
				margin-top 126px
				color white
				z-index 5
				font-size 34px
				font-weight bold
				width 310px
				line-height 48px
</style>
<template>
	<div class="banner">
		<div class="w1180">
			<p>我是女王，我做主 !我的品牌我代言!</p>
		</div>
		<a v-for="(item,index) of data" :title="item.name" :style="{'background-image':'url(' + item.src + ')'}" v-bind:class="{current:index === currentIndex}"></a>
		<em v-for="index of len" @click="handleClick(index - 1)" v-bind:class="{current:(index - 1) === currentIndex}"></em>
	</div>
</template>
<script>
	let t;
	const timer = callback =>{
		t = setInterval(() => {
			callback();
		}, 2000)
	}
	export default {
		props : ["data"],
		data(){
			return{
				currentIndex : 0
			};
		},
		methods : {
			handleClick(index){
				clearTimeout(t);
				this.currentIndex = index;
				timer(() =>{
					let currentIndex = this.currentIndex;
					this.currentIndex = currentIndex > this.len - 2 ? 0 : currentIndex + 1;
				});
			}
		},
		computed : {
			len(){
				return this.data.length;
			}
		},
		mounted(){
			timer(() =>{
					let currentIndex = this.currentIndex;
					this.currentIndex = currentIndex > this.len - 2 ? 0 : currentIndex + 1;
				});
		}
	};
</script>