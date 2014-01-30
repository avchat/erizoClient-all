
/**
 * RTCMediaStream.js file
 */

RTCMediaStream = function() {	
	this.pc_id = "";
	this.stream_type = "local";
};

RTCMediaStream.prototype.stop = function() {
	return pcManagerJS.call_method('mediastream_stop', this.pc_id, {});
};
