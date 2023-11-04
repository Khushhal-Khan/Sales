import { Inter } from "next/font/google";
import "./globals.css";
import { AppProvider } from "./account/Context";

const MyApp = ({ Component, pageProps }) => {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
};

export default MyApp;
