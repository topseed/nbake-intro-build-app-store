
## Part II Cordova.

Games are done like this 'hybrid cross platform', so I doubt it is slow.
Much cheaper. You can't have one IOS develper, you need 2 for back up, and same for Android. With cross platform development, you just removed 4 FTE.


0. Before starting appstore:

a) make sure your regular web app looks good in mobile size, for example in Google Chrome Dev Tools.

b) engage logz.io, so you can see traces, else you won't. There is no console on the mobile device. http://app.logz.io/#/dashboard/live-tail (click 'play')

c) all the links to assets must be relative. So link to your regular www application in the cloud - load from the cloud. The link you got in important 1 above.

1. Developing for a device, you'll need 'remote' logging since you can't see messages in browser console. Some choices include weinre, Prepros or logz.io, but there are others. One of 3 should be configured in regular browser before building. You should be able to see web app loggs remotely!


2.

For IOS app store you need to register with Apple as a developer (~$99/year) and apply. Application takes 48 hours to a week. You can then generate a key. You don't need Xcode
for Build Phonegap, but you do need OSX to generate keys. If you don't own a Mac, or even if you do, you should 'rent' a cloud hosted OSX machine for an hour, to generate the keys. You should store those keys with your manager.
( A few places that offer OSX hosting: http://macminicolo.net , http://macstadium.com , http://macincloud.com but there are others ).
So a week from now, you can have an Apple developer account and developer keys to deploy to your test IOS device. New iPod is $199, but on the Apple site there are refurbished ipod and ipads with like-new warranty for less - some have an embedded SIM and so allow a data only plan.  Good for podcasts when you commute or travel, if you have only one or other, most developers have IOS.

3. Connect to the OSX in the cloud.

For Andriid app store, you need an Andorid device( ex: 'project fi' ) in develper mode, http://qodycloud.com , Genymotion VM or such. You don't need 'developer keys'), very easy.


		npm i -g cordova


Edit www/js index to go to 'important 1' url above'


4. In Android and/or IOS, install your app

In theory 'build.phonegap.com' can supplement your Cordova build
Check:
- http://youtube.com/watch?v=ZgUAT7CIhsY
