import React, { useState } from 'react';

interface NoteFormProps {
  onAdd: (text: string) => void;
}

function NoteForm({ onAdd }: NoteFormProps) {
  const [inputText, setInputText] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (inputText.trim() === '') return; 

    onAdd(inputText);
    setInputText('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New note content..."
        value={inputText}
        onChange={handleChange}
      />
      <button type="submit">Add Note</button>
    </form>
  );
}

export default NoteForm;