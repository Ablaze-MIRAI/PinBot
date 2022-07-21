import { EmbedBuilder } from "discord.js";

interface EmbedType {
    title: string,
    content: string
};

const embedError = ({title, content}: EmbedType) =>{
    return new EmbedBuilder().setColor("#ff8989").setTitle(title).setDescription(content);
};

const embedSuccess = ({title, content}: EmbedType) =>{
    return new EmbedBuilder().setColor("#c4ff89").setTitle(title).setDescription(content);
};

export { embedError, embedSuccess };