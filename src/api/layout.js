import request from '@/utils/request'

export function loginTreeMenu() {
	return request({
		url: '/sso/logintreemenu',
		method: 'get',
		params: {}
	})
}