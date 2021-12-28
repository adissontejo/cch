import GlobalStyles from '~/styles/global';
import { ThemeProvider } from '~/styles/theme';
import { Navbar } from '~/components';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <GlobalStyles />
    <Navbar />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
