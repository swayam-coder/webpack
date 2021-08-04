import { camelCase } from "lodash";
import path from "path";

import blah from "./hello";

const obj = {
  no1: "hi",
  no: "bye",
};

console.log(camelCase("jigneshname"));
console.log(["a", "b", "c"].includes("c"));
console.log(Object.values(obj));
console.log(path.resolve(__dirname, "dist/main.js"));
blah();
