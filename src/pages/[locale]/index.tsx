import { getStaticPaths, makeStaticProps } from '@/src/lib/getStatic';
import { HomePage } from '@/src/components/pages/HomePage';

const Index = (props: any) => {
  return <HomePage />;
};

const getStaticProps = makeStaticProps(['homepage', 'common']);
export { getStaticPaths, getStaticProps };

export default Index;
