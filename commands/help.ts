import { ApplicationCommandType, EmbedBuilder } from "discord.js";
import { Log } from "../utils/logger";
import env from "../config";

const command = {
    name: "help",
    description: "PinBotのヘルプを表示します",
    type: ApplicationCommandType.ChatInput
};

const execute = async (interaction: any) =>{
    const Embed = new EmbedBuilder()
    .setTitle("PinBot ヘルプ")
    .setDescription("全員にピン留め権限を付与します。ただしメッセージの送信または閲覧できないチャンネルでは使用できません")
    .setColor("#c4ff89")
    .addFields([
        { name: "使い方", value: "ピン留めしたいメッセージを右クリックして「アプリ」→「Pin」をクリックすることでピン留めできます" },
        { name: "Version", value: env.VERSION },
        { name: "Links", value: `[Github](${env.GITHUB})` }
    ]);
    interaction.reply({ embeds: [Embed] });
    return Log({ type: "info", content: "Execute pin command" });
}

export { command, execute };