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
	stream.pc_id = this.pc_id;
	
	return pcManagerJS.call_method(PCManagerJS.method_map['addStream'], this.pc_id, {});
};

webkitRTCPeerConnection.removeStream = function(stream) {	
	return pcManagerJS.call_method(PCManagerJS.method_map['removeStream'], this.pc_id, {});
};

webkitRTCPeerConnection.close = function() {
	return pcManagerJS.call_method(PCManagerJS.method_map['close'], this.pc_id, {});
};

webkitRTCPeerConnection.createAnswer = function(callback, obj, constraints) {
	this.cb_createAnswer = callback;
	
	return pcManagerJS.call_method(PCManagerJS.method_map['createAnswer'], this.pc_id, constraints);
};

webkitRTCPeerConnection.createOffer = function(callback, obj, constraints) {
	this.cb_createOffer = callback;
	
	return pcManagerJS.call_method(PCManagerJS.method_map['createOffer'], this.pc_id, constraints);
};

webkitRTCPeerConnection.createDataChannel = function(param) {
	return pcManagerJS.call_method(PCManagerJS.method_map['createDataChannel'], this.pc_id, param);
};

webkitRTCPeerConnection.setLocalDescription = function(sd) {
	return pcManagerJS.call_method(PCManagerJS.method_map['setLocalDescription'], this.pc_id, sd);
};

webkitRTCPeerConnection.setRemoteDescription = function(sd) {
	return pcManagerJS.call_method(PCManagerJS.method_map['setRemoteDescription'], this.pc_id, sd);
};

webkitRTCPeerConnection.updateIce = function(param) {
	return pcManagerJS.call_method(PCManagerJS.method_map['updateIce'], this.pc_id, param);
};

webkitRTCPeerConnection.addIceCandidate = function(ice) {
	return pcManagerJS.call_method(PCManagerJS.method_map['addIceCandidate'], this.pc_id, ice);
};

webkitRTCPeerConnection.getStats = function() {
	return pcManagerJS.call_method(PCManagerJS.method_map['getStats'], this.pc_id, {});
};


