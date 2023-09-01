import remarkGfm from 'remark-gfm';
import ReactMarkdown from 'react-markdown';
import { styled } from 'styled-components';

interface IssuePostProps {
  content: string;
}
const IssuePost = ({ content }: IssuePostProps) => {
  return (
    <MarkDownContainer>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
    </MarkDownContainer>
  );
};

const MarkDownContainer = styled.div`
  & h1,
  & h2 {
    padding-bottom: 0.5rem;
    border-bottom: 1px solid rgb(209 213 219);
  }

  & p {
    white-space: pre-wrap;
  }

  & p > code {
    display: inline-block;
    background-color: #eff1f3;
    padding-left: 0.5rem;
    padding-right: 0.5rem;
    border-radius: 0.5rem;
    white-space: normal;
  }

  & p > img {
    max-width: 100%;
  }

  & pre,
  & code {
    display: block;
    margin: 0;
  }

  & pre > code {
    background-color: #f7f6f3;
    padding: 1rem;
    border-radius: 0.125rem;
    white-space: pre-wrap;
  }
`;

export default IssuePost;
