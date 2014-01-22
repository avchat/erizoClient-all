/**
 * PCManagerProxyIOS.js file
 */
window.pcManagerProxy = window.pcManagerProxy || new PCManagerProxyIOS();

PCManagerProxyIOS = function() {
	
};

PCManagerProxyIOS.prototype.new_pc = function(pc) {
	// sendMessage();
};

PCManagerProxyIOS.prototype.delete_pc = function(pc_id) {
	// sendMessage();
};


PCManagerProxyIOS.prototype.addStream = function(pc_id, stream_str) {	
	// sendMessage();
};

PCManagerProxyIOS.prototype.removeStream = function(pc_id, stream_str) {	
	// sendMessage();
};

PCManagerProxyIOS.prototype.close = function(pc_id) {
	// sendMessage();
};

PCManagerProxyIOS.prototype.createOffer = function(pc_id, constraints_str) {	
	// sendMessage();	
};

PCManagerProxyIOS.prototype.createAnswer = function(pc_id, constraints_str) {	
	// sendMessage();	
};

PCManagerProxyIOS.prototype.setLocalDescription = function(pc_id, sd_str) {	
	// sendMessage();
};

PCManagerProxyIOS.prototype.setRemoteDescription = function(pc_id, sd_str) {	
	// sendMessage();
};

PCManagerProxyIOS.prototype.createDataChannel = function(pc_id, param_str) {
	// sendMessage();
};

PCManagerProxyIOS.prototype.updateIce = function(pc_id, param_str) {
	// sendMessage();
};

PCManagerProxyIOS.prototype.addIceCandidate = function(pc_id, ice_str) {
	// sendMessage();
};

PCManagerProxyIOS.prototype.getStats = function(pc_id) {
	// sendMessage();
};