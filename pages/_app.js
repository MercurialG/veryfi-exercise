import { LoadingWrapper } from "../context/loadingState";
import { ReceiptWrapper } from "../context/receiptState";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <ReceiptWrapper>
      <LoadingWrapper>
        <Component {...pageProps} />
      </LoadingWrapper>
    </ReceiptWrapper>
  );
}

export default MyApp;
