import fs from "fs-extra";
import csv from "csvtojson";
import { gasUsedItem, hashrateItem } from "../types.js";

/*
Generates json files from `GasedUsed.csv` & `Hashrate.csv`
**/
const gasUsedJSON: gasUsedItem[] = await csv()
  .fromFile("data/GasUsed.csv")
  .then((jsonObj) => {
    console.log(jsonObj);
    return jsonObj;
  });

fs.outputFileSync("data/GasUsed.json", JSON.stringify(gasUsedJSON));

const hashrateJSON: hashrateItem[] = await csv()
  .fromFile("data/Hashrate.csv")
  .then((jsonObj) => {
    return jsonObj;
  });
fs.outputFileSync("data/Hashrate.json", JSON.stringify(hashrateJSON));
