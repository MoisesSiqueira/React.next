import { useEffect } from "react";
import { AppProps } from "next/app";
import "@fontsource/inter"; // Importa a fonte Inter do @fontsource

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove o estilo de fonte padrão do Next.js para evitar FOUC (Flash of Unstyled Content)
    const jssStyles = document.querySelector("#jss-server-side");
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
