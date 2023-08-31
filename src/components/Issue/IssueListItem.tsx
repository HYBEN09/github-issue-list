import React from 'react';
import { Link } from 'react-router-dom';
import Advertisement from './Advertisement';
import convertDateToKorean from '../../utils/convertDate';

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

interface IssueListItemProps {
  issue: {
    number: number;
    title: string;
    user: {
      login: string;
    };
    created_at: string;
    comments: number;
  };
  index: number;
}

const IssueListItem: React.FC<IssueListItemProps> = ({ issue, index }) => {
  return (
    <div>
      <Link to={`/issue/${issue.number}`}>
        <IssueItem key={issue.number}>
          <IssueHeader>
            <IssueNumber>#{issue.number}</IssueNumber>
            <IssueTitle>{issue.title}</IssueTitle>
          </IssueHeader>
          <IssueDetails>
            <IssueUser>작성자: {issue.user.login}</IssueUser>
            <IssueDate>작성일: {convertDateToKorean(issue.created_at)}</IssueDate>
            <IssueComment>코멘트수: {issue.comments}</IssueComment>
          </IssueDetails>
          {index % 5 === 4 && <Advertisement />}
        </IssueItem>
      </Link>
    </div>
  );
};

export default IssueListItem;
