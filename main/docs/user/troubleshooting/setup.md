---
sidebar_position: 1
title:  Setup
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import AndroidStore from '@site/src/components/buttons/AndroidStore.mdx';
import AppleStore from '@site/src/components/buttons/AppleStore.mdx';
import LinksTelegram from '@site/src/components/_linksTelegram.mdx';
import LinksSocial from '@site/src/components/_linksSocialNetworks.mdx';
import Translate from '@site/src/components/Translate.js';
import InfoIncompleteArticle from '@site/src/components/_infoIncompleteArticle.mdx';

<InfoIncompleteArticle/>


## Initial setup 

### How to recover data?

### How to copy my favorites and tracks to the new device?

- The easiest way is to export profile with all needed information. Menu → Settings → Export → select data that you want to export.
- Also, you can backup all your data from the previous device if you copy the folder specified in Settings → OsmAnd Settings → Data storage folder (by default it's Android/data/net.osmand.plus). Then, simply paste all the contents of this folder back to the Data storage folder directory.


## Purchases

### How to restore purchases?

- **For iOS**: Please open OsmAnd go to Menu → Maps & Resources → Purchases tab → tap 'Restore All Purchases' button → enter your Apple ID. Or read [this article](../purchases/ios.md#restore-purchases).
- **For Android**: Please log in to the same app store account using the same email you used when purchasing OsmAnd. Enter 'OsmAnd+' or OsmAnd free (if you want to restore Maps+, OsmAnd Live, OsmAnd Pro) to the search field and install the app. You won't have to pay again, all paid function should be available by default. If that is not the case, please go to your device's Settings → Apps → select your app store and clear the cache. Then restart the device and try again. Or read [this article](../purchases/android.md#restore-purchases).

### How to restore Contour lines plugin purchase?

To restore [Contour lines plugin](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid):
- Log into the same Google Play account which you used to purchase Contour lines plugin, and install [the app](https://play.google.com/store/apps/details?id=net.osmand.srtmPlugin.paid).
- If the Install button is not active, please make sure to update the Google Play and OsmAnd apps, clear their cache and restart the device, then try install the plugin again.
- After installation, please enable the Contour Lines plugin in [OsmAnd menu → Plugins](../plugins/contour-lines.md), download the required files in the [Download maps menu](../start-with/download-maps.md#download---main-menu) and enable its display in the [Configure map menu](../map/configure-map-menu.md).

### How can I identify that OsmAnd Unlimited is active?

Go to Menu → 'Download maps' and press on the map counter. (The field that says 'Free version. X downloads left'.) If OsmAnd Unlimited is active it should display to you the amount of memory device left instead of number of free downloads.

### Can I get the full version of OsmAnd as a seperate app for iOS?

For iOS we have only one version of OsmAnd. If you want to enable the full version you need to get more functions in-app. 

### What does 5 or 7 free downloads mean?

It means that you have only 5(iOS) or 7(Android) possibilities to download (map update counts as download). It can be either map, updates, voice packs, etc. 
Please, note if you remove some items from your downloads the chance for free download does not return. 

### How can I get the additional map downloads in OsmAnd free?

If you already used 5(iOS) or 7(Android) possibilities for free downloads, you can get 3 extra downloads if you would subscribe to the mailing list. The banner with suggestion to subscribe would appear when you have used all free downloads.

## OsmAnd Pro

OsmAnd Pro is a subscription with all [OsmAnd features](../purchases/android.md#free-and-paid-features). Its main advantage is that it is **cross-platform**. This means that it can be bought in one of the Android stores (Google Play, Amazon, Huawei AppGallery), and launched on iOS, for example.  

### Cross-platform

The cross-platform feature allows you to use OsmAnd Pro on all platforms at the same time: [Android](../purchases/android.md) ←→ [iOS](../purchases/ios.md) → [Web](https://www.osmand.net/map)

**_Steps_**:

**1.** After you have purchased an OsmAnd Pro subscription, you should register your email on the OsmAnd server for identification on other platforms.

[Register](../personal/osmand-cloud.md#backup-and-restore-for-osmand-pro) your account:
*OsmAnd Menu → Settings → OsmAnd Cloud → Create new account* 

:::note
Registration must take place on the platform on which the subscription was purchased.
:::

After that, your email address can be used as a login to activate OsmAnd Pro on other platforms.

**2.** OsmAnd Pro Activation:

*OsmAnd Menu → Settings → OsmAnd Cloud → I already have an account*

**3.** Activation check:

*OsmAnd Menu → Settings → Purchases → Restore purchases*


## Import files

### I have a GPX file, how do I get it into OsmAnd?

- &nbsp;Android
    - &nbsp;You can [download and open it](../navigation/setup/gpx-navigation.md) using File Browser or Dropbox and select OsmAnd as a target application.
    - &nbsp;You can put it in OsmAnd home folder: osmand/tracks/(optional\_sub-folder)/your\_file.gpx.
    
- &nbsp;iOS
    - &nbsp;To open [a GPX file in OsmAnd](../navigation/setup/gpx-navigation.md), just download it and select OsmAnd as an app to open it. That's it: you'll view the file normally in the application.


### Contour lines or hillshades do not show up

Read more about [Contour lines plugin](../plugins/contour-lines.md).


## OsmAnd 4.4 (iOS)

OsmAnd 4.4 for iOS devices is not available for iOS versions older than iOS 15.

This means that to install OsmAnd 4.4 you need to upgrade your OS to at least iOS 15 or newer.
