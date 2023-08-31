import { styled } from 'styled-components';

export const IssueListContainer = styled.section`
  position: relative;
  max-width: 800px;
  max-height: 100%;
  margin: 0 auto;
  padding: 100px 20px 20px;
`;
export const IssueListContent = styled.div`
  background-color: #fff;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const IssueHeaderTitle = styled.h1`
  text-align: center;
  padding-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  margin-top: 100px;
`;

export const IssueItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const IssueHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 14px;
`;

export const IssueNumber = styled.div`
  font-weight: bold;
`;

export const IssueTitle = styled.p`
  flex: 1;
  margin-left: 10px;
`;

export const IssueDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-bottom: 1px solid #ccc;
  padding-bottom: 14px;
  margin-bottom: 14px;
`;

export const IssueUser = styled.p`
  font-weight: bold;
`;

export const IssueDate = styled.p`
  margin-left: 10px;
`;

export const IssueComment = styled.p`
  font-weight: bold;
`;

export const loadingOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;
