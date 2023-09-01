import React from 'react';
import { Issue } from '@/@types/global';
import { Link } from 'react-router-dom';
import AdBanner from './Advertisement';
import convertDateToKorean from '@/utils/convertDate';

import {
  IssueComment,
  IssueDate,
  IssueDetails,
  IssueHeader,
  IssueItem,
  IssueNumber,
  IssueTitle,
  IssueUser,
} from './styled';

const IssueListItem: React.FC<{ issue: Issue; index: number }> = ({ issue, index }) => {
  return (
    <div>
      <Link to={`/issue/${issue.number}`} style={{ textDecoration: 'none' }}>
        <IssueItem key={issue.number}>
          <IssueHeader>
            <IssueNumber>#{issue.number}</IssueNumber>
            <IssueTitle>{issue.title}</IssueTitle>
          </IssueHeader>
          <IssueDetails>
            <IssueUser>작성자: {issue.author}</IssueUser>
            <IssueDate>작성일: {convertDateToKorean(issue.createdAt)}</IssueDate>
            <IssueComment>코멘트수: {issue.comments}</IssueComment>
          </IssueDetails>
        </IssueItem>
      </Link>
      {index % 4 === 3 && <AdBanner />}
    </div>
  );
};

export default IssueListItem;
