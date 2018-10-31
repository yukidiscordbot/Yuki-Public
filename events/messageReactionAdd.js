module.exports = class {
    async run(bot, reaction, user) {
        const m = reaction.message;

        if (m.author.id !== bot.client.user.id) return;
        if (user.id === bot.client.user.id) return;
        const messageRow = await bot.db.get('SELECT emojis FROM polls WHERE messageId=? AND blockMultiples="true"', m.id);

        if (!messageRow) return;

        const promises = [];

        const subtractOne = id => {
            if (/^[1-9]$/.exec(id.slice(-1))) return `${id.slice(0, -1)}${(+id.slice(-1)) - 1}`;
            else return `${subtractOne(id.slice(0, -1))}9`;
        };

        const addOne = id => {
            if (/^[0-8]$/.exec(id.slice(-1))) return `${id.slice(0, -1)}${(+id.slice(-1)) + 1}`;
            else return `${addOne(id.slice(0, -1))}0`;
        };

        const subtractedOne = subtractOne(user.id);
        const addedOne = addOne(user.id);

        const emojis = JSON.parse(messageRow.emojis);
        const botReactions = m.reactions.filter(r => emojis.indexOf(r.emoji.url ? r.emoji.id : r.emoji.name) !== -1);

        botReactions.forEach(r => promises.push(r.users.fetch({ before: addedOne, after: subtractedOne, limit: 1 })));

        Promise.all(promises).then(() => {
            const userAmount = botReactions.filter(r => r.users.get(user.id)).size;

            if (userAmount < 2) return;

            reaction.users.remove(user).catch(() => { });
        });
    }
};