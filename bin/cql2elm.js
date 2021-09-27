#!/usr/bin/env node
const { platform, argv, cwd } = require('process');
const { join, resolve, sep } = require('path');
const { exec } = require('child_process');

let exeCmd = platform == 'win32' ? 'gradlew.bat' : './gradlew';

let inputArgs = argv;

let targetDir;
if (inputArgs.length > 2) {
  targetDir = cwd() + sep + inputArgs[2];
} else {
  targetDir = cwd();
}

exec(
  exeCmd + ' cql2elm --project-prop targetDir=' + targetDir, 
  {
    cwd: resolve(join(__dirname, '..'))
  }, 
  (error, stdout, stderr) => {
    if (error) {
      console.error(error);
      return;
    }
    // eslint-disable-next-line no-console
    console.log(stdout);
    console.error(stderr);
  }
);