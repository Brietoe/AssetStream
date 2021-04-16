
type CommandMessage = { command: string; };
type CommandResponse = { request: CommandMessage; };

export default function AssetStream(message: CommandMessage): CommandResponse
{
	return { request: message };
}
