---
slug: launch-pads
title: Launch Pads
description: Cool Gimmick to launch players on air to traverse your map!
---
- Find the prefab on `Packages/valenvrc - LaunchPad/Runtime` and drag it to your scene.

:::tip
Make sure to enable the scene's **Gizmos** to preview the trajectory of the launchpad.

### Settings

- TargetPoint : transform - Point where users will land.
- ArcHeight : float - The max height of the launch arc.
- LaunchDuration : float - Fly time in seconds, reduce to increase launch speed.
- LaunchSoun : AudioClip - Optional sound to paly upon using the launchpad.

:::note
Players are able to move in air so the trajectory or final land point may change if they do.
:::
