import axios, { AxiosError } from "axios";

export interface MardownResponse {
  content?: string;
  error?: {
    message: string;
    code?: string;
  };
}

export class MarkdownClient {
  public async fetchDocument(path: string): Promise<MardownResponse> {
    try {
      const res = await axios.get<string>(`/docs${path}`);
      return {
        content: res.data,
      };
    } catch (e) {
      const error = e as AxiosError;
      console.log(error.message);
      return {
        error: {
          message: error.message,
          code: error.code,
        },
      };
    }
  }
}
