<template>
	<div class="row p-3 text-center" >
		<ProductCard v-for="(showData, index) in data" :key="index" :setDetail="showData"/>
	</div>
</template>

<script>
	import ProductCard from "./ProductDetail.vue";

	export default {
		name:"Product",
		data()
		{
			return {
				data:[]
			}
		},
		components:
		{
			ProductCard
		},
		/*computed:
		{
			loopdata()
			{
				//gak tau kenapa gak mau kebaca
				console.log(this.$store.state.product);
				this.data = this.$store.state.product;
			}
		},*/
		mounted()
		{
			this.$store.dispatch("loadProduct");
			//sementara kek gini dulu. gak tau napa gak mau ngeload pertama kali
			setTimeout(() => this.data = this.$store.state.product, 1000);
		}
	}
</script>