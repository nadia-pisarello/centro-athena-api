const moduleAlias = require('module-alias');
const path = require('path');

moduleAlias.addAlias('src', path.join(__dirname, 'dist/src'));
