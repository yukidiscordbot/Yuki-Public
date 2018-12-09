module.exports = class {
    run(bot) {
        console.log(`Bot started as ${bot.client.user.tag} user!`);

        bot.setActivity();

        if (!bot.timedPollInterval) {
            bot.startTimedPollInterval();
        }
    }
};