const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("doubleping")
    .setDescription("Gato pito replies with pong!"),
  async execute(interaction) {
    await interaction.reply("Pong! :D");
    await interaction.followUp("Double Pong!");
  },
};
