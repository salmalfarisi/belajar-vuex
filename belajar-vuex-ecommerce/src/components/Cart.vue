<template>
	<li class="nav-item dropdown" style="right:0px; left:auto;">
		<a class="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-expanded="false">
			{{ (listdata == null || listdata == undefined ? 0 : listdata.length ) }} Cart
		</a>
		<div class="dropdown-menu dropdown-menu-right" style="width:350px">
		  <div v-if="listdata.length != 0">
			  <div v-for="(renderdata, index) in listdata" :key="index" class="px-4 d-flex justify-between-content">
				  <div class="row">
					<div class="col-8">
						<img :src="renderdata.image" class="img-fluid">
					</div>
					<div class="col-4">
						<p class="text-justify" href="#">{{ renderdata.title }}</p>
						<p class="text-justify" href="#">qty : {{ renderdata.total }}</p>
						<p class="text-justify" href="#">prize : {{ renderdata.totalprize }}</p>
						<button @click="hapusCart(renderdata)" class="btn btn-sm btn-danger">&times;</button>
					</div>
				  </div>
			  </div>
		  </div>
		  <div v-else>
			EMPTY
		  </div>
		</div>
	</li>
</template>

<script>
	import { mapState, mapGetters } from 'vuex';

	export default
	{
		name:"Cart",
		computed:
		{
			...mapGetters(
				{
					listdata : 'loadDataCart'
				}
			)
		},
		methods:
		{
			hapusCart(data)
			{
				this.$store.dispatch("deleteListCart", this.data);
			}
		}
	}
</script>