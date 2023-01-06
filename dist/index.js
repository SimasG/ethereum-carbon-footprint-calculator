import "dotenv/config";
import fs from "fs-extra";
const gasUsedCsv = fs.readFileSync("data/GasUsed.csv");
const array = gasUsedCsv.toString().split("\r");
// console.log("array[0]:", array[0]);
// console.log("array[1]:", array[1]);
const array2 = array[1].split(",");
// console.log("array2[1]:", array2[1]);
let result = [];
const headers = ["timestamp", "value"];
let obj = {};
const item1 = {
    timestamp: "123123",
    value: "123123123",
};
const item2 = {
    timestamp: "321321",
    value: "321321321",
};
result.push(item1);
result.push(item2);
console.log("result:", result);
// for (let i = 1; i < array.length - 1; i++) {
//   let obj = {};
// }
//
//
//
//
//
//
//
//
//
// for (let i = 1; i < array.length - 1; i++) {
//   let obj = {};
//   let str = array[i];
//   let s = "";
//   let flag = 0;
//   for (let ch of str) {
//     if (ch === '"' && flag === 0) {
//       flag = 1;
//     } else if (ch === '"' && flag == 1) flag = 0;
//     if (ch === ", " && flag === 0) ch = "|";
//     if (ch !== '"') s += ch;
//   }
//   let properties = s.split("|");
//   for (let j in headers) {
//     if (properties[j].includes(",")) {
//       obj[headers[j]] = properties[j].split(",").map((item) => item.trim());
//     } else obj[headers[j]] = properties[j];
//   }
//   // @ts-ignore
//   result.push(obj);
// }
// let json = JSON.stringify(result);
// console.log("json:", json);
//# sourceMappingURL=index.js.map