import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

import { MarkdownClient, MarkdownResponse } from '../clients/MarkdownClient';

type MarkdownState = MarkdownResponse & {
  success: boolean;
};

export function useMarkdown(): MarkdownState {
  const [data, setData] = useState<MarkdownResponse>();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const client = new MarkdownClient();
      const data = await client.getDocumentForPath(location.pathname);
      setData(data);
    })();
  }, [location.pathname]);

  return {
    success: data?.error === undefined,
    content: data?.content,
    error: data?.error,
  };
}
