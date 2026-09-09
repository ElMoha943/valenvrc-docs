---
slug: launch-pads
title: Launch Pads
description: Launch the local player toward a target point.
---

:::info
These docs were last updated for Launch Pads 1.0.1.
:::

## Requirements

Install [ValenCommons](./valencommons/install) first.

## Install

1. Import the provided Launch Pads `.unitypackage` file.
2. Locate `Packages/com.valenvrc.launchpads/Runtime/LaunchPad.prefab`.
3. Drag the prefab into the scene.
4. Move **Target Point** to the intended landing area.

| Setting | Purpose |
| --- | --- |
| Target Point | Intended end of the launch. |
| Arc Height | Maximum height added to the arc. |
| Launch Duration | Flight time; lower values produce a faster launch. |
| Launch Sound | Optional local launch sound. |

:::tip
Enable Scene view gizmos to preview the calculated arc. 
:::
:::note
Players retain air control, so their final landing point can differ.
:::
