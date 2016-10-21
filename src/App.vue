<style lang="stylus">
		*
			margin 0
			padding 0
			line-height 1
			font-family Microsoft Yahei
			color rgb(51, 51, 51)
		a
			text-decoration none
			color inherit
		ul
		ol
			list-style none
		em
		i
			font-style normal
		.w1180
			margin 0 auto
			width 1180px
		.w280
			margin 0 auto
			width 280px
		.flo1-head
			height 60px
			margin-top 40px
			line-height 60px
			>span
				font-size 22px
				font-weight bold
			.add
				float right
				font-size 22px
				font-weight bold
				width 50px
				height @width
				background-color rgb(242, 242, 242)
				text-align center
				line-height @width
				border-radius 50%
				color rgb(188, 188, 188)
</style>
<template>
  <div id="app">
  	<my-header></my-header>
  	<router-view></router-view>		
  	<my-footer></my-footer>
  	<my-test></my-test>
  </div>
</template>

<script>
	import MyHeader from "./components/Header";
	import MyFooter from "./components/Footer";
	import MyTest from "./components/test";
	export default {
		components : {
			MyHeader,
			MyFooter,
			MyTest
		}
	}
</script>
