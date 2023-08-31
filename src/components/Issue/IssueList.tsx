import React, { useEffect, useState } from 'react';
import { fetchIssues } from '@/api/issue';
import { Issue } from '@/@types/global';
import { IssueListContainer, IssueListContent } from './styled';
import { loadingState } from '@/@recoil/loadingState';
import { useRecoilState } from 'recoil';
import LoadingSpinner from '../Spinner/LoadingSpinner';
import IssueListItem from './IssueListItem';
import useInfiniteScroll from '../../hooks/useInfiniteScroll';

const IssueList: React.FC<{ repository: string }> = ({ repository }) => {
  const [issues, setIssues] = useState<Issue[]>([]);
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
  }, [repository, setIsLoading]);

  return (
    <IssueListContainer>
      {isLoading && <LoadingSpinner />}
      <IssueListContent>
        {issues.map((issue: Issue, index) => (
          <IssueListItem key={index} issue={issue} index={index} />
        ))}
        {isFetchingMore && <div>로딩 중...</div>}
        <div ref={targetRef}></div>
      </IssueListContent>
    </IssueListContainer>
  );
};

export default IssueList;
