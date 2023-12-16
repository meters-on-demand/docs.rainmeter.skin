---
---

# Package command

The package command automatically generates a .rmskin package for distributing Rainmeter skins.

```shell
mond package [-Skin] <skin_name>
```

## Pre-requisites

* Read the Rainmeter [distributing skins](https://docs.rainmeter.net/manual/distributing-skins/) guide. Package essentially replicates the skin packagers functions. 
* Install [Meters on Demand](https://github.com/meters-on-demand/cli/releases/latest/) if you haven't already
* Create a 400x60 .bmp header image (optional)
* Take note of the variable file(s) in your skin (optional)
  * Variable files are files that your users are supposed to edit. Rainmeter keeps the users edits to the specified variable files accross updates to your skin.

## Usage

There are several ways of running mond package.

- Run `mond package` in your skins root directory (#ROOTCONFIGPATH#)
- Run `mond package <skin_name>`

Package will scan every .inc and .ini file in your skin to see which plugins are used. The detected plugins are added to the package automatically.

If your skin has a mond.inc configuration file, package will use the information in it. If your skin doesn't have a mond.inc file or you want to override it, you can provide the information through command line parameters.

## Using mond.inc

Place or create mond.inc in the root of your skin `#ROOTCONFIGPATH#` or in the @Resources `#@#` folder of your skin. 

Mond.inc is a configuration file that can also be used to customise your skins information in the Meters on Demand database. See [Adding your skin](/adding-skins) for more information about skin publishing.

::: info
You do not need to publish your skin to use the package command.
:::

Here's an example of a mond.inc file for packaging:

```ini
[mond]
SkinName=Mondtholomew
Author=Reisir
Version=v1.3.0
HeaderImage=#@#mondtholomew.bmp
VariableFiles=Mondtholomew\@Resources\Variables.inc | #@#Cordinates.inc
LoadType=Layout
Load=Mondtholomew
```

::: warning
You may use the variable `#@#` in HeaderImage and in VariableFiles. You may **NOT** use any other Rainmeter variables. Mond is a separate tool from Rainmeter and it cannot read your skins variables.
:::

## Using command line parameters

You can override the defaults and the configuration file with command line parameters like `-Author <name>`. For complex or repeated packaging, it's recommended to use the configuration file.

Example command supplying all of the information with parameters:

```shell
mond package -Config Mondtholomew -Author Reisir -PackageVersion v1.3.0 -HeaderImage 'Mondtholomew\@Resources\mondtholomew.bmp' -VariableFiles 'Mondtholomew\@Resources\Variables.inc' -LoadType Layout -Load Mondtholomew
```

## All package options

Option is the name in mond.inc, if applicable. Override is the command line parameter. The listed parameter names should be considered unstable as they may change at any point. Using mond.inc is recommended.

| Option           | Override              | Description                                                                                                                                                                                                                                                         |
| ---------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| SkinName         | `-Skin`, `-Config`    | The name of your skin folder or #ROOTCONFIG#.                                                                                                                                                                                                                       |
| Author           | `-Author`             | The author displayed in the skin installer.                                                                                                                                                                                                                         |
| Version          | `-Version`            | The version displayed in the skin installer dialog and filename.                                                                                                                                                                                                    |
| LoadType         | `-LoadType`           | What to load after installation, either "Skin" or "Layout". Requires Load to be set to work.                                                                                                                                                                        |
| Load             | `-Load`               | The name of the config or layout to load. Requires LoadType to be set to work.                                                                                                                                                                                      |
| VariableFiles    | `-VariableFiles`      | List of pipe separated variable files, relative to #SKINSPATH# eg. `Mondtholomew\@Resources\Variables.inc`. See [distributing skins](https://docs.rainmeter.net/manual/distributing-skins/)                                                                         |
| MinimumRainmeter | `-MinimumRainmeter`   | The minimum version of Rainmeter required to install your skin. Defaults to "4.5.17".                                                                                                                                                                               |
| MinimumWindows   | `-MinimumWindows`     | The minimum version of Windows required to install your skin. Defaults to "5.1" which is Windows XP.                                                                                                                                                                |
| HeaderImage      | `-HeaderImage`        | The path to your header image. Either a full path or a #SKINSPATH# relative one. So `D:\Images\Header.bmp` or `Mondtholomew\@Resources\Header.bmp. See [distributing skins](https://docs.rainmeter.net/manual/distributing-skins/) for specifications (400x60 .bmp) |
| Exclude          | `-Exclude`            | A pipe `\|` or comma `,` separated list of files to not include in the package. `.git`, `.gitignore` and other hidden files are always excluded.                                                                                                                    |
|                  | `-OutPath`, `-o`      | Complete or relative path to save the final output to.                                                                                                                                                                                                              |
|                  | `-OutFile`, `-name`   | Filename of the .rmskin to be created, saved to OutDirectory.                                                                                                                                                                                                       |
|                  | `-OutDirectory`, `-d` | Output directory where packaged .rmskins are moved. Defaults to `%USERPROFILE%\Desktop`                                                                                                                                                                             |

## Disclaimer

By using `mond package` you agree to bundling in the following image into your skins @Resources folder

[![image](/disclaimer.png)](https://www.newgrounds.com/art/view/whygena-draws/just-a-taste)

