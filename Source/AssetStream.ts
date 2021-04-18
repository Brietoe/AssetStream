import { CommandMessage } from "./CommandMessage";
import { CommandResponse } from "./CommandResponse";

//	XBW Nodes:
//		xrpcove.com
//		Otterrock.live
export default function AssetStream(message: CommandMessage): CommandResponse
{
	return { request: message };
}