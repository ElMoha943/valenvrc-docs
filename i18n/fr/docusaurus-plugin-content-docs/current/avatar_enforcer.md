---
slug: avatar-enforcer
title: Avatar_Enforcer
description: Contrôlez quel avatar vos joueurs utilisent dans votre carte !
---
- Trouvez le prefab dans `Packages/valenvrc - AvatarEnforcer/Runtime` et glissez-le dans votre scène.
- Assignez votre piédestal d'avatar au paramètre "Pedestal".

### Settings

- DebugMode : bool - Affiche des messages supplémentaires dans la console.
- ChangeOnJoin : bool - Si l'avatar du joueur doit être changé vers l'avatar cible lors de la connexion à l'instance.
- ChangeOnAvatarChange : bool - Si l'avatar du joueur doit être changé vers l'avatar cible lors du changement d'avatar.
- ChangeOnEnable : bool - Si l'avatar du joueur doit être changé vers l'avatar cible lors de l'activation de ce gameobject.
- MasterBypass : bool - Si true, le master de l'instance ignorera l'avatar forcé.
- Whitelist : string[] - Liste des noms d'utilisateur qui ignoreront l'avatar forcé.
- Pedestal : VRCAvatarPedestal - Avatar à utiliser comme avatar forcé.
