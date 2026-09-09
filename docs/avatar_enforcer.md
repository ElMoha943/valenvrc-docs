---
slug: avatar-enforcer
title: Avatar Enforcer
description: Require a configured avatar while a user is in the world.
---

:::info
These docs were last updated for Avatar Enforcer 1.2.0.
:::

## Install

1. Import the provided Avatar Enforcer `.unitypackage` file.
2. Locate `Packages/com.valenvrc.avatar_enforcer/Runtime/AvatarEnforcer.prefab`.
3. Drag the prefab into the scene.
4. Assign the avatar pedestal that contains the required avatar.

## Settings

| Setting | Purpose |
| --- | --- |
| Debug Mode | Prints additional diagnostic messages. |
| Change On Join | Applies the pedestal avatar when the local user joins. |
| Change On Avatar Change | Reapplies it after the local user changes avatar. |
| Change On Enable | Applies it when the component becomes enabled. |
| Master Bypass | Exempts the current instance master. |
| Whitelist | Exact display names exempted from enforcement. |
| Pedestal | `VRCAvatarPedestal` that defines the required avatar. |

Display-name matching is case-sensitive.
