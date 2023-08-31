/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';

const MarkdownWrapper = styled.div`
  margin-top: 30px;
  line-height: 28px;
  font-size: 18px;
`;

interface IssuePostProps {
  issue: string;
}
const IssuePost = ({ issue }: IssuePostProps) => {
  console.log(issue);
  return (
    <MarkdownWrapper>
      <ReactMarkdown>{issue}</ReactMarkdown>
    </MarkdownWrapper>
  );
};

export default IssuePost;
