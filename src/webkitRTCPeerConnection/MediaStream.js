/**
 * MediaStream.js file
 */

MediaStream = function() {	
	this.pc_id = 0;
};

MediaStream.prototype.stop = function() {
	return pcManagerJS.call_method(PCManagerJS.method_map['mediastream_stop'], this.pc_id, {});
};
