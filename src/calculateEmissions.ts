import fs from "fs-extra";
import { getTransactions } from "./getTransactions.js";
import { emissionsFactorItem, gasUsedItem, tx, txResult } from "./types.js";

const getTimestamps = (tx: txResult) => {
  for (let j = 1; j < arr.length; j++) {
    if (
      tx.timeStamp > arr[j - 1].UnixTimeStamp &&
      tx.timeStamp < arr[j].UnixTimeStamp
    ) {
      timestamp = arr[j - 1].UnixTimeStamp;
      timestamps.push(timestamp);
    }
  }
  return timestamps;
};

const getEmissionsFactors = (timestamp: string) => {
  for (let k = 0; k < arr.length; k++) {
    if (emissionsFactorsObj[k].UnixTimeStamp === timestamp) {
      emissionsFactor = emissionsFactorsObj[k].emissionsFactor;
      emissionsFactors.push(emissionsFactor);
    }
  }
  return emissionsFactors;
};

const GasUsedJSON = fs.readFileSync("data/GasUsed.json", {
  encoding: "utf-8",
});
const GasUsedObj: gasUsedItem[] = JSON.parse(GasUsedJSON);

const emissionsFactorsJSON = fs.readFileSync("data/EmissionsFactors.json", {
  encoding: "utf-8",
});
const emissionsFactorsObj: emissionsFactorItem[] =
  JSON.parse(emissionsFactorsJSON);

const arr = emissionsFactorsObj;

let timestamp = "";
let timestamps: string[] = [];
let emissionsFactor = "";
let emissionsFactors: string[] = [];

const calculateEmissions = async (addr: string) => {
  const transactions: tx = await getTransactions(addr);

  let txEmissions: any;
  let totalEmissions = 0;

  for (let i = 0; i < transactions.result.length; i++) {
    let tx = transactions.result[i];
    const timestamps = getTimestamps(tx);

    // ** Figure out if this is correct
    if (i === transactions.result.length) {
      return timestamps;
    }
  }

  for (let i = 0; i < timestamps.length; i++) {
    const emissionsFactors = getEmissionsFactors(timestamps[i]);
    if (i === timestamps.length) {
      return emissionsFactors;
    }
  }

  // console.log("timestamps:", timestamps);
  // console.log("emissionsFactors:", emissionsFactors);

  for (let i = 0; i < timestamps.length; i++) {
    if (transactions.result[i].timeStamp) {
      txEmissions =
        parseFloat(emissionsFactors[i]) *
        parseInt(transactions.result[i].gasUsed);

      // console.log("txEmissions:", txEmissions);
      totalEmissions += txEmissions;
    }
  }
  const totalEmissionsKg = totalEmissions / 1000;
  return totalEmissionsKg;
};

const totalEmissionsIndeed = await calculateEmissions(
  "0xF417ACe7b13c0ef4fcb5548390a450A4B75D3eB3"
);

console.log("totalEmissionsIndeed:", totalEmissionsIndeed);
