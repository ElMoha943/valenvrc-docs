---
slug: counter
title: Counter
description: Easy to use Counter for your world!
---
- Find the prefab on `Packages/valenvrc - Counter/Runtime` and drag it to your scene.

### Settings

- InstantIncremet : bool - Disables animation and instantly sets display to target value upon change.
- InputField : TextMeshProUGUI - Text of the input field to take the value from.
- SevenSegParents : GameObject - Parent object of the individual digits, should not be changed.

### Changing amount of digits

The script automatically detects the amount of digits and clamps its value to it, to change it simply go the "Digits" gameobject and add/remove more digits by copy/pasting.
