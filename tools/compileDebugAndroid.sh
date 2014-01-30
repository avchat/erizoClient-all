#!/bin/bash
FILE=../dist/erizo.js
rm $FILE
cat ../lib/socket.io.js >> $FILE
cat ../src/Events.js >> $FILE
cat ../src/webkitGetUserMedia/webkitGetUserMedia.js >> $FILE
cat ../src/webkitRTCPeerConnection/webkitRTCPeerConnection.js >> $FILE
cat ../src/webkitRTCPeerConnection/RTCSessionDescription.js >> $FILE
cat ../src/webkitRTCPeerConnection/RTCMediaStream.js >> $FILE
cat ../src/webrtc-stacks/ChromeStableStack.js >> $FILE
cat ../src/Connection.js >> $FILE
cat ../src/Stream.js >> $FILE
cat ../src/Room.js >> $FILE
cat ../src/utils/L.Base64.js >> $FILE
cat ../src/views/VideoPlayerAndroidProxy.js >> $FILE
cat ../src/mobileRPC/PCManagerJS.js >> $FILE

