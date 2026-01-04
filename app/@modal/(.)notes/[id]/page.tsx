import Modal from '@/components/Modal/Modal';
import NotePreviewClient from './NotePreview.client';

type Props = { params: Promise<{ id: string }> };

export default async function NoteModalPage({ params }: Props) {
  const { id } = await params;

  return (
    <Modal>
      <NotePreviewClient id={id} />
    </Modal>
  );
}
