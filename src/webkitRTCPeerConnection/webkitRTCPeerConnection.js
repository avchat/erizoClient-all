/**
 * webkitRTCPeerConnection.js file
 */

webkitRTCPeerConnection = function() {
	this.pc_id = pcManagerJS.new_pc(this);
};

webkitRTCPeerConnection.prototype.addStream = function(stream) {
	pcManagerJS.addStream(pc_id, stream);
};

webkitRTCPeerConnection.prototype.removeStream = function(stream) {	
	pcManagerJS.removeStream(pc_id, stream);
};

webkitRTCPeerConnection.prototype.close = function() {
	pcManagerJS.close(pc_id);
};

webkitRTCPeerConnection.prototype.createAnswer = function(callback, obj, constraints) {
	this.createAnswer_callback = callback;
	
	pcManagerJS.createAnswer(pc_id, constraints);	
};

webkitRTCPeerConnection.prototype.createOffer = function(callback, obj, constraints) {
	this.createOffer_callback = callback;
	
	pcManagerJS.createOffer(pc_id, constraints);	
};

webkitRTCPeerConnection.prototype.createDataChannel = function(param) {
	pcManagerJS.createDataChannel(pc_id, param);
};

webkitRTCPeerConnection.prototype.setLocalDescription = function(sd) {
	pcManagerJS.setLocalDescription(pc_id, sd);
};

webkitRTCPeerConnection.prototype.setRemoteDescription = function(sd) {
	pcManagerJS.setRemoteDescription(pc_id, sd);
};

webkitRTCPeerConnection.prototype.updateIce = function(param) {
	pcManagerJS.updateIce(pc_id, param);
};

webkitRTCPeerConnection.prototype.addIceCandidate = function(ice) {
	pcManagerJS.addIceCandidate(pc_id, ice);
};

webkitRTCPeerConnection.prototype.getStats = function() {
	return pcManagerJS.getStats(pc_id);
};


