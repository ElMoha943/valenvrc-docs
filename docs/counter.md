---
slug: counter
title: Counter
description: Display a synchronized non-negative value with seven-segment digits.
---

:::info
These docs were last updated for Counter 1.1.0.
:::

## Requirements

Install [ValenCommons](./valencommons/install) first.

## Install

1. Import the provided Counter `.unitypackage` file.
2. Locate `Packages/com.valenvrc.counter/Runtime/7SegCounter.prefab`.
3. Drag the prefab into the scene.

## Settings

| Setting | Purpose |
| --- | --- |
| Instant Increment | Updates every digit immediately. When disabled, the display counts toward the target one step per frame. |
| Input Field | `TMP_InputField` read by `UpdateValue()`. |
| Seven Seg Parents | Parent containing the digit objects. |

`UpdateValue()` clamps the synchronized value from zero to the largest value the available digits can show. Duplicate or remove digit children to change that range, then keep them in least-significant to most-significant order.
