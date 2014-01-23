/**
 * webkitGetUserMedia.js file
 */

navigator.webkitGetUserMedia =  function(config, callback, error) {
	this.callback = callback;
	this.error = error;
	
		
	pcManagerJS.call_method(PCManagerJS.method_map['get_user_media'], 0, config);
	
	return this.mediastram;
};

navigator.webkitGetUserMedia.prototype.cb_getUserMedia = function(param) {
	if(true) {
		this.mediastream = new MediaStream();
		this.callback(this.mediastream);
	} else {
		var error = {};
		error.code = 0;
		this.error(error);
	}
};