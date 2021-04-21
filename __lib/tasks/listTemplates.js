'use strict';

const paths     = require('../vars/paths.js');
const { log }   = require('../vars/log.js');
const { msg }   = require('../vars/notifications.js');
const { debug } = require('../vars/debug.js');

//
// List all source templates used during build tasks.
//

module.exports = async function listTemplates() {
  log(msg.debug(msg.b('Main template file:\n') + paths.templateFile + '\n'));
  log(msg.debug(msg.b('Partials:\n') + paths.templatePartialsList));
}
