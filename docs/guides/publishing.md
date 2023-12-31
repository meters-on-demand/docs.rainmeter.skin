---
order: 1
title: Publishing skins
---

# Publishing skins

How to add your skin to the Meters on Demand database.

## Requirements:

### Your skin must have a repository on GitHub

 * See [Creating skins](/guides/creating) for a full guide on creating and uploading a skin to GitHub

### The repository must have the right topic for mond to find it

 * #rainmeter, #rainmeter-skin and #rmskin are valid topics 

### The repository must have a release with an .rmskin package in it

 * You can use the [package command](/commands/package) to automatically create an .rmskin package for your skin.

## Adding the #rainmeter-skin topic

See [Classifying your repository with topics](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) to learn how to modify your GitHub repositorys topics.

## Creating a release

See [Managing releases in a repository](https://docs.github.com/en/repositories/releasing-projects-on-github/managing-releases-in-a-repository) to learn how to make and manage releases.

Remember, you can use `mond package <your skin>` to automatically create the .rmskin package. Packages are moved to the desktop by default. You may also use the Rainmeter skin packager to manually create the .rmskin package.

### Example of a valid release:

[![release example](/mondtholomew%20release.png)](https://github.com/reisir/mondtholomew/releases/tag/v1.2.3)

## All done!

Once you've made your repo, added a valid topic and made a release, your skin will be added to the Meters on Demand database in about 12 hours (the API scrapes GitHub once a day). 

See the optional steps on the next page if you want to customize or speed up the process of API discovery.
