---
slug: bonk
title: Bonk Stick
description: Teleport a nearby player's head target with a pickup swing.
---

:::info
These docs were last updated for Bonk 1.1.2.
:::

## Requirements

Install [ValenCommons](./valencommons/install) first.

## Install

1. Import the provided Bonk `.unitypackage` file.
2. Locate `Packages/com.valenvrc.bonk/Runtime/Bonk.prefab`.
3. Drag the prefab into the scene.
4. Move **Jail Point** to the destination for bonked users.

## Settings

| Setting | Purpose |
| --- | --- |
| Jail Point | Required teleport destination. |
| Bonk Sound | Sound played for a registered hit. |
| Miss Sound | Sound used by the swing check. |
| Distance | Maximum distance between a player's head and **Hit Target**. |
| Hit Effect | Optional particles played on a registered hit. |
| Hit Target | Detection point at the end of the held model. |

To replace the model, keep **Hit Target** aligned with its striking end and parented so it moves with the pickup. The included `PickupInvoke` sends pickup use to the Bonk component.
