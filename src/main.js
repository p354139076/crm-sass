import Vue from 'vue'
import App from './App.vue'
import router from './router'
import i18n from './lang' // Internationalization
import ElementUI from 'element-ui'
import store from './store'
Vue.use(ElementUI, {
	size: 'medium', // set element-ui default size
})
Vue.config.productionTip = false

new Vue({
	i18n,
	router,
	store,
	render: h => h(App),
}).$mount('#app')
