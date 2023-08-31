import React, { useEffect, useState } from 'react';
import { fetchIssues } from '@/api/issue';
import { Issue } from '@/@types/global';
import { IssueListContainer, IssueListContent } from './styled';
import { loadingState } from '@/@recoil/loadingState';
import { useRecoilState } from 'recoil';
import LoadingSpinner from '../Spinner/LoadingSpinner';

import IssueListItem from './IssueListItem';

const IssueList: React.FC<{ repository: string }> = ({ repository }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  useEffect(() => {
    fetchIssues({ page: 1 })
      .then((data: Issue[]) => setIssues(data))
      .catch((error: Error) => console.error(error));
  }, [repository]);

  return (
    <IssueListContainer>
      {isLoading && <LoadingSpinner />}
      <IssueListContent>
        {issues.map((issue: Issue, index) => (
          <IssueListItem key={issue.id} issue={issue} index={index} />
        ))}
      </IssueListContent>
    </IssueListContainer>
  );
};

export default IssueList;
