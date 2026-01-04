---
slug: service-bell
title: Service Bell
description: Cloche pour votre monde de bar/club afin que votre personnel de sécurité sache que quelqu'un est à la porte
---
- Trouvez le prefab dans `Packages/valenvrc - ServiceBell/Runtime` et glissez-le dans votre scène.
- Activez le "NotificationRemote" pour votre rôle Staff/Sécurité.

:::warning
La cloche de service n'inclut pas de système de gestion des rôles, elle a été conçue pour fonctionner avec des systèmes tiers tels que le **[BouncerSystem](./category/bouncersystem)** ou **[SecurityKeypad](./category/security-keypad)**.
:::

### Settings

- RingCooldown : float - Temps en secondes entre les sonneries de cloche, global, partagé par tous les utilisateurs.
- RingSound : AudioClip - Son qui sera joué lorsque la cloche sonne.

### References

- LocalNotification : GameObject - La notification pour l'utilisateur local qui touche la cloche.
- RemoteNotificaiton : GameObject - La notification pour les utilisateurs distants, généralement le personnel.

:::tip
Vous pouvez modifier le texte et l'apparence des notifications dans chacun de ces gameobjects.
:::
