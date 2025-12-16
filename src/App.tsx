import React, { useState } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import type { Note } from './types';

function App() {
  const [notes, setNotes] = useState<Note[]>([]); 

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text: text,
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
  };
  

  return (
    <div className="app-container">
      <h1>The Persistent Sticky Note Wall</h1>
      <NoteForm onAdd={addNote} /> 
      <NoteList notes={notes} />
    </div>
  );
}

export default App;