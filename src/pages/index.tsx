import { HomePage } from '@/src/components/pages/HomePage';
import { makeStaticProps } from '@/src/lib/getStatic';
import { useTranslationRedirect } from '@/src/lib/redirect';

const Index = () => {
  const { loading } = useTranslationRedirect();

  if (loading) return <></>;

  return <HomePage />;
};

export const getStaticProps = makeStaticProps(['homepage', 'common'], true);

export default Index;
