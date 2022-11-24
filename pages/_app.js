import "../styles/globals.css";

// 1. import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import { AuthContextProvider } from "../context/AuthContext";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous"/>
    </Head>
    <NextUIProvider>
      <AuthContextProvider>
        <Component {...pageProps} />
      </AuthContextProvider>
    </NextUIProvider>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-OERcA2EqjJCMA+/3y+gxIOqMEjwtxJY7qPCqsdltbNJuaOe923+mo//f6V8Qbsw3" crossorigin="anonymous"></script>
    </>
  );
}

export default MyApp;
