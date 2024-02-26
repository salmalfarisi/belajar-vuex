<template>
	<div>
		TodoForm (yang sudah : {{ gettotalSuccess }})
		<div>
			<input type="text" v-model="text"/>
			<button @click="addNewData()">Submit</button>
		</div>
	</div>
</template>

<script>
	import { mapGetters } from 'vuex';

	export default {
		name:"TodoForm",
		data()
		{
			return {
				text:""
			};
		},
		computed:
		{
			/*gettotalSuccess()
			{
				return this.$store.getters.getTotalAccdata;
			}*/
			//cara meringkas panggil function
			...mapGetters(
				{
					gettotalSuccess: 'getTotalAccdata'
				}
			)
		},
		methods:
		{
			addNewData()
			{
				this.$store.dispatch("addNewStore", this.text);
				this.text = "";
			}
		}
	};
</script>

<style>
	
</style>