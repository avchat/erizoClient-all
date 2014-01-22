/**
 * webkitRTCPeerConnection.js file
 */

webkitRTCPeerConnection = function() {
	this.pc_id = pcManagerJS.new_pc(this);
};

webkitRTCPeerConnection.prototype.addStream = function(stream) {
	stream.pc_id = this.pc_id;
	
	return PCManagerJS.prototype.call_method(pcManagerJS.method_map['addStream'], this.pc_id, stream);
};

webkitRTCPeerConnection.prototype.removeStream = function(stream) {	
	return PCManagerJS.prototype.call_method(pcManagerJS.method_map['removeStream'], this.pc_id, stream);
};

webkitRTCPeerConnection.prototype.close = function() {
	return PCManagerJS.prototype.call_method(pcManagerJS.method_map['close'], this.pc_id, {});
};

webkitRTCPeerConnection.prototype.createAnswer = function(callback, obj, constraints) {
	this.createAnswer_callback = callback;
	
	return PCManagerJS.prototype.call_method(pcManagerJS.method_map['createAnswer'], this.pc_id, constraints);
};

webkitRTCPeerConnection.prototype.createOffer = function(callback, obj, constraints) {
	this.createOffer_callback = callback;
	
	return PCManagerJS.prototype.call_method(pcManagerJS.method_map['createOffer'], this.pc_id, constraints);
};

webkitRTCPeerConnection.prototype.createDataChannel = function(param) {
	return PCManagerJS.prototype.call_method(pcManagerJS.method_map['createDataChannel'], this.pc_id, param);
};

webkitRTCPeerConnection.prototype.setLocalDescription = function(sd) {
	return PCManagerJS.prototype.call_method(pcManagerJS.method_map['setLocalDescription'], this.pc_id, sd);
};

webkitRTCPeerConnection.prototype.setRemoteDescription = function(sd) {
	return PCManagerJS.prototype.call_method(pcManagerJS.method_map['setRemoteDescription'], this.pc_id, sd);
};

webkitRTCPeerConnection.prototype.updateIce = function(param) {
	return PCManagerJS.prototype.call_method(pcManagerJS.method_map['updateIce'], this.pc_id, param);
};

webkitRTCPeerConnection.prototype.addIceCandidate = function(ice) {
	return PCManagerJS.prototype.call_method(pcManagerJS.method_map['addIceCandidate'], this.pc_id, ice);
};

webkitRTCPeerConnection.prototype.getStats = function() {
	return PCManagerJS.prototype.call_method(pcManagerJS.method_map['getStats'], this.pc_id, {});
};


