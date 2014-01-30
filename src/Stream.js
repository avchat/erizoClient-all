/*global ErizoGetUserMedia, L, document*/
/*
 * Class Stream represents a local or a remote Stream in the Room. It will handle the WebRTC stream
 * and identify the stream and where it should be drawn.
 */
var Erizo = Erizo || {};
Erizo.Stream = function (spec) {
    "use strict";
    var that = Erizo.EventDispatcher(spec);

    that.stream = spec.stream;
    that.url = spec.url;
    that.room = undefined;
    that.showing = false;
    that.local = false;
    that.video = spec.video;
    that.audio = spec.audio;
    that.screen = spec.screen;
    that.videoSize = spec.videoSize;
    if (that.videoSize !== undefined && (!(that.videoSize instanceof Array) || that.videoSize.length != 4)) {
        throw Error("Invalid Video Size");
    }
    if (spec.local === undefined || spec.local === true) {
        that.local = true;
    }

    // Public functions

    that.getID = function () {
        return spec.streamID;
    };

    that.getAttributes = function () {
        return spec.attributes;
    };

    // Indicates if the stream has audio activated
    that.hasAudio = function () {
        return spec.audio;
    };

    // Indicates if the stream has video activated
    that.hasVideo = function () {
        return spec.video;
    };

    // Indicates if the stream has data activated
    that.hasData = function () {
        return spec.data;
    };

    // Indicates if the stream has screen activated
    that.hasScreen = function () {
        return spec.screen;
    };

    // Sends data through this stream.
    that.sendData = function (msg) {
        console.log("Failed to send data. This Stream object has not that channel enabled.");
    };

    // Initializes the stream and tries to retrieve a stream from local video and audio
    // We need to call this method before we can publish it in the room.
    that.init = function () {
        try {
            if ((spec.audio || spec.video || spec.screen) && spec.url === undefined) {
                console.log("Requested access to local media");
                var videoOpt = spec.video;
                if (videoOpt == true && that.videoSize !== undefined) {
                    videoOpt = {mandatory: {minWidth: that.videoSize[0], minHeight: that.videoSize[1], maxWidth: that.videoSize[2], maxHeight: that.videoSize[3]}};
                }
                var opt = {video: videoOpt, audio: spec.audio, fake: spec.fake};
                if (spec.screen) {
                    opt = {video: {mandatory: {chromeMediaSource: 'screen', maxWidth: screen.availWidth, maxHeight: screen.availHeight}}};
                }
                Erizo.GetUserMedia(opt, function (stream) {
                //navigator.webkitGetUserMedia("audio, video", function (stream) {

                    console.log("User has granted access to local media.");
                    that.stream = stream;

                    var streamEvent = Erizo.StreamEvent({type: "access-accepted"});
                    that.dispatchEvent(streamEvent);

                }, function (error) {
                    console.log("Failed to get access to local media. Error code was " + error.code + ".");
                    var streamEvent = Erizo.StreamEvent({type: "access-denied"});
                    that.dispatchEvent(streamEvent);
                });
            } else {
                var streamEvent = Erizo.StreamEvent({type: "access-accepted"});
                that.dispatchEvent(streamEvent);
            }
        } catch (e) {
            console.log("Error accessing to local media", e);
        }
    };

    that.close = function () {
        if (that.local) {
            if (that.room !== undefined) {
                that.room.unpublish(that);
            }
            // Remove HTML element
            that.hide();
            if (that.stream !== undefined) {
                that.stream.stop();
            }
            that.stream = undefined;
        }
    };

    that.play = function (elementID, options) {
        that.elementID = elementID;
        if (that.hasVideo() || this.hasScreen()) {
            // Draw on HTML
            if (elementID !== undefined) {
                var player = new Erizo.VideoPlayer({id: that.getID(), stream: that, elementID: elementID, options: options});
                that.player = player;
                that.showing = true;
            }
        } else if (that.hasAudio) {
            var player = new Erizo.AudioPlayer({id: that.getID(), stream: that, elementID: elementID, options: options});
            that.player = player;
            that.showing = true;
        }
    };

    that.stop = function () {
        if (that.showing) {
            if (that.player !== undefined) {
                that.player.destroy();
                that.showing = false;
            }
        }
    };

    that.show = that.play;
    that.hide = that.stop;  

    return that;
};