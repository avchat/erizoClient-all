/**
 * webkitGetUserMedia.js file
 */

navigator.webkitGetUserMedia =  function(config, callback, error) {
	this.callback = callback;
	this.error = error;
		
	pcManagerJS.call_method('get_user_media', "0", config);
	
	return this;
};

navigator.webkitGetUserMedia.prototype.cb_getUserMedia = function(param) {	
	if(!param.error) {
		this.mediastream = new MediaStream();
		this.mediastream.pc_id = param.pc_id;
		this.mediastream.stream_type = param.stream_type;
		this.callback(this.mediastream);
	} else {
		var error = {};
		error.code = param.error;
		this.error(error);
	}
};