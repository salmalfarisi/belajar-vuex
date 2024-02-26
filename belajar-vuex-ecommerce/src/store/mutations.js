export const setAllProduct = (state, data) => {
	try
	{
		state.product = data;
	}
	catch(e)
	{
		console.log(e);
	}
}

export const getdetailProduct = (state, data) => {
	try
	{
		state.detailproduct = data;
		
		return data
	}
	catch(e)
	{
		console.log(e);
	}
}

export const addCart = (state, data) => {
	let result = state.state.cart;
	data.totalprize = parseInt(data.price) * parseInt(data.total);
	result.push(data);
}

export const deleteCart = (state, data) => {
	let index = state.state.cart.indexOf(data);
	state.state.cart.splice(index, 1);
}