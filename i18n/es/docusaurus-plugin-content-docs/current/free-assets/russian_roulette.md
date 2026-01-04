---
slug: russian-roulette
title: Russian Roulette
description: Probabilidades configurables, sonidos y teletransporte opcional.
---
- Encuentra el prefab en `Packages/valenvrc - Russian Roullette/Runtime` y arrástralo a tu escena.

### Settings

- Chances : int - Habrá 1 en X probabilidades de disparar, por defecto 6 para revólver, aumentar esto hace menos probable disparar.
- GunShot : AudioClip - Sonido que se reproduce cuando ocurre un disparo.
- EmptyShoot : AudioClip - Sonido que se reproduce cuando no ocurre un disparo.
- ShouldTeleport : bool - Si el jugador que es eliminado debe ser teletransportado.
- TPPoint : transform - El punto donde el jugador eliminado será teletransportado.
