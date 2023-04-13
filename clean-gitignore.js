// clean-gitignore.js
const shell = require("shelljs");
const fs = require("fs");
const path = require("path");

const workspaces = ["packages/*"];

const dirs = ["packages/docs", "./"];
const dirsOnDelete = [
  "packages/docs",
  "packages/react",
  "packages/tokens",
  "packages/eslint-config",
  "./",
];

function deleteIgnoredFolders(dir) {
  const gitignorePath = path.join(dir, ".gitignore");

  if (fs.existsSync(gitignorePath)) {
    const gitignoreContent = fs.readFileSync(gitignorePath, "utf8");
    const foldersToDelete = gitignoreContent
      .split("\n")
      .filter((folder) => folder.trim() !== "" && !folder.startsWith("#"));

    for (const folder of foldersToDelete) {
      for (const dir of dirsOnDelete) {
        const folderPath = path.join(dir, folder);
        console.log(`Checking folder: ${folderPath}`)
        if (fs.existsSync(folderPath)) {
          shell.rm("-rf", folderPath);
          console.log(`Deleted folder: ${folderPath}`);
        }
      }
    }
  }
}

for (const workspace of workspaces) {
  for (const dir of dirs) {
    deleteIgnoredFolders(dir);
  }
}
