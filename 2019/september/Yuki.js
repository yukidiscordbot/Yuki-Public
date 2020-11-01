const Discord = require('discord.js');
const https = require('https');
const sqlite = require('sqlite');
const { CommandHandler } = require('./classes/CommandHandler.js');
const { EventHandler } = require('./classes/EventHandler.js');

exports.Yuki = class Yuki {
    constructor(config) {
        this.configPath = config;
        this.getConfig();

        this.client = new Discord.Client({
            disabledEvents: ["TYPING_START"]
        });
        this.client.on('error', e => console.error(e));

        this.commandHandler = new CommandHandler(this);
        this.eventHandler = new EventHandler(this);

        this.timedPollInterval = false;

        sqlite.open('./pollData.db').then(db => {
            this.db = db;
            this.initDB();
        });
    }

    initDB() {
        this.db.run('CREATE TABLE IF NOT EXISTS polls (messageId TEXT, channelId TEXT, question TEXT, options TEXT, emojis TEXT, blockMultiples TEXT, timedPoll TEXT, anonymousPoll TEXT, anonymousVotes TEXT)');
    }

    login() {
        this.getConfig();

        this.client.login(this.config.token);
    }

    end() {
        this.client.destroy();
    }

    rq(f) {
        const path = require.resolve(f);
        const cache = require.cache[path];
        delete require.cache[path];

        if (cache) {
            const cIndex = cache.parent.children.indexOf(cache);
            if (cIndex !== -1) cache.parent.children.splice(cIndex, 1);
        }

        return require(f);
    }

    getConfig() {
        this.config = this.rq(this.configPath);

        return this.config;
    }

    startTimedPollInterval() {
        this.timedPollInterval = true;

        setInterval(async () => {
            const timedPolls = await this.db.all("SELECT * FROM polls WHERE timedPoll IS NOT NULL");
            const promises = [];
            const splice = [];

            timedPolls.forEach(p => {
                const channel = this.client.channels.get(p.channelId);
                if (!channel) return splice.push(p.messageId);

                const editMessage = m => {
                    if (Date.now() > p.timedPoll) {
                        const embed = m.embeds[0];

                        const reactionCounts = [];
                        const emojis = JSON.parse(p.emojis);

                        m.reactions.forEach(r => {
                            const key = r.emoji.id ? r.emoji.id : r.emoji.name;
                            const index = emojis.indexOf(key);

                            if (index === -1) return;

                            reactionCounts[index] = r.count - 1;
                        });

                        const answers = JSON.parse(p.options);

                        embed.description = `**${p.question}**\n\n${answers.map((a, i) => `${/^\d+$/.exec(emojis[i]) ? this.client.emojis.get(emojis[i]).toString() : emojis[i]} | ${a} (${reactionCounts[i]})`).join("\n")}\n\n__Winner__: ${answers[reactionCounts.indexOf(Math.max.apply(Math, reactionCounts))]}`;
                        embed.footer.text = `Multiple votes: ${p.blockMultiples === "true" ? "no" : "yes"}, Ended`;

                        promises.push(m.edit(embed).catch(() => { }));

                        this.db.run('UPDATE polls SET timedPoll=NULL WHERE messageId=?', p.messageId);
                    }
                    else {
                        const embed = m.embeds[0];

                        embed.footer.text = `Multiple votes: ${p.blockMultiples === "true" ? "no" : "yes"}, Ending in: ${this.formatMs(p.timedPoll - Date.now())}`;

                        promises.push(m.edit(embed).catch(() => { }));
                    }
                };

                const fetchPromise = channel.messages.fetch(p.messageId);
                promises.push(fetchPromise);
                fetchPromise.then(m => {
                    editMessage(m);
                }).catch(() => splice.push(p.messageId));
            });

            const deleteRows = async () => {
                const prepared = await this.db.prepare("UPDATE polls SET timedPoll=NULL WHERE messageId=?");
                splice.forEach(s => {
                    prepared.run(s);
                });
                prepared.finalize();
            };

            Promise.all(promises).then(async () => {
                await deleteRows();
            }).catch(async () => {
                await deleteRows();
            });
        }, 30000);
    }

    setActivity() {
        const presenceData = this.config.presence;

        try {
            presenceData.activity.name = eval(`\`${presenceData.activity.name}\``);
        }
        catch (e) { }

        this.client.user.setPresence(presenceData);
    }

    react(m, reactions) {
        const reactOnce = i => {
            const endAction = () => {
                i++;

                if (reactions.length !== i) reactOnce(i);
            };

            m.react(reactions[i]).then(endAction).catch(endAction);
        };

        reactOnce(0);
    }

    formatMs(ms) {
        const days = Math.floor(ms / 86400000);
        const hours = Math.floor(ms % 86400000 / 3600000);
        const minutes = Math.floor(ms % 3600000 / 60000);
        const seconds = Math.floor(ms % 60000 / 1000);

        return `${days > 0 ? `${days}d ` : ""}${hours > 0 ? `${hours}h ` : ""}${minutes > 0 ? `${minutes}m ` : ""}${seconds > 0 ? `${seconds}s ` : ""}`.trim();
    };
};