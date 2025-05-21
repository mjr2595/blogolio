---
layout: ../layouts/BlogPost.astro
title: instrumental music to study / not be distracted to 🎶🙈
slug: script-commands
description: "feat. Raycast Script Commands"
tags:
  - dev
  - projects
added: "May 21 2025"
image:
  url: "https://i.imgur.com/Cn910Ji.png"
  alt: "Stock photo of a distracted woman with sticky notes on her eyes. The sticky notes have eyes drawn on them."
---

I know it's not obvious due to my impeccably professional and well-put-together demeanor, but I get distracted super easily. At times, it can get pretty bad. For example, I can't listen to music with lyrics while I try to work. I just can't help but fixate on the words. So, when I work I like to listen to instrumental radio on youtube -- think lofi or chillhop type stuff. Neato right? Well, I will often get bored of the music I've been listening to. This really shouldn't be a big deal, BUT I get wayy too distracted searching for music on youtube. I'll find myself clicking on random videos and you can just forget about it if I click on a short and start scrolling... RIP productivity.

<div style="text-align: center;">
	<img src="https://media1.tenor.com/m/mypHgRZLq5oAAAAC/monyetguru-pour-one-out.gif" alt="gif from show 'regular show'. characters are pouring out sodas while crying" width=500px />
</div>

So I started to use a nifty pomodoro timer app called [tomatillo timer](https://timer.flotes.app/). It syncs up music with the work/study and break intervals. That would be just fine and dandy on its own but, again, I found myself going down the youtube rabbit hole when I wanted to change up the music.

So, I made a lil workaround. Which now leads me to...

### _✨ Raycast script commands ✨_

Sidebar, in case you didn't know, [Raycast](https://www.raycast.com/) is a spotlight replacement app for macOS. Ok back to the program. To keep it super short n sweet, "script commands" are Raycast commands that you create to trigger scripts. That's it! I find them useful in that I don't need to create an actual extension or anything -- I just want a short lil script to execute a thing and then move on. See [Raycast Script Commands](https://github.com/raycast/script-commands) for reference and more details that I won't dive into here. But basically you just tell Reycast the directory that the script lives in and then add a special header comment to the top of the script.

```shell
# Required parameters:
# @raycast.schemaVersion 1
# @raycast.title cmd-name
# @raycast.mode compact

# Optional parameters:
# @raycast.icon 🤘
```

> ℹ️ This is just the basic header. You can configure command arguments and whole lot more.

Ok so now to land this thing. I saved some of my favorite videos in a markdown file. This command triggers a lil bash script that grabs a video ID from that list at random and copies to the clipboard. This allows me to paste that into the pomo timer app. I should also note that the paid version of the app allows you to use a youtube playlist URL which would also solve this problem. I do really like the app and would love to support the dev, but money is a bit tight at the moment (see [this post](http://localhost:4321/posts/big-stuff/)).

I guess just to wrap it up, Raycast is dope and I find creating little scripts to make my life easier to be fun and super easy. Next step is to make an actual extension, but so far I really haven't felt the need to with script commands. If you want, you can check out my repo of these scripts [here](https://github.com/mjr2595/mac-setup/tree/main/utils).

<div style="text-align: center;">
	<img src="https://i.imgur.com/My4gxPE.png" alt="arm with a cast giving a thumbs up. the cast says Ray on it." width=500px />
</div>
