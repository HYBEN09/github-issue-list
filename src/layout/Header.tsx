import { styled } from 'styled-components';

const HeaderStyle = styled.header`
  position: fixed;
  background: #02343f;
  color: #f0edcc;
  font-weight: 800;
  width: 100%;
  height: 80px;
  margin: auto;
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  align-items: center;
  font-size: 28px;
  padding: 1rem 0;
  z-index: 10000;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h2>facebook /</h2>
      <h2>react</h2>
    </HeaderStyle>
  );
};

export default Header;
