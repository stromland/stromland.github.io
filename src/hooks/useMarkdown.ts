import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { MarkdownClient, MardownResponse } from "../clients/MarkdownClient";

interface MarkdownState {
  success: boolean;
  content?: string;
  error?: string;
}

export function useMarkdown(): MarkdownState {
  const [data, setData] = useState<MardownResponse>();
  const location = useLocation();

  useEffect(() => {
    (async () => {
      const client = new MarkdownClient();
      const data = await client.fetchDocument(
        getMarkdownName(location.pathname)
      );
      setData(data);
    })();
  }, [location.pathname]);

  return {
    success: data?.error === undefined,
    content: data?.content,
    error: `${data?.error?.message}`,
  };
}

function getMarkdownName(path: string): string {
  if (path.endsWith("/")) {
    return `${path}index.md`;
  } else {
    return `${path}.md`;
  }
}
