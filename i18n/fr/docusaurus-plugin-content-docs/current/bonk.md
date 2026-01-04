---
slug: bonk
title: Bonk Stick
description: Batte pour frapper les gens et les envoyer en prison horny !
---
- Trouvez le prefab dans `Packages/valenvrc - Bibj/Runtime` et glissez-le dans votre scène.

### Settings

- JailPoint : tranform - Point où les utilisateurs frappés seront téléportés, si null les utilisateurs ne seront pas téléportés.
- BonkSound : audioClip - Son joué lorsque vous frappez avec succès un autre utilisateur.
- MissSound : audioClip - Son joué lorsque vous ratez (frappez l'air, aucun utilisateur à portée).
- Distance : float - La distance maximale qu'un utilisateur peut avoir du "Hit Target" pour être considéré comme un coup réussi.
- Hit Effect : particleSystem : Système de particules optionnel joué lors d'un coup.
- Hit Target : transform : Le point à partir duquel la distance de frappe est calculée.

### Changer le modèle

Vous pouvez changer le modèle de la batte par ce que vous voulez, assurez-vous simplement que le **HitTarget** est correctement aligné avec l'extrémité de votre nouvel objet et qu'il est enfant de celui-ci, pour qu'il se déplace avec lui.

:::note
Nous utilisons le script **PickupInvoke** de valencommons pour détecter quand un joueur *utilise* le pickup pour envoyer l'événement au script Bonk.
:::
