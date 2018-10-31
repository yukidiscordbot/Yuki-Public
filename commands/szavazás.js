module.exports = class {
    constructor() {
        this.help = {
            category: ":white_check_mark: Felhasználó",
            usage: "[dm]",
            description: "(:warning: Szükséges jog hiányzik: **Manage Channels** https://imgur.com/a/mcMxTZm) Privátban szeretnél egy szavazást kezdeni? ``dh!szavazás dm`` parancssal megcsinálhatod. Csinál egy szavazó interface-t."
        };

        this.guildOnly = true;
    }

    run(bot, m, args) {
        m.delete().catch(() => { });

        let dmPoll = false;

        if ((args[0] || "").toLowerCase() === "dm") dmPoll = true;

        const promptChannel = dmPoll ? m.author : m.channel;

        let first = true;
        let response = false;
        let initialMessage = null;
        const prompt = (message, filter) => {
            return new Promise((resolve, reject) => {
                const filterFunction = msg => msg.author.id === m.author.id && (filter ? filter(msg) || msg.content.toLowerCase() === "mégse" : true);

                const awaitMessages = () => {
                    (promptChannel.dmChannel || promptChannel).awaitMessages(filterFunction, { max: 1, time: 60000, errors: ['time'] }).then(msg => {
                        msg = msg.first();
                        response = msg;

                        if (msg.content.toLowerCase() === "mégse") throw new Error();

                        resolve(msg);
                    }).catch(() => {
                        promptChannel.send('A szavazás sikeresen eltörölve!').then(msg => {
                            msg.delete({ timeout: 5000 }).catch(() => { });
                        });
                        if (!dmPoll) m.channel.bulkDelete([first, initialMessage, response].filter(m => m), true).catch(() => { });
                    });
                };

                if (first === true) {
                    promptChannel.send(message).then(msg => {
                        first = msg;

                        awaitMessages();
                    });
                }
                else {
                    response.delete().catch(() => { });

                    const functionToUse = dmPoll ? promptChannel.send.bind(promptChannel) : first.edit.bind(first);
                    functionToUse(message).catch(() => { }).then(() => {
                        awaitMessages();
                    });
                }
            });
        };

        const reactions = [
            "1⃣",
            "2⃣",
            "3⃣",
            "4⃣",
            "5⃣",
            "6⃣",
            "7⃣",
            "8⃣",
            "9⃣",
            "🔟"
        ];

        const numberToString = n => `${n}${n > 10 ? "th" : ["th", "st", "nd", "rd", "th"][+n.toString().slice(-1)] || "th"}`;

        const poll = {
            question: null,
            answers: [],
            emojis: [],
            time: null,
            blockMultiples: true
        };

        const finalizePoll = () => {
            if (!dmPoll) m.channel.bulkDelete([first, initialMessage, response].filter(m => m), true).catch(() => { });

            const endTime = Date.now() + poll.time;

            m.channel.send({
                embed: {
                    description: `Kérdés: **${poll.question}**\n\n${poll.answers.map((a, i) => `${/^\d+$/.exec(poll.emojis[i]) ? bot.client.emojis.get(poll.emojis[i]).toString() : poll.emojis[i]} | ${a}`).join("\n")}`,
                    color: 0x00FFFF,
                    timestamp: poll.time ? endTime : null,
                    footer: {
                        text: `Többszörös szavazatok: ${poll.blockMultiples ? "nem" : "igen"}${poll.time ? `, Hátralévő idő: ${bot.formatMs(poll.time)}` : ""}`
                    }
                }
            }).then(msg => {
                if (dmPoll) promptChannel.send(`Szavazás létrehozva ${m.channel} nevű csatornában!`);

                bot.react(msg, poll.emojis);

                bot.db.run('INSERT INTO polls VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)', msg.id, m.channel.id, poll.question, JSON.stringify(poll.answers), JSON.stringify(poll.emojis), poll.blockMultiples.toString(), poll.time ? poll.time + Date.now() : null, poll.anonymous, "[]");
            }).catch(e => {
                promptChannel.send(':x: Hiba történt miközben kiraktam a szavazást.');
            });
        };

        promptChannel.send('Most kérdéseket feltennünk. Max **1** perced van hogy válaszolj, hanem töröljük a szavazást. És illetve, hanem akarsz egy szavazást azt a **mégse** beírásával megoldhatod. *Saját készítésű emojik kifognak maradni. (Ha nincsen megfelelő jog a botnak!) Ez azért lehet hogy: A bot nem tud hozzáférni a saját emojikhoz. Vagy az emoji már a szavazásban felhasználtad.*').then(msg => {
            if (dmPoll) m.channel.send(':tools: Ellenőrzd a DM-edet a szavazás készítéséhez.').then(msg => msg.delete({ timeout: 5000 }));

            initialMessage = msg;
            prompt("Írj egy kérdést szavazásnak.").then(msg => {
                poll.question = msg.content;

                const promptTime = () => {
                    const timeRegex = /^(?:(\d+)d)? *(?:(\d+)h)? *(?:(\d+)m)? *(?:(\d+)s)?$/i;

                    prompt('Írj egy határidőt. Ha örökké szeretnéd a szavazást megtartani azt ezzel lehetséges: `örök`. A formátum: **X**d **X**h **X**m **X**s, X helyére rakj egy számot. (Példa: 0d 0h 2m 59s)', msg => {
                        if (msg.content.toLowerCase() === "örök") return true;

                        return !!timeRegex.exec(msg.content);
                    }).then(msg => {
                        if (msg.content.toLowerCase() !== "örök") {
                            const times = timeRegex.exec(msg.content).slice(1, 5).map(t => t ? t : 0);
                            let totalMs = 0;

                            totalMs += +times[0] * 86400000;
                            totalMs += +times[1] * 3600000;
                            totalMs += +times[2] * 60000;
                            totalMs += +times[3] * 1000;

                            poll.time = totalMs > 0 ? totalMs : null;
                        }

                        prompt(':thinking: Szeretnéd hogy a felhasználók tudjanak többszőr szavazni? `igen` vagy `nem`.', msg => {
                            if (msg.content.toLowerCase() === "igen" || msg.content.toLowerCase() === "nem") return true;

                            return false;
                        }).then(msg => {
                            if (msg.content.toLowerCase() === "nem") poll.blockMultiples = false;

                            finalizePoll();
                        });
                    });
                };

                const promptAnswer = () => {
                    const numberName = numberToString(poll.answers.length + 1);

                    const promptText = () => {
                        prompt(`Írj egy szöveget ${numberName} válaszra.`).then(msg => {

                            poll.answers.push(msg.content);

                            if (poll.answers.length < 50) promptAnswer();
                            else {
                                promptTime();
                            }
                        });
                    };

                    prompt(`Írj egy emojit a ${numberName} kérdéshez${poll.answers.length < 10 ? `${poll.answers.length < 2 ? ", or" : ","}. Írd \`nincs\` hogyha nem akarsz emojit a válaszodba.` : ""}${poll.answers.length > 1 ? ", vagy írd `kész` ha készen állsz a szavazásra." : ""}`, msg => {
                        if (msg.content.toLowerCase() === "nincs" && poll.answers.length < 10) {
                            poll.emojis.push(reactions[poll.emojis.length]);

                            return true;
                        }
                        if (poll.answers.length > 1 && msg.content.toLowerCase() === "kész") return true;

                        const emojiRegex = /^<a?:[^:]+:(\d{17,19})>$/;
                        const unicodeRegex = bot.rq('./utils/emojiRegex.js');
                        const exec = emojiRegex.exec(msg.content);
                        const execUnicode = unicodeRegex.exec(msg.content);

                        if (exec && bot.client.emojis.get(exec[1]) && poll.emojis.indexOf(exec[1]) === -1) {
                            poll.emojis.push(exec[1]);

                            return true;
                        }
                        else if (execUnicode && poll.emojis.indexOf(execUnicode[1]) === -1) {
                            poll.emojis.push(execUnicode[1]);

                            return true;
                        }

                        return false;
                    }).then(msg => {
                        if (msg.content.toLowerCase() === "kész") return promptTime();

                        promptText();
                    });
                };

                promptAnswer();
            });
        }).catch(() => {
            m.channel.send(":x: Nem tudom elküldeni privátban. Ellenőrzid hogy nem vagyok-e blokkolva, vagy eltiltva a dm küldése.");
        });
    }
};