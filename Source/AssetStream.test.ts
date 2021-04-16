import AssetStream from "./AssetStream.js";
import Testing from "../../Testing/Release/Testing.js";
import { isDefined } from "../../Testing/node_modules/@cc-tech/library/Release/cc-tech.js";
const assetStream = Testing(AssetStream);
assetStream({ command: "Add" }).claim((result) =>
{
	return isDefined(result.request);
});