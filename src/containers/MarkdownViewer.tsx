import { FC } from "react";

import {useMarkdown} from '../hooks/useMarkdown'
import {MarkdownRendrer} from '../components/MarkdownRendrer'

export const MarkdownViewer: FC = () => {
  const markdown = useMarkdown();

  if (markdown.success) {
  return <MarkdownRendrer content={markdown.content} />
  }

  return <h1>{markdown.error ?? "Something went wrong"}</h1>
}