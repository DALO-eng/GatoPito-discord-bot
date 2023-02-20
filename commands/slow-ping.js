const { SlashCommandBuilder } = require("discord.js");
const wait = require("node:timers/promises").setTimeout;

module.exports = {
  data: new SlashCommandBuilder()
    .setName("slowping")
    .setDescription("Gato pito replies with pong!"),
  async execute(interaction) {
    await interaction.deferReply();
    await wait(4000);
    await interaction.editReply({ content: "Pong! :D", ephemeral: false });
  },
};
