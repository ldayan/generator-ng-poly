'use strict';
var genBase = require('../genBase')
  , path = require('path')
  , Generator;

Generator = module.exports = genBase.extend();

Generator.prototype.prompting = function prompting() {
  this.askForModuleName();
};

Generator.prototype.writing = function writing() {
  var config = this.getConfig();

  this.template('_constant.js', path.join('app', config.modulePath, config.hyphenName + '-constant.js'), config);
  this.template('_spec.' + config.testScript,
    path.join(config.testDir, config.modulePath, config.hyphenName + '-constant_test.' + config.testScript), config);
};
