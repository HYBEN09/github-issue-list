import { styled } from 'styled-components';

const HeaderStyle = styled.header`
  position: fixed;
  background: #02343f;
  color: #f0edcc;
  font-weight: 800;
  width: 100%;
  margin: auto;
  display: flex;
  gap: 0.4rem;
  justify-content: center;
  font-size: 2rem;
  padding: 1rem 0;
  z-index: 100;
`;

const Header = () => {
  return (
    <HeaderStyle>
      <h1>facebook</h1>
      <span>/</span>
      <h2>react</h2>
    </HeaderStyle>
  );
};

export default Header;
