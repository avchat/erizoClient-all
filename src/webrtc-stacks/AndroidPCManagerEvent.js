/**
 * AndroidPCMangerEvent.js file
 */

var webrtc = webrtc || {};

window.androidPCMangerEvent = webrtc.androidPCManagerEvent();

webrtc.androidPCManagerEvent = function() {
	"use strict";

    var that = {};
    
    // member
    that._id = 0;
    that.pc_list = {};
    
    
    // public functions
    that.add_pc = function(pc) {
    	pc_list[_id++] = pc;
    };
    
    that.remove_pc = function(pc_id) {    	
    	delete pc_list[pc_id];
    };
    
    that.test = function(pc_id, param) {
    	
    };
    
    return that;
};