---
sidebar_position: 100
slug: /troubleshooting
title: Dépannage
description: Problèmes courants et leurs solutions
---
Voici une liste de problèmes courants et comment les résoudre.

## Références manquantes

Si vous voyez quelque chose comme
`Object reference not set to an instance of an object`
Vous avez un objet vide/manquant quelque part dans la configuration. Recherchez des choses qui disent **"None"** ou **"Missing"** dans votre inspecteur et remplissez-les.

![Missing Reference Example](image-4.png)

## Cannot find definition for X are you missing a reference?

Ceci est causé car le script a besoin d'une dépendance qui vous manque. Vérifiez deux fois que vous utilisez la dernière version de tout (y compris vrchat sdk et la version d'unity supportée). Si vous avez la dépendance installée, il se peut que vous n'ayez pas correctement mis à jour votre asset, effectuez une installation propre de l'asset et de ses dépendances.

## Ne peut pas Compiler/Mettre à jour

Cette erreur signifie que vos nouveaux scripts ne peuvent pas être chargés en raison d'une erreur qui peut ne pas nécessairement provenir de cet asset que vous importez, dans ce cas vous devez vérifier votre console pour trouver la cause exacte de l'erreur.

Seules les Erreurs (icône rouge) nous importent, pas les avertissements ou messages, il est donc préférable de les désactiver, d'appuyer sur nettoyer et de prendre une capture d'écran des messages restants. Envoyez toujours une capture d'écran de votre console complète, même si vous pensez que quelque chose n'est pas important (spoiler : ça l'est probablement).

![Cannot Compile on Behaviour](image-5.png)
![Cannot Compile on Console](image-6.png)

## L'asset ne fonctionne pas ou a des problèmes de désynchronisation dans la version Quest

Après avoir vérifié deux fois que l'asset est compatible quest et suivi toutes les étapes supplémentaires requises pour cela, vérifiez deux fois que le [Network Id](https://creators.vrchat.com/worlds/udon/networking/network-id-utility/) de l'asset est le même dans la version pc et quest, c'est généralement une bonne pratique d'avoir les deux versions dans le même projet et d'utiliser des outils comme [Easy Quest Switch](https://github.com/vrchat-community/EasyQuestSwitch).

:::tip
Personnellement, je recommande de ne pas utiliser la fonction multibuild du sdk et de construire chaque version manuellement car elle semble avoir beaucoup de bugs.
:::

## Débogage en Jeu

:::info
Vrchat a récemment annoncé de nouvelles DebugUIs en cours de développement, cette information peut être obsolète.
:::

Dans Steam, naviguez vers VRChat et faites un clic droit -> Propriétés ; allez dans l'onglet "Général" et sous Options de lancement, ajoutez ce qui suit dans le champ de texte :

`--enable-udon-debug-logging` - Permet aux erreurs de console d'être imprimées dans la console de votre projet unity.

`--enable-debug-gui` - Active le menu de débogage de monde dans VRChat

Une fois que vous avez ajouté les paramètres, ouvrez vrchat en **mode bureau** et entrez la combinaison de touches suivante :
`R Shift + ~ + 1 - 9`
-# généralement nous nous intéressons à la Console, qui est le numéro 3.

:::note
Notez que cela ne fonctionne pas avec le pavé numérique, seulement avec les chiffres du clavier. Le menu de débogage ne fonctionne que si vous êtes le créateur du monde, ou si le monde a le débogage activé dans les paramètres de téléchargement.
:::

**Plus d'informations sur les vues de débogage** : https://creators.vrchat.com/worlds/udon/world-debug-views/
