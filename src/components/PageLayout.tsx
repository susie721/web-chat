import {useTranslations} from 'next-intl';
import Head from 'next/head';
import {ReactNode} from 'react';

type Props = {
  children?: ReactNode;
  title: string;
};

export default function PageLayout({children, title}: Props) {
  // const t = useTranslations('PageLayout');
  return (
    <>
      <Head>
        {/* <title>{[title, t('pageTitle')].join(' - ')}</title> */}
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div
        style={{
          padding: 24,
          fontFamily: 'system-ui, sans-serif',
          lineHeight: 1.5
        }}
      >
        <div>
          {children}
        </div>
      </div>
    </>
  );
}
