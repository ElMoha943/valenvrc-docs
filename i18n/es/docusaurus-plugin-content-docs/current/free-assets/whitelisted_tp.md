---
slug: whitelisted-tp
title: Whitelisted TP
description: Simple drag and drop teleport with optional whitelist.
---
- Find the prefab on `Packages/valenvrc - WhitelistedTP/Runtime` and drag it to your scene.
- Move the "Destination" gameobject to the point where you want your player to be teleported.
- Optionally turn on "Use Whitelist" and add the usernames of the people you want to be able to use the teleport button.

:::tip
You can attach the WhitelistedTP script to any gameobject to use custom buttons or teleport objects. Just make sure the object has a collider or the interaction wont work.
:::

### Settings

- UseWhitelist : bool - If the teleport should check if the player is in the whitelist, is off it works as a normal teleport.
- MasterBypass : bool - If true, the master of the instance can use the teleport even if not in the whitelist.
- OwnerBypass : bool - If true, the person who opened the instance can use the teleport even if not in the whitelist.
- Destination : transform - Point where the user will be teleported.
- Whitelist : string[] - List of names that are on the whitelist.
