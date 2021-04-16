import { CommandMessage } from "./CommandMessage";
import { CommandResponse } from "./CommandResponse";

export default function AssetStream(message: CommandMessage): CommandResponse
{
	return { request: message };
}
