---
slug: counter
title: Counter
description: Compteur facile à utiliser pour votre monde !
---
- Trouvez le prefab dans `Packages/valenvrc - Counter/Runtime` et glissez-le dans votre scène.

### Settings

- InstantIncrement : bool - Désactive l'animation et définit instantanément l'affichage à la valeur cible lors d'un changement.
- InputField : TextMeshProUGUI - Texte du champ de saisie à partir duquel prendre la valeur.
- SevenSegParents : GameObject - Objet parent des chiffres individuels, ne devrait pas être modifié.

### Changer le nombre de chiffres

Le script détecte automatiquement le nombre de chiffres et limite sa valeur en conséquence, pour le changer, allez simplement au gameobject "Digits" et ajoutez/supprimez plus de chiffres en copiant/collant.
