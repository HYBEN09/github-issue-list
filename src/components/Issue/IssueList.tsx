import React, { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { getIssues } from '../../api/issue';
import { issuesState } from '../../@recoil/issueState';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { IssueListContainer, IssueListContent } from './styled';
import IssueListItem from './IssueListItem';
import { loadingState } from '../../@recoil/loadingState';
import LoadingSpinner from '../Spinner/LoadingSpinner';

const IssueList: React.FC = () => {
  const [issues, setIssues] = useRecoilState(issuesState);
  const [isLoading, setIsLoading] = useRecoilState(loadingState);

  const currentPageRef = useRef(1);

  const fetchMoreIssues = async () => {
    try {
      currentPageRef.current += 1;
      setIsLoading(true);
      const newIssues = await getIssues({ page: currentPageRef.current });
      setIssues((prevIssues) => [...prevIssues, ...newIssues]);
    } catch (error) {
      console.error('Error fetching more issues:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const targetRef = useInfiniteScroll(fetchMoreIssues);

  useEffect(() => {
    async function fetchIssues() {
      try {
        setIsLoading(true);
        const data = await getIssues({ page: 1 });
        setIssues(data);
      } catch (error) {
        console.error('Error fetching issues:', error);
      } finally {
        setIsLoading(false);
      }
    }

    fetchIssues();
  }, [setIssues, setIsLoading]);

  return (
    <IssueListContainer>
      {isLoading && <LoadingSpinner />}
      <IssueListContent>
        {issues.map((issue, index) => (
          <IssueListItem key={issue.number} issue={issue} index={index} />
        ))}
        <div ref={targetRef}></div>
      </IssueListContent>
    </IssueListContainer>
  );
};

export default IssueList;
