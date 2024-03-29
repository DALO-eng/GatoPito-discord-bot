const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Gato pito replies with pong!"),
  async execute(interaction) {
    await interaction.reply("Pong! :D");
    await wait(2000);
    await interaction.editReply("Pong again!");
  },
};
