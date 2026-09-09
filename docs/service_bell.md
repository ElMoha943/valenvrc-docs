---
slug: service-bell
title: Service Bell
description: Send a synchronized bell alert to selected staff users.
---

:::info
These docs were last updated for Service Bell 1.3.0.
:::

## Requirements

Install [ValenCommons](./valencommons/install) first.

## Install

1. Import the provided Service Bell `.unitypackage` file.
2. Locate `Packages/com.valenvrc.service_bell/Runtime/ServiceBell.prefab`.
3. Drag the prefab into the scene.
4. Enable **Remote Notification** only for the users who should see the staff alert, using a role system such as [Bouncer System](./bouncer-system/install) or [Security Keypad](./security-keypad/install).

## Settings

| Setting | Purpose |
| --- | --- |
| Ring Cooldown | Shared seconds between successful rings. |
| Ring Sound | Sound played for a successful ring. |
| On Cooldown Sound | Optional local feedback when the bell is still cooling down. |
| Local Notification | Feedback shown to the user who rings. |
| Remote Notification | Alert shown to users for whom this object is active. |

:::info
Edit the child notification UI to change its text or appearance. The bell does not include its own role manager.
:::
