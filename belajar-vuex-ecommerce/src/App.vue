<template>
  <div id="app">
	<HeaderBar/>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderBar from './components/HeaderNav.vue';

export default {
  name: 'App',
  components: {
	  HeaderBar
  }
}
</script>