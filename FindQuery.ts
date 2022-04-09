var Moralis = require("moralis/node");

const FindQuery = async () => {
    var Monster = Moralis.Object.extend("Monster");
    const query = new Moralis.Query("Monster");
  
    const results = await query.find();
    console.log(results);
};