export interface Issue {
  id: number;
  title: string;
  number: number;
  comments: number;
  createdAt: string;
  author: string | undefined;
}

export interface IssueDetail {
  title: string;
  number: number;
  comments: number;
  createdAt: string;
  authorName: string | undefined;
  body: string | undefined | null;
  authorAvatar: string | undefined;
}
