module.exports = class {
    run(bot, event) {
        if (event.t !== 'MESSAGE_REACTION_ADD') return;

        const data = event.d;
        const channel = bot.client.channels.get(data.channel_id);

        if (!channel) return;
        if (channel.messages.has(data.message_id)) return;

        const user = bot.client.users.get(data.user_id);

        channel.messages.fetch(data.message_id).then(async m => {
            const messageRow = await bot.db.get('SELECT blockMultiples FROM polls WHERE messageId=? AND blockMultiples="true"', m.id);
            if (!messageRow) return;

            const emojiKey = data.emoji.id ? data.emoji.id : data.emoji.name;
            const reaction = m.reactions.get(emojiKey);
            const promises = [];

            if (!user) promises.push(bot.client.users.fetch(data.user_id, false).then(u => user = u));

            Promise.all(promises).then(() => {
                bot.client.emit('messageReactionAdd', reaction, user);
            });
        });
    }
};