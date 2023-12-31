---
title: Install
order: 0
---


# Install command

The install command downloads and installs the specified skin.

```shell
mond install [-Skin] <full_name> [-Force]
```

## Usage

Install a skin:

```shell
mond install reisir/amogus
```

If a skin isn't found in the cached list of skins, the API is searched instead. If a single result is found, it's installed.

```shell
mond install catppuccin
```

## Tips

Use `mond search` to find available skins or to double check a skins name

```shell
mond search cat
# Found 2 skins:
# marcopixel/monstercat-visualizer 2.1.0
# modkavartini/catppuccin v1.4.1
mond install marcopixel/monstercat-visualizer
mond install modkavartini/catppuccin
```
