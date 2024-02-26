<template>
	<div>
		<span :class="{complete:todo.complete}" @click="setStatus">{{ todo.title }} | {{ todo.complete }}</span>
		
		<button @click="hapusData(todo)">Delete</button>
	</div>
</template>

<script>
	import { mapActions } from "vuex";

	export default {
		name:'TodoDetail',
		props:
		[
			'todo'
		],
		methods:
		{
			// hapusData()
			// {
				// this.$store.dispatch("deleteData", this.todo);
			// },
			// setStatus()
			// {
				// this.$store.dispatch("changeStatus", this.todo);
			// }
			...mapActions(
				{
					hapusData:'deleteData',
					setStatus:'changeStatus',
				}
			)
		}
	};
</script>

<style>
	
</style>