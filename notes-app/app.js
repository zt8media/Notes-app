// Import the 'yargs' module for command-line argument parsing
const yargs = require('yargs')
// Import custom 'notes' module
const notes = require('./notes.js')

// Create 'add' command
yargs.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,  // Required option
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,  // Required option
      type: 'string'
    }
  },
  handler(argv) {
    // Call 'addNote' function from 'notes' module
    notes.addNote(argv.title, argv.body)
  }
})

// Create 'remove' command
yargs.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,  // Required option
      type: 'string'
    }
  },
  handler(argv) {
    // Call 'removeNote' function from 'notes' module
    notes.removeNote(argv.title)
  }
})

// Create 'list' command
yargs.command({
  command: 'list',
  describe: 'List your notes',
  handler() {
    // Call 'listNotes' function from 'notes' module
    notes.listNotes()
  }
})

// Create 'read' command
yargs.command({
  command: 'read',
  describe: 'Read a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,  // Required option
      type: 'string'
    }
  },
  handler(argv) {
    // Call 'readNote' function from 'notes' module
    notes.readNote(argv.title)
  }
})

// Parse the command-line arguments
yargs.parse()
