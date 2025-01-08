#!/usr/bin/env node
const { platform, argv, cwd } = require('process');
const { join, resolve, sep } = require('path');
const { exec } = require('child_process');

// ANSI escape codes for colors
const GREEN = '\x1b[32m';
const RED = '\x1b[31m';
const YELLOW = '\x1b[33m';
const RESET = '\x1b[0m';

// List of strings to check for non-error output piped to stderr
const greenPrefixes = ['================================================================================', 
  'TRANSLATE ',
  'Translation completed successfully.', 'ELM output written to: '];
const yellowPrefixes = ['Translation completed with messages:', 'Warning:'];

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
    // Handle any errors from exec
    if (error) {
      console.error(error);
      return;
    }
    
    // Output stdout in green
    if (stdout) {
      process.stdout.write(`${GREEN}${stdout}${RESET}`);
    }

    // Handle stderr
    if (stderr) {
      const stderrLines = stderr.toString().split('\n');
      stderrLines.forEach(line => {
        if (greenPrefixes.some(prefix => line.startsWith(prefix))) {
          // Output lines starting with specified prefixes in green
          process.stderr.write(`${GREEN}${line}${RESET}\n`);
        } else if (yellowPrefixes.some(prefix => line.startsWith(prefix))) {
          // Output warnings in yellow
          process.stderr.write(`${YELLOW}${line}${RESET}\n`);
        } else if (line.trim()) {
          // Output other stderr data in red
          process.stderr.write(`${RED}${line}${RESET}\n`);
        }
      });
    }
  }
);