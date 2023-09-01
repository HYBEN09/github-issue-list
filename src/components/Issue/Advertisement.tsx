import { styled } from 'styled-components';

const AdImage = styled.div`
  margin: 10px auto;
  padding: 10px;
`;

const AdButton = styled.button`
  display: inline-block;
  text-decoration: none;
  width: 100%;
  padding: 8px;
  border-radius: 5px;
  transition:
    background-color 0.3s ease,
    box-shadow 0.3s ease;
  background-color: transparent;
  cursor: pointer;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border: none;

  &:hover {
    background-color: #f0edcc;
  }
`;

const AdImageWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Advertisement = () => {
  const adImages = [
    {
      url: 'https://image.wanted.co.kr/optimize?src=https%3A%2F%2Fstatic.wanted.co.kr%2Fimages%2Fuserweb%2Flogo_wanted_black.png&w=110&q=100',
      alt: 'Wanted(원티드)',
      link: 'https://www.wanted.co.kr/',
    },
  ];

  return (
    <AdImage>
      {adImages.map((ad, index) => (
        <AdButton key={index} onClick={() => window.open(ad.link, '_blank', 'noopener noreferrer')}>
          <AdImageWrapper>
            <img src={ad.url} alt={ad.alt} width="110" height="auto" />
          </AdImageWrapper>
        </AdButton>
      ))}
    </AdImage>
  );
};

export default Advertisement;
