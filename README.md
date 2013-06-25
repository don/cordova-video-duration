This app demonstrates <a href="https://issues.apache.org/jira/browse/CB-3998">CB-3998</a>

The app should record 5 seconds of video.  The app will fail when cloned from github.

Build <a href="https://github.com/don/cordova-android/tree/CB-3998">https://github.com/don/cordova-android/tree/CB-3998</a> and replace cordova-2.9.0rc1.jar with cordova-dev.jar.

With the patched jar, the camera will count *down* from 5 when recording.