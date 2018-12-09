# Yuki
A discord bot.
Follow us on twitter! (https://twitter.com/yukidiscordbot)

## Self Hosting Guide
This section will explain how to set up the bot, what you are allowed to do, and what you are not allowed to do when hosting this bot for your own server or for the public. The setup for this bot assumes you have basic knowledge of using NodeJS, NPM, the Git CLI, and basic command line usage.

### Self Hosting Setup
#### Requirements
- The latest version of [NodeJS](https://nodejs.org/) (LTS or Current is fine)
- Make sure [NPM](https://www.npmjs.com/) is installed with NodeJS (or another NodeJS package manager)
- Make sure you have [Git](https://git-scm.com/) installed

#### Setting Up (Self Hosting)
1. Clone this repository (`https://github.com/SplitXPlayZ/DinoHost-public`)
2. CD into the directory you cloned the repository into (`cd DinoHost`)
3. Run the command `npm install` (this may take a while)
4. Rename `config.example.json` to `config.json`
5. Fill out the JSON file to the proper settings for you and your bot account
6. Run `node bot.js`
7. Enjoy your new self hosted version of PollBot!

#### Hosting on Glitch.com
1. Go to https://glitch.com/edit/#!/yuki-public
2. Click the down arrow to the right of Yuki in the top left corner
3. Press the `Remix This or Remix Project` button.
4. Open `config.json`
5. Fill out the JSON file to the proper settings for you and your bot account
6. Your bot should start once you've done that!
7. Optional (but highly recommended): set up an UptimeRobot

##### Setting up an UptimeRobot
1. Go to https://uptimerobot.com/
2. Create an account
3. Set up an uptime robot monitor to ping the domain to your Glitch project (http://<name>.glitch.me/)
4. Your project will now stay alive near 24/7!
