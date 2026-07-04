const { Client, GatewayIntentBits, EmbedBuilder } = require("discord.js");
require("dotenv").config();

const client = new Client({
  intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMembers],
});

client.once("ready", () => {
  console.log(
    `aurora está brilhando no stargazing! conectada como ${client.user.tag}`,
  );
});

// evento de entrada
client.on("guildMemberAdd", (member) => {
  const channel = member.guild.channels.cache.get("1522778511692140575");
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setColor("#ffffff")
    .setTitle("nova estrela no stargazing ✧")
    .setDescription(
      `seja muito bem-vindo(a), ${member}! que bom ter você aqui conosco. 🌟`,
    )
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addFields({
      name: "membros totais",
      value: `${member.guild.memberCount} 🌠`,
      inline: true,
    })
    .setFooter({ text: "stargazing" })
    .setTimestamp();

  channel.send({ embeds: [embed] });
});

// evento de saída
client.on("guildMemberRemove", (member) => {
  const channel = member.guild.channels.cache.get("1522818329226772540");
  if (!channel) return;

  const embed = new EmbedBuilder()
    .setColor("#ffffff")
    .setTitle("uma estrela se distanciou ✧")
    .setDescription(
      `${member.user.tag} partiu para outra constelação. sentiremos sua falta! 🌟`,
    )
    .setThumbnail(member.user.displayAvatarURL({ dynamic: true }))
    .addFields({
      name: "membros restantes",
      value: `${member.guild.memberCount} 🌠`,
      inline: true,
    })
    .setFooter({ text: "stargazing" })
    .setTimestamp();

  channel.send({ embeds: [embed] });
});

const http = require('http');
http.createServer((req, res) => {
    res.write("aurora esta brilhando!");
    res.end();
}).listen(process.env.PORT || 3000);

client.login(process.env.TOKEN);
