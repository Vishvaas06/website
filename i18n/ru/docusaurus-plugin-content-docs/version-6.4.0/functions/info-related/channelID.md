---
title: $channelID
description: '$channelID вернет ID канала с заданным именем канала.'
id: channelID
---

`$channelID` вернёт ID канала с заданным именем канала.

## Использование

```php
$channelID[name?]
```

## Параметры

| Название | Nbg   | Описание                                   | Нужно |
| -------- | ----- | ------------------------------------------ |:-----:|
| имя?     | целое | Название канала для идентификатора канала. | ложь  |

## Пример(ы)

ID канала канала, в котором вы выполняете команду:

```javascript
bot.command({
    имя: 'channelID',
    код: `
  $channelID
  `
});
```