// Import .env file
require("dotenv").config();

//Import discordJs dependencies
const { Client, GatewayIntentBits, Collection } = require("discord.js");

// Import node modules that allows to read the paths.
const fs = require("node:fs");
const path = require("node:path");

//Discord Bot client instance
const client = new Client({
  intents: [GatewayIntentBits.Guilds],
});

// Commands collection instance
client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands"); // Constructs a path to the commands folder
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".js")); // Returns an array of the .js files from the path

const eventsPath = path.join(__dirname, "events");
const eventFiles = fs
  .readdirSync(eventsPath)
  .filter((file) => file.endsWith(".js"));

// Set all the commands files to the bot client (Command handling)
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);
  // Set a new item in the Collection with the key as the command name and the value as the exported module
  if ("data" in command && "execute" in command) {
    client.commands.set(command.data.name, command);
  } else {
    console.log(
      `[WARNING] The command at ${filePath} is missing a required "data" or "execute" property.`
    );
  }
}

//Set all the events files to the bot client (Event handling)
for (const file of eventFiles) {
  const filePath = path.join(eventsPath, file);
  const event = require(filePath);
  if (event.once) {
    client.once(event.name, (...args) => event.execute(...args));
  } else {
    client.on(event.name, (...args) => event.execute(...args));
  }
}

client.login(process.env.DISCORD_TOKEN);
