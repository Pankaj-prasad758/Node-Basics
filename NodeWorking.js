import fs from "fs";

const fileSystem = fs;

console.log(`Top level elements`);
setTimeout(() => console.log(`Non Top level code setTimeout`), 0);
setTimeout(() => console.log(`Non Top level code setTimeout 2`), 0);
setImmediate(() => console.log(`setImmediate timer`));
