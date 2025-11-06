'use client';

import { useState, ChangeEvent } from 'react';
import { useRouter } from 'next/navigation';

import { postCourse } from './api';

const baseInput =
  'block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm';
const baseLabel = 'block text-sm font-medium text-gray-700';
const baseButtonPrimary =
  'inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';
const baseButtonSecondary =
  'inline-flex justify-center py-2 px-4 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500';

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
            <div className="mb-2">
              <label htmlFor="name" className={baseLabel}>
                Match Name
              </label>
              <input
                id="name"
                className={`${baseInput} max-w-sm`}
                onChange={handleTitleChange}
                value={matchName}
              />
            </div>
            <input
              className={baseButtonPrimary}
              type="submit"
              value="Submit"
              disabled={submitButtonDisabled}
            />
          </form>
          <button className={baseButtonSecondary} onClick={handleCancel}>
            Never mind
          </button>
        </>
      ) : (
        <button className={baseButtonPrimary} onClick={handleCreate}>
          Create
        </button>
      )}
    </>
  );
}
