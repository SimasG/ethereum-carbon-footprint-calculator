import fs from "fs-extra";
import csv from "csvtojson";
/*
Generates json files from `GasedUsed.csv` & `Hashrate.csv`
**/
const gasUsedJSONObj = await csv()
    .fromFile("data/GasUsed.csv")
    .then((jsonObj) => {
    console.log(jsonObj);
    return jsonObj;
});
fs.outputFileSync("data/GasUsed.json", JSON.stringify(gasUsedJSONObj));
const hashrateJSONObj = await csv()
    .fromFile("data/Hashrate.csv")
    .then((jsonObj) => {
    return jsonObj;
});
fs.outputFileSync("data/Hashrate.json", JSON.stringify(hashrateJSONObj));
//# sourceMappingURL=generateData.js.map