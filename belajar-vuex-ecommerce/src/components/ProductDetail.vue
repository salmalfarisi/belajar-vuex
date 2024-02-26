<template>
	<div class="col-3 card m-1">
	  <center>
		  <img class="card-img-top" style="width:250px; height:250px;" :src="setDetail.image" alt="Card image cap">
	  </center>
	  <div class="card-body">
		<h5 class="card-title">{{ setDetail.title }}</h5>
		<p class="card-text">{{ setDetail.description }}</p>
		<router-link class="btn btn-primary" :to='{ name:"detail", params:{id:setDetail.id} }'>${{ setDetail.price }}</router-link>
	  </div>
	</div>
</template>

<script>
	export default {
		name:"ProductCard",
		props:
		[
			'setDetail'
		]
	}
</script>