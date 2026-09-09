---
slug: elevator
title: Elevator System
description: Configure a local teleport elevator with animated floor doors.
---

:::info
These docs were last updated for Elevator 1.0.1.
:::

## Requirements

Install [ValenCommons](./valencommons/install) first.

## Install

1. Import the provided Elevator `.unitypackage` file.
2. Locate `Packages/com.valenvrc.elevator/Runtime/Elevator System.prefab`.
3. Drag the prefab into the scene.
4. Duplicate an included floor and move it to the new level.
5. Add the floor to the Elevator System's **Floors** array in button order.

Each floor needs a teleport point, canvas point, door Animator, and child floor trigger. The system creates the floor buttons at runtime.

| Setting | Purpose |
| --- | --- |
| Debug Mode | Prints additional diagnostic messages. |
| Floors | Ordered destination list. |
| New Floor Sound | Plays after arriving. |
| Door Sound | Plays when a configured door opens or closes. |
| Animation Duration | Delay between closing the current door and teleporting. |

Keep the included canvas content and floor-button prefab references assigned.
