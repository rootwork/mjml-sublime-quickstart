'use strict'

/* eslint-disable no-unused-vars */
const fs = require('fs-extra')
const path = require('path')
const prompts = require('prompts')

const isDirEmpty = require.main.require('./src/helpers/isDirEmpty')
const { config } = require.main.require('./src/config/setup')
const notify = require.main.require('./src/ops/notifications')
/* eslint-enable no-unused-vars */

//
// Destroy project structure
//

const lib = {
  path: config.scaf.init,
  readme: config.scaf.readme,
}

const project = {
  path: '.',
  readme: path.basename(config.scaf.readme),
}

// Iterate over and destroy items matching `init` structure.
function destroyStructure() {
  const path = fs.readdirSync(lib.path)

  notify.msg('warn', 'Destroying Premail project ')
  for (const i in path) {
    const item = path[i]
    try {
      if (fs.existsSync(item)) {
        if (fs.lstatSync(item).isDirectory()) {
          fs.rmdirSync(item, { recursive: true })
        } else {
          fs.unlinkSync(item)
        }
        notify.msg('plain', `Deleted '${item}'`)
      }
    } catch (err) {
      notify.msg('error', err)
    }
  }

  notify.msg('success', 'Premail project destroyed.')
}

// Destroy project readme
function destroyReadme() {
  try {
    fs.unlinkSync(project.readme)
    notify.msg('plain', `Deleted '${project.readme}'`)
  } catch (err) {
    notify.msg('error', err)
  }
}

// Enable passing of --yes to this command to bypass confirmation.
prompts.override(require('yargs').argv)

// Confirm user really wants to destroy data.
function confirm() {
  ;(async () => {
    const questions = [
      {
        type: 'confirm',
        name: 'yes',
        initial: false,
        message: '',
        onRender(kleur) {
          this.msg = kleur
            .black()
            .bgYellow(
              ' ⚠ This will DESTROY ALL PREMAIL DATA in this directory. Are you sure you want to continue? '
            )
        },
      },
      {
        type: (prev) => (prev ? 'confirm' : null),
        name: 'readme',
        initial: false,
        message: '',
        onRender(kleur) {
          this.msg = kleur.yellow(
            ` Do you want to remove the '${project.readme}' file? `
          )
        },
      },
    ]

    const onCancel = (prompt) => {
      notify.msg('plain', '     Canceled.')
      process.nextTick(() => {
        process.exit(0)
      })
    }

    const response = await prompts(questions, { onCancel })

    if (response.yes) {
      destroyStructure()
    }

    if (response.readme) {
      destroyReadme()
    }
  })()
}

function structure() {
  if (isDirEmpty(project.path)) {
    notify.msg('info', 'Directory is already empty.')
    process.exit(0)
  }
  if (!fs.existsSync(config.file.project)) {
    notify.msg(
      'error',
      `${config.file.project} not found.`,
      "This doesn't appear to be a Premail project directory."
    )
    process.exit(0)
  }
  confirm()
}

module.exports = {
  structure,
}
