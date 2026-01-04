'use client';

import NotesList from '@/components/NoteList/NoteList';
import type { Note } from '@/types/note';

type Props = {
  notes: Note[];
};

export default function NotesClient({ notes }: Props) {
  return <NotesList notes={notes} />;
}
