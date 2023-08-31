import { Octokit } from '@octokit/rest';
import { API_URL } from '@/constants/config';
import { Issue, IssueDetail } from '@/@types/global';

const ACCESS_TOKEN = process.env.GITHUB_ACCESS_TOKEN;

const octokit = new Octokit({
  auth: `token ${ACCESS_TOKEN}`,
});

const fetchIssues = async (params?: { page: number }): Promise<Issue[]> => {
  try {
    const response = await octokit.rest.issues.listForRepo({
      owner: API_URL.organization,
      repo: API_URL.repository,
      state: 'open',
      sort: 'comments',
      ...params,
    });

    const data = response.data.map((issue) => ({
      id: issue.id,
      title: issue.title,
      number: issue.number,
      comments: issue.comments,
      author: issue.user?.login,
      createdAt: issue.created_at,
    }));

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to fetch issues: ${error.message}`);
    }
    throw error;
  }
};

const fetchIssueDetail = async (issueNumber: number): Promise<IssueDetail | undefined> => {
  try {
    const response = await octokit.rest.issues.get({
      owner: API_URL.organization,
      repo: API_URL.repository,
      issue_number: issueNumber,
    });

    const data = {
      body: response.data.body,
      title: response.data.title,
      number: response.data.number,
      comments: response.data.comments,
      createdAt: response.data.created_at,
      authorName: response.data.user?.login,
      authorAvatar: response.data.user?.avatar_url,
    };

    return data;
  } catch (error) {
    if (error instanceof Error) {
      console.error(`Failed to fetch issue details for #${issueNumber}: ${error.message}`);
    }
    throw error;
  }
};

export { fetchIssues, fetchIssueDetail };
