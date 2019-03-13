import request from '@/utils/request'

export function loginByUsername(usertype,loginname, loginpwd,code) {
	const data = {
		usertype,
		loginname,
		loginpwd,
		code
	}
	return request({
		url: '/sso/login',
		method: 'post',
		data
	})
}

export function logout() {
	return request({
		url: '/login/logout',
		method: 'post'
	})
}

export function getUserInfo(token) {
	return request({
		url: '/sso/logintreemenu',
		method: 'get',
		params: { token }
	})
}

