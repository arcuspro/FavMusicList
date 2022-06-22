import { makeStaticProps, getStaticPaths } from '@/src/lib/getStatic';
import { HomePage } from '@/src/components/pages/HomePage';

const Index = (props: any) => {
  return <HomePage />;
};

const getStaticProps = makeStaticProps(['common']);
export { getStaticPaths, getStaticProps };

export default Index;
