for (let i = 0; i < 1; i++) {
let obj = {};
for (let j = 0; j < 3; j++) {
if (Object.keys(jsonObject)[j] !== "Date(UTC)") {
continue;
}

    if (Object.keys(jsonObject)[j] !== "UnixTimeStamp") {
      // @ts-ignore
      obj.timestamp = Object.values(jsonObject[j]);
    }

    if (Object.keys(jsonObject)[j] !== "Value") {
      // @ts-ignore
      obj.value = Object.values(jsonObject[j]);
    }

    console.log("obj:", obj);

}

// let obj = {};
console.log("obj:", obj);

// console.log(Object.keys(jsonObject[i]));

// console.log(Object.values(jsonObject[i]));

// if (objKey === "Date(UTC)") {
// continue;
// }
// console.log("i:", i);

// @ts-ignore
// obj["timestamp"][i] = jsonObject[i][objkey];

// console.log("obj:", obj);

// // @ts-ignore
// console.log(jsonObject["Date(UTC)"]);
// console.log(jsonObject[i][objkey]);
}
