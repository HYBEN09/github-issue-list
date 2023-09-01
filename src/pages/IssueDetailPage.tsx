import { useRecoilState } from 'recoil';
import { styled } from 'styled-components';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { IssueDetail } from '@/@types/global';
import { fetchIssueDetail } from '@/api/issue';
import IssuePost from '@/components/Markdown/IssuePost';
import { loadingState } from '@/@recoil/loadingState';
import convertDateToKorean from '@/utils/convertDate';
import LoadingSpinner from '@/components/Spinner/LoadingSpinner';

const IssueDetailPage = () => {
  const [issue, setIssue] = useState<IssueDetail | undefined>();
  const [isLoading, setIsLoading] = useRecoilState(loadingState);
  const { issueId } = useParams<{ issueId: string }>();

  useEffect(() => {
    if (!issueId) return;

    const fetchDetails = async () => {
      setIsLoading(true);
      try {
        const data = await fetchIssueDetail(Number(issueId));
        setIssue(data);
      } catch (error) {
        console.error(error);
      }
      setIsLoading(false);
    };

    fetchDetails();
  }, [issueId]);

  if (isLoading || !issue) {
    return <LoadingSpinner />;
  }

  return (
    <IssueDetailWrapper>
      <IssueContainer>
        <UserProfileImage>
          <img src={issue.authorAvatar} alt={`프로필 사진: ${issue.authorName}`} />
        </UserProfileImage>
        <IssueInfo>
          <IssueTitle>
            <p>#{issue.number}</p>
            <p>{issue.title}</p>
          </IssueTitle>
          <IssueUser>
            <p>작성자: {issue.authorName}</p>
            <p>작성일: {convertDateToKorean(issue.createdAt)}</p>
          </IssueUser>
        </IssueInfo>
        <IssueComment>
          <p>코멘트: {issue.comments}</p>
        </IssueComment>
      </IssueContainer>
      {issue.body && <IssuePost content={issue.body || ''} />}
    </IssueDetailWrapper>
  );
};

export default IssueDetailPage;

const IssueDetailWrapper = styled.article`
  padding-top: 100px;
  max-width: 800px;
  margin: 0 auto;
`;

const IssueContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border-bottom: 1px solid #02343f;
  padding-bottom: 18px;
  margin-top: 24px;
`;

const UserProfileImage = styled.div`
  img {
    width: 100px;
    border-radius: 12px;
  }
`;

const IssueInfo = styled.section`
  flex: 1;
  display: flex;
  flex-flow: column;
  margin-left: 14px;
`;

const IssueTitle = styled.div`
  display: flex;
  align-items: center;
  width: 570px;
  gap: 12px;
  margin-top: 24px;
  font-size: 18px;
  font-weight: 600;
  margin-left: 14px;
`;

const IssueUser = styled.div`
  display: flex;
  align-items: center;
  margin-left: 16px;
  margin-top: 16px;
  gap: 24px;
  font-size: 15px;
`;

const IssueComment = styled.div`
  flex: 1;
  margin-top: 48px;
  font-weight: 500;
`;
