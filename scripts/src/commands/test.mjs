// @ts-check

import { runScript } from "../process.mjs";

/** @type {import("../process.mjs").Command} */
export default async function test(_args, rawArgs = []) {
  await runScript("jest", "--passWithNoTests", ...rawArgs);
}
