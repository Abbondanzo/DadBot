import { hideBin } from "yargs/helpers";
import yargs from "yargs/yargs";

export const args = yargs(hideBin(process.argv))
  .command("message <name>", "send a predefined message", (yargs) => {
    return yargs
      .positional("name", {
        describe: "name of the message to send",
        type: "string",
      })
      .example("$0 message friday", "Sends the Mufasa Friday video");
  })
  .command("poll <names..>", "listen to channel", (yargs) => {
    return yargs
      .positional("names", {
        describe: "name(s) of polling scheme to use",
        type: "string",
      })
      .example("$0 poll reee", "Polls for REEEs");
  })
  .strict().argv;
