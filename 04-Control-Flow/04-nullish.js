// Nullish Coalescing Operator(??) : works with null and undefined
// The nullish coalescing (??) operator is a logical operator that returns its right-hand side operand when its left-hand side operand is null or undefined, and otherwise returns its left-hand side operand.
let val1;
console.log(val1);
val1 = 5 ?? 10;
console.log(val1);
val1 = null ?? 10;
console.log(val1);
val1 = undefined ?? 15;
console.log(val1);
val1 = null ?? undefined ?? 20 ?? 30;
console.log(val1);
