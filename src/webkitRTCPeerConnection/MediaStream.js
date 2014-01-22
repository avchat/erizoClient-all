/**
 * MediaStream.js file
 */

window.MediaStream = function() {
	this.audioTracks = [];
	this.videoTracks = [];
	this.ended = null;
	this.label = null;
	
	this.onended = null;
};

window.MediaStream.prototype.addTrack = function(track_obj) {
	var track_str = JSON.stringify(track_obj);
	
	pcManager.mediastream_add_track(track_str);
};

window.MediaStream.prototype.removeTrack = function(track_obj) {
	var track_str = JSON.stringify(track_obj);
	
	pcManager.mediastream_remove_track(track_str);
};