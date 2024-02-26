<template>
	<div>
		TodoList 
		
		<TodoDetail v-for="(loop, index) in todos" :key="index" :todo="loop" />
	</div>
</template>

<script>
	import { mapState } from 'vuex';
	import TodoDetail from './Todo.vue';

	export default {
		name:"TodoList",
		components:
		{
			TodoDetail
		},
		computed:
		{
			//proses pemanggilan via manual
			todos()
			{
				return this.$store.state.data;
			}
			
			//proses pemanggilan via library dari vuex 
			//untuk peringkasan penggunaan syntax
			/*...mapState(
				{
					todos:'data'
				}
			)*/
		}
	};
</script>

<style>
	
</style>