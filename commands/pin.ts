import { ErrorEvent, PermissionFlagsBits } from "discord.js";
import { embedError, embedSuccess } from "../utils/embeds";
import { Log } from "../utils/logger";

const command = {
    name: "Pin",
    type: 3
};

const execute = async (interaction: any) =>{
    if(!interaction.appPermissions.has(PermissionFlagsBits.ViewChannel)) return interaction.reply({ embeds: [embedError({ title: "権限エラー", content: "BOTにチャンネルを閲覧する権限がありません" })], ephemeral: true });
    if(!interaction.appPermissions.has(PermissionFlagsBits.ManageMessages)) return interaction.reply({ embeds: [embedError({ title: "権限エラー", content: "BOTにメッセージを管理する権限がありません" })], ephemeral: true });
    if(!interaction.memberPermissions.has(PermissionFlagsBits.SendMessages)) return interaction.reply({ embeds: [embedError({ title: "権限エラー", content: "メッセージの送信権限がありません" })], ephemeral: true });
    const message = interaction.options.getMessage("message");
    if(message.pinned){
        message.unpin().then(() =>{
            interaction.reply({
                embeds: [embedSuccess({ title: "ピン留めを解除しました", content: `[対象メッセージ](https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${message.id})` }).addFields([{name: "実行", value: `<@!${interaction.user.id}>`}])]
            });
            Log({ type: "info", content: "Execute pin command" });
        }).catch((e: ErrorEvent) =>{
            interaction.reply({ embeds: [embedError({ title: "エラー", content: "ピン留めの解除に失敗しました" })], ephmeral: true });
            console.log(e);
            Log({ type: "error", content: e.message });
        });
    }else{
        message.pin().then(() =>{
            interaction.reply({
                embeds: [embedSuccess({ title: "ピン留めしました", content: `[対象メッセージ](https://discord.com/channels/${interaction.guild.id}/${interaction.channel.id}/${message.id})` }).addFields([{name: "実行", value: `<@!${interaction.user.id}>`}])]
            });
            Log({ type: "info", content: "Execute pin command" });
        }).catch((e: ErrorEvent) =>{
            interaction.reply({ embeds: [embedError({ title: "エラー", content: "ピン留めに失敗しました" })], ephmeral: true });
            console.log(e);
            Log({ type: "error", content: e.message });
        });
    }
    return;
}

export { command, execute };