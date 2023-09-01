import IssueList from '@/components/Issue/IssueList';
import Header from '@/layout/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <IssueList repository={'1'} />
    </div>
  );
};

export default HomePage;
