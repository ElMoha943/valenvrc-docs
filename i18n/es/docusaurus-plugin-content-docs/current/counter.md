---
slug: counter
title: Counter
description: ¡Contador fácil de usar para tu mundo!
---
- Encuentra el prefab en `Packages/valenvrc - Counter/Runtime` y arrástralo a tu escena.

### Settings

- InstantIncrement : bool - Deshabilita la animación y establece instantáneamente la visualización al valor objetivo al cambiar.
- InputField : TextMeshProUGUI - Texto del campo de entrada desde el cual tomar el valor.
- SevenSegParents : GameObject - Objeto padre de los dígitos individuales, no debería ser cambiado.

### Cambiar la cantidad de dígitos

El script detecta automáticamente la cantidad de dígitos y limita su valor a ella, para cambiarlo simplemente ve al gameobject "Digits" y agrega/elimina más dígitos copiando/pegando.
