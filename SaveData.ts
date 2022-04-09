var Moralis = require("moralis/node");

const SaveData = async () => {
    const serverUrl = "https://urej8ry3stzf.usemoralis.com:2053/server";
    const appId = "u3VkzeIHWfJnY5nCcoGs0bQsl4xB3titt6zg5y9x";
    const masterKey = "otMouxRR3cc3guc0LdD1bXFMAOEejE4eF7pEfvws";

    await Moralis.start({ serverUrl, appId, masterKey });
  
    const Monster = Moralis.Object.extend("Monster");
    const monster = new Monster();
  
    monster.set("strength", 1024);
    monster.set("ownerName", "Aegon");
    monster.set("canFly", true);
  
    await monster.save();
};
  
SaveData();