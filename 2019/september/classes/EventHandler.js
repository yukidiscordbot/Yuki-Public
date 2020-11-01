const fs = require('fs');
const Discord = require('discord.js');
exports.EventHandler = class EventHandler {
    constructor(bot) {
        this.bot = bot;

        this.initEvents();

        // Needed to receive the raw event
        this.bot.client.on('raw', () => { });
    }

    initEvents() {
        const oldEmit = this.bot.client.emit.bind(this.bot.client);

        this.bot.client.emit = (eventName, ...args) => {
            this.handleEvent(eventName, args);

            oldEmit(eventName, ...args);
        };
    }

    handleEvent(eventName, args) {
        const lcEvent = eventName.toLowerCase();
        const events = fs.readdirSync('./events').filter(e => e.endsWith('.js')).map(e => e.slice(0, -3));
        const lcEvents = events.map(e => e.toLowerCase());
        const index = lcEvents.indexOf(lcEvent);

        if (index === -1) return;

        const eventPath = `./events/${events[index]}.js`;

        try {
            const eventModule = this.bot.rq(eventPath);
            const eventInstance = new eventModule();

            eventInstance.run(this.bot, ...args);
        }
        catch (e) {
            console.error(e);
        }
    }
};