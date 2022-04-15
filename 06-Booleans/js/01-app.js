const boolean1 = true;
const boolean2 = false;
const boolean3 = "true";

console.log(boolean1);
console.log(boolean2);

// Tipo de datos Boolean
console.log(typeof boolean1);
console.log(typeof boolean2);

// string vs boolean con comparador poco estricto
console.log(boolean1 == boolean3);

const boolean4 = new Boolean(true);
console.log(boolean4);
console.log(typeof boolean4);