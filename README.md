[![Discord](https://discordapp.com/api/guilds/503423569192157184/widget.png?style=shield)](https://discord.gg/ck8kajr)
[![GitHub forks](https://img.shields.io/github/forks/yukidiscordbot/Yuki-Public)](https://github.com/yukidiscordbot/Yuki-Public/network)
[![Package Version](https://img.shields.io/github/package-json/v/yukidiscordbot/Yuki-Public)](https://www.npmjs.com)


## ▶ Welcome

Welcome to Yuki's Beta Milestone 2, github page, in this version the project is almost open-source and make it completely ported to discord.js v13. The developers do not recommend using this source since it is only for a testing propuses, the owner will notify you if the project is complete and ready to roll to the public eyes.


## ▶ Installation
**Linux**:

Fedora

```
sudo dnf install -y gcc-c++ make 
curl -sL https://rpm.nodesource.com/setup_16.x | sudo -E bash -
```
OR

```
sudo dnf module install nodejs:16
```

Debian/Ubuntu

```
curl -sL https://deb.nodesource.com/setup_16.x | sudo bash -
sudo apt -y install nodejs
```


**Bonus:** These commands below will fix the `integer` bug, otherwise without this you cannot install it normally, due it will try to install **1.0.7** instead of **4.0.0**! We are currently going to force NPM to use **4.0.0** and the least version of every package.
```
npm i -g npm-check-updates
npm-check-updates -u
npm install
```

## ▶ Self-Hosting (Support)
You must use **Node 16.6** to get it installed, otherwise the bot will refuse to start, self-hosting for this milestone does have support so join our support server if there is any issues while you encounter using this test milestone.
