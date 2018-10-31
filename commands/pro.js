module.exports = class {
    constructor() {
        this.help = {
            category: ":checkered_flag: Speciális",
            description: "Megveszed a PRO verziót?"
        };
    }

    run(bot, m, args) {
        return m.channel.send(`:white_check_mark: :warning: **Mostmár** ingyenesen elérhető!\n https://discordapp.com/api/oauth2/authorize?client_id=490495382472753153&permissions=519248&redirect_uri=https%3A%2F%2Fsplitxdiscordbots.weebly.com&response_type=code&scope=bot%20messages.read`);
    }
};