import {
    Client,
    GatewayIntentBits,
    Partials
} from "discord.js";
import env from "./config";
import { commandResister, interactionRunner } from "./commands/runner";
import { Log } from "./utils/logger";

const client: Client = new Client({
    intents: [
        GatewayIntentBits.Guilds
    ],
    partials: [Partials.Channel]
});

client.once("ready", async () =>{
    process.title = `PinBot(${env.VERSION})`;

    await client.application?.commands.set(commandResister(), env.DEBUG?env.DEBUG:"");

    setInterval(() =>{
        client.user?.setActivity({
            name: `/help|${client.guilds.cache.size}サーバー`
        });
    }, 5000);

    Log({ type: "info", content: `Started PinBot(${env.VERSION})` });
});

if(env.DEBUG !== undefined) client.on("debug", console.log).on("warn", console.log);

client.on("interactionCreate", async (interaction: any) =>{
    interactionRunner(interaction).catch(e => console.error(e));
});

client.login(env.TOKEN);