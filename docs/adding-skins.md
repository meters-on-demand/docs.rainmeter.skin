---
---

# Publishing your skin

How to add your skin to the `mond` Rainmeter skin repository

## Requirements:

### Your skin must have a repository on GitHub

 * See [How to git](/how-to-git) and upload your skin to GitHub. You can also read GitHubs own [repository instructions](https://docs.github.com/en/repositories/creating-and-managing-repositories/about-repositories)

### The repository must have the right topic for mond to find it

 * #rainmeter, #rainmeter-skin and #rmskin are valid topics 
 * See [Classifying your repository with topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics)

### The repository must have a release with an .rmskin package in it

 * See [Managing releases in a repository](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) to learn how to make and manage releases.
 * You can use the [package command](/cli/package) to automatically create an .rmskin package for your skin.

### Example of a valid release:

[![release example](/mondtholomew%20release.png)](https://github.com/reisir/mondtholomew/releases/tag/v1.2.3)

# All done!

Once you've made your repo, added a valid topic and made a release, your skin will be added to the Meters on Demand database in about 12 hours (the API scrapes GitHub once a day). 

See the optional steps below if you want to customize or speed up the process.

# Optional steps

Things you can do to customize or speed up the process of adding your skin to the Meters on Demand database.

## Mond.inc configuration file

You can create a configuration file to provide more information about your skin. 

Include a file called "mond.inc" the root of your skin or in the @Resources folder. The file should contain a section called **[mond]**. The Meters on Demand API reads this file when it scans your skin repository. 

### Mond.inc example

From the skin [`reisir/mondtholomew`](https://github.com/reisir/mondtholomew). Only contains the options relevant to the Meters on Demand API. The MonD.inc file is also used for packaging with `mond package`.

```ini
[MonD]
; The preview image of your skin.
; You can use the social preview image of your repository.
; The image should be around 1280×640. Other sizes might get cropped.
PreviewImage=https://repository-images.githubusercontent.com/523792040/c634e70f-884a-4412-863a-d66cd4e2f80f
; The name you want to be credited as.
; If blank, GitHub username will be used.
Author=Reisir
; The image displayed as the skin author picture. 
; Should be square and smaller than or exactly 1028x1028.
; If blank, GitHub profile picture will be used.
ProfilePicture=https://avatars.githubusercontent.com/u/93496808
; The description of your skin.
; If blank, the GitHub repositorys description will be used.
Description=Mond but it work
```

## Setting up a webhook

If you want Meters on Demand to your skin and new releases near instantly, you can set up a GitHub webhook. Once set up, the webhook will notify the API after you make a new release and the API will fetch the new information immediately when notified. GitHub usually takes about 1-5 minutes to send the webhook.

### Webhook configuration settings:

| Field         | Value                                    |
| ------------- | ---------------------------------------- |
| Payload URL   | `https://api.rainmeter.skin/webhooks/github` |
| Content type  | application/json                         |
| Which events? | Send me **everything**                   |

### Example configuration: 

![example webhook configuration](/webhook%20example.png)

## Need help? 

Join the [Rainmeter Discord](https://discord.gg/rainmeter) and tag [@reisir](https://github.com/reisir) in the [#help](https://discord.com/channels/148103787259756544/148718731743199233) channel. Do not fucking DM me thank you :3

You may also [email me](mailto:reisirito@gmail.com) but discord will reach me (and a lot of other knowledgeable people) much faster than email.

You can also open an [issue](https://github.com/meters-on-demand/mond-api/issues) on GitHub but I would prefer those to be reserved for bug reports, feature requests and the like. 

