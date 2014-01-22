/**
 * PCManagerProxyIOS.js file
 */
window.pcManagerProxy = window.pcManagerProxy || new PCManagerProxyIOS();

PCManagerProxyIOS = function() {
	
};

PCManagerProxyIOS.prototype.call_method = function(method_name, pc_id, param_obj) {
	return sendMessage(method_name, pc_id, JSON.stringify(param_obj));
};

PCManagerProxyIOS.prototype.sendMessage = function(method_name, pc_id, param_obj) {
	return '';
};