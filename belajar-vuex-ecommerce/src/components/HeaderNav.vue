<template>
	<nav class="navbar navbar-expand-lg navbar-light bg-light">
	  <a class="navbar-brand" href="#">Navbar</a>
	  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
		<span class="navbar-toggler-icon"></span>
	  </button>

	  <div class="collapse navbar-collapse" id="navbarSupportedContent">
		<ul class="navbar-nav mr-auto">
		  <li class="nav-item active">
			<router-link class="nav-link" :to='{ name:"home" }'><span class="sr-only">(current)</span></router-link>
		  </li>
		  <li class="nav-item">
			<router-link class="nav-link" :to='{ name:"home" }'>Home</router-link>
		  </li>
		  <li class="nav-item">
			<a class="nav-link" href="#">Product</a>
		  </li>
		</ul>
		<ul class="navbar-nav ml-auto">
			<Cart/>
		</ul>
	  </div>
	</nav>
</template>

<script>
	import Cart from './Cart.vue';

	export default {
		name:"HeaderBar",
		components:
		{
			Cart,
		}
	}
</script>