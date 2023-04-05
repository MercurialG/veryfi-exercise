import React from "react";

const testData = [
  {
    account_number: "936886",
    bill_to: {
      address: null,
      name: null,
      parsed_address: null,
      vat_number: null,
    },
    cashback: null,
    category: "Job Supplies",
    created_date: "2023-04-05 22:45:44",
    currency_code: "USD",
    date: "2017-11-13 12:34:04",
    delivery_date: null,
    discount: null,
    document_reference_number: "2188 7274 6444 1567 3762",
    document_title: null,
    document_type: "receipt",
    due_date: null,
    duplicate_of: null,
    external_id: null,
    id: 129466554,
    img_file_name: "129466554.jpg",
    img_thumbnail_url:
      "https://scdn.veryfi.com/receipts/656a45b25f0759c0/a39b0aaa-5153-4680-b404-3f12adafa12a/thumbnail.jpg?Expires=1680735644&Signature=XJ6u622UewDWMGHCKR8ljZLPf3TXih692ihcKgDxch5~MvOhdyFhXAmiwgZBMJwblo0V6MrqEW8IJpwOJFnr~RLI8j4HnqAubMGKiwuaJ0q64x1EuYlXk4sbP7H85jeCmVAD8VXC0Qs39ASTj1Mbe9upV~NRFPBzzFpAYnF9PfMzFLARYLySoBYcO~cWH0cNqWXwnkkjkZzEbMXH7sk7AzVwwtHgqKo-6r1O~EslETyykIXgsO7a3yw3s9dajjXaI4iJB4wfm2DbkCqRWXO3jlGULjbj~dkJcSG5xLnruG6p7qU8KZ9y17Mdx~ihAqM07Zqj2lc511uxEm~t8EX43A__&Key-Pair-Id=APKAJCILBXEJFZF4DCHQ",
    img_url:
      "https://scdn.veryfi.com/receipts/656a45b25f0759c0/a39b0aaa-5153-4680-b404-3f12adafa12a/146681e9-3e11-485b-b41f-a7c7694cead8.jpg?Expires=1680735644&Signature=aR5Aw7YlHXmhBDcFntse5Ht0-I64RZjZXkxeoIk5tQTaQSvAAq~w1r1KySLXIfqqDv6KdmRz~RAovcZ9-zYugU7pInS7f7XMh132ZJ04nhLHUQEKctgO0ACgjODDmmREP-m4NobObpjpU-2jcbNK8upyxUsvn6sA7NnK1bfPKzEUljjScbzzYvlKUvEL8zavis5PocbZri4cwDFYZeckzjrxyq5AfBITj55F7Y5dg9~sdRmalgi9-qEVq-0tobVUC5LwVPaIe-bIOoPsAg7~yaAFicHizdxIP7WRSfHfGp8aLNCRFyK~Jc2Z8bp1a-draYgeMTjOgN8CJbTj1H-Z5g__&Key-Pair-Id=APKAJCILBXEJFZF4DCHQ",
    insurance: null,
    invoice_number: "04455",
    is_duplicate: false,
    is_money_in: false,
    line_items: [
      {
        date: null,
        description: "6 WING PLATE",
        discount: null,
        discount_rate: null,
        id: 535257773,
        order: 0,
        price: null,
        quantity: 1,
        reference: null,
        section: null,
        sku: "020108870398",
        tags: [],
        tax: null,
        tax_rate: null,
        text: "6 WING PLATE 020108870398\t3.98 P",
        total: 3.98,
        type: "product",
        unit_of_measure: null,
        upc: null,
      },
      {
        date: null,
        description: "ASST 27",
        discount: null,
        discount_rate: null,
        id: 535257775,
        order: 1,
        price: null,
        quantity: 1,
        reference: null,
        section: null,
        sku: "063099656595",
        tags: [],
        tax: null,
        tax_rate: null,
        text: "ASST 27\t063099656595\t4.88 X",
        total: 4.88,
        type: "product",
        unit_of_measure: null,
        upc: null,
      },
      {
        date: null,
        description: "CUTIE CAR",
        discount: null,
        discount_rate: null,
        id: 535257776,
        order: 2,
        price: null,
        quantity: 1,
        reference: null,
        section: null,
        sku: "063099656644",
        tags: [],
        tax: null,
        tax_rate: null,
        text: "CUTIE CAR\t063099656644\t12.88 X",
        total: 12.88,
        type: "product",
        unit_of_measure: null,
        upc: null,
      },
    ],
    meta: {
      owner: "georgerykunov",
    },
    notes: null,
    ocr_text:
      "See back of receipt for your chance\nto win $1000\nID\t#:\t7L2T9WJM25F\nWalmart\nSave money. Live better.\n(701) 223 - 3066\nMANAGER TIM MORRIS\n2717 ROCK ISLAND PL\nBISMARCK ND 58504\nST# 01534 OP# 009048 TE# 48 TR# 04455\n6 WING PLATE 020108870398\t3.98 P\nASST 27\t063099656595\t4.88 X\nCUTIE CAR\t063099656644\t12.88 X\n\tSUBTOTAL\t21.74\nTAX 1\t6.500 %\t1.15\nTAX 4\t7.500 %\t0.30\n\tTOTAL\t23.19\nDEBIT TEND\t23.19\nCHANGE DUE\t0.00\n\nEFT DEBIT\tPAY FROM PRIMARY\n23.19 TOTAL PURCHASE\nUS DEBIT\t**** **** **** 2696 I O\nREF # 731700494718\nNETWORK ID. 0081 APPR CODE 936886\nUS DEBIT\nAID A0000000980840\nTC 58B77239DA5B3B44\n*NO SIGNATURE REQUIRED\nTERMINAL # SC011090\n11/13/17 12:34:04\n# ITEMS SOLD 3\nTC# 2188 7274 6444 1567 3762\n\nLow Prices You Can Trust. Every Day.\n11/13/17 12:34:11\nStore receipts on your phone. Walmart P\nay.",
    order_date: null,
    payment: {
      card_number: "2696",
      display_name: "Visa ***2696",
      terms: null,
      type: "visa",
    },
    pdf_url:
      "https://scdn.veryfi.com/receipts/656a45b25f0759c0/a39b0aaa-5153-4680-b404-3f12adafa12a/146681e9-3e11-485b-b41f-a7c7694cead8.pdf?Expires=1680735644&Signature=M2A-fFtRKpY5nA8EMQ4mbfwQrMKpnzubahVD-M2XJUr0d~sy-NG~W-yZbjUl-kQc9ZqGGNzY3Pw2f9ADmYvxT1LPQsTK4iAlf2ThG61e8kdaZIFiCc-Ga7KmL26kxdyJ4wjt6Z5mmXChh5acaRHgS2sEdxL~cI1RJ6Kcuhgi7vJziHQoBKyyMxHz5uKnkfe9JjRpb0lAjSIfqFik1wuYnXmsFUVKCZKuU6OUOIz~k92SIzbXXF78kl~ylADw9yPOF9ujHdDatjhrBCVZPFRbea0nEei6W2RwAeq4o2KEnGkg-XVq3GMi5c~lPi0oxRCbPCNvxQAnhPO4NGesOf5zhA__&Key-Pair-Id=APKAJCILBXEJFZF4DCHQ",
    purchase_order_number: null,
    reference_number: "VBBBE-66554",
    rounding: null,
    service_end_date: null,
    service_start_date: null,
    ship_date: null,
    ship_to: {
      address: null,
      name: null,
      parsed_address: null,
    },
    shipping: null,
    store_number: "01534",
    subtotal: 21.74,
    tags: [],
    tax: 1.45,
    tax_lines: [
      {
        base: null,
        name: null,
        order: 0,
        rate: 6.5,
        total: 1.15,
      },
      {
        base: null,
        name: null,
        order: 1,
        rate: 7.5,
        total: 0.3,
      },
    ],
    tip: null,
    total: 23.19,
    total_weight: null,
    tracking_number: null,
    updated_date: "2023-04-05 22:45:45",
    vendor: {
      abn_number: null,
      account_number: null,
      address:
        "2717 Rock Island Place, Bismarck, North Dakota 58504, United States",
      bank_name: null,
      bank_number: null,
      bank_swift: null,
      category: "Department Store",
      email: null,
      fax_number: null,
      iban: null,
      lat: 46.792268,
      lng: -100.750269,
      logo: "https://cdn.veryfi.com/logos/us/218078496.jpeg",
      name: "Walmart",
      phone_number: "(701) 223 - 3066",
      raw_address: "2717 ROCK ISLAND PL\nBISMARCK ND 58504",
      raw_name: "Walmart",
      reg_number: null,
      type: "Department Store",
      vat_number: null,
      web: null,
    },
  },
];

import { useReceiptContext } from "../context/state";
import Image from "next/image";
function ReceiptData() {
  const { receiptData, setReceiptData } = useReceiptContext();
  const receipts = testData.map((item) => (
    <li key={item.id}>
      <Image height={100} width={100} alt="logo" src={item.vendor?.logo} />
      <p>Date: {item.date}</p>
      <p>Address: {item.vendor?.address}</p>
      <p>Subtotal: {item.subtotal}</p>
      <p>Tax: {item.tax}</p>
      <p>Tip: {item.tip}</p>
      <p>Total: {item.total}</p>
    </li>
  ));
  return <div>{receipts}</div>;
}

export default ReceiptData;
