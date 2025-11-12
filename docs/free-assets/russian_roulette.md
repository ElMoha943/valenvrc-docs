---
slug: russian-roulette
title: Russian Roulette
description: Configurable chances, sounds and optional teleport.
---
- Find the prefab on `Packages/valenvrc - Russian Roullette/Runtime` and drag it to your scene.

### Settings

- Chances : int - There will be 1 in X chances of shooting, default 6 for revolver, increasing this makes it less likely to shoot.
- GunShot : AudioClip - Sound that plays when a shot happens.
- EmptyShoot : AudioClip - Sound that plays when a shot doesnt happen.
- ShouldTeleport : bool - If the player that is killed should be teleported.
- TPPoint : transform - The point where the killed player will be teleported.
