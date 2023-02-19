const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Gato pito replies with pong!"),
  async execute(interaction) {
    await interaction.reply("Pong! :D");
  },
};
