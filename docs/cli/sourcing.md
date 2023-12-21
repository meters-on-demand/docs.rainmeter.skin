---
---

# Sourcing

Sourcing Meters on Demand can be useful if you want to use its internal functions and integrate them in your own script or skin.

## What is sourcing

[Scope and dot sourcing](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_scripts?view=powershell-7.4#script-scope-and-dot-sourcing) describes the basics of sourcing PowerShell scripts.

When you source a script (with the `.` operator), the script is executed and all of its variables and functions are loaded into the current scope. So, by sourcing you get access to monds internal functions and the `$MetersOnDemand` object.

```ps1
. "$($RmApi.Variable('SKINSPATH'))#Mond\MetersOnDemand.ps1"
```

## Watch out!

By sourcing the `MetersOnDemand.ps1` script file, all of the functions and a variable called `$MeterOnDemand` are added to the current scope. While you can source the script inside your own functions, it's recommended you source it at the root of your script. Just don't override `$MetersOnDemand` or any of the functions. PowerShell will let you do it without warning, so be careful.

Most of the internal functions use values from the `$MetersOnDemand` object. When the script is first ran (so when it's sourced), the `$MetersOnDemand.Cache` object is populated with values from the users cache.json file. The cache file is created when mond is installed.

Functions declared by `MetersOnDemand.ps1` and included modules:

| Name                    | Signature                                                    |
| ----------------------- | ------------------------------------------------------------ |
| Download                | ` [-FullName] <full_name> [-Quiet]                         ` |
| Install                 | ` [-Skin] <full_name> [-Force] [-FirstMatch]               ` |
| Upgrade                 | ` [-Skin] <full_name> [-Force]                             ` |
| Uninstall               | ` [-Skin] <full_name> [-Force] [-Quiet]                    ` |
| Restore                 | ` [-Skin] <full_name> [-Force] [-Quiet]                    ` |
| Search                  | ` [-Query] <keyword> [[-Property] <property>] [-Quiet]     ` |
| New-Package             | ` [-RootConfig] <skin_name>                                ` |
| Update-SkinList         | ` -Cache <cache object> [-SkipInstalled] [-Force] [-Quiet] ` |
| Get-InstalledSkins      | ` [[-Cache] <cache object>]                                ` |
| Save-Cache              | ` [-Cache] <cache object> [-Quiet]                         ` |
| New-Skin                | ` [-SkinName <skin_name>]                                  ` |
| New-Lock                | ` -RootConfig <skin_name>                                  ` |
| Get-SkinObject          | ` [-FullName] <full_name>                                  ` |
| Get-Request             | ` [-Uri] <uri>                                             ` |
| ToIteratable            | ` [-Object] <object>                                       ` |
| Get-MondInc             | ` -RootConfig <full_name>                                  ` |
| Get-SkinInfo            | ` -RootConfig <full_name>                                  ` |
| Add-RMfooter            | ` -Target <path to rmskin>                                 ` |
| Set-PathVariable        | ` [-AddPath <path>] [-RemovePath <path>]                   ` |
| Write-Exception         | ` -Exception <exception> [-Quiet]                          ` |
| Format-SkinList         | ` -Skins <array of skin objects>                           ` |
| Test-BuiltIn            | ` -Plugin <name>                                           ` |
| Get-LatestPlugin        | ` -Plugin <name>                                           ` |
| Get-Plugins             | ` -RootConfig <skin_name>                                  ` |
| Help                    |                                                              |
| Version                 |                                                              |
| New-Cache               |                                                              |
| Get-Cache               |                                                              |
| Test-DevCommand         |                                                              |
| Config                  |                                                              |
| Refresh                 |                                                              |
| Assert-RootConfig       |                                                              |
| Limit-PowerShellVersion |                                                              |
| RemovedDirectory        |                                                              |
| Clear-Temp              |                                                              |

Uhh now that I look at it, the function signatures are all over the place

## Recommendation

Before the function signatures are more coherent, you can and should call `mond` like a user would.

You might want to use sourcing for the Search function to get an array of skin objects to work with.
