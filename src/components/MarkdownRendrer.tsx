import { FC } from 'react';
import marked from 'marked';

type Props = {
  content?: string;
};

export const MarkdownRendrer: FC<Props> = ({ content }) => {
  if (!content) {
    return null;
  }

  const html = marked(content);

  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};
