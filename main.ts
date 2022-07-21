import {
    Client,
    GatewayIntentBits,
    Partials
} from "discord.js";
import env from "./config";
import { commandResister, interactionRunner } from "./commands/runner";

const client: Client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages
    ],
    partials: [Partials.Channel]
});

client.once("ready", async () =>{
    process.title = `PinBot(${env.VERSION})`;

    await client.application?.commands.set(commandResister(), env.DEBUG);

    console.log("Started");
});

if(env.DEBUG !== undefined) client.on("debug", console.log).on("warn", console.log)

client.on("interactionCreate", async (interaction: any) =>{
    interactionRunner(interaction).catch(e => console.error(e));
});

client.login(env.TOKEN);