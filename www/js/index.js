var app = {
    initialize: function() {
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function() {
        go.ontouchstart = app.record;
    },
    record: function() {
        var captureSuccess = function(mediaFiles) {
            var i, path, len;
            for (i = 0, len = mediaFiles.length; i < len; i += 1) {
                path = mediaFiles[i].fullPath;
                // do something interesting with the file
                navigator.notification.alert('File : ' + path);                
            }            
        };

        var captureError = function(error) {
            navigator.notification.alert('Error code: ' + error.code, null, 'Capture Error');
        };

        navigator.device.capture.captureVideo(captureSuccess, captureError, {duration:5});            
    }
};
