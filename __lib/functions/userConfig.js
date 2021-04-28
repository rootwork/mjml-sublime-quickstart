'use strict'

/* eslint-disable no-unused-vars */
const fs = require('fs')
const yaml = require('js-yaml')

const { debug } = require('../vars/debug.js')
const { msg } = require('../vars/notifications.js')
/* eslint-enable no-unused-vars */

//
// Load config from YAML file.
//

const userConfig = {}
userConfig.json = yaml.loadAll(
  fs.readFileSync('./config.yaml', { encoding: 'utf-8' })
)
userConfig.data = userConfig.json[0]
debug(
  msg.b('Current configuration:\n') +
    JSON.stringify(userConfig.data, null, 2).replace(/["{},]/g, '')
)

module.exports = {
  userConfig,
}