/**
 * PCManagerJS.js file
 */

window.pcManagerJS = window.pcManagerJS || new PCManagerJS();

PCManagerJS = function() {    
    
};

PCManagerJS._pc_id = 0;
PCManagerJS.pc_id = "0";
PCManagerJS.pc_map = {};

pcManagerJS.method_map = {'pc_new':1,'addStream':2,'removeStream':3,'close':4,'createAnswer':5,
		'createOffer':6,'createDataChannel':7,'setLocalDescription':8,'setRemoteDescription':9,
		'updateIce':10,'addIceCandidate':11,'getStats':12,'mediastream_stop':13,'view_new':14,'view_delete':15,
		'player_new':16,'player_delete':17,'get_user_media':18};

PCManagerJS.prototype.pc_new = function(pc) {
	PCManagerJS._pc_id++;
	PCManagerJS.pc_id = PCManagerJS._pc_id.toString();
	PCManagerJS.pc_map[PCManagerJS.pc_id] = pc;	
	PCManagerJS.prototype.call_method(pcManagerJS.method_map['pc_new'], PCManagerJS.pc_id, {});
	return PCManagerJS.pc_id;
};

PCManagerJS.prototype.call_method = function(method_name, pc_id, param_obj) {
	pcManagerProxy.call_method(pcManagerJS.method_map[method_name], pc_id, JSON.stringify(param_obj));
};

PCManagerJS.prototype.cb_method = function(method_name, pc_id, param_str) {
	var param_obj = JSON.parse(param_str);
	
	switch(method_name) {
	case 'cb_createOffer':
		this.pc_list[pc_id].cb_createOffer(param_obj);break;
	case 'cb_createAnswer':
		this.pc_list[pc_id].cb_createAnswer(param_obj);break;
	case 'cb_getUserMedia':
		this.pc_list[pc_id].cb_getUserMedia(param_obj);break;		
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
