<style scoped lang="stylus">

</style>

<template>
<div id="example-2">
  <ul @click="tip">
  	<li v-for="n of 10">{{n}}</li>
  </ul>
</div>
</template>

<script>
export default{
	data(){
		return{
			object : {
				a : 1,
				b : 2,
				c : 3
			}
		}
	},
	methods : {
		tip : function (){
				console.log(this.$el);
		}
	}
}
</script>