import React from 'react';
import { Issue } from '@/@types/global';
import { Link } from 'react-router-dom';
import AdBanner from './Advertisement';
import convertDateToKorean from '@/utils/convertDate';
import { IssueDate, IssueDetails, IssueHeader, IssueItem, IssueTitle } from './styled';

const AD_BANNER_INTERVAL = 4;

const IssueListItem: React.FC<{ issue: Issue; index: number }> = ({ issue, index }) => {
  return (
    <div>
      <Link to={`/issue/${issue.number}`} style={{ textDecoration: 'none' }}>
        <IssueItem key={issue.number}>
          <IssueHeader>
            <p>#{issue.number}</p>
            <IssueTitle>{issue.title}</IssueTitle>
          </IssueHeader>
          <IssueDetails>
            <p>
              <b>작성자:</b> {issue.author}
            </p>
            <IssueDate>
              <b>작성일:</b> {convertDateToKorean(issue.createdAt)}
            </IssueDate>
            <p>
              <b>코멘트수:</b> {issue.comments}
            </p>
          </IssueDetails>
        </IssueItem>
      </Link>
      {index % AD_BANNER_INTERVAL === AD_BANNER_INTERVAL - 1 && <AdBanner />}
    </div>
  );
};

export default IssueListItem;
