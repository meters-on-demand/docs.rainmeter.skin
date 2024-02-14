---
title: Package
order: 4
---

# Bang command

The bang command executes Rainmeter bangs. If called under $RmApi, $RmApi.Bang() is used. Otherwise Rainmeter.exe is called.

```shell
mond bang [[-Bang] <bangs>] [-Start] [-Stop] [-NoStart]
```

```shell
bang [[-Bang] <bangs>] [-Start] [-Stop] [-NoStart]
```

The commands `mond bang` and `bang` are equivalent, the rest of this page will use `bang`.

## Usage

In PowerShell, you'll have to escape double quotes to send them to Rainmeter.

```ps1
bang -Bang "[!ActivateConfig `"Mondtholomew\Clock`"]"
```

Because `bang` calls Rainmeter.exe, if Rainmeter is not running, it will start. You can use switches to make this behaviour clearer.

 - `-NoStart` will skip calling the bang if Rainmeter is not running. This is useful when you want to call a bang only if Rainmeter is already running.
 - `-Start` will explicitly start Rainmeter (if it's not running) and then call the bang.
 - `-Stop` will stop the Rainmeter process. If you specify `-Stop` and a bang, Rainmeter will be stopped and the bang call will start it. 

You can specify both `-Start` and `-Stop` to force Rainmeter to stop and start before calling the bang. This is sometimes more useful than `bang !RefreshApp`.

It's recommended to use `Invoke-Bang -Stop` or `bang -Stop` inside scripts to stop Rainmeter instead of `bang !Quit` as `-Stop` uses Get-Process and Wait-Process to make the script wait for the Rainmeter process to close.

If you call `bang !Quit`, Rainmeter can still be running while the script continues. This can lead to issues with writing to skin files etc.

