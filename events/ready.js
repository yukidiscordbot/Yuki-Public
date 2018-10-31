module.exports = class {
    run(bot) {
        console.log(`Csatlakozva mint ${bot.client.user.tag} felhasználó.`);

        bot.setActivity();

        if (!bot.timedPollInterval) {
            bot.startTimedPollInterval();
        }
    }
};