---
slug: whitelisted-tp
title: Whitelisted TP
description: Configure a free interaction or trigger teleport with an optional name list.
---

:::info
These docs were last updated for Whitelisted TP 1.3.0.
:::

1. Add **Whitelisted TP** from the [Valen VPM listing](https://valenvrc.com/).
2. Locate `Packages/com.valenvrc.whitelistedtp/Runtime`.
3. Choose `WhitelistedTP.prefab` for an interaction or `WhitelistedTPTrigger.prefab` for a trigger area.
4. Move **Destination** to the target position.

| Setting | Purpose |
| --- | --- |
| Use Whitelist | Requires an allowed display name or enabled bypass. |
| Whitelist | Exact, case-sensitive display names that may teleport. |
| Master Bypass | Allows the current instance master. |
| Owner Bypass | Allows the current network owner of the teleport GameObject. It does not check the instance owner. |
| Destination | Position and rotation applied to the local player. |

For a custom interaction, place `WhitelistedTP` on an object with a collider. For an area, use `WhitelistedTPTrigger` with a trigger collider.
