const config = {
  prefix: ["y!"],
  googleAPIToken: ['apikeytoken'],
  blacklist: [],

  defaultSettings: {
    verifyChannel: 'verify',
    verifyEnable: 'false',
    greetingEnable: 'false',
    autoRole: 'Member',
    verifiedRole: 'Verified',
    unverifiedRole: 'Unverified',
    LogChannel: 'logs',
    leaveChannel: 'general',
    welcomeMessage: 'Welcome %username%!',
    leaveMessage: 'Goodbye %username%!',
    modLogChannel: 'mod-logs',
    modRole: 'Moderator',
    adminRole: 'Administrator',
    muteRole: 'Muted',
    disableModCommands: 'false',
    disableEconomy: 'false',
    welcomeChannel: 'general',
    levelEnable: 'false',
    levelChannel: 'levelup',
	  joinGate: '0',
    logEvents: 'true',
    censor: '0',
	  warnLimit: '3',
    noPhishing: '0'
	},
	
  permLevels: [
    {
      level: 0,
      name: "Blacklisted",

      check: () => true,
    },

    {
      level: 1,
      name: "User",

      check: (message) =>
        !config.blacklisted.includes(message.author.id),
    },

    {
      level: 2,
      name: "Moderator",

      check: (message) => {
        try {
          const modRole = message.guild.roles.find((r) => r.name.toLowerCase() === client.getSettings(message.guild.id).modRole.toLowerCase());
          if ((modRole && message.member.roles.cache.has(modRole.id)) || message.member.hasPermission("MANAGE_MESSAGES")) return true;
        } catch (e) {
          return false;
        }
      },
    },

    {
      level: 3,
      name: "Administrator",

      check: (message) => {
        try {
          const adminRole = message.guild.roles.find((r) => r.name.toLowerCase() === client.getSettings(message.guild.id).adminRole.toLowerCase());
          if (message.member.roles.cache.has(adminRole.id) || message.member.hasPermission("ADMINISTRATOR")) return true;
        } catch (e) {
          return false;
        }
      },
    },

    {
      level: 4,
      name: "Server Owner",

      check: (message) =>
        message.channel.type === "text" ? message.guild.ownerID === message.author.id : false,
    },
  ],
};
