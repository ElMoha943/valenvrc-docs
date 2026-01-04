---
sidebar_position: 100
slug: /troubleshooting
title: Troubleshooting
description: Common problems and their fixes
---
Here is a list of common problems and how to solve them.

## Missing references

If you see something like
`Object reference not set to an instance of an object`
You have an empty/missing object somewhere on the config. Search for things saying **"None"** or **"Missing"** on your inspector and fill them.

![Missing Reference Example](/img/docs/troubleshooting/missing-reference-example.png)

## Cannot find definition for X are you missing a reference?

This is caused because the script needs a dependency that you are missing. Double check you are using the latest version of everything (including vrchat sdk and supported unity version). If you have the dependency installed it may be that you didn't correctly update your asset, do a clean install of both the asset and its dependencies.

## Cannot Compile/Upgrade

This error means that your new scripts cant be loaded due to an error that may not necessarily be from that asset you are importing, in this case you need to check your console to find the exact cause of the error.

We only care about the Errors (red icon) not the warnings or messages, so its best to turn those off, hit clear and take a screenshot of the remaining messages. Always send a screenshot of your full console, even if you think something is not important (spoiler: it probably is).

![Cannot Compile on Behaviour](/img/docs/troubleshooting/compile-error-behaviour.png)
![Cannot Compile on Console](/img/docs/troubleshooting/compile-error-console.png)

## Asset not working or having desync problems in Quest Version

After double checking that the asset is indeed quest compatible and following any extra steps required for it, double check that the [Network Id](https://creators.vrchat.com/worlds/udon/networking/network-id-utility/) of the asset is the same in both the pc and quest version, its usually a good practice to have both versions on the same project and use tools like [Easy Quest Switch](https://github.com/vrchat-community/EasyQuestSwitch).

:::tip
I personally recommend not using the multibuild feature of the sdk and instead build each version manually since it seems to have a lot of bugs.
:::

## Ingame Debugging

:::info
Vrchat recently announced new DebugUIs being worked on, this info may be outdated.
:::

In Steam, navigate to VRChat and right click -> Properties; go to the "General" Tab and under Launch options, add the following in the text field:

`--enable-udon-debug-logging` - Allows Console errors to be printed into your unity project's console.

`--enable-debug-gui` - Enables World Debug menu in VRChat

Once you added the parameters open vrchat in **desktop mode** and input the following key combination:
`R Shift + ~ + 1 - 9`
-# we usually care about the Console, which is number 3.

:::note
Note, this does not work with the numpad, only the keyboard numbers. The Debug menu only works if you're the world creator, or the world has debugging enabled in the upload settings.
:::

**More info on debugging views**: https://creators.vrchat.com/worlds/udon/world-debug-views/
