/**
 * webkitRTCPeerConnection.js file
 */

webkitRTCPeerConnection = function() {
	this.pc_id = pcManagerJS.new_pc(this);
};

webkitRTCPeerConnection.prototype.addStream = function(stream) {
	stream.pc_id = this.pc_id;
	pcManagerJS.addStream(this.pc_id, stream);
};

webkitRTCPeerConnection.prototype.removeStream = function(stream) {	
	pcManagerJS.removeStream(this.pc_id, stream);
};

webkitRTCPeerConnection.prototype.close = function() {
	pcManagerJS.close(this.pc_id);
};

webkitRTCPeerConnection.prototype.createAnswer = function(callback, obj, constraints) {
	this.createAnswer_callback = callback;
	
	pcManagerJS.createAnswer(this.pc_id, constraints);	
};

webkitRTCPeerConnection.prototype.createOffer = function(callback, obj, constraints) {
	this.createOffer_callback = callback;
	
	pcManagerJS.createOffer(this.pc_id, constraints);	
};

webkitRTCPeerConnection.prototype.createDataChannel = function(param) {
	pcManagerJS.createDataChannel(this.pc_id, param);
};

webkitRTCPeerConnection.prototype.setLocalDescription = function(sd) {
	pcManagerJS.setLocalDescription(this.pc_id, sd);
};

webkitRTCPeerConnection.prototype.setRemoteDescription = function(sd) {
	pcManagerJS.setRemoteDescription(this.pc_id, sd);
};

webkitRTCPeerConnection.prototype.updateIce = function(param) {
	pcManagerJS.updateIce(this.pc_id, param);
};

webkitRTCPeerConnection.prototype.addIceCandidate = function(ice) {
	pcManagerJS.addIceCandidate(this.pc_id, ice);
};

webkitRTCPeerConnection.prototype.getStats = function() {
	return pcManagerJS.getStats(this.pc_id);
};


