/*global window, console, clearInterval, setInterval, document, unescape, L, webkitURL*/
/*
 * VideoPlayer represents a Licode video component that shows either a local or a remote video.
 * Ex.: var player = VideoPlayer({id: id, stream: stream, elementID: elementID});
 * A VideoPlayer is also a View component.
 */
var Erizo = Erizo || {};
Erizo.VideoPlayer = function (spec) {
    "use strict";

    var that = {};

    // Variables

    // VideoPlayer ID
    that.id = spec.id;

    // Stream that the VideoPlayer will play
    that.stream = spec.stream.stream;

    // DOM element in which the VideoPlayer will be appended
    that.elementID = spec.elementID;

    // Public functions

    // It will stop the VideoPlayer and remove it from the HTML
    that.destroy = function () {        
    	return pcManagerJS.call_method(PCManagerJS.method_map['player_delete'], that.stream.pc_id, {'play_id':that.id,
    		'view_id':that.elementID});
    };

    pcManagerJS.call_method(PCManagerJS.method_map['player_new'], that.stream.pc_id, {'play_id':that.id,
		'view_id':that.elementID});
    
    return that;
};