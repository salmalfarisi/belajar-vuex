import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
	state:
	{
		data:
		[
			// {
				// title:"testing1",
				// complete:false
			// },
			// {
				// title:"testing2",
				// complete:true
			// },
		]
	},
	getters:
	{
		getTotalAccdata(state)
		{
			return state.data.filter(loopdata => {
				return loopdata.complete === true
			}).length;
		}
	},
	mutations:
	{
		//ini daerah function
		createData(state, data)
		{
			console.log(state.data);
			state.data.push(
				{
					title:data,
					complete:false
				}
			);
		},
		deleteData(state, getData)
		{
			let index = state.data.indexOf(getData);
			state.data.splice(index, 1);
		},
		ubahData(state, data)
		{
			data.complete = !data.complete;
		}
	},
	actions:
	{
		//ini daerah state yang bisa dipake secara global
		addNewStore({commit}, setData)
		{
			commit('createData', setData);
		},
		deleteData({commit}, getData)
		{
			commit('deleteData', getData);
		},
		changeStatus({commit}, getData)
		{
			commit('ubahData', getData);
		}
	},
});