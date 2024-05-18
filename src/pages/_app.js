import Header from "@/components/header";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <div>
    {/* <Header/> */}
    <Component {...pageProps} />
    </div>
}
