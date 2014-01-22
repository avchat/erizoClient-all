/**
 * PCManagerJS.js file
 */

window.pcManagerJS = window.pcManagerJS || new PCManagerJS();

PCManagerJS = function() {    
    
};

PCManagerJS._pc_id = 0;
PCManagerJS.pc_list = {};

pcManagerJS.method_map = {'new_pc':1,'addStream':2,'removeStream':3,'close':4,'createAnswer':5,
		'createOffer':6,'createDataChannel':7,'setLocalDescription':8,'setRemoteDescription':9,
		'updateIce':10,'addIceCandidate':11,'getStats':12};

PCManagerJS.prototype.new_pc = function(pc) {
	PCManagerJS._pc_id++;	
	pc_list[PCManagerJS._pc_id] = pc;	
	PCManagerJS.prototype.call_method(pcManagerJS.method_map['new_pc'], PCManagerJS._pc_id, {});
	return _pc_id;
};

PCManagerJS.prototype.call_method = function(method_name, pc_id, param_obj) {
	return JSON.parse(pcManagerProxy.call_method(pcManagerJS.method_map[method_name], pc_id, JSON.stringify(param_obj)));
};

PCManagerJS.prototype.cb_method = function(method_name, pc_id, param_str) {
	var param_obj = JSON.parse(param_str);
	switch(method_name) {
	case 'cb_createOffer':
		this.pc_list[pc_id].createOffer_callback(param_obj);break;
	case 'cb_createAnswer':
		this.pc_list[pc_id].createAnswer_callback(param_obj);break;
	case 'onSignalingChange':
		this.pc_list[pc_id].onSignalingChange(param_obj);break;
	case 'onIceConnectionChange':
		this.pc_list[pc_id].onIceConnectionChange(param_obj);break;
	case 'onIceGatheringChange':
		this.pc_list[pc_id].onIceGatheringChange(param_obj);break;
	case 'onIceCandidate':
		this.pc_list[pc_id].onIceCandidate(param_obj);break;
	case 'onError':
		this.pc_list[pc_id].onError(param_obj);break;
	case 'onAddStream':
		this.pc_list[pc_id].onAddStream(param_obj);break;
	case 'onRemoveStream':
		this.pc_list[pc_id].onRemoveStream(param_obj);break;
	case 'onDataChannel':
		this.pc_list[pc_id].onDataChannel(param_obj);break;
	}
};
