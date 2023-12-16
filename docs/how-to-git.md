---
---

# How to git

This guide uses `git` on the command line, you may also use [GitHub Desktop](https://docs.github.com/en/desktop/installing-and-configuring-github-desktop/overview/creating-your-first-repository-using-github-desktop). GitHub also has an [official guide](https://docs.github.com/en/get-started/quickstart/hello-world) on how to make repositories and releases.

If you use GitHub Desktop to make and upload your repository, or you already have a repository you can skip to the next step, [Adding skins](https://github.com/meters-on-demand/mond-api/wiki/Adding-skins)

# Prerequisites 

You need a GitHub account. Either use the boring [join](https://github.com/join) form or the space age [signup](https://github.com/signup) page to make your account.

You also need `git`. You can install it with winget `winget install Git.Git` or download it from [git-scm.com](https://git-scm.com/download/win)

# GitHub repository

Log into your GitHub account and make a new repository with the name of your skin. Read GitHubs [creating a repo](https://docs.github.com/en/get-started/quickstart/create-a-repo) guide for more detailed instructions.

When you make the GitHub repository, don't "Add a README file" and you'll see the commands for the next part. 

If you have already made a GitHub repository for your skin previously and failed to link it to your local repository, added a README file, or did something else wrong, just delete it from its settings tab and make a new one.

# Local repository

To push your skin to GitHub, you first need to make it a local repository. Open a terminal in your skins folder (in `#ROOTCONFIGPATH#`) and run these commands:

```sh
git init
git add .
git commit -m "Initial commit"
```

This initializes an empty git repository, adds all the files of your skin to the repository and makes a commit. You can read more about [git commit](https://git-scm.com/docs/git-commit) (and git in general) or just use VS Codes integrated source control tab like the rest of us.

Then you need to set up remote tracking, which is means you tell your local `git` where your GitHub repository is. If you initialized an empty repository in the last step, you can just copy the commands with the right info filled in from your browser.

```sh
git branch -M main
git remote add origin https://github.com/<username>/<repository>.git
git push -u origin main
```

# Checking it worked

Go back on GitHub and refresh your repository page, it should show all of your skin files.

# Adding your repository to MonD 

Add the "rainmeter-skin" [topic](https://docs.github.com/en/repositories/managing-your-repositorys-settings-and-features/customizing-your-repository/classifying-your-repository-with-topics) to your repository. Then if your skin has a release with an .rmskin in it, it will eventually be added to Meters on Demand. See [Adding skins](https://github.com/meters-on-demand/mond-api/wiki/Adding-skins) to learn how to customize and / or make the process faster.

