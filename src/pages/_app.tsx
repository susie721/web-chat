import {NextIntlProvider} from 'next-intl';
import {AppProps} from 'next/app';
import { Provider } from 'react-redux';
import {store} from '@/store';
import { SWRConfig } from 'swr';
import fetchJson from '@/lib/fetchJson'
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { Inter } from 'next/font/google';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Box from '@mui/material/Box';
import LoginModal from '@/components/modals/LoginModal';
import '@/styles/globals.css'

const inter = Inter({ subsets: ['latin'] });

 const App = ({Component, pageProps}: AppProps) => {
  return (
    <SWRConfig
    value={{
      fetcher: fetchJson,
      onError: (err) => {
        console.error(err)
      },
    }}
    >
      <NextIntlProvider messages={pageProps.messages}>
        <Provider store={store}>
          <Box sx={{ display: 'flex', height: '100%' }}>
            <Header></Header>
            <Sidebar></Sidebar>
            <Box component="main" sx={{ flexGrow: 1, p: {xs: 0, sm: 0}, pt: 0, height: '100%' }}>
              <Toolbar />
              <Container disableGutters maxWidth={false} className="container" sx={{height: 'calc(100% - 64px)'}}>
                <Component className={inter.className} {...pageProps} />
              </Container>
            </Box>
          </Box>
          <LoginModal/>
        </Provider>
      </NextIntlProvider>
    </SWRConfig>
  );
}
export default App;
