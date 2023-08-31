import IssueList from '@/components/Issue/IssueList';
import Header from '@/layout/Header';

const HomePage = () => {
  return (
    <div>
      <Header />
      <IssueList repository={''} />
    </div>
  );
};

export default HomePage;
