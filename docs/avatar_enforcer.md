---
slug: avatar-enforcer
title: Avatar_Enforcer
description: Control which avatar your players use in your map!
---
- Find the prefab on `Packages/valenvrc - AvatarEnforcer/Runtime` and drag it to your scene.
- Assign your avatar pedestal to the "Pedestal" setting.

### Settings

- DebugMode : bool - Print additional messages on the console.
- ChangeOnJoin : bool - If player avatar should be changed to target avatar upon joining the instance.
- ChangeOnAvatarChange : bool - If player avatar should be changed to target avatar upon changing avatar.
- ChangeOnEnable : bool - If player avatar should be changed to target avatar upon enabling this gameobject.
- MasterBypass : bool - If true, the master of the instance will ignore the forced avatar.
- Whitelist : string[] - List of usernames that will ignore the forced avatar.
- Pedestal : VRCAvatarPedestal - Avatar to use as forced avatar.
