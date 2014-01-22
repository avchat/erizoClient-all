/**
 * RTCIceCandidate.js file
 */

window.RTCIceCandidate = function(param_obj){
	this.sdpMid = param_obj.sdpMid;
	this.sdpMLineIndex = param_obj.sdpMLineIndex;
	this.sdp = param_obj.sdp;
};