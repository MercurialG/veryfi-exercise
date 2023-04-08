import React from "react";
import Image from "next/image";
import Link from "next/link";
import Spinner from "./Spinner";
import { useReceiptContext } from "../context/receiptState";
import { useLoadingContext } from "../context/loadingState";

function ReceiptDisplay() {
  const { receiptData } = useReceiptContext(); // Using data from context in ../context/state.js
  const { loading } = useLoadingContext(); // Loading state used for conditional rendering

  const receipts = receiptData.map((item) => (
    <div
      className="h-[80vh] w-[80%]
      p-5 list-none border-solid border-white-500 border-[2px] 
      rounded-md bg-[#DDE4E4] shadow-md overflow-scroll transition-all duration-500 ease-in-out"
      key={item.id}
    >
      <p className="text-[12px] mb-2">{item.date}</p>
      <div className="flex flex-col items-center justify-center">
        {item.vendor?.logo && (
          <Image
            className="mx-auto mb-1 border-solid border-grey-400 border-[1px] rounded-full"
            height={100}
            width={100}
            alt="logo"
            src={item.vendor.logo}
          />
        )}
        <p className=" text-md text-center mb-1">{item.vendor.name}</p>
        <p className=" text-xs text-center mb-1">{item.vendor.address}</p>
        {item.vendor.map_url && (
          <Link
            className="text-sm self-center font-bold mb-1 text-green-600"
            href={item.vendor.map_url}
          >
            Show on map
          </Link>
        )}
      </div>
      <div>
        <table className="table-fixed w-full divide-y divide-black mb-5 border-b-[1px] border-black">
          <thead className="text-sm">
            <tr>
              <th>Item</th>
              <th>Amount</th>
              <th>Price</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody className="text-[12px]">
            {item.line_items?.map((el) => {
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
      <div className="receiptField text-right">
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
    <div>
      {loading ? (
        <Spinner />
      ) : (
        <div className="flex justify-center pb-5 md:pb-0 mt-3">{receipts}</div>
      )}
    </div>
  );
}

export default ReceiptDisplay;
