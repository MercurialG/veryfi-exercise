import React from "react";

// const testData = [

//   {
//     account_number: "0053",
//     bill_to: {
//       address: null,
//       email: null,
//       name: null,
//       parsed_address: null,
//       phone_number: null,
//       reg_number: null,
//     },
//     category: "Job Supplies",
//     created_date: "2023-04-04 03:49:59",
//     currency_code: "USD",
//     date: "2023-03-28 13:10:00",
//     default_category: "Job Supplies",
//     delivery_date: null,
//     discount: 1.2,
//     document_reference_number: "0329-6224-7823-2205-2403",
//     document_title: null,
//     document_type: "receipt",
//     due_date: null,
//     duplicate_of: 129036400,
//     external_id: null,
//     id: 129036435,
//     img_file_name: "129036435.jpeg",
//     img_thumbnail_url:
//       "https://cdn.veryfi.com/receipts/a97b60d6266cfadf/f1ca4dbc-2d19-4c86-9ee4-20c187149f78/thumbnail.jpeg",
//     img_url:
//       "https://cdn.veryfi.com/receipts/a97b60d6266cfadf/f1ca4dbc-2d19-4c86-9ee4-20c187149f78/8120b309-56db-4201-840b-15fbd2fcbb50.jpeg",
//     incoterms: null,
//     insurance: null,
//     invoice_number: "4782",
//     is_blurry: [],
//     is_document: true,
//     is_duplicate: true,
//     is_money_in: false,
//     line_items: [
//       {
//         date: null,
//         description: "RED BULL ENERGY DRINK CNS 8.4OZ 6PK",
//         discount: 1.2,
//         discount_rate: null,
//         id: 303676895,
//         order: 0,
//         price: 9.99,
//         quantity: 1,
//         reference: null,
//         section: null,
//         sku: "61126943157",
//         tax: null,
//         tax_rate: null,
//         text: "RED BULL ENRGY DRNK CNS 8.4OZ 6PK\n611269431578.79 SALE\nREGULAR PRICE 9.99\nMYWALGREENS SAVINGS 1.20",
//         total: 8.79,
//         type: "food",
//         unit_of_measure: null,
//         weight: null,
//       },
//       {
//         date: null,
//         description: "CA REDMP VAL",
//         discount: null,
//         discount_rate: null,
//         id: 303676896,
//         order: 1,
//         price: null,
//         quantity: 1,
//         reference: null,
//         section: null,
//         sku: "00000007211",
//         tax: null,
//         tax_rate: null,
//         text: "CA REDMP VAL\n00000007211\t0.30",
//         total: 0.3,
//         type: "product",
//         unit_of_measure: null,
//         weight: null,
//       },
//       {
//         date: null,
//         description: "COCA COLA MINICAN 7.5Z 6PK",
//         discount: null,
//         discount_rate: null,
//         id: 303676897,
//         order: 2,
//         price: null,
//         quantity: 1,
//         reference: null,
//         section: null,
//         sku: "04900006101",
//         tax: null,
//         tax_rate: null,
//         text: "COCA COLA MINICAN 7.5Z 6PK\n049000061014.99 SALE",
//         total: 4.99,
//         type: "food",
//         unit_of_measure: null,
//         weight: null,
//       },
//       {
//         date: null,
//         description: "CA REDMP VAL",
//         discount: null,
//         discount_rate: null,
//         id: 303676898,
//         order: 3,
//         price: null,
//         quantity: 1,
//         reference: null,
//         section: null,
//         sku: "00000007211",
//         tax: null,
//         tax_rate: null,
//         text: "CA REDMP VAL\n00000007211\t0.30",
//         total: 0.3,
//         type: "product",
//         unit_of_measure: null,
//         weight: null,
//       },
//       {
//         date: null,
//         description: "NAB OREO CKIES C/PK 5.25OZ WHSE",
//         discount: null,
//         discount_rate: null,
//         id: 303676899,
//         order: 4,
//         price: null,
//         quantity: 1,
//         reference: null,
//         section: null,
//         sku: "04400000749",
//         tax: null,
//         tax_rate: null,
//         text: "NAB OREO CKIES C/PK 5.25OZ WHSE\n04400000749\t2.69",
//         total: 2.69,
//         type: "food",
//         unit_of_measure: null,
//         weight: null,
//       },
//       {
//         date: null,
//         description: "DORITOS NACHO",
//         discount: null,
//         discount_rate: null,
//         id: 303676900,
//         order: 5,
//         price: 2.19,
//         quantity: 1,
//         reference: null,
//         section: null,
//         sku: "02840032505",
//         tax: null,
//         tax_rate: null,
//         text: "DORITOS NACHO\n02840032505\t2.00\n1 @ 2.19 or 2/4.00",
//         total: 2,
//         type: "food",
//         unit_of_measure: null,
//         weight: null,
//       },
//       {
//         date: null,
//         description: "F/LAYS REGULAR 2.63OZ",
//         discount: null,
//         discount_rate: null,
//         id: 303676901,
//         order: 6,
//         price: 2.19,
//         quantity: 1,
//         reference: null,
//         section: null,
//         sku: "02840032382",
//         tax: null,
//         tax_rate: null,
//         text: "F/LAYS REGULAR 2.63OZ\n02840032382\t2.00\n1 @ 2.19 or 2/4.00",
//         total: 2,
//         type: "food",
//         unit_of_measure: null,
//         weight: null,
//       },
//       {
//         date: null,
//         description: "SCOTCH BRITE H/D KITCHEN SPONGE 3S",
//         discount: null,
//         discount_rate: null,
//         id: 303676902,
//         order: 7,
//         price: null,
//         quantity: 1,
//         reference: null,
//         section: null,
//         sku: "02120057235",
//         tax: null,
//         tax_rate: null,
//         text: "SCOTCH BRITE H/D KITCHN SPONGE 3S\n021200572354.79",
//         total: 4.79,
//         type: "product",
//         unit_of_measure: null,
//         weight: null,
//       },
//       {
//         date: null,
//         description: "PALMOLIVE DISH OXI POWER\n10OZ",
//         discount: null,
//         discount_rate: null,
//         id: 303676903,
//         order: 8,
//         price: null,
//         quantity: 1,
//         reference: null,
//         section: null,
//         sku: "03500000168",
//         tax: null,
//         tax_rate: null,
//         text: "PALMOLIVE DISH OXI POWER\t10OZ\n035000001681.49",
//         total: 1.49,
//         type: "product",
//         unit_of_measure: null,
//         weight: null,
//       },
//       {
//         date: null,
//         description: "SHOPPING BAG FEE",
//         discount: null,
//         discount_rate: null,
//         id: 303676904,
//         order: 9,
//         price: null,
//         quantity: 1,
//         reference: null,
//         section: null,
//         sku: null,
//         tax: null,
//         tax_rate: null,
//         text: "SHOPPING BAG FEE\t0.25",
//         total: 0.25,
//         type: "fee",
//         unit_of_measure: null,
//         weight: null,
//       },
//     ],
//     meta: {
//       crop_time: 0.57,
//       documents: [
//         {
//           document_type: "receipt",
//           file_type: "jpeg",
//           height: 3373,
//           is_cropped: false,
//           is_document: true,
//           name: "receipt-03-28-23.jpeg",
//           s3_path:
//             "receipts/a97b60d6266cfadf/f1ca4dbc-2d19-4c86-9ee4-20c187149f78/8120b309-56db-4201-840b-15fbd2fcbb50.jpeg",
//           size_kb: 2399,
//           width: 951,
//         },
//       ],
//       owner: "api_demo",
//       processed_pages: 1,
//       source: "api",
//     },
//     notes: null,
//     ocr_text:
//       "Walgreens\n#03296 191 E 3RD AVE\nSAN MATEO, CA 94401\n\t650-342-2723\n117\t4782 0022 05/24/2022 1:10 PM\nRED BULL ENRGY DRNK CNS 8.4OZ 6PK\n61126943157\tA\t8.79 SALE\nREGULAR PRICE 9.99\nMYWALGREENS SAVINGS 1.20\nRETURN VALUE 8.79\nCA REDMP VAL\n00000007211\t0.30\nCOCA COLA MINICAN 7.5Z 6PK\n04900006101\tA\t4.99 SALE\nRETURN VALUE 4.99\nCA REDMP VAL\n00000007211\t0.30\nNAB OREO CKIES C/PK 5.25OZ WHSE\n04400000749\t2.69\nRETURN VALUE 2.69\nDORITOS NACHO\n02840032505\t2.00\n1 @ 2.19 or 2/4.00\nRETURN VALUE 2.00\nF/LAYS REGULAR 2.63OZ\n02840032382\t2.00\n1 @ 2.19 or 2/4.00\nRETURN VALUE 2.00\nSCOTCH BRITE H/D KITCHN SPONGE 3S\n02120057235\tA\t4.79\nRETURN VALUE 4.79\nPALMOLIVE DISH OXI POWER\t10OZ\n03500000168\tA\t1.49\nRETURN VALUE 1.49\nSHOPPING BAG FEE\t0.25\nSUBTOTAL\t\t27.60\nSALES TAX A-9.625%\t1.93\nTOTAL\t\t29.53\nVISA ACCT 1850\t29.53\nAUTH CODE\t798553\nCHANGE\t\t.00\n\nMYWALGREENS SAVINGS loomad\t1.20\nTHANK YOU FOR SHOPPING AT WALGREENS\nREDEEM $1 WALGREENS CASH REWARDS ON YOUR\nNEXT PURCHASE! WALGREENS CASH REWARDS\nCANNOT BE REDEEMED ON SOME ITEMS. FOR\nFULL DETAILS SEE MYWALGREENS.COM\nRFN# 0329-6224-7823-2205-2403\n\n*****\nmyw\nTOTAL SAVINGS\t\t$1.20\nSAVINGS VALUE\t\t4%\n$1.40 W CASH REWARDS AVAILABLE\nmyWalgreens ACCT # *********0053\nOPENING BALANCE\t\t$1.14\nEARNED THIS VISIT\t$0.26\nCLOSING BALANCE\t$1.40",
//     order_date: null,
//     payment: {
//       card_number: "1850",
//       display_name: "Visa ***1850",
//       terms: null,
//       type: "visa",
//     },
//     pdf_url:
//       "https://cdn.veryfi.com/receipts/a97b60d6266cfadf/f1ca4dbc-2d19-4c86-9ee4-20c187149f78/9b48a6a1-807f-469d-b77f-5b4801afb659.pdf",
//     purchase_order_number: null,
//     reference_number: "VBBBA-36435",
//     rounding: null,
//     service_end_date: null,
//     service_start_date: null,
//     ship_date: null,
//     shipping: null,
//     subtotal: 27.6,
//     tags: [],
//     tax: 1.93,
//     tax_lines: [
//       {
//         base: null,
//         name: "SALES",
//         order: 0,
//         rate: 9.625,
//         total: 1.93,
//       },
//     ],
//     tip: null,
//     total: 29.53,
//     total_weight: null,
//     tracking_number: null,
//     updated_date: "2023-04-04 03:50:01",
//     vendor: {
//       abn_number: null,
//       address: "191 E 3Rd Ave, San Mateo, CA 94401",
//       fax_number: null,
//       lat: 37.564947,
//       lng: -122.3234454,
//       logo: "https://cdn.veryfi.com/logos/us/126568182.jpeg",
//       map_url:
//         "https://www.google.com/maps/search/?api=1&query=Walgreens+191+E+3Rd+Ave,+San+Mateo,+CA+94401",
//       name: "Walgreens",
//       phone_number: "650-342-2723",
//       raw_address: "191 E 3RD AVE\nSAN MATEO, CA 94401",
//       raw_name: "Walgreens",
//       type: "drugstores, convenience stores, cosmetics & beauty supply",
//       vat_number: null,
//     },
//     warnings: [],
//   },
// ];

import { useReceiptContext } from "../context/state";
import Image from "next/image";
import Link from "next/link";
function ReceiptData() {
  // Using data from context in ../context/state.js
  const { receiptData, setReceiptData } = useReceiptContext();
  const receipts = receiptData.map((item) => (
    <div
      className="h-[80vh] w-[80%]
      p-5 list-none border-solid border-white-500 border-[2px] 
      rounded-md bg-[#DDE4E4] shadow-md overflow-scroll"
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
    <div className="flex justify-center pb-5 md:pb-0 mt-3">{receipts}</div>
  );
}

export default ReceiptData;
