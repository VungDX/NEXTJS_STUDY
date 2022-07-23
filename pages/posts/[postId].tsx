import { useRouter } from 'next/router';
import * as React from 'react';

export interface PostDetailPageProps {
}

export default function PostDetailPage (props: PostDetailPageProps) {

  const router = useRouter()
  return (
    <div>
      PostDetailPage
      <h1>Query: {JSON.stringify(router.query)}</h1>
    </div>
  );
}
