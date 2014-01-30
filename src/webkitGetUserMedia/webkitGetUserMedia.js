
/**
 * webkitGetUserMedia.js file
 */

navigator.webkitGetUserMedia = function(config, callback, error) {
	// 记住回调
	navigator.webkitGetUserMedia.callback = callback;
	navigator.webkitGetUserMedia.error = error;
		
	// 进行获取本地流的调用
	pcManagerJS.call_method('get_user_media', "0", config);	
};

navigator.webkitGetUserMedia.cb_getUserMedia = function(param) {
	if(!param.error) { // 如果不存在错误
		// 产生本地流对象
		navigator.webkitGetUserMedia.mediastream = param;
		
		// 进行成功回调
		navigator.webkitGetUserMedia.callback(param);
		
	} else { // 如果获取失败
		// 产生错误对象
		var error = {};
		error.code = param.error;
		
		// 进行失败回调
		navigator.webkitGetUserMedia.error(error);
	}
};
