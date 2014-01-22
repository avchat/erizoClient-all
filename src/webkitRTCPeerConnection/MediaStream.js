/**
 * MediaStream.js file
 */

MediaStream = function() {	
	this.pc_id = 0;
};

MediaStream.prototype.stop = function() {	
	pcManagerProxy.mediastream_stop(this.pc_id);
};
