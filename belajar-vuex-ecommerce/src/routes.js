import HelloWorld from './components/HelloWorld.vue';
import ProductPage from './components/ProductPage.vue';

export default [
	{
		path: '/',
		component:HelloWorld,
		name: 'home'
	},
	{
		path: '/:id',
		component:ProductPage,
		name: 'detail'
	},
]