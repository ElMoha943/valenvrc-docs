---
slug: service-bell
title: Service Bell
description: Bell for your bar/club world to let your security personnel know that someone at the door
---
- Find the prefab on `Packages/valenvrc - ServiceBell/Runtime` and drag it to your scene.
- Enable the "NotificationRemote" for your Staff/Security role.

:::warning
The service bell does not include a role management system, it was designed to work along third party systems like the **[BouncerSystem](./category/bouncersystem)** or **[SecurityKeypad](./category/security-keypad)**.
:::

### Settings

- RingCooldown : float - Time in seconds between bell rings, global, shared by all users.
- RingSound : AudioClip - Sound that will be played when the bell rangs.

### References

- LocalNotification : GameObject - The notification for the local user that rings the bell.
- RemoteNotificaiton : GameObject - The notification for the remote users, usually staff.

:::tip
You can edit the text and looks of the notifications inside each of these gameobjects.
:::
