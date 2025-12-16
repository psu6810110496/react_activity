import React, { useState, useEffect } from 'react';
import NoteForm from './components/NoteForm';
import NoteList from './components/NoteList';
import type { Note } from './types';

const initializeNotes = (): Note[] => {
  const saved = localStorage.getItem('notes');
  if (saved) return JSON.parse(saved) as Note[]; 
  return [];
};

function App() {
  const [notes, setNotes] = useState<Note[]>(initializeNotes);

  const addNote = (text: string) => {
    const newNote: Note = {
      id: Date.now(),
      text: text,
    };
    setNotes(prevNotes => [...prevNotes, newNote]);
  };
  
  const deleteNote = (id: number) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  };


  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);


  return (
    <div className="app-container">
      <h1>The Persistent Sticky Note Wall</h1>
      <NoteForm onAdd={addNote} />
      <NoteList notes={notes} onDelete={deleteNote} /> 
    </div>
  );
}

export default App;