
/**
 * webkitRTCPeerConnection.js file
 */

webkitRTCPeerConnection = function(pc_config, con) {
	this.iceGatheringState = "";
	this.signalingState = "";
	this.iceConnectionState = "";
	
	this.pc_id = pcManagerJS.pc_new(this, pc_config, con);
};

webkitRTCPeerConnection.prototype.addStream = function(stream) {
	stream.pc_id = this.pc_id; // 本地流在这个时候才与某一个pc对象绑定
		
	return pcManagerJS.call_method('addStream', this.pc_id, stream);
};

webkitRTCPeerConnection.prototype.removeStream = function(stream) {	
	return pcManagerJS.call_method('removeStream', this.pc_id, stream);
};

webkitRTCPeerConnection.prototype.close = function() {
	return pcManagerJS.call_method('close', this.pc_id, {});
};

webkitRTCPeerConnection.prototype.createAnswer = function(callback, obj, constraints) {
	this.cb_createAnswer = callback;
	
	return pcManagerJS.call_method('createAnswer', this.pc_id, constraints);
};

webkitRTCPeerConnection.prototype.createOffer = function(callback, obj, constraints) {
	this.cb_createOffer = callback;
	
	return pcManagerJS.call_method('createOffer', this.pc_id, constraints);
};

webkitRTCPeerConnection.prototype.createDataChannel = function(param) {
	return pcManagerJS.call_method('createDataChannel', this.pc_id, param);
};

webkitRTCPeerConnection.prototype.setLocalDescription = function(sd) {
	return pcManagerJS.call_method('setLocalDescription', this.pc_id, sd);
};

webkitRTCPeerConnection.prototype.setRemoteDescription = function(sd) {
	return pcManagerJS.call_method('setRemoteDescription', this.pc_id, sd);
};

webkitRTCPeerConnection.prototype.updateIce = function(param) {
	return pcManagerJS.call_method('updateIce', this.pc_id, param);
};

webkitRTCPeerConnection.prototype.addIceCandidate = function(ice) {
	return pcManagerJS.call_method('addIceCandidate', this.pc_id, ice);
};

webkitRTCPeerConnection.prototype.getStats = function() {
	return pcManagerJS.call_method('getStats', this.pc_id, {});
};
