---
slug: launch-pads
title: Launch Pads
description: Super Trick pour lancer les joueurs en l'air et parcourir votre carte !
---
- Trouvez le prefab dans `Packages/valenvrc - LaunchPad/Runtime` et glissez-le dans votre scène.

:::tip
Assurez-vous d'activer les **Gizmos** de la scène pour prévisualiser la trajectoire du launchpad.
:::

### Settings

- TargetPoint : transform - Point où les utilisateurs atterriront.
- ArcHeight : float - La hauteur maximale de l'arc de lancement.
- LaunchDuration : float - Temps de vol en secondes, réduisez pour augmenter la vitesse de lancement.
- LaunchSound : AudioClip - Son optionnel à jouer lors de l'utilisation du launchpad.

:::note
Les joueurs peuvent se déplacer dans les airs, donc la trajectoire ou le point d'atterrissage final peuvent changer s'ils le font.
:::
