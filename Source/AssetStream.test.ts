import AssetStream from "./AssetStream.js";
import { isDefined } from "@cc-tech/library";
const assetStream = Testing(AssetStream);

const testCommand = { command: "Add" };

assetStream(testCommand).claim((result) =>
{
	return isDefined(result.request);
});