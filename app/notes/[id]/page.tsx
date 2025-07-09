import NoteDetailsClient from './NoteDetails.client';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import { fetchNoteById } from '../../../lib/api';
import type { Metadata } from 'next';

type PageProps = {
  params: Promise<{ id: string }>;
};

  
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
                                                          // ОСЬ Є ПРОМІС МЕТАДАТА
                                                          // уточніть, що саме ще має бути
  const { id } = await params;
  const note = await fetchNoteById(id);

  return {
    title: `Note: ${note.title}`,
    description: note.content.slice(0, 30),
    openGraph: {
      title: `Note: ${note.title}`,
      description: note.content.slice(0, 100),
      url: `https://notehub-public.goit.study/api/notes/${id}`,
      images: [
        {
          url: 'https://ac.goit.global/fullstack/react/notehub-og-meta.jpg',
          width: 1200,
          height: 630,
          alt: note.title,
        },
      ],
    },
  };
}

export default async function NoteDetailsPage({ params }: PageProps) {
  const { id } = await params;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['note', id],
    queryFn: () => fetchNoteById(id),
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <NoteDetailsClient />
    </HydrationBoundary>
  );
}
// У функції generateMetadata відсутня явна анотація повертаємого типу Promise<Metadata>.
//  Ця анотація необхідна для безпеки типів та ясності.