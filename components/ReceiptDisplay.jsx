import React from "react";
import Image from "next/image";
import Link from "next/link";
import Spinner from "./Spinner";

function ReceiptDisplay({ isLoading, receiptData }) {
  const receipts = receiptData?.map((item) => (
    <div className="p-5" key={item.id}>
      <p className="text-[12px] mb-2">{item.date}</p>
      <div className="flex flex-col items-center justify-center">
        {item.vendor.logo && (
          <Image
            className="mx-auto mb-1 border-solid border-grey-400 border-[1px] rounded-full"
            height={100}
            width={100}
            alt={item.vendor.name + " logo"}
            src={item.vendor.logo}
          />
        )}
        {item.vendor.name && (
          <p className=" text-md text-center mb-1">{item.vendor.name}</p>
        )}
        {item.vendor.address && (
          <p className=" text-xs text-center mb-1">{item.vendor.address}</p>
        )}
        {item.vendor.map_url && (
          <Link
            className="text-sm self-center font-bold mb-1 text-green-600"
            href={item.vendor.map_url}
            title={`Show ${item.vendor.name} on map`}
          >
            Show on map
          </Link>
        )}
      </div>
      <div>
        <table
          className="table-fixed text-center w-full divide-y divide-black mb-5 border-b-[1px] border-black"
          summary="Receipt main data: items, amount, prices and total"
        >
          <thead className="text-sm">
            <tr>
              <th>Item</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className="text-[12px]">
            {item.line_items.map((el) => {
              return (
                <tr key={el.id}>
                  <td className="text-[10px]">{el.description}</td>
                  <td>{el.quantity}</td>
                  <td>{el.price}</td>
                  <td>{el.total}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <div className="receiptItem-field">
        <p>
          {item.subtotal &&
            `Subtotal (${item.currency_code}): ${item.subtotal}`}
        </p>
        {item.discount && (
          <p>{`Discount (${item.currency_code}): -${item.discount}`}</p>
        )}
        <p>{item.tax && `Tax (${item.currency_code}): ${item.tax}`}</p>
        {item.tip && <p>{`Tip (${item.currency_code}): ${item.tip}`}</p>}
        <p>{item.total && `Total (${item.currency_code}): ${item.total}`}</p>
      </div>
    </div>
  ));

  return (
    <div className="dataDisplay">
      {isLoading ? (
        <Spinner />
      ) : receiptData ? (
        <div className="flex justify-center pb-5 md:pb-0 mt-3">{receipts}</div>
      ) : (
        <p className="font-mono font-bold text-lg text-center justify-self-center mt-[37vh] p-2">
          Upload a receipt and you will see your data here
        </p>
      )}
    </div>
  );
}

export default ReceiptDisplay;
