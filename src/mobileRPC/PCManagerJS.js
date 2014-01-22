/**
 * PCManagerJS.js file
 */

window.pcManagerJS = window.pcManagerJS || new PCManagerJS();

PCManagerJS = function() {    
    
};

PCManagerJS._pc_id = 0;
PCManagerJS.pc_list = {};


PCManagerJS.prototype.new_pc = function(pc) {
	PCManagerJS._pc_id++;
	pcManagerProxy.new_pc(PCManagerJS._pc_id);
	pc_list[PCManagerJS._pc_id] = pc;	
	return _pc_id;
};

PCManagerJS.prototype.delete_pc = function(pc_id) {    	
	pcManagerProxy.delete_pc(pc_id);
	delete pc_list[pc_id];
};


PCManagerJS.prototype.addStream = function(pc_id, stream) {
	var stream_str = JSON.stringify(stream); 
	pcManagerProxy.addStream(stream_str);
};

PCManagerJS.prototype.removeStream = function(pc_id, stream) {
	var stream_str = JSON.stringify(stream); 
	pcManagerProxy.removeStream(stream_str);
};

PCManagerJS.prototype.close = function(pc_id) {
	pcManagerProxy.close(pc_id);
};

PCManagerJS.prototype.createOffer = function(pc_id, constraints) {	
	var constraints_str = JSON.stringify(constraints); 
	pcManagerProxy.createOffer(constraints_str);	
};

PCManagerJS.prototype.createAnswer = function(pc_id, constraints) {	
	var constraints_str = JSON.stringify(constraints); 
	pcManagerProxy.createAnswer(pc_id, constraints_str);	
};

PCManagerJS.prototype.setLocalDescription = function(pc_id, sd) {
	var sd_str = JSON.stringify(sd);
	pcManagerProxy.setLocalDescription(pc_id, sd_str);
};

PCManagerJS.prototype.setRemoteDescription = function(pc_id, sd) {
	var sd_str = JSON.stringify(sd);
	pcManagerProxy.setRemoteDescription(pc_id, sd_str);
};

PCManagerJS.prototype.createDataChannel = function(pc_id, param) {
	var param_str = JSON.stringify(param);
	pcManagerProxy.createDataChannel(pc_id, param_str);
};

PCManagerJS.prototype.updateIce = function(pc_id, param) {
	var param_str = JSON.stringify(param);
	pcManagerProxy.updateIce(pc_id, param_str);
};

PCManagerJS.prototype.addIceCandidate = function(pc_id, ice) {
	var ice_str = JSON.stringify(ice);
	pcManagerProxy.addIceCandidate(pc_id, ice_str);
};

PCManagerJS.prototype.getStats = function(pc_id) {
	var res = pcManagerProxy.getStats(pc_id);
	return JSON.Parse(res);
};

// cb_xxx
PCManagerJS.prototype.cb_createOffer = function(pc_id, offer_str) {
	var offer = JSON.parse(offer_str);
	this.pc_list[pc_id].createOffer_callback(offer);	
};

PCManagerJS.prototype.cb_createAnswer = function(pc_id, answer_str) {
	var answer = JSON.parse(answer_str);
	this.pc_list[pc_id].createAnswer_callback(answer);	
};


// onxxx
PCManagerJS.prototype.onSignalingChange = function(pc_id, param_str) {
	var param_obj = JSON.parse(param_str);
	this.pc_list[pc_id].onSignalingChange(param_obj);
};

PCManagerJS.prototype.onIceConnectionChange = function(pc_id, param_str) {
	var param_obj = JSON.parse(param_str);
	this.pc_list[pc_id].onIceConnectionChange(param_obj);
};

PCManagerJS.prototype.onIceGatheringChange = function(pc_id, param_str) {
	var param_obj = JSON.parse(param_str);
	this.pc_list[pc_id].onIceGatheringChange(param_obj);
};

PCManagerJS.prototype.onIceCandidate = function(pc_id, param_str) {
	var param_obj = JSON.parse(param_str);
	this.pc_list[pc_id].onIceCandidate(param_obj);
};

PCManagerJS.prototype.onError = function(pc_id, param_str) {
	var param_obj = JSON.parse(param_str);
	this.pc_list[pc_id].onError(param_obj);
};

PCManagerJS.prototype.onAddStream = function(pc_id, param_str) {
	var param_obj = JSON.parse(param_str);
	this.pc_list[pc_id].onAddStream(param_obj);
};

PCManagerJS.prototype.onRemoveStream = function(pc_id, param_str) {
	var param_obj = JSON.parse(param_str);
	this.pc_list[pc_id].onRemoveStream(param_obj);
};

PCManagerJS.prototype.onDataChannel = function(pc_id, param_str) {
	var param_obj = JSON.parse(param_str);
	this.pc_list[pc_id].onDataChannel(param_obj);
};
