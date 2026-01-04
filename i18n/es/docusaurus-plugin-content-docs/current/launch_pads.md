---
slug: launch-pads
title: Launch Pads
description: ¡Genial Truco para lanzar jugadores por el aire y recorrer tu mapa!
---
- Encuentra el prefab en `Packages/valenvrc - LaunchPad/Runtime` y arrástralo a tu escena.

:::tip
Asegúrate de habilitar los **Gizmos** de la escena para previsualizar la trayectoria del launchpad.
:::

### Settings

- TargetPoint : transform - Punto donde los usuarios aterrizarán.
- ArcHeight : float - La altura máxima del arco de lanzamiento.
- LaunchDuration : float - Tiempo de vuelo en segundos, reduce para aumentar la velocidad de lanzamiento.
- LaunchSound : AudioClip - Sonido opcional para reproducir al usar el launchpad.

:::note
Los jugadores pueden moverse en el aire por lo que la trayectoria o el punto de aterrizaje final pueden cambiar si lo hacen.
:::
