---
slug: bonk
title: Bonk Stick
description: Bat for bonking people and sending them to the horny jail!
---
- Find the prefab on `Packages/valenvrc - Bibj/Runtime` and drag it to your scene.

### Settings

- JailPoint : tranform - Point where bonked users will be teleported, if null users wont be teleported.
- BonkSound : audioClip - Sound that plays when you successfully bonk another user.
- MissSound : audioClip - Sound that plays when you miss (hit the air, no user in reach).
- Distance : float - The max distnace a user can be from the "Hit Target" to be considered a successful hit.
- Hit Effect : particleSystem : Optional particle system that plays on hit.
- Hit Target : transform : The point from which the hit distance is calculated.

### Changing the model

You can change the bat model to be whatever you want, just make sure that the **HitTarget** is correctly aligned with the tip of your new object and that it is a child of it, so it moves with it.

:::note
We use the **PickupInvoke** script from valencommons to detect when a player *uses* the pickup to send the event to the Bonk script.
:::
