import { styled } from 'styled-components';

export const IssueListContainer = styled.section`
  position: relative;
  max-width: 800px;
  max-height: 100%;
  margin: 0 auto;
  padding: 130px 20px 20px;
`;
export const IssueListContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
`;

export const IssueHeaderTitle = styled.h1`
  text-align: center;
  padding-bottom: 10px;
  font-size: 24px;
  font-weight: 700;
  margin-top: 100px;
`;

// IssueListItem
export const IssueItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #000;
  border-radius: 6px;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
`;

export const IssueHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  text-decoration: none;
  font-weight: 700;
`;

export const IssueTitle = styled.p`
  flex: 1;
  margin-left: 10px;
`;

export const IssueDetails = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const IssueDate = styled.p`
  margin-left: 10px;
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

export const LoadingContainer = styled.div`
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  margin: 20px;
`;
