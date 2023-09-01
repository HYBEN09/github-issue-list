import { Issue } from '@/@types/global';
import { useRecoilState } from 'recoil';
import { fetchIssues } from '@/api/issue';
import IssueListItem from './IssueListItem';
import React, { useEffect, useState } from 'react';
import { issuesState } from '@/@recoil/issueState';
import { loadingState } from '@/@recoil/loadingState';
import LoadingSpinner from '../Spinner/LoadingSpinner';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';
import { IssueListContainer, IssueListContent, LoadingContainer } from './styled';

const IssueList: React.FC<{ repository: string }> = ({ repository }) => {
  const [issues, setIssues] = useRecoilState(issuesState);
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  const [currentPage, setCurrentPage] = useState(1);
  const [isFetchingMore, setIsFetchingMore] = useState(false);

  const fetchMoreIssues = async () => {
    if (isFetchingMore) return;
    try {
      setIsFetchingMore(true);
      const data = await fetchIssues({ page: currentPage + 1 });
      setIssues((prevIssues) => [...prevIssues, ...data]);
      setCurrentPage((prevPage) => prevPage + 1);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingMore(false);
    }
  };

  const targetRef = useInfiniteScroll(fetchMoreIssues);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const data = await fetchIssues({ page: 1 });
        setIssues(data);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, [repository]);

  return (
    <IssueListContainer>
      {isLoading && <LoadingSpinner />}
      <IssueListContent>
        {issues.map((issue: Issue, index) => (
          <IssueListItem key={index} issue={issue} index={index} />
        ))}
        {isFetchingMore && (
          <LoadingContainer>
            <img src="/assets/loading.svg" alt="로딩 중..." width={50} height={50} />
          </LoadingContainer>
        )}
        <div ref={targetRef}></div>
      </IssueListContent>
    </IssueListContainer>
  );
};

export default IssueList;
