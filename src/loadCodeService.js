const { CodeService } = require('cql-exec-vsac');
const fs = require('fs-extra');

function loadCodeService(cachePath='vscache') {
  fs.mkdirpSync(cachePath);
  return new CodeService(cachePath, true);
}

module.exports = loadCodeService;