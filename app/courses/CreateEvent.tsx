'use client';

import { useState, ChangeEvent, FormEventHandler } from 'react';
import { useRouter } from 'next/navigation';

import { postCourse } from './api';

export default function CreateEvent() {
  const [creating, setCreating] = useState(false);
  const [matchName, setMatchName] = useState('');
  const [results, setResults] = useState([
    {
      hole: 1,
      par: null,
      score: null,
    },
  ]);

  const router = useRouter();

  const handleCreate = () => {
    setCreating(true);
  };

  const handleCancel = () => {
    setMatchName('');
    setResults([
      {
        hole: 1,
        par: null,
        score: null,
      },
    ]);
    setCreating(false);
  };

  const handleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setMatchName(e.target.value);
  };

  const handleSubmit = async () => {
    await postCourse({ matchName, results });
    setMatchName('');
    setCreating(false);

    router.refresh();
  };

  const submitButtonDisabled =
    !matchName.length || results.some((result) => !result.par || !result.score);

  return (
    <>
      {creating ? (
        <>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Match Name</label>
            <input id="name" onChange={handleTitleChange} value={matchName} />
            <input
              type="submit"
              value="Submit"
              disabled={submitButtonDisabled}
            />
          </form>
          <button onClick={handleCancel}>Never mind</button>
        </>
      ) : (
        <button onClick={handleCreate}>Create</button>
      )}
    </>
  );
}
