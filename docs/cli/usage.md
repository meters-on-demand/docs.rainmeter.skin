---
title: Usage
order: 1
---

# Usage

The Meters on Demand cli has the following commands:

```shell
install [-Skin] <full_name> [-Force]
# installs the specified skin

list
# lists installed skins

search [-Query] <keyword> [-Property <property>]
# searches the skin list

update [-Force]
# updates the skins list

upgrade [-Skin] <full_name> [-Force]
# upgrades the specified skin

uninstall [-Skin] <full_name> [-Force]
# uninstalls the specified skin

restore [-Skin] <full_name> [-Force]
# restores an upgraded or uninstalled skin from @Backup

init [-Skin] <skin_name>
# creates a new skin folder from a template

package [[-Skin] <rootconfig>] [...]
# Creates an .rmskin package of the specified skin.

version
# prints the MonD version

help [-Command]
# shows this help
```

## Examples

Installing a skin

```shell
mond install reisir/mondtholomew
```

Searching for skins

```shell
mond search amogus
```

Creating a new skin

```shell
mond init "My new skin"
```

Packaging a skin for distribution

```shell
mond package Autocomb
```

<div class="tip custom-block" style="padding-top: 8px">
<p class="custom-block-title">About Package</p>
Package is a utility command for skin developers. It has a lot of options, too many to fit on this list. If you're interested in automatically packaging skins, check out the <a href="/commands/package">package guide</a>.
</div>
