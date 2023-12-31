---
order: 9001
---

# PowerShell sourcing

Sourcing Meters on Demand in your script can be useful if you want to use its internal functions and integrate them in your own tool or skin but it has some drawbacks too.

## What is sourcing

Microsofts official [Scope and dot sourcing](https://learn.microsoft.com/en-us/powershell/module/microsoft.powershell.core/about/about_scripts?view=powershell-7.4#script-scope-and-dot-sourcing) article describes the basics of sourcing PowerShell scripts.

When you source a script (with the `.` operator), the script is executed and all of its variables and functions are loaded into the current scope. So, by sourcing you get access to monds internal functions and the `$MetersOnDemand` object.

```ps1
# Sourcing MetersOnDemand
. "$($RmApi.Variable('SKINSPATH'))#Mond\MetersOnDemand.ps1"
```

## Watch out!

By sourcing the `MetersOnDemand.ps1` script file, all of the functions and a variable called `$MeterOnDemand` are added to the current scope. While you can source the script inside your own functions, it's recommended you source it at the root of your script, to let all of the functions use the cache without a ton of file reads.

Most of the functions use values from the `$MetersOnDemand` object. When the script is first ran (so when it's sourced), the object is created and `$MetersOnDemand.Cache` is populated with values from the users cache.json file. The cache file is created when mond is installed and is required for mond to function.

PowerShell will let you override `$MetersOnDemand` and any of the functions without warning, so be careful.

Functions declared by `MetersOnDemand.ps1` (you can't use any of these names sorry):

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

Before the function signatures are made more coherent, you can and should call `mond` like a user would. eg. `mond install reisir/jiffy`

You might want to use sourcing for the Search function to get an array of skin objects to work with.

## What you can do about it

Teach me to use PowerShell modules plz, I'm @reisir on discord 
