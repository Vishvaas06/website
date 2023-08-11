---
title: $ordinal
description: '$ordinal добавляет число, например 1, 2, 3, 4.'
id: ordinal
---

`$ordinal` добавляет `st`, `nd`, `rd`, `th` на число, такое как `1-й`, `2-я`, `3-я`, `4-я`.

## Использование

```php
$ordinal[number]
```

## Параметры

| Название | Nbg   | Описание                                              | Нужно |
| -------- | ----- | ----------------------------------------------------- |:-----:|
| число    | число | Число, которое добавит `st`, `nd`, `rd`, `th` к нему. |  да   |

## Пример(ы)

```javascript
bot.command({
    name: 'ordinal',
    код: `
  $ordinal[12] -> Возвращает 12nd 
  $ordinal[50] -> Возвращает 50th
  $ordinal[11] -> Возвращает 11st
  $ordinal[88] -> Возвращает 88th
  `
});
```