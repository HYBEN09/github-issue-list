import styled from 'styled-components';

const LoadingSpinnerContainer = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: translateY(120%);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const LoadingSpinner = () => {
  return (
    <LoadingSpinnerContainer>
      <img src="/assets/loading.svg" alt="" />
    </LoadingSpinnerContainer>
  );
};

export default LoadingSpinner;
