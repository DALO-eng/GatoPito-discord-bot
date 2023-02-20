const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("secretping")
    .setDescription("Gato pito replies with pong!"),
  async execute(interaction) {
    await interaction.reply({ content: "Pong! :D", ephemeral: true });
  },
};
