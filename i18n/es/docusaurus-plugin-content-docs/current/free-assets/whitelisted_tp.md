---
slug: whitelisted-tp
title: Whitelisted TP
description: Teletransporte simple de arrastrar y soltar con lista blanca opcional.
---
- Encuentra el prefab en `Packages/valenvrc - WhitelistedTP/Runtime` y arrástralo a tu escena.
- Mueve el gameobject "Destination" al punto donde quieres que tu jugador sea teletransportado.
- Opcionalmente activa "Use Whitelist" y agrega los nombres de usuario de las personas que deseas que puedan usar el botón de teletransporte.

:::tip
Puedes adjuntar el script WhitelistedTP a cualquier gameobject para usar botones de teletransporte personalizados u objetos de teletransporte. Solo asegúrate de que el objeto tenga un collider o la interacción no funcionará.
:::

### Settings

- UseWhitelist : bool - Si el teletransporte debe verificar si el jugador está en la lista blanca, si está desactivado funciona como un teletransporte normal.
- MasterBypass : bool - Si es true, el master de la instancia puede usar el teletransporte incluso si no está en la lista blanca.
- OwnerBypass : bool - Si es true, la persona que abrió la instancia puede usar el teletransporte incluso si no está en la lista blanca.
- Destination : transform - Punto donde el usuario será teletransportado.
- Whitelist : string[] - Lista de nombres que están en la lista blanca.
