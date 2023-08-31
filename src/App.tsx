import AppRoutes from './routes';
import { RecoilRoot } from 'recoil';
import GlobalStyle from './GlobalStyle';

const App = () => {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <AppRoutes />
    </RecoilRoot>
  );
};

export default App;
