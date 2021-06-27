import { FC } from 'react';

import { useMarkdown } from '../hooks/useMarkdown';
import { MarkdownRendrer } from '../components/MarkdownRendrer';
import { NotFound } from '../components/NotFound';

const HTTP_NOT_FOUND = '404';

export const MarkdownViewer: FC = () => {
  const markdown = useMarkdown();

  if (markdown.success) {
    return <MarkdownRendrer content={markdown.content} />;
  }

  if (markdown.error?.code === HTTP_NOT_FOUND) {
    return <NotFound />;
  }

  return <h1>{markdown.error ?? 'Something went wrong'}</h1>;
};
