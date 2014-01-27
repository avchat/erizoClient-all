/**
 * PCManagerJS.js file
 */

window.pcManagerJS = window.pcManagerJS || new PCManagerJS();

PCManagerJS = function() {    
    
};

PCManagerJS._pc_id = 0;
PCManagerJS.pc_id = "0";
PCManagerJS.pc_map = {};

PCManagerJS.prototype.pc_new = function(pc, pc_config, con) {
	// 生成pc的id
	PCManagerJS._pc_id++;
	PCManagerJS.pc_id = PCManagerJS._pc_id.toString();
	
	// 将生成的pc放入pc_map
	PCManagerJS.pc_map[PCManagerJS.pc_id] = pc;
	
	// 调用pc_new方法创建java对象  ？应该用this调用还是原型调用
	var param = {};
	param.pc_config = pc_config;
	param.con = con;
	this.call_method('pc_new', PCManagerJS.pc_id, param.toString());
	
	// 返回pc的id
	return PCManagerJS.pc_id;
};

PCManagerJS.prototype.call_method = function(method_name, pc_id, param_obj) {
	// pcManagerProxy是由android调用webview时注入的PCManager实例的代理对象
	pcManagerProxy.call_method(method_name, pc_id, JSON.stringify(param_obj));
};

PCManagerJS.prototype.cb_method = function(method_name, pc_id, param_obj) {
	//var param_obj = JSON.parse(param_str);
	
	switch(method_name) {
	case 'cb_createOffer':
		// 根据传来的json对象，创造RTCSessionDescription
		var sd = new RTCSessionDescription();
		sd.type = param_obj.type;
		sd.sdp = param_obj.sdp;
		
		// 调用pc的createOffer的回调函数
		PCManagerJS.pc_map[pc_id].cb_createOffer(sd);
		break;
	case 'cb_createAnswer':
		// 根据传来的json对象，创造RTCSessionDescription
		var sd = new RTCSessionDescription();
		sd.type = param_obj.type;
		sd.sdp = param_obj.sdp;
		
		// 调用pc的createAnswer的回调函数
		PCManagerJS.pc_map[pc_id].cb_createAnswer(sd);
		break;
	case 'cb_getUserMedia':
		// 根据传来的json对象，创造RTCMediaStream
		var localMediaStream = new RTCMediaStream();		
		localMediaStream.pc_id = param_obj.pc_id;
		localMediaStream.stream_type = 'local';
		
		// 调用webkitGetUserMedia的回调函数
		webkitGetUserMedia.cb_getUserMedia(localMediaStream);
		break;		
	case 'onSignalingChange':
		// 根据传来的json对象，创造state
		var state = param_obj.state;
		
		// 设置pc的状态
		PCManagerJS.pc_map[pc_id].signalingState = state;
		
		// 并产生回调
		PCManagerJS.pc_map[pc_id].onSignalingChange(state);
		break;
	case 'onIceConnectionChange':
		// 根据传来的json对象，创造state
		var state = param_obj.state;
		
		// 设置pc的状态
		PCManagerJS.pc_map[pc_id].iceConnectionState = state;
		
		// 并产生回调
		PCManagerJS.pc_map[pc_id].oniceconnectionchange(state);
		break;
	case 'onIceGatheringChange':
		// 根据传来的json对象，创造state
		var state = param_obj.state;
		
		// 设置pc的状态
		PCManagerJS.pc_map[pc_id].iceGatheringState = state;
		
		// 并产生回调
		PCManagerJS.pc_map[pc_id].onicegatheringchange(state);
		break;
	case 'onIceCandidate':
		// 根据传来的JSON对象，创造evt对象
		var evt = {};
		var ice = {};
		ice.sdpMLineIndex = candidate.sdpMLineIndex;
		ice.sdpMid = candidate.sdpMid;
		ice.sdp = candidate.sdp;
		evt.candidate = ice;
		
		// 产生回调
		PCManagerJS.pc_map[pc_id].onicecandidate(evt);
		break;
	case 'onError':
		// 产生回调
		PCManagerJS.pc_map[pc_id].onerror();
		break;
	case 'onAddStream':
		// 根据传来的JSON，创造远程流对象
		var evt = {};
		var remoteMediaStream = new RTCMediaStream();
		remoteMediaStream.pc_id = param_obj.pc_id;
		remoteMediaStream.stream_type = "remote";
		evt.stream = remoteMediaStream;
		
		// 产生远程流增加回调
		PCManagerJS.pc_map[pc_id].onaddstream(evt);
		break;
	case 'onRemoveStream':
		// 根据传来的JSON，创造远程流对象
		var remoteMediaStream = new RTCMediaStream();
		remoteMediaStream.pc_id = pc_id;
		remoteMediaStream.stream_type = "remote";
		
		// 产生远程流移除回调
		PCManagerJS.pc_map[pc_id].onremovestream(remoteMediaStream);
		break;
	case 'onDataChannel':
		// 数据功能暂不实现
		PCManagerJS.pc_map[pc_id].onDataChannel(param_obj);break;	
	}
};
