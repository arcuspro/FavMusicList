import { Spinner } from '@/src/components';
import { HomePage } from '@/src/components/pages/HomePage';
import { makeStaticProps } from '@/src/lib/getStatic';
import { useTranslationRedirect  } from '@/src/lib/redirect';
import { colors } from '@/src/styles';

const Index = () => {
  const { loading } = useTranslationRedirect();

  if (loading) return <Spinner color={colors.white} spinSize={3} size={28} />;

  return <HomePage />;
};

export const getStaticProps = makeStaticProps(['common'], true);

export default Index;
