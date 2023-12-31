---
order: 2
title: Customizing data
---

# Customizing your skins data

Things you can do to customize your skins data and speed up the process of adding your skin to the Meters on Demand database. By default the Meters on Demand API only scans GitHub for new skins and changes to skins once per day.

## Mond.inc configuration file

You can use a configuration file to provide more information about your skin to the Meters on Demand API. If you created your skin with `mond init`, your skin already has a mond.inc configuration file. Nice!

To manually create it, make a file called `mond.inc` either in the root of your skin or in the @Resources folder.

### Mond.inc example

This example is from the skin [`reisir/mondtholomew`](https://github.com/reisir/mondtholomew). Only contains the options relevant to the Meters on Demand API. The configuration file is also used for [distributing skins](/commands/package) with `mond package`.

The lines marked with `;` are not required, they are comments that explain what the option below is for.

```ini
[MonD]
; The name you want to be credited as.
; If blank, GitHub username will be used.
Author=Reisir
; The description of your skin.
; If blank, the GitHub repositorys description will be used.
Description=Mond but it work
```

## GitHub webhook

The Meters on Demand API only reads GitHub for new skins and updates once per day. If you want mond to hurry up and add your skin or process new releases, you can set up a GitHub webhook. Once set up, the webhook will notify the API of your skin and whenever you make new releases.

The Meters on Demand API acts instantly when notified but GitHub still takes some time to deliver the webhook and downloading files and updating a database still isn't instant. Updates normally process in 1-5 minutes.

### Creating a webhook

See [Creating webhooks](https://docs.github.com/en/webhooks/using-webhooks/creating-webhooks)

### Webhook configuration settings:

| Field         | Value                                        |
| ------------- | -------------------------------------------- |
| Payload URL   | `https://api.rainmeter.skin/webhooks/github` |
| Content type  | application/json                             |
| Which events? | Send me **everything**                       |

### Example configuration: 

![example webhook configuration](/webhook%20example.png)
