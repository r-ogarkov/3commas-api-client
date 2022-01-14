const { spawn } = require("child_process");
const fs = require("fs");
const path = require("path");

const GIT_DEBUG = true;

try {
  if(fs.lstatSync(path.resolve(__dirname, ".temp"))) {
    console.info("Removing the old version...");
    fs.rmSync(path.resolve(__dirname, ".temp"), {
      recursive: true,
    });
  }
} catch (error) {
  fs.mkdirSync(path.resolve(__dirname, ".temp"))
}

console.info("\x1b[33mInstalling the new version, please wait...\x1b[0m");

const git = spawn(
  "git",
  [
    "clone",
    "git@github.com:3commas-io/3commas-official-api-docs.git",
    ".temp/3commas",
  ],
  { stdio: GIT_DEBUG ? "inherit" : "ignore" }
);

git.on("close", (code) => {
  if (code === 0) {
    try {
      fs.rmSync(path.resolve(__dirname, ".temp/3commas/.git"), {
        recursive: true,
      });
    } catch (error) {
      console.error(error);
      return;
    }
    console.info("\x1b[32m Updated successfully!\x1b[0m");
    return;
  }
  if (!GIT_DEBUG) {
    console.error(`\x1b[31mGIT process exited with code ${code} \x1b[0m`);
  }
});

git.on("error", () => {
  console.error("\x1b[31mFailed to start GIT \x1b[0m");
});
