import axios, { AxiosError } from 'axios';

export interface MarkdownResponse {
  content?: string;
  error?: {
    message: string;
    status?: number;
  };
}

export interface MarkdownClientConfig {
  basePath: string;
  fileSuffix: string;
}

export class MarkdownClient {
  private config: MarkdownClientConfig;
  constructor(config?: MarkdownClientConfig) {
    this.config = config ?? {
      basePath: '/docs',
      fileSuffix: '.md',
    };
  }
  public async getDocumentForPath(path: string): Promise<MarkdownResponse> {
    const fullPath = `${this.config.basePath}${path}`;
    const res = await this.getDocument(fullPath);
    if (res.error?.status === 404) {
      return await this.retryWithNewPath(fullPath);
    }

    return res;
  }

  private retryWithNewPath(path: string) {
    const newPath = path.endsWith('/')
      ? path.substr(0, path.length - 2)
      : `${path}/`;

    return this.getDocument(newPath);
  }

  private async getDocument(path: string): Promise<MarkdownResponse> {
    try {
      const filePath = this.getMarkdownName(path);
      const res = await axios.get<string>(filePath);
      return {
        content: res.data,
      };
    } catch (e) {
      const error = e as AxiosError;
      return {
        error: {
          message: error.message,
          status: error.response?.status,
        },
      };
    }
  }

  private getMarkdownName(path: string): string {
    if (path.endsWith('/')) {
      return `${path}index${this.config.fileSuffix}`;
    } else {
      return `${path}${this.config.fileSuffix}`;
    }
  }
}
