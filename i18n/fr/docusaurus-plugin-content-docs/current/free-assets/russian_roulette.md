---
slug: russian-roulette
title: Russian Roulette
description: Probabilités configurables, sons et téléportation optionnelle.
---
- Trouvez le prefab dans `Packages/valenvrc - Russian Roullette/Runtime` et glissez-le dans votre scène.

### Settings

- Chances : int - Il y aura 1 chance sur X de tirer, par défaut 6 pour un revolver, augmenter cela rend moins probable de tirer.
- GunShot : AudioClip - Son joué lorsqu'un tir se produit.
- EmptyShoot : AudioClip - Son joué lorsqu'aucun tir ne se produit.
- ShouldTeleport : bool - Si le joueur qui est éliminé doit être téléporté.
- TPPoint : transform - Le point où le joueur éliminé sera téléporté.
