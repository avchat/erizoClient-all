/**
 * webkitGetUserMedia.js file
 */

navigator.webkitGetUserMedia =  function(config, callback, error) {
	this.callback = callback;
	this.error = error;
		
	var config_str = JSON.stringify(config);
	
	if(avDeviceManager !== undefined) {
		avDeviceManager.get_user_media(config_str);
	}
};

navigator.webkitGetUserMedia.prototype.cb_callback = function(param_str) {
	var param_obj = JSON.parse(param_str);
	
	this.callback(param_obj);
};

navigator.webkitGetUserMedia.prototype.cb_error = function(param_str) {
	var param_obj = JSON.parse(param_str);	
	
	this.error(param_obj);
};