// Import the 'fs' module to work with the file system
const fs = require('fs')

// Import the 'chalk' module to add colors to console output
const chalk = require('chalk')

// Function to get notes
const getNotes = () => 'Your notes...'

// Function to add a new note
const addNote = (title, body) => {
  // Load existing notes
  const notes = loadNotes()
  // Check for duplicate titles
  const duplicateNotes = notes.filter(note => note.title === title)

  // If no duplicate note found, add the new note
  if (duplicateNotes.length === 0) {
    notes.push({ title, body })
    // Save the updated notes array to the JSON file
    saveNotes(notes)
    console.log(chalk.green.inverse('New note added!'))
  } else {
    console.log(chalk.red.inverse('Note title taken!'))
  }
}

// Function to remove a note
const removeNote = (title) => {
  // Load existing notes
  const notes = loadNotes()
  // Filter out the note to be removed
  const notesToKeep = notes.filter(note => note.title !== title)

  // If a note was removed, save the updated notes array
  if (notes.length > notesToKeep.length) {
    saveNotes(notesToKeep)
    console.log(chalk.green.inverse('Note removed!'))
  } else {
    console.log(chalk.red.inverse('No note found!'))
  }
}

// Function to list all notes
const listNotes = () => {
  // Load existing notes
  const notes = loadNotes()
  // Print each note title
  console.log(chalk.inverse('Your notes:'))
  notes.forEach(note => console.log(note.title))
}

// Function to read a specific note
const readNote = (title) => {
  // Load existing notes
  const notes = loadNotes()
  // Find the note with the given title
  const note = notes.find(note => note.title === title)

  // If note found, print the title and body
  if (note) {
    console.log(chalk.inverse(note.title))
    console.log(note.body)
  } else {
    console.log(chalk.red.inverse('Note not found!'))
  }
}

// Function to save notes to the JSON file
const saveNotes = (notes) => {
  // Convert notes array to JSON string
  const dataJSON = JSON.stringify(notes, null, 2)
  // Write JSON string to 'notes.json' file
  fs.writeFileSync('notes.json', dataJSON)
}

// Function to load notes from the JSON file
const loadNotes = () => {
  try {
    // Read the JSON file
    const dataBuffer = fs.readFileSync('notes.json')
    // Convert file contents to string
    const dataJSON = dataBuffer.toString()
    // Parse JSON string to array
    return JSON.parse(dataJSON)
  } catch (e) {
    // Return an empty array if file doesn't exist or can't be read
    return []
  }
}

// Export functions to be used in other files
module.exports = {
  getNotes,
  addNote,
  removeNote,
  listNotes,
  readNote
}
