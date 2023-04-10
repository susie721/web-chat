import {GetStaticPropsContext} from 'next';
import {useTranslations} from 'next-intl';
// import LocaleSwitcher from '@/components/LocaleSwitcher';
import PageLayout from '@/components/PageLayout';
export default function Index() {
  const t = useTranslations('Index');
  return (
    <PageLayout title={''}>
      dd
      <p>{t('title')}</p>
      {/* <LocaleSwitcher /> */}
    </PageLayout>
  );
}
export async function getStaticProps({locale}: GetStaticPropsContext) {
  return {
    props: {
      messages: (await import(`../../messages/${locale}/index.json`)).default
    }
  };
}
