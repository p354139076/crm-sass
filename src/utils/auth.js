import Cookies from 'js-cookie'

const TokenKey = 'Admin-Token'

export function getToken() {
	//找不到则返回字符串undefined，巨坑！
	return Cookies.get(TokenKey)
}

export function setToken(token) {
	return Cookies.set(TokenKey, token)
}

export function removeToken() {
	return Cookies.remove(TokenKey)
}
