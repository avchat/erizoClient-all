

/**
 * webkitRTCPeerConnection.js file
 */

webkitRTCPeerConnection = function() {
	this.pc_id = pcManagerJS.pc_new(this);
	this.iceGatheringState = "";
	this.signalingState = "";
	this.iceConnectionState = "";
};

webkitRTCPeerConnection.addStream = function(stream) {
	stream.pc_id = this.pc_id; // 本地流在这个时候才与某一个pc对象绑定
		
	return pcManagerJS.call_method('addStream', this.pc_id, stream);
};

webkitRTCPeerConnection.removeStream = function(stream) {	
	return pcManagerJS.call_method('removeStream', this.pc_id, stream);
};

webkitRTCPeerConnection.close = function() {
	return pcManagerJS.call_method('close', this.pc_id, {});
};

webkitRTCPeerConnection.createAnswer = function(callback, obj, constraints) {
	this.cb_createAnswer = callback;
	
	var param = {};
	param.constraints = constraints;
	
	return pcManagerJS.call_method('createAnswer', this.pc_id, param);
};

webkitRTCPeerConnection.createOffer = function(callback, obj, constraints) {
	this.cb_createOffer = callback;
	var param = {};
	param.constraints = constraints;
	return pcManagerJS.call_method('createOffer', this.pc_id, param);
};

webkitRTCPeerConnection.createDataChannel = function(param) {
	return pcManagerJS.call_method('createDataChannel', this.pc_id, param);
};

webkitRTCPeerConnection.setLocalDescription = function(sd) {
	return pcManagerJS.call_method('setLocalDescription', this.pc_id, sd);
};

webkitRTCPeerConnection.setRemoteDescription = function(sd) {
	return pcManagerJS.call_method('setRemoteDescription', this.pc_id, sd);
};

webkitRTCPeerConnection.updateIce = function(param) {
	return pcManagerJS.call_method('updateIce', this.pc_id, param);
};

webkitRTCPeerConnection.addIceCandidate = function(ice) {
	return pcManagerJS.call_method('addIceCandidate', this.pc_id, ice);
};

webkitRTCPeerConnection.getStats = function() {
	return pcManagerJS.call_method('getStats', this.pc_id, {});
};

