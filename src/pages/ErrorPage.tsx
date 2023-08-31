import Header from '@/layout/Header';
import styled from 'styled-components';

const ErrorPageWrapper = styled.div`
  position: absolute;
  text-align: center;
  padding: 105px 39px;
  background-color: #f7c3c8;
  border-radius: 5px;
  top: 25%;
  right: 30%;
  font-size: 20px;
`;

const ErrorPageTitle = styled.h1`
  font-size: 24px;
  color: #8e1a1a;
  margin-bottom: 14px;
  font-weight: 700;
`;

const ErrorPageMessage = styled.p`
  color: #8e1a1a;
  font-weight: 600;
  margin-top: 25px;
`;

const ErrorPage = () => {
  return (
    <>
      <Header />
      <ErrorPageWrapper>
        <ErrorPageTitle>Oops! An error occurred.</ErrorPageTitle>
        <ErrorPageMessage>죄송합니다. 데이터를 로드할 수 없습니다.🥲</ErrorPageMessage>
      </ErrorPageWrapper>
    </>
  );
};

export default ErrorPage;
