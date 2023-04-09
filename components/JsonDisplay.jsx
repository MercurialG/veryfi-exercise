import Spinner from "./Spinner";

const DataDisplay = ({ isLoading, receiptData }) => {
  return (
    <div className="dataDisplay">
      {isLoading ? (
        <Spinner aria-label="Loading..." />
      ) : receiptData ? (
        <div>
          <pre aria-label="Receipt data in JSON format">
            <code>{JSON.stringify(receiptData, null, 2)}</code>
          </pre>
        </div>
      ) : (
        <p
          className="font-mono font-bold text-lg text-center justify-self-center mt-[37vh] p-2"
          role="status"
          aria-live="polite"
        >
          Upload a receipt and you will see your data here
        </p>
      )}
    </div>
  );
};

export default DataDisplay;
