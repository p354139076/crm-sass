import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
export const constantRouterMap = [
	{
		path: '/login',
		component: () => import('@/views/login/index'),
		hidden: true
	},
	// {
	//   path: '/auth-redirect',
	//   component: () => import('@/views/login/authredirect'),
	//   hidden: true
	// },
	// {
	//   path: '/404',
	//   component: () => import('@/views/errorPage/404'),
	//   hidden: true
	// },
	// {
	//   path: '/401',
	//   component: () => import('@/views/errorPage/401'),
	//   hidden: true
	// },
]

export default new Router({
	// mode: 'history', // require service support
	scrollBehavior: () => ({ y: 0 }),
	routes: constantRouterMap
})
