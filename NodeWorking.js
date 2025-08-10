import fs, { stat } from "fs";
import crypto from "crypto";

const cryptoHashing = crypto;
console.log("cryptoHashing", cryptoHashing);

const threadPool = (process.env.UV_THREAD_POOL = 10);
console.log(threadPool);
const start = Date.now();
const fileSystem = fs;
setTimeout(() => console.log("Non Top level code setTimeout"), 0);

setImmediate(() => console.log("setImmediate timer"));

fileSystem.readFile("text.txt", "utf-8", () => {
  console.log("File reading IO Polling completed");

  cryptoHashing.pbkdf2(
    "secret1",
    "salt1",
    100000,
    10,
    "sha512",
    (err, drivedKey) => {
      if (err) throw err;
      console.log(
        `${Date.now() - start}ms`,
        "password1",
        drivedKey.toString("hex")
      );
    }
  );

  cryptoHashing.pbkdf2(
    "secret2",
    "salt1",
    100000,
    10,
    "sha512",
    (err, drivedKey) => {
      if (err) throw err;
      console.log(
        `${Date.now() - start}ms`,
        "password2",
        drivedKey.toString("hex")
      );
    }
  );

  cryptoHashing.pbkdf2(
    "secret3",
    "salt1",
    100000,
    10,
    "sha512",
    (err, drivedKey) => {
      if (err) throw err;
      console.log(
        `${Date.now() - start}ms`,
        "password3",
        drivedKey.toString("hex")
      );
    }
  );

  cryptoHashing.pbkdf2(
    "secret4",
    "salt1",
    100000,
    10,
    "sha512",
    (err, drivedKey) => {
      if (err) throw err;
      console.log(
        `${Date.now() - start}ms`,
        "password4",
        drivedKey.toString("hex")
      );
    }
  );

  cryptoHashing.pbkdf2(
    "secret5",
    "salt1",
    100000,
    10,
    "sha512",
    (err, drivedKey) => {
      if (err) throw err;
      console.log(
        `${Date.now() - start}ms`,
        "password5",
        drivedKey.toString("hex")
      );
    }
  );

  cryptoHashing.pbkdf2(
    "secret6",
    "salt1",
    100000,
    10,
    "sha512",
    (err, drivedKey) => {
      if (err) throw err;
      console.log(
        `${Date.now() - start}ms`,
        "password6",
        drivedKey.toString("hex")
      );
    }
  );

  cryptoHashing.pbkdf2(
    "secret7",
    "salt1",
    100000,
    10,
    "sha512",
    (err, drivedKey) => {
      if (err) throw err;
      console.log(
        `${Date.now() - start}ms`,
        "password7",
        drivedKey.toString("hex")
      );
    }
  );

  setTimeout(() => console.log("Inner setTimeout 1"), 0);
  setImmediate(() => console.log("Inner Immediate timer"));
  setTimeout(() => console.log("Inner setTimeout 2"), 5 * 1000);
});

console.log(`Top level elements`);
