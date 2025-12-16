import React, { useState } from 'react';

const [text, setText] = useState('');
const handleSubmit = (e: React.FormEvent) => { ... }
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => { ... }

interface NoteFormProps {
  onAdd: (text: string) => void;
}

export default function NoteForm({ onAdd }: NoteFormProps) {
  const [text, setText] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (text.trim() === '') return; 

    onAdd(text);
    setText('');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Add a new note..."
        value={text}
        onChange={handleChange}
      />
      <button type="submit">Add</button>
    </form>
  );
}