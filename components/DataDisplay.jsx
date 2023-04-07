import { useReceiptContext } from "../context/state";

const DataDisplay = () => {
  const { receiptData, setReceiptData } = useReceiptContext();

  return (
    <div className="w-[80%] h-[80vh] overflow-scroll bg-[#DDE4E4] rounded-md mt-3 mb-5 text-sm md:text-md">
      <pre>
        <code>{JSON.stringify(receiptData, null, 2)}</code>
      </pre>
    </div>
  );
};

export default DataDisplay;
