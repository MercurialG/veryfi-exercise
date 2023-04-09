import Spinner from "./Spinner";

const DataDisplay = ({ loading, receiptData }) => {
  return (
    <div className="dataDisplay">
      {loading == true ? (
        <Spinner />
      ) : receiptData ? (
        <div>
          <pre>
            <code>{JSON.stringify(receiptData, null, 2)}</code>
          </pre>
        </div>
      ) : (
        <p className="font-mono font-bold text-lg text-center justify-self-center mt-[37vh] p-2">
          Upload a receipt and you will see your data here
        </p>
      )}
    </div>
  );
};

export default DataDisplay;
