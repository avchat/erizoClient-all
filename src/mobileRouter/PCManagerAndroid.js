/**
 * AndroidPCManger.js file
 */

"use strict";

var webrtc = webrtc || {};

window.androidPCManger = new webrtc.AndroidPCManager();

webrtc.AndroidPCManager = function() {    
    this._pc_id = 0;
    this._pc_list = {};
};

webrtc.AndroidPCManager.prototype.new_pc = function(pc) {
	_pc_list[_pc_id++] = pc;
	
	return _pc_id;
};

webrtc.AndroidPCManager.prototype.delete_pc = function(pc_id) {    	
	delete _pc_list[pc_id];
};

webrtc.AndroidPCManager.prototype.test = function(pc_id, param) {
	
};