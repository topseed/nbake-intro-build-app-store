# nbake-intro-native-app-store

SPA/PWA is good for native/cross platform app store.
We have a good router, similar to crossroads.js.

For FX, uncomment line 87 in setup.js

You can get a starter app with 'nbake -b' (b, for build phone gap)

Important 1: deploy this app to cloud, ex: via 'now' from zeit.

## Part II *Build Phonegap*

Optional:
- http://youtube.com/watch?v=ZgUAT7CIhsY

IMPORTANT 2: Note that 'Build Phonegap' is different from 'Phonegap'.
'Build Phonegap' does not need or use XCode or Andorid SDK as it builds in the cloud.

0. Before starting appstore:

a) make sure you regualr web app looks good in mobile size, for example in Google Chrom Dev Tools.

b) engage logz.io, so you can see traces, else you wont. There is no consol on the mobile device. http://app.logz.io/#/dashboard/live-tail (click 'play')

c) all the links to assets must be relative. So link to your regular www application in the cloud - load from the cloud. The link you got in important 1 above.

1. Developing for a device, you'll need 'remote' logging since you can't see messages in browser console. Some choices include weinre, Prepros or logz.io, but there are others. One of 3 should be configured in regular browser before building. You should be able to see web app loggs remotely!


2. A and/or B.

A) For Andorid app store, you need an Andorid device( ex: 'project fi' ) in develper mode, http://qodycloud.com , Genymotion VM or such. You don't need 'developer keys'), very easy.

B) For IOS app store you need to register with Apple as a developer (~$99/year) and apply. Application takes 48 hours to a week. You can then generate a key. You don't need Xcode
for Build Phonegap, but you do need OSX to generate keys. If you don't own a Mac, or even if you do, you should 'rent' a cloud hosted OSX machine for an hour, to generate the keys. You should store those keys with your manager.
( A few places that offer OSX hosting: http://macminicolo.net , http://macstadium.com , http://macincloud.com but there are others ).
So a week form now, you can have an Apple developer account and developer keys to deploy to your test IOS device. New iPod is $199, but on the Apple site there are refurbished ipod and ipads with like-new warranty for less - some have an embedded sim and so allow a data only plan.  Good for podcasts when you commute or travel, if you have only one or other, most developers have IOS.

3. Take your 'www' root, where your root index.html is, and zip it up. Go to http://build.phonegap.com , create an account, and uploaad your zip.


4. In Andorid and/or IOS, install your app. Games are done like this, so I doubt it is slow.
Much cheaper. You can't have one IOS develper, you need 2 for back up, and same for Andorid. With cross platform development, you just removed 4 FTE.


5. Now go back and next to your root index.html, create config.xml. Specify the application incons and such as per build phonegap docs. Allways be mindfull that 'build phonegap' is not same as 'phonegap'.
- http://coenraets.org/blog/phonegap-tutorial

6. Likely, in the cloud, you may want to have a shared subdomain, to be used webapp and mobile app - so you don't have to include large assets or update as often.

If you fell you must, (don't), you can use local Cordova or a better compiler that compiles the browser with your webapp.
