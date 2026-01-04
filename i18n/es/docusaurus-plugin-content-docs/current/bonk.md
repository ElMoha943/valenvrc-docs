---
slug: bonk
title: Bonk Stick
description: ¡Bate para golpear gente y enviarlos a la cárcel horny!
---
- Encuentra el prefab en `Packages/valenvrc - Bibj/Runtime` y arrástralo a tu escena.

### Settings

- JailPoint : tranform - Punto donde los usuarios golpeados serán teletransportados, si es null los usuarios no serán teletransportados.
- BonkSound : audioClip - Sonido que se reproduce cuando golpeas exitosamente a otro usuario.
- MissSound : audioClip - Sonido que se reproduce cuando fallas (golpeas el aire, ningún usuario al alcance).
- Distance : float - La distancia máxima que un usuario puede estar del "Hit Target" para ser considerado un golpe exitoso.
- Hit Effect : particleSystem : Sistema de partículas opcional que se reproduce al golpear.
- Hit Target : transform : El punto desde el cual se calcula la distancia del golpe.

### Cambiar el modelo

Puedes cambiar el modelo del bate por lo que quieras, solo asegúrate de que el **HitTarget** esté correctamente alineado con la punta de tu nuevo objeto y que sea hijo de él, para que se mueva con él.

:::note
Usamos el script **PickupInvoke** de valencommons para detectar cuando un jugador *usa* el pickup para enviar el evento al script Bonk.
:::
