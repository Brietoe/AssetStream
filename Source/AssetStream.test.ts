import AssetStream from "./AssetStream.js";
import { isDefined } from "@cc-tech/library";
import Testing from "@cc-tech/testing";

const assetStream = Testing(AssetStream);

const testCommand = { command: "Add" };

assetStream(testCommand).claim((result: { request: any; }) =>
{
	return isDefined(result.request);
});
