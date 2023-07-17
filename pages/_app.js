import "../styles/globals.css";
import { QuioscoProvider } from "../context/QuioscoProvider";
import { useEffect, useState } from "react";

export default function App({ Component, pageProps }) {
  const [paginaLista, setPaginaLista] = useState(false);

  useEffect(() => {
    setPaginaLista(true);
  }, []);

  return paginaLista ? (
    <QuioscoProvider>
      <Component {...pageProps} />
    </QuioscoProvider>
  ) : null;
}
