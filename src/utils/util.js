export function setCookie(name, value) {
	var Days = 30;
	var exp = new Date();
	exp.setTime(exp.getTime() + Days * 24 * 60 * 60 * 1000);
	document.cookie = name + "=" + escape(value) + ";expires=" + exp.toGMTString();
}


// 获取cookie
export function getCookie(name) {
	var v = window.document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	return v ? v[2] : null;
}