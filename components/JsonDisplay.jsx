import Spinner from "./Spinner";
import { useReceiptContext } from "../context/receiptState";
import { useLoadingContext } from "../context/loadingState";

const JsonDisplay = () => {
  const { receiptData } = useReceiptContext(); // Using data from context in ../context/state.js
  const { loading } = useLoadingContext(); // Loading state used for conditional rendering
  return (
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="dataDisplay">
          <pre>
            <code>{JSON.stringify(receiptData, null, 2)}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default JsonDisplay;
