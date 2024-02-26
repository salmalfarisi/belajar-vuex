import axios from 'axios';
//cari penyebab napa vue jadi gak reactive semenjak dipisah" filenya!!

export const loadProduct = ({commit}) => {
	axios.get("http://127.0.0.1:8000/api/product/index")
		.then(
			response => {
				commit('setAllProduct', response.data.data);
			}
		)
		.catch(
			error => {
				alert(error.response.data.message);
			}
		)
}

export const detailProduct = ({commit}, productId) => {
	axios.get(`http://127.0.0.1:8000/api/product/detail/${productId}`)
		.then(
			response => {
				commit('getdetailProduct', response.data.data);
			}
		)
		.catch(
			error => {
				alert(error.response.data.message);
			}
		)
}

export const addListCart = ({commit}, data) => {
	commit('addCart', data);
}

export const deleteListCart = ({commit}, data) => {
	commit('deleteCart', data);
}