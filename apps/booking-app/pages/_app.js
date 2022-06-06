import '../styles/globals.scss';

const NoProvider = ({ children }) => <>{children}</>;

function MyApp({ Component, pageProps }) {
  const ContextProvider = Component.provider || NoProvider;
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}

export default MyApp;
