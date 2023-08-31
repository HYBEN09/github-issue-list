/* eslint-disable react/no-children-prop */
import ReactMarkdown from 'react-markdown';
import styled from 'styled-components';
import remarkGfm from 'remark-gfm';

const MarkdownWrapper = styled.div`
  margin-top: 30px;
  line-height: 28px;
  font-size: 18px;
`;

interface IssuePostProps {
  content: string;
}
const IssuePost = ({ content }: IssuePostProps) => {
  return (
    <MarkdownWrapper>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </MarkdownWrapper>
  );
};

export default IssuePost;
