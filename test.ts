import { ApplicationCommandType, Client, GatewayIntentBits, Partials } from "discord.js";
import env from "./config";

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ],
    partials: [Partials.Channel]
});

client.on("ready", async () =>{
    const commands = [
        {
            name: "ping",
            description: "ping/pong",
            type: ApplicationCommandType.ChatInput
        }
    ]
    await client.application?.commands.set(commands, env.DEBUG);

    console.log("connected");
})