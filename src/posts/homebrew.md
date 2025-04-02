---
layout: ../layouts/BlogPost.astro
title: How to actually use Homebrew 🍺
slug: homebrew
description: "number 7 will shock you!"
tags:
  - dev
added: "April 2 2025"
image:
  url: "https://i.imgur.com/KkYMtAz.jpg"
  alt: "Stock photo of two people cheers’ing beers."
---

Ok, so I lied... I actually don't want to write up a full-blown tutorial or really detailed how-to guide. I feel like there are plenty of those out there. But, what I will say is these guides typically gloss over one of the main features that really makes Homebrew so powerful... the Brewfile ✨

I actually didn't even use one until pretty recently tbh. It wasn't until I got a new work computer that I found myself searching for apps and running `brew install blahblah` over and over again. At that point, Homebrew is only marginally better than googling the app and downloading the dmg. The Brewfile is what makes getting up and running with all your apps and packages a breeze. Let's get into it.

A Brewfile is a way to define a list of packages, casks, and other dependencies that you want to install using Homebrew.

A basic Brewfile looks like this:

```ruby
tap 'homebrew/core'          # A tap is a repository of formulas
brew 'git'                   # Formula for a package
brew 'node'                  # Another package
cask 'google-chrome'         # A cask for a GUI app
```

You can either create this file manually or you can generate one based on all your installed formulas and casks. To do this, run:

```shell
brew bundle dump
```

This will create a file named `Brewfile` in your current directory.

Note: if you use vscode, then you will also see all your extensions listed in here too. This is a bit annoying for me because I just sync all that automatically anyway. You can just delete these lines from the file or you can add the `--no-vscode` flag to the above bundle command. You can also set the `$HOMEBREW_BUNDLE_DUMP_NO_VSCODE` environment variable. I just added it to my .zshrc file like so:

```bash
export HOMEBREW_BUNDLE_DUMP_NO_VSCODE=1
```

Ok what were we talking about? Oh yeah so we created the Brewfile. Since I have a personal computer and a work computer, I created two separate files. You can do this by specifying the filename in the dump command. For example:

```bash
brew bundle dump --file="Brewfile-work"
```

So now let's say you get a new work laptop because your old one got wet while you were playing beer pong in the pool. If you have this `Brewfile-work` file, you can just run this and you're good to go:

```bash
brew bundle --file=/path/to/Brewfile-work
```

If you want to learn more about all the flags for the bundle subcommand, check all that out [here](https://docs.brew.sh/Manpage#bundle-subcommand).

Alrighty, that's about it. Just remember not to bring your laptop anywhere near the pool...
