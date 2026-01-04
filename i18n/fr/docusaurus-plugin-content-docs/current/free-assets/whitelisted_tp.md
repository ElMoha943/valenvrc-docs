---
slug: whitelisted-tp
title: Whitelisted TP
description: Téléportation simple à glisser-déposer avec liste blanche optionnelle.
---
- Trouvez le prefab dans `Packages/valenvrc - WhitelistedTP/Runtime` et glissez-le dans votre scène.
- Déplacez le gameobject "Destination" au point où vous voulez que votre joueur soit téléporté.
- Activez optionnellement "Use Whitelist" et ajoutez les noms d'utilisateur des personnes que vous souhaitez pouvoir utiliser le bouton de téléportation.

:::tip
Vous pouvez attacher le script WhitelistedTP à n'importe quel gameobject pour utiliser des boutons de téléportation personnalisés ou des objets de téléportation. Assurez-vous simplement que l'objet a un collider ou l'interaction ne fonctionnera pas.
:::

### Settings

- UseWhitelist : bool - Si la téléportation doit vérifier si le joueur est dans la liste blanche, si désactivé fonctionne comme une téléportation normale.
- MasterBypass : bool - Si true, le master de l'instance peut utiliser la téléportation même s'il n'est pas dans la liste blanche.
- OwnerBypass : bool - Si true, la personne qui a ouvert l'instance peut utiliser la téléportation même si elle n'est pas dans la liste blanche.
- Destination : transform - Point où l'utilisateur sera téléporté.
- Whitelist : string[] - Liste de noms qui sont dans la liste blanche.
