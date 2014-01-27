/**
 * webkitGetUserMedia.js file
 */

navigator.webkitGetUserMedia = function(config, callback, error) {
	// 记住回调
	this.callback = callback;
	this.error = error;
		
	// 进行获取本地流的调用
	pcManagerJS.call_method('get_user_media', "0", config);	
};

navigator.webkitGetUserMedia.prototype.cb_getUserMedia = function(param) {	
	if(!param.error) { // 如果不存在错误
		// 产生本地流对象
		this.mediastream = new RTCMediaStream();
		this.mediastream.pc_id = param.pc_id;
		this.mediastream.stream_type = param.stream_type;
		
		// 进行成功回调
		this.callback(this.mediastream);
		
	} else { // 如果获取失败
		// 产生错误对象
		var error = {};
		error.code = param.error;
		
		// 进行失败回调
		this.error(error);
	}
};