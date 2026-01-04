---
slug: service-bell
title: Service Bell
description: Campana para tu mundo de bar/club para que tu personal de seguridad sepa que alguien está en la puerta
---
- Encuentra el prefab en `Packages/valenvrc - ServiceBell/Runtime` y arrástralo a tu escena.
- Habilita el "NotificationRemote" para tu rol de Staff/Seguridad.

:::warning
La campana de servicio no incluye un sistema de gestión de roles, fue diseñada para trabajar junto con sistemas de terceros como el **[BouncerSystem](./category/bouncersystem)** o **[SecurityKeypad](./category/security-keypad)**.
:::

### Settings

- RingCooldown : float - Tiempo en segundos entre sonidos de campana, global, compartido por todos los usuarios.
- RingSound : AudioClip - Sonido que se reproducirá cuando suene la campana.

### References

- LocalNotification : GameObject - La notificación para el usuario local que toca la campana.
- RemoteNotificaiton : GameObject - La notificación para los usuarios remotos, usualmente el personal.

:::tip
Puedes editar el texto y la apariencia de las notificaciones dentro de cada uno de estos gameobjects.
:::
