import { fetchNotes } from '@/lib/api/notes';
import NotesList from '@/components/NoteList/NoteList';

type Props = { params: Promise<{ slug: string[] }> };

export default async function FilteredNotesPage({ params }: Props) {
  const { slug } = await params;

  const raw = slug?.[0];
  const tag = raw === 'all' ? undefined : raw;

  const data = await fetchNotes({ tag, page: 1, perPage: 20 });
  return <NotesList notes={data.notes} />;
}
