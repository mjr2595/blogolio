---
layout: ../layouts/BlogPost.astro
title: I turned my old macbook into a linux server because why not 🍎🐧
slug: macbook-linux-server
description: "Disclaimer: This is a super specific guide that likely won’t apply to many people at all"
tags:
  - projects
added: "Nov 2 2024"
image:
  url: "https://i.imgur.com/1uH95tj.png"
  alt: "image of laptop with lid slightly open and a notepad saying 'This is a server! (yes, really) DO NOT CLOSE LID!!'"
---

Alrighty, so just like those stupid recipe sites, I’ll first write up 5 pages telling you a long unnecessary story about my first experience with Linux. I’ll then explain how what you’re referring to as “Linux”, is in fact, GNU/Linux, or as I’ve recently taken to calling it, GNU _plus_ Linux.

… nah just kidding. Literally everyone hates that.

But for real, I had an old 2013 MacBook Pro that’s been gathering dust so I figured I’d throw Linux on there. To spice things up just a tad, I don’t have any ethernet in the house (it’s a rental). I would need to set the server up to have a static IP via wifi.

It was super easy and def didn’t frustrate me at all or take me 2 days to finish.

Gonna keep this as short as possible and just link out to other guides for the most part.

## Installation

1. Download the Ubuntu Server [24.04.1 LTS](https://ubuntu.com/download/server) (or whatever version) iso file.
2. [Follow these steps to create a bootable USB](https://ubuntu.com/tutorials/create-a-usb-stick-on-macos#1-overview)

   1. Flash it to a USB drive (should be at least 5GB) using [balenaEtcher](https://etcher.balena.io/)
   2. Boot Macbook to USB

3. [Follow these steps to install](https://ubuntu.com/tutorials/install-ubuntu-server#1-overview)

   1. One thing to note if you are like me with just wifi, you may not see your network connection configuration during the install. I first tried to install via offline mode. This proved difficult post installation when I needed my wireless drivers. You can probably get this to work by installing drivers on another system, putting them on a drive, then installing on your server… but I figured it would be quicker to reinstall 🤷
   2. I highly recommend just hardwiring your laptop during installation. For me, that was plugging directly into my ISP-issued modem/router/switch thing (technical term) using an ethernet to USB-A dongle.

## Post-Installation

1. Alrighty so right after install, do the thing and update all packages: `sudo apt update && sudo apt upgrade`
2. Okie doke so now the fun part. After (and during) install, my OS didn’t recognize my wireless card. [This thread](https://askubuntu.com/questions/55868/installing-broadcom-wireless-drivers) was exactly what I needed 👌
3. Next step was configuring a wifi connection with static IP. I found [this guide](https://linuxconfig.org/ubuntu-20-04-connect-to-wifi-from-command-line), which got me mostly there, but it’s for dynamic IP with DHCP. I got that working, then asked my good friend [Claude](https://claude.ai/new) to help me update my config for a static IP. Here’s what my Netplan configuration file ended up looking like (I changed the IPs and removed specific names so pls don’t hack me 🥺👉👈)

```yaml
network:
  version: 2
  ethernets:
    <ethernet interface name>:
      dhcp4: true
  wifis:
    <wireless interface name>:
      dhcp4: false
      addresses:
        - 192.168.0.21/24
      routes:
        - to: default
          via: 192.168.0.1
      nameservers:
        addresses: [192.168.0.1]
      access-points:
        "<SSID>":
          password: "<password>"
```

4. After that, just restart the NetworkManager service or reboot and you’re all set!

Congrats you did it! 👍

<div style="text-align: center;">
    <img src="https://st3.depositphotos.com/3367263/16340/i/950/depositphotos_163403244-stock-photo-college-students-gesturing-thumbs-up.jpg" alt="stock photo of college students gesturing thumbs up" />
</div>
