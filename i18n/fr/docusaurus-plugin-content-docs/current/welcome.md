---
sidebar_position: 0
slug: /
title: Bienvenue
description: Cette page contient la documentation pour mes assets et systèmes. C'est un projet maintenu par la communauté.
---
:::warning
La langue principale de ce guide est l'anglais, il est possible que la version française contienne des informations incomplètes ou obsolètes. En cas de doute, veuillez consulter le guide original.
:::

Cette page contient la documentation pour mes assets et systèmes. C'est un projet maintenu par la communauté.

## Étapes Communes

Pour commencer, voici quelques étapes communes et exigences pour tous mes assets.

### Prérequis de Connaissances

Veuillez noter que les assets nécessitent une compréhension minimale de l'éditeur Unity et de son interface pour l'installation et la modification.

Mes assets sont distribués en tant que **Packages**, ils se trouvent donc dans le dossier `"Packages/"` et non dans le dossier `"Assets/"`.

![Packages Folder](image-2.png)

Vous devriez les voir là par défaut, mais si ce n'est pas le cas, assurez-vous que "Show Hidden Packages" est activé. Vous pouvez l'activer en utilisant le bouton en forme d'œil dans le coin supérieur droit de l'onglet projet.

![Show Hidden Packages Button](image-3.png)

Les prefabs se trouvent généralement dans le dossier `"Runtime/"`.

### Prérequis Pour l'Installation

- Tous mes assets sont testés en utilisant les dernières versions d'Unity et SDK supportées par VRChat
  - Actuellement ces versions sont 2022.3.22f1 et 3.9.0
- La plupart de mes assets nécessitent également la dernière version de mes bibliothèques gratuites [ValenCommons](./category/valencommons/)

### Mise à jour depuis une ancienne version

:::danger
Si vous mettez à jour depuis une *version très ancienne*, vérifiez si vous avez un dossier appelé "ValeStuff" dans le dossier Assets. Si vous l'avez, supprimez les dossiers "Public Scripts" et "[ASSET NAME]" de celui-ci.
:::

Lors de la mise à jour depuis une ancienne version, il est conseillé d'effectuer ce que j'appelle une **Installation Propre** :

- **Sauvegardez votre configuration !**
- Supprimez **le dossier complet** du package que vous installez.
- Installez la nouvelle version.
- Assurez-vous également d'effectuer une installation propre de valencommons et de toute autre dépendance.

Ce processus *devrait* conserver votre configuration dans la plupart des cas car elle est stockée dans les prefabs de la hiérarchie et non dans les fichiers. Cependant, certaines versions peuvent inclure des changements importants, vous devez donc toujours consulter les notes de patch.

:::tip
Mes assets utilisent le [Versionnage Sémantique](https://semver.org/) donc vous pouvez avoir une idée générale de si une version contient des changements importants simplement en regardant son numéro de version.
:::

### Activation de Licence

Tous mes assets payants utilisent un système de licences. Lorsque vous obtenez votre asset de Jinxyy ou Gumroad, vous obtenez une **Clé de Licence** que vous pouvez utiliser pour activer l'asset dans Unity. Pour ce faire, allez à :
`valenvrc/LicenseManager` dans la barre supérieure.

![topbar menu](image.png)

Une fois que vous ouvrez le Gestionnaire de Licences, il vous sera demandé de vous connecter à votre Panneau de Contrôle VRChat si vous ne l'avez pas déjà fait. Ensuite, vous devriez voir le compte Unity/VRChat que vous utilisez suivi du menu pour activer votre licence. Vous devrez choisir une **Boutique** et un **Produit**, puis appuyer sur **Verify License**.

![License Manager](image-1.png)

:::warning[]
Les licences sont liées au premier compte VRChat sur lequel elles sont activées. Les licences ne sont pas transférables.
:::

:::note[]
Jinxxy utilise la licence complète, pas la courte !
:::

***

## Contribuer

Cette page est construite avec [Docusaurus](http://docusaurus.io/). Si vous souhaitez contribuer, n'hésitez pas à ouvrir une pull request sur le [Dépôt Github](https://github.com/ElMoha943/valenvrc-docs). Veuillez suivre les directives et tester localement. Nous recherchons activement de l'aide pour localiser la documentation dans d'autres langues !

## Support

Si vous avez besoin d'aide, veuillez contacter mon **[Serveur Discord](https://discord.gg/MyVeCdx6QE)**. Ne m'envoyez pas de messages directs ou de demandes d'ami sur Discord ou d'autres réseaux sociaux pour demander du support.

Le support n'est pas inclus. Toute assistance fournie est offerte volontairement, de bonne foi et pendant le temps libre. Tout support donné sera strictement sur l'asset lui-même et non sur Unity. Si vous avez des erreurs non liées qui vous empêchent d'utiliser correctement les assets, je ne peux pas garantir que je pourrai vous aider.

Le support n'est fourni qu'aux clients vérifiés qui ont acheté mes assets. Si vous avez acheté un prefab/monde qui utilise mes assets, le créateur à qui vous l'avez acheté est responsable de vous assister.
