/**
 * New node file
 */

window.AndroidPeerConnection = function() {
	artc._id = artc._id++;
};

artc.prototype._id = 0;

artc.prototype.addIceCandidate = function() {
	pcManager.addIceCandidate();
};

artc.prototype.addStream = function() {
	pcManager.add_Stream(_id);
};

artc.prototype.close = function() {
	pcManager.close();
};

artc.prototype.createAnswer = function(cb) {
	pcManager.createAnswer();
	artc.prototype.cb_createAnswer = cb;
};

artc.prototype.createDataChannel = function() {
	pcManager.createDataChannel();
};

artc.prototype.createOffer = function(cb) {
	pcManager.createOffer();
	artc.prototype.cb_createOffer = cb;
};

artc.prototype.getLocalStreams = function() {
	pcManager.getLocalStreams();
};

artc.prototype.getRemoteStreams = function() {
	pcManager.getRemoteStreams();
};

artc.prototype.getStats = function() {
	pcManager.getStats();
};

artc.prototype.getStreamById = function() {
	pcManager.getStreamById();
};

artc.prototype.removeStream = function() {
	pcManager.removeStream();
};

artc.prototype.setLocalDescription = function() {
	pcManager.setLocalDescription();
};

artc.prototype.setRemoteDescription = function() {
	pcManager.setRemoteDescription();
};

artc.prototype.updateIce = function() {
	pcManager.updateIce();
};
