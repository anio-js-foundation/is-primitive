import isPrimitive from "./src/index.mjs"

// prints true
console.log(isPrimitive("abc"))
// prints false
console.log(isPrimitive(new String("abc")))
