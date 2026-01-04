---
slug: avatar-enforcer
title: Avatar_Enforcer
description: ¡Controla qué avatar usan tus jugadores en tu mapa!
---
- Encuentra el prefab en `Packages/valenvrc - AvatarEnforcer/Runtime` y arrástralo a tu escena.
- Asigna tu pedestal de avatar a la configuración "Pedestal".

### Settings

- DebugMode : bool - Imprime mensajes adicionales en la consola.
- ChangeOnJoin : bool - Si el avatar del jugador debe cambiarse al avatar objetivo al unirse a la instancia.
- ChangeOnAvatarChange : bool - Si el avatar del jugador debe cambiarse al avatar objetivo al cambiar de avatar.
- ChangeOnEnable : bool - Si el avatar del jugador debe cambiarse al avatar objetivo al habilitar este gameobject.
- MasterBypass : bool - Si es true, el master de la instancia ignorará el avatar forzado.
- Whitelist : string[] - Lista de nombres de usuario que ignorarán el avatar forzado.
- Pedestal : VRCAvatarPedestal - Avatar a usar como avatar forzado.
