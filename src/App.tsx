import { RecoilRoot } from 'recoil';
import GlobalStyle from './GlobalStyle';
import AppRoutes from './routes';

function App() {
  return (
    <RecoilRoot>
      <GlobalStyle />
      <AppRoutes />
    </RecoilRoot>
  );
}

export default App;
