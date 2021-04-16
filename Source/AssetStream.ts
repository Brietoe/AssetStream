import { CommandMessage } from "./CommandMessage";

type CommandResponse = { request: CommandMessage; };

export default function AssetStream(message: CommandMessage): CommandResponse
{
	return { request: message };
}
