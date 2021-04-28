'use strict'

/* eslint-disable no-unused-vars */
const { arg } = require('../functions/arg.js')
const { msg } = require('../vars/notifications.js')
const { log } = require('../vars/log.js')
/* eslint-enable no-unused-vars */

//
// Capture 'debug' from command-line flag.
//

let debug = function () {
  return ''
}

if (arg.debug) {
  debug = function (message) {
    return log(msg.debug(message))
  }
}

module.exports = {
  debug,
}
