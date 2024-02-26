import { state } from './state';

//gak tau napa, variable disini cuma 1 yaitu state doang
export const getDataById = (state) => (data) => {
	let getdata = state.state.product;
	console.log(data);
	console.log(getdata);
	let result = getdata.find((loop) => loop.id == data);
	state.state.detailproduct = result;
	console.log(result);
	return result;
}

export const loadDataCart = (state) => {
	let data = state.state.cart;
	return data;
}

export const loadDataProduct = (state) => {
	let data = state.state.product;
	return data;
}

export const loadDataProductDetail = (state) => {
	let data = state.state.detailproduct;
	return data;
}