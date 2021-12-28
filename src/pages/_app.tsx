import GlobalStyles from '~/styles/global';
import { ThemeProvider } from '~/styles/theme';

const MyApp = ({ Component, pageProps }) => (
  <ThemeProvider>
    <GlobalStyles />
    <Component {...pageProps} />
  </ThemeProvider>
);

export default MyApp;
