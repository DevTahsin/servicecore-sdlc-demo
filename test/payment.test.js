const assert = require("assert");
const { pay } = require("../src/payment");
assert.strictEqual(pay(10).status, "ok");
assert.throws(() => pay(0));
console.log("payment tests passed");
