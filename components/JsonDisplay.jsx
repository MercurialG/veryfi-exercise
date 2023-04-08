import Spinner from "./Spinner";
import { useReceiptContext } from "../context/receiptState";
import { useLoadingContext } from "../context/loadingState";

const DataDisplay = () => {
  const { receiptData } = useReceiptContext(); // Using data from context in ../context/state.js
  const { loading } = useLoadingContext(); // Loading state used for conditional rendering
  return (
    <div className="dataDisplay">
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <pre>
            <code>{JSON.stringify(receiptData, null, 2)}</code>
          </pre>
        </div>
      )}
    </div>
  );
};

export default DataDisplay;
