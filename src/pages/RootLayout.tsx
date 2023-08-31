import Header from '../layout/Header';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
  return (
    <>
      <Outlet />
    </>
  );
}

export function BaseLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
}
