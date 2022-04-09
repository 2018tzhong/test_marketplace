/* import moralis */
const Moralis = require("moralis/node");

/* Moralis init code */
const serverUrl = "https://nk3bfdk6bomj.usemoralis.com:2053/server";
const appId = "NmoTimjEAYuC8UeXTNGjRx6L9gMkisqbQAOhjAVZ";
const masterKey = "wnvl9UdudMjt9k7FIf20G3eIcFS9Gb4ICN9A5z9A";


const account = async () => {
    await Moralis.start({ serverUrl, appId, masterKey });
};

export { };