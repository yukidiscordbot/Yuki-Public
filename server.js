const { Client, Util } = require('discord.js');
const { PREFIX, GOOGLE_API_KEY } = require('./config');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const talkedRecently = new Set();
const Discord = require('discord.js');
const client = new Discord.Client({ disableEveryone: true });
const youtube = new YouTube(GOOGLE_API_KEY);
const queue = new Map();

//massive amount of client events
client.on('error', console.error);
client.on('disconnect', () => console.log('[Discord] [Error] Disconnected.'));
client.on('reconnecting', () => console.log('[Discord] Reconnecting.'));
client.on('ready', async () => {
  console.log('[Discord] [Success] Connected.')
  });

client.on('message', async msg => {
	if(msg.author.bot) return;
	if (!msg.content.startsWith(PREFIX)) return;

  const messageArray = msg.content.split(" ");
  const args = msg.content.slice('y!').trim().split(' ');
  const searchString = messageArray.slice(1).join(' ');
  const url = args[1] ? args[1].replace(/<(.+)>/g, '$1') : '';
  let sender = msg.author;
	const serverQueue = queue.get(msg.guild.id);
if(!msg.guild.id) return queue.delete(msg.guild.id);

	let command = msg.content.toLowerCase().split(' ')[0];
	command = command.slice(PREFIX.length)

  //this is not HOW command handling should be lol
  if (command === 'shuffle') {
                                  if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
    		if (!serverQueue) return msg.channel.send('<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!');

    let songs = serverQueue.songs;
    for (let i = songs.length - 1; i > 1; i--) {
      let j = 1 + Math.floor(Math.random() * (i));
      [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    if (!serverQueue.songs == 0) return msg.channel.send('<:error:543851339713609745> There is no song on the queue to shuffle. Please add songs to the queue to shuffle.')
    serverQueue.songs = songs;
    queue.set(msg.guild.id, queue);
    serverQueue.textChannel.send(`<:success:543851339696963584> Successfully shuffled the music queue.`)
} else if (command === 'loop') {
    if (!serverQueue) return msg.channel.send("<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!")

    serverQueue.loop = !serverQueue.loop;
    return msg.channel.send(`<:success:543851339696963584> Repeating the song queue is now has been set to ${serverQueue.loop ? "**`on`**" : "**`off`**"}!`)
   } else if (command === 'leave' || command === 'l' || command === 'disconnect' || command == 'dc') {
                              if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
        if(msg.author.bot) return;
                  		const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) return msg.channel.send(`<:error:543851339713609745> You need to be in a voice channel first!`);
		msg.guild.me.voice.channel.leave();
      		if (!msg.member.voice.channel) return msg.channel.send('<:error:543851339713609745> You need to be in a voice channel first!');
    msg.channel.send(`<:success:543851339696963584> Leaving **\`${msg.member.voice.channel.name}\`** and unbounded from **\`${msg.channel.name}\`**.`)
  }
        if (command === 'join' || command === 'j' || command === 'summon') {
                              if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
                if(msg.author.bot) return;
                  		const voiceChannel = msg.member.voice.channel;
        if (!voiceChannel) return msg.channel.send(`<:error:543851339713609745> You need to be in a voice channel first!`);
		msg.member.voice.channel.join();
      		if (!msg.member.voice.channel) return msg.channel.send('<:error:543851339713609745> You need to be in a voice channel first!');
       if (msg.member.voice.channel == msg.guild.me.voice.channel) return msg.channel.send('<:error:543851339713609745> I\'m already in that voice channel. Try **summon** me in a other voice channel.');
    msg.channel.send(`<:success:543851339696963584> Joined to **\`${msg.member.voice.channel.name}\`** and bound to **\`${msg.channel.name}\`**.`)
                  		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send(`<:error:543851339713609745> Cannot join to **\`${msg.member.voice.channel.name}\`** voice channel. Be sure you have **\`CONNECT\`** permission putted on me.`);
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send(`<:error:543851339713609745> Cannot speak in **\`${msg.member.voice.channel.name}\`** voice channel. Be sure you have **\`SPEAK\`** permission putted on me.`);
		}
   } else if (command === 'play') {
                                   if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
		const voiceChannel = msg.member.voice.channel;
		if (!voiceChannel) return msg.channel.send('<:error:543851339713609745> You need to be in a voice channel first!');
   if (!args[1]) return msg.channel.send(`<:error:543851339713609745> Please specify a video **URL** or **name** to being playing.`)
     if(msg.member.deaf == true) return msg.channel.send(`<:error:543851339713609745> Please undeaf yourself to add songs to queue.`)
		const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send(`<:error:543851339713609745> I cannot join into the **\`${msg.member.voice.channel.name}\`** voice channel because i am missing the **\`CONNECT\`** permission.`);
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send(`<:error:543851339713609745> I cannot speak in **\`${msg.member.voice.channel.name}\`** voice channel. Be sure you have **\`SPEAK\`** permission on me in this voice channel.`);
		}

		if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
			const playlist = await youtube.getPlaylist(url);
			const videos = await playlist.getVideos();
			for (const video of Object.values(videos)) {
				const video2 = await youtube.getVideoByID(video.id);
				await handleVideo(video2, msg, voiceChannel, true);
			}
			return msg.channel.send(`<:success:543851339696963584> **${playlist.title}** playlist has been added to the music queue.`);
		} else {
			try {
				var video = await youtube.getVideo(url);
			} catch (error) {
				try {
					var videos = await youtube.searchVideos(searchString, 10);
          if (videos.length === 0) return msg.channel.send(`<:error:543851339713609745> No video was found with this query.`);
					let index = 0;
                  const emb = new Discord.MessageEmbed()
                  .setDescription(`Pick an option below to enqueue it. \`\`\`prolog\n${videos.map(video2 => ` ${++index} : ${video2.title.replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&lt;/g, '<')
            .replace(/&quot;/g, '"')
            .replace(/&OElig;/g, 'Œ')
            .replace(/&oelig;/g, 'œ')
            .replace(/&Scaron;/g, 'Š')
            .replace(/&scaron;/g, 'š')
            .replace(/&Yuml;/g, 'Ÿ')
            .replace(/&circ;/g, 'ˆ')
            .replace(/&tilde;/g, '˜')
            .replace(/&ndash;/g, '–')
            .replace(/&mdash;/g, '—')
            .replace(/&lsquo;/g, '‘')
            .replace(/&rsquo;/g, '’')
            .replace(/&sbquo;/g, '‚')
            .replace(/&ldquo;/g, '“')
            .replace(/&rdquo;/g, '”')
            .replace(/&bdquo;/g, '„')
            .replace(/&dagger;/g, '†')
            .replace(/&Dagger;/g, '‡')
            .replace(/&permil;/g, '‰')
            .replace(/&lsaquo;/g, '‹')
            .replace(/&rsaquo;/g, '›')
            .replace(/&euro;/g, '€')
            .replace(/&copy;/g, '©')
            .replace(/&trade;/g, '™')
            .replace(/&reg;/g, '®')
            .replace(/&nbsp;/g, ' ')
			.replace(/&#39;/g, '\'')}`).join('\n')}\`\`\``)
                  .setColor(`RANDOM`)
              .setFooter(`© Yuki Beta V7.5.2`, client.user.displayAvatarURL())

					msg.channel.send(emb);
					try {
						var response = await msg.channel.awaitMessages(msg2 => msg2.content > 0 && msg2.content < 11, {
							max: 1,
							time: 10000,
							errors: ['time']
						});
					} catch (err) {
						console.error(err);
						return msg.channel.send('<:error:543851339713609745> Cancelled the operation due no more time left.');
					}
					const videoIndex = parseInt(response.first().content, 10);
					var video = await youtube.getVideoByID(videos[videoIndex - 1].id);
				} catch (err) {
					console.error(err);
					return msg.channel.send('<:error:543851339713609745> Could not obtain any search results.');
				}
			}
		    handleVideo(video, msg, voiceChannel, false);
    }
   }
         if (command === "search") {
                                              if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }
		const voiceChannel = msg.member.voice.channel;
		if (!voiceChannel) return msg.channel.send('<:error:543851339713609745> You need to be in a voice channel first!');
                                 if (!args[1]) return msg.channel.send("<:error:543851339713609745> Specify a video name or search term.");
        const permissions = voiceChannel.permissionsFor(msg.client.user);
		if (!permissions.has('CONNECT')) {
			return msg.channel.send(`<:error:543851339713609745> I cannot join to **\`${msg.member.voice.channel.name}\`** voice channel because i miss the **\`CONNECT\`** permission.`);
		}
		if (!permissions.has('SPEAK')) {
			return msg.channel.send(`<:error:543851339713609745> I cannot speak in **\`${msg.member.voice.channel.name}\`** voice channel because i have a missing **\`SPEAK\`** permission.`);
		}
        if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
            const playlist = await youtube.getPlaylist(url);
            const videos = await playlist.getVideos();
            for (const video of Object.values(videos)) {
                const video2 = await youtube.getVideoByID(video.id);
                await handleVideo(video2, msg, voiceChannel, true);
            }
            return msg.channel.send(`<:success:543851339696963584> **${playlist.title}** playlist was added to the queue.`);
        } else {
            try {
                var video = await youtube.getVideo(url);
            } catch (error) {
                try {
                    var videos = await youtube.searchVideos(searchString, 1);
					if (videos.length === 0) return msg.channel.send(`<:error:543851339713609745> No video was found with this query.`);
                    let index = 0;
                    msg.channel.send(`<:youtube2:868547328431239229> **Searching** for :mag_right: \`${args[1]}\``)
                    // eslint-disable-next-line max-depth
                    
                    var video = await youtube.getVideoByID(videos[0].id);
  				} catch (err) {
					console.error(err);
					return msg.channel.send('<:error:543851339713609745> Could not obtain any search results.');
                }
            }
            return handleVideo(video, msg, voiceChannel);
        }
             }  else if (command === 'clearqueue' || command === 'cq') {
     //  if(msg.member.roles.some(r=>["DJ"].includes(r.name)) ) {
                                      if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
       if(msg.member.roles.cache.some(role => role.name === 'DJ')){ 
   if (!args.length) return msg.channel.send(`<:error:543851339713609745> Specify a number do you want to remove from the queue.`);
		if (!serverQueue) return msg.channel.send('<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!');

    serverQueue.songs = serverQueue.songs.slice(args[0] - 2);
    serverQueue.connection.dispatcher.end();
    serverQueue.textChannel.send(`<:success:543851339696963584> Skipped **${args[0] - 1}** songs in the music queue.`);
     } else {
 if (!serverQueue) return msg.channel.send('<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!');
 msg.channel.send('<:error:543851339713609745> You cannot use this command because you aren\'t have the **DJ** role.');
	   }
	} else if (command === 'skip') {
                              if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
  					if (!msg.member.voice.channel) return msg.channel.send('<:error:543851339713609745> You need to be in a voice channel first!');
		if (!serverQueue) return msg.channel.send('<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!');
            if(serverQueue.connection.dispatcher){
                msg.channel.send(`<:success:543851339696963584> Skipped **\`${serverQueue.songs[0].title}\`**.`)
				serverQueue.playing = true;
                serverQueue.connection.dispatcher.end();
      /*     if(msg.member.roles.cache.some(role => role.name === 'DJ')){ 
            let voters = []
      //      let allowedRole = msg.guild.roles.find("name", "DJ");
//if(msg.member.roles.some(r=>["DJ"].includes(r.name)) ) {
		if (!msg.member.voice.channel) return msg.channel.send('<:error:543851339713609745> You need to be in a voice channel first!');
		if (!serverQueue) return msg.channel.send('<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!');
		serverQueue.connection.dispatcher.destroy('Skip command has been used!');
    msg.channel.send(`<:success:543851339696963584> Skipped forcefully.`)
		return;
 }
       		if (!serverQueue) return msg.channel.send('<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!');
        let voters = []

        if(voters.find(id=>id == msg.author.id))
            return;

        voters.push(msg.author.id)

        if(voters.length != 5) {
           return msg.channel.send(`**${5-voters.length}** more vote(s) required to be passed to skip this.`) // sends the message saying how many more votes to skip the song
       } else if(voters.length === 5){
            voters = []*/
            }
	} else if (command === 'stop') {
                                      if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
		if (!msg.member.voice.channel) return msg.channel.send('<:error:543851339713609745> You need to be in a voice channel first!');
		if (!serverQueue) return msg.channel.send('<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!');
    if (serverQueue.loop) return msg.channel.send('<:error:543851339713609745> You cannot use the **stop** command while the looping enabled on this server.')
		serverQueue.songs = [];
		serverQueue.connection.dispatcher.end('Stop command has been used!');
    msg.channel.send(`<:success:543851339696963584> Stopped the current song and cleared the music queue.`)
		return undefined;
	} else if (command === 'volume' || command === 'vol') {
                                      if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
		if (!msg.member.voice.channel) return msg.channel.send('<:error:543851339713609745> You need to be in a voice channel first!');
		if (!serverQueue) return msg.channel.send('<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!');
		if (!messageArray[1]) return msg.channel.send(`<:error:543851339713609745> Please specify a number value you want to change the volume to. Current Volume is **${serverQueue.volume}**%.`);
		serverQueue.volume = messageArray[1];
    if (messageArray[1] > 100) return msg.channel.send(`<:success:543851339696963584> You cannot set the volume more then this amount you provided.`);
	//EXPLOIT PATCH
	if(isNaN(messageArray[1])) return msg.channel.send("<:error:543851339713609745> You cannot set my volume to a character!");
    serverQueue.volume = messageArray[1];
		if (messageArray[1] > 100) return !serverQueue.connection.dispatcher.setVolumeLogarithmic(messageArray[1] / 100) + msg.channel.send('<:success:543851339696963584> You cannot set the volume more then this amount you provided.')
           if (msg.content.includes('-' || "." || "!")) return msg.channel.send('<:error:543851339713609745> You cannot set my volume to a character!')

    if (messageArray[1] < 106) return serverQueue.connection.dispatcher.setVolumeLogarithmic(messageArray[1] / 100) + msg.channel.send(`<:success:543851339696963584> My playing volume has been set to **${messageArray[1]}**%.`);
        }  else if (command === 'queueclear') {
     //  if(msg.member.roles.some(r=>["DJ"].includes(r.name)) ) {
                                      if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
		if (!msg.member.voice.channel) return msg.channel.send('<:error:543851339713609745> You need to be in a voice channel first!');
		if (!serverQueue) return msg.channel.send('<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!');
          //         } else {
     //  msg.channel.send("<:error:558855135053348904> You cannot use this command because this command locked to **DJ** role only.")

    serverQueue.songs = [];
    return msg.channel.send(`<:success:543851339696963584> Successfully cleared the queue.`);
    msg.member.voice.channel.leave();
	} else if (command === 'np') {
                                      if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
		if (!serverQueue) return msg.channel.send('<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!');
		let embed = new Discord.MessageEmbed()
		.setColor(`RANDOM`)
            .setFooter(`© Yuki Beta V7.5.2 | ${serverQueue.songs.length} songs`, client.user.displayAvatarURL())
		.addField(`Now Playing`, `${serverQueue.songs[0].title}`)
		.setDescription(`Playing **${Math.floor(serverQueue.connection.dispatcher.streamTime / 60000)}:${Math.floor((serverQueue.connection.dispatcher.streamTime % 60000)/1000) <10 ? '0'+Math.floor((serverQueue.connection.dispatcher.streamTime % 60000)/1000) : Math.floor((serverQueue.connection.dispatcher.streamTime % 60000)/1000)}** of **${require('./util.js').timeString(serverQueue.songs[0].durationmm)}**.`)
		return msg.channel.send(embed);
	} else if (command === 'queue') {
                              if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
        let index = 0;
		if (!serverQueue) return msg.channel.send(`<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!`);
          let queueEmbed = new Discord.MessageEmbed()
          .setColor(`RANDOM`)
          .addField(`Now Playing`, `${serverQueue.songs[0].title}`)
          .addField(`Up Next`, `${serverQueue.songs.slice(0, 10).map((song) => `\`-\` [${song.title}](${song.url})`).join('\n')}`)
.setFooter(`© Yuki V7.05 | ${serverQueue.songs.length} songs`, client.user.displayAvatarURL())

    const message = await msg.channel.send({
      embed: queueEmbed
    });

    if (serverQueue.songs.length > 5) {
      const reaction1 = await message.react('◀');
      const reaction2 = await message.react('▶');

      let first = 0;
      let second = 5;

      const collector = message.createReactionCollector((reaction, user) => user.id === msg.author.id, {
        time: 120000
      });
      collector.on('collect', (r) => {
        const reactionadd = serverQueue.songs.slice(first + 5, second + 5).length;
        const reactionremove = serverQueue.songs.slice(first - 5, second - 5).length;

        if (r.emoji.name === '▶' && reactionadd !== 0) {
          //r.remove(msg.author.id);

          first += 5;
          second += 5;

          const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setFooter(`© Yuki Beta V7.5.2 | ${serverQueue.songs.length} songs`, client.user.displayAvatarURL())

          .addField(`Now Playing`, `${serverQueue.songs[0].title}`)
          newEmbed.addField(`Up Next`, `${serverQueue.songs.slice(first, second).map((song) => `\`-\` [${song.title}](${song.url})`).join('\n')}`);

          message.edit({
            embed: newEmbed
          });
        }
        else if (r.emoji.name === '◀' && reactionremove !== 0) {
          //r.remove(msg.author.id);

          first -= 5;
          second -= 5;

          const newEmbed = new Discord.MessageEmbed()
            .setColor('RANDOM')
            .setFooter(`© Yuki Beta V7.5.2 | ${serverQueue.songs.length} songs`, client.user.displayAvatarURL())

          .addField(`Now Playing`, `${serverQueue.songs[0].title}`)
          newEmbed.addField(`Up Next`, `${serverQueue.songs.slice(first, second).map((song) => `\`-\` [${song.title}](${song.url})`).join('\n')}`);

          message.edit({
            embed: newEmbed
          });
        }
      });
      collector.on('end', () => {
        if (collector && !collector.ended) collector.stop();
        message.reactions.removeAll().catch(error => console.error('Failed to clear reactions due to an error: ', error));
        //message.clearReactions();
        //reaction1.reactions.remove();
        //reaction2.reactions.remove();
        //reaction1.users.remove();
        //reaction2.users.remove();
      });
    }
	} else if (command === 'pause') {
                                  if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
		if (serverQueue && serverQueue.playing) {
			serverQueue.playing = false;
			serverQueue.connection.dispatcher.pause(true);
			return msg.channel.send(`<:success:543851339696963584> Paused **\`${serverQueue.songs[0].title}\`**.`);
		}
		return msg.channel.send('<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!');
	} else if (command === 'resume') {
                                  if (talkedRecently.has(msg.author.id)) {
    msg.channel.send(`<:slowmode:712734033205002292> You are currently using this command too fast~! Please wait **\`5\`** seconds to use this command again.`);
    return;
  }

  talkedRecently.add(msg.author.id);
  setTimeout(() => {
    talkedRecently.delete(msg.author.id);
  }, 1000);
		if (serverQueue && !serverQueue.playing) {
			serverQueue.playing = true;
			serverQueue.connection.dispatcher.resume();
			return msg.channel.send(`<:success:543851339696963584> Resumed **\`${serverQueue.songs[0].title}\`**.`);
		}
		return msg.channel.send('<:error:543851339713609745> No song was found on the queue. Add one song to the queue to continue!');
	}

	return undefined;
});

async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = queue.get(msg.guild.id);
	const song = {
		id: video.id,
		title: Util.escapeMarkdown(video.title.replace(/&amp;/g, '&').replace(/&gt;/g, '>').replace(/&lt;/g, '<')
          .replace(/&quot;/g, '"')
          .replace(/&OElig;/g, 'Œ')
          .replace(/&oelig;/g, 'œ')
          .replace(/&Scaron;/g, 'Š')
          .replace(/&scaron;/g, 'š')
          .replace(/&Yuml;/g, 'Ÿ')
          .replace(/&circ;/g, 'ˆ')
          .replace(/&tilde;/g, '˜')
          .replace(/&ndash;/g, '–')
          .replace(/&mdash;/g, '—')
          .replace(/&lsquo;/g, '‘')
          .replace(/&rsquo;/g, '’')
          .replace(/&sbquo;/g, ',')
          .replace(/&ldquo;/g, '“')
          .replace(/&rdquo;/g, '”')
          .replace(/&bdquo;/g, '„')
          .replace(/&dagger;/g, '†')
          .replace(/&Dagger;/g, '‡')
          .replace(/&permil;/g, '‰')
          .replace(/&lsaquo;/g, '‹')
          .replace(/&rsaquo;/g, '›')
          .replace(/&euro;/g, '€')
          .replace(/&copy;/g, '©')
          .replace(/&trade;/g, '™')
          .replace(/&reg;/g, '®')
          .replace(/&nbsp;/g, ' ')),
    uploaded: video.channel.title,
    authors: msg.author,
    voicechan: msg.member.voice.channel.name,
    durationmm: video.durationSeconds ? video.durationSeconds : video.duration / 1000,
    channel: `https://www.youtube.com/channel/${video.channel.id}`,
		url: `https://www.youtube.com/watch?v=${video.id}`,
    durationh: video.duration.hours,
    durationm: video.duration.minutes,
    durations: video.duration.seconds,
    duration: video.duration
	};
	if (!serverQueue) {
		const queueConstruct = {
      user: msg.author,
			textChannel: msg.channel,
			voiceChannel: voiceChannel,
			connection: null,
			songs: [],
      volume: 30,
      loop: false,
	  playing: true
		};
      queue.set(msg.guild.id, queueConstruct);
        queueConstruct.songs.push(song);

		try {
			var connection = await voiceChannel.join();
			//console.log(client.ws)
           // client.ws.send({
           // op: 4,
          // d: {
          //     guild_id: msg.guild.id,
          //     channel_id: msg.guild.me.voice.channelID,
          //      self_mute: false,
          // self_deaf: true
          //  }
         //   });
		    connection.voice.setSelfDeaf(true);
			queueConstruct.connection = connection;
			play(msg.guild, queueConstruct.songs[0]);
		} catch (error) {
			queue.delete(msg.guild.id);
			return console.error(`${error}`);
		}
	} else {
		serverQueue.songs.push(song);
		//console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return serverQueue.textChannel.send(`<:success:543851339696963584> Enqueued **\`${song.title}\`** (**${require('./util.js').timeString(song.durationmm)}**).`);
	}
	//return undefined;
}

	function play(guild, song) {
  const serverQueue = queue.get(guild.id);
 
    /*questionable code here?*/
    //this is what it causing the problems here?
  if (!song) {
    
if(serverQueue.connection.dispatcher && guild.me.voice.channel) return;
    //serverQueue.voiceChannel.leave();
    guild.me.voice.channel.leave();
serverQueue.textChannel.send('<:success:543851339696963584> Finished playing queue, so i will leave your voice channel. To summon me back just add an other song to the queue or type **y!join**!').catch(console.error)
    queue.delete(guild.id);
    return undefined;
  }
	const dispatcher = serverQueue.connection.play(ytdl(song.url), {filter: 'audioonly', seek: 0, quality:"highest", highWaterMark: 50})
		.on("finish", reason => {
if (reason === "Stream is not generating quickly enough.") console.log("Reason: Stream is not generating quickly enough.")
else console.log('Reason:', reason)
        if (serverQueue.loop) {
         serverQueue.textChannel.send(`Started playing **\`${song.title}\`** (**${require('./util.js').timeString(song.durationmm)}**).`).then(msg => {
      msg.delete(10000)
         })
          let lastSong = serverQueue.songs.shift();
          serverQueue.songs.push(lastSong);
          play(guild, serverQueue.songs[0]);
        } else {
			serverQueue.songs.shift();
			play(guild, serverQueue.songs[0]);
      }
    })
		.on('error', error => {
console.log(song.id)
    console.log(error);
    serverQueue.songs.shift();
		 let ec = Math.round(Math.random() * 1069);
      	serverQueue.textChannel.send(`<:error:543851339713609745> An error has occurred. Please report this to our support server if the error still continues. (E-**${ec}**)\n\`\`\`${error}\`\`\``).catch()
     play(guild, serverQueue.songs[0]);
  });
  	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
	                  const emb = new Discord.MessageEmbed()
                    .setTitle('Now Playing')
					  .setDescription(`[${song.title}](${song.url})`, true)
					  .setImage(`https://i.ytimg.com/vi/${song.id}/maxresdefault.jpg`, true)
                      .setColor(`RANDOM`)
              .setFooter(`© Yuki Beta V7.5.2`, client.user.displayAvatarURL())
 if (!serverQueue.loop) return serverQueue.textChannel.send(`[${song.title}](${song.url})`);
 //if (!serverQueue.loop) return serverQueue.textChannel.send(emb);
};
;
client.login('token').catch(console.error);
