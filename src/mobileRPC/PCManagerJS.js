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
		var sd = new RTCSessionDescription();
		sd.type = param_obj.type;
		sd.sdp = param_obj.sdp;
		PCManagerJS.pc_map[pc_id].cb_createOffer(sd);
		break;
	case 'cb_createAnswer':
		var sd = new RTCSessionDescription();
		sd.type = param_obj.type;
		sd.sdp = param_obj.sdp;
		PCManagerJS.pc_map[pc_id].cb_createAnswer(sd);
		break;
	case 'cb_getUserMedia':
		var localMediaStream = new MediaStream();
		localMediaStream.stream_type = param_obj.stream_type;
		localMediaStream.pc_id = param_obj.pc_id;
		webkitGetUserMedia.cb_getUserMedia(localMediaStream);
		break;		
	case 'onSignalingChange':
		var state = param_obj.state;
		PCManagerJS.pc_map[pc_id].signalingState = state;
		PCManagerJS.pc_map[pc_id].onSignalingChange(state);
		break;
	case 'onIceConnectionChange':
		var state = param_obj.state;
		PCManagerJS.pc_map[pc_id].iceConnectionState = state;
		PCManagerJS.pc_map[pc_id].oniceconnectionchange(state);
		break;
	case 'onIceGatheringChange':
		var state = param_obj.state;
		PCManagerJS.pc_map[pc_id].iceGatheringState = state;
		PCManagerJS.pc_map[pc_id].onicegatheringchange(state);
		break;
	case 'onIceCandidate':
		var evt = {};
		var ice = {};
		ice["sdpMLineIndex"] = candidate.sdpMLineIndex;
		ice["sdpMid"] = candidate.sdpMid;
		ice["sdp"] = candidate.sdp;
		evt.candidate = ice;
		PCManagerJS.pc_map[pc_id].onicecandidate(evt);
		break;
	case 'onError':
		PCManagerJS.pc_map[pc_id].onerror();
		break;
	case 'onAddStream':
		var evt = {};
		var remoteMediaStream = new MediaStream();
		remoteMediaStream.pc_id = param_obj.pc_id;
		remoteMediaStream.stream_type = param_obj.stream_type;
		evt.stream = remoteMediaStream;
		PCManagerJS.pc_map[pc_id].onaddstream(evt);
		break;
	case 'onRemoveStream':
		var remoteMediaStream = new MediaStream();
		remoteMediaStream.pc_id = pc_id;
		remoteMediaStream.stream_type = param_obj.stream_type;
		PCManagerJS.pc_map[pc_id].onremovestream(remoteMediaStream);
		break;
	case 'onDataChannel':
		PCManagerJS.pc_map[pc_id].onDataChannel(param_obj);break;	
	}
};
