const { Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const version = process.env.npm_package_version;
module.exports = (client) => {
	client.handleVideo = async function handleVideo(video, msg, voiceChannel, playlist = false) {
	const serverQueue = client.queue.get(msg.guild.id);
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
      volume: 40,
      loop: false,
	  playing: true
		};
      client.queue.set(msg.guild.id, queueConstruct);
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
		console.log(serverQueue.songs);
		if (playlist) return undefined;
		else return serverQueue.textChannel.send(`<:success:543851339696963584> Enqueued **\`${song.title}\`** (**${require('./util.js').timeString(song.durationmm)}**).`);
	}
	return undefined;
}

	function play(guild, song) {
  const serverQueue = client.queue.get(guild.id);

  if (!song) {
    serverQueue.voiceChannel.leave();
    client.queue.delete(guild.id);
    return undefined;
  }
  console.log(serverQueue.songs);
  //quality:"highest",
	const dispatcher = serverQueue.connection.play(ytdl(song.url), {filter: 'audioonly', seek: 0, highWaterMark: 50})
		.on('finish', reason => {
        if (serverQueue.loop) {
         serverQueue.textChannel.send(`Replaying **\`${song.title}\`** (**${require('./util.js').timeString(song.durationmm)}**) at position **\`now\`**.`).then(msg => {
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
    console.error(error);
    serverQueue.songs.shift();
     play(guild, serverQueue.songs[0]);
  });
  console.log(serverQueue)
  	dispatcher.setVolumeLogarithmic(serverQueue.volume / 100);
	                  const emb = new Discord.MessageEmbed()
					  .setDescription(`**[${song.title}](${song.url})**`, true)
					  .addField('Uploader', `[${song.uploaded}](${song.channel})`, true)
					  .addField('Duration', `${require('./util.js').timeString(song.durationmm)}`, true)
					  .addField('Requester', `${song.authors.username}`)
					  .addField('Position', `Now`, true)
					  .addField(`Video ID`, `${song.id}`, true)
					  .addField(`Voice Channel`, `${song.voicechan}`, true)
					  .setImage(`https://i.ytimg.com/vi/${song.id}/maxresdefault.jpg`, true)
                      .setColor(`#8284f4`)
                      .setFooter(`© ${message.author.username} ${version}`, client.user.displayAvatarURL)
 //if (!serverQueue.loop) return serverQueue.textChannel.send(`Now playing **\`${song.title}\`** (**${require('./util.js').timeString(song.durationmm)}**) at position **\`now\`**.`);
 if (!serverQueue.loop) return serverQueue.textChannel.send(emb);
};
}
