import * as pin from "./pin";
import * as help from "./help";
import { CommandInteraction } from "discord.js";

const commandResister = () =>{
    return [
        pin.command,
        help.command
    ]
}

const interactionRunner = async (interaction: CommandInteraction) =>{
    switch(interaction.commandName){
        case "Pin":
            await pin.execute(interaction);
            break;
        case "help":
            await help.execute(interaction);
            break;
    }
}

export { commandResister, interactionRunner };