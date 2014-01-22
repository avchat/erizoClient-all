/**
 * MediaStreamTrack.js file
 */

// class MediaStreamTrack
window.MediaStreamTrack = function(param_obj) {
	this.enabled = param_obj.enabled;
	this.kind = param_obj.kind;
	this.lable = param_obj.lable;
	this.readyState = param_obj.readyState;
	
	this.onended = null;
	this.onmute = null;
};


// class AudioTrack
window.AudioTrack = MediaStreamTrack;


// class VideoTrack
windows.VideoTrack = function(param_obj) {
	this.renderers = [];
};

windows.VideoTrack.prototype.addRenderer = function(renderer_obj) {
	var renderer_str = JSON.stringify(renderer_obj);
	
	pcManager.videotrack_add_render(renderer_str);
};

windows.VideoTrack.prototype.removeRenderer = function(renderer_obj) {
	var renderer_str = JSON.stringify(renderer_obj);
	
	pcManager.videotrack_remove_render(renderer_str);
};