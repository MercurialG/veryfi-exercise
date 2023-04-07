import React from "react";

// const testData = [
//   // {
//   //   account_number: "936886",
//   //   bill_to: {
//   //     address: null,
//   //     name: null,
//   //     parsed_address: null,
//   //     vat_number: null,
//   //   },
//   //   cashback: null,
//   //   category: "Job Supplies",
//   //   created_date: "2023-04-05 22:45:44",
//   //   currency_code: "USD",
//   //   date: "2017-11-13 12:34:04",
//   //   delivery_date: null,
//   //   discount: null,
//   //   document_reference_number: "2188 7274 6444 1567 3762",
//   //   document_title: null,
//   //   document_type: "receipt",
//   //   due_date: null,
//   //   duplicate_of: null,
//   //   external_id: null,
//   //   id: 129466554,
//   //   img_file_name: "129466554.jpg",
//   //   img_thumbnail_url:
//   //     "https://scdn.veryfi.com/receipts/656a45b25f0759c0/a39b0aaa-5153-4680-b404-3f12adafa12a/thumbnail.jpg?Expires=1680735644&Signature=XJ6u622UewDWMGHCKR8ljZLPf3TXih692ihcKgDxch5~MvOhdyFhXAmiwgZBMJwblo0V6MrqEW8IJpwOJFnr~RLI8j4HnqAubMGKiwuaJ0q64x1EuYlXk4sbP7H85jeCmVAD8VXC0Qs39ASTj1Mbe9upV~NRFPBzzFpAYnF9PfMzFLARYLySoBYcO~cWH0cNqWXwnkkjkZzEbMXH7sk7AzVwwtHgqKo-6r1O~EslETyykIXgsO7a3yw3s9dajjXaI4iJB4wfm2DbkCqRWXO3jlGULjbj~dkJcSG5xLnruG6p7qU8KZ9y17Mdx~ihAqM07Zqj2lc511uxEm~t8EX43A__&Key-Pair-Id=APKAJCILBXEJFZF4DCHQ",
//   //   img_url:
//   //     "https://scdn.veryfi.com/receipts/656a45b25f0759c0/a39b0aaa-5153-4680-b404-3f12adafa12a/146681e9-3e11-485b-b41f-a7c7694cead8.jpg?Expires=1680735644&Signature=aR5Aw7YlHXmhBDcFntse5Ht0-I64RZjZXkxeoIk5tQTaQSvAAq~w1r1KySLXIfqqDv6KdmRz~RAovcZ9-zYugU7pInS7f7XMh132ZJ04nhLHUQEKctgO0ACgjODDmmREP-m4NobObpjpU-2jcbNK8upyxUsvn6sA7NnK1bfPKzEUljjScbzzYvlKUvEL8zavis5PocbZri4cwDFYZeckzjrxyq5AfBITj55F7Y5dg9~sdRmalgi9-qEVq-0tobVUC5LwVPaIe-bIOoPsAg7~yaAFicHizdxIP7WRSfHfGp8aLNCRFyK~Jc2Z8bp1a-draYgeMTjOgN8CJbTj1H-Z5g__&Key-Pair-Id=APKAJCILBXEJFZF4DCHQ",
//   //   insurance: null,
//   //   invoice_number: "04455",
//   //   is_duplicate: false,
//   //   is_money_in: false,
//   //   line_items: [
//   //     {
//   //       date: null,
//   //       description: "6 WING PLATE",
//   //       discount: null,
//   //       discount_rate: null,
//   //       id: 535257773,
//   //       order: 0,
//   //       price: null,
//   //       quantity: 1,
//   //       reference: null,
//   //       section: null,
//   //       sku: "020108870398",
//   //       tags: [],
//   //       tax: null,
//   //       tax_rate: null,
//   //       text: "6 WING PLATE 020108870398\t3.98 P",
//   //       total: 3.98,
//   //       type: "product",
//   //       unit_of_measure: null,
//   //       upc: null,
//   //     },
//   //     {
//   //       date: null,
//   //       description: "ASST 27",
//   //       discount: null,
//   //       discount_rate: null,
//   //       id: 535257775,
//   //       order: 1,
//   //       price: null,
//   //       quantity: 1,
//   //       reference: null,
//   //       section: null,
//   //       sku: "063099656595",
//   //       tags: [],
//   //       tax: null,
//   //       tax_rate: null,
//   //       text: "ASST 27\t063099656595\t4.88 X",
//   //       total: 4.88,
//   //       type: "product",
//   //       unit_of_measure: null,
//   //       upc: null,
//   //     },
//   //     {
//   //       date: null,
//   //       description: "CUTIE CAR",
//   //       discount: null,
//   //       discount_rate: null,
//   //       id: 535257776,
//   //       order: 2,
//   //       price: null,
//   //       quantity: 1,
//   //       reference: null,
//   //       section: null,
//   //       sku: "063099656644",
//   //       tags: [],
//   //       tax: null,
//   //       tax_rate: null,
//   //       text: "CUTIE CAR\t063099656644\t12.88 X",
//   //       total: 12.88,
//   //       type: "product",
//   //       unit_of_measure: null,
//   //       upc: null,
//   //     },
//   //   ],
//   //   meta: {
//   //     owner: "georgerykunov",
//   //   },
//   //   notes: null,
//   //   ocr_text:
//   //     "See back of receipt for your chance\nto win $1000\nID\t#:\t7L2T9WJM25F\nWalmart\nSave money. Live better.\n(701) 223 - 3066\nMANAGER TIM MORRIS\n2717 ROCK ISLAND PL\nBISMARCK ND 58504\nST# 01534 OP# 009048 TE# 48 TR# 04455\n6 WING PLATE 020108870398\t3.98 P\nASST 27\t063099656595\t4.88 X\nCUTIE CAR\t063099656644\t12.88 X\n\tSUBTOTAL\t21.74\nTAX 1\t6.500 %\t1.15\nTAX 4\t7.500 %\t0.30\n\tTOTAL\t23.19\nDEBIT TEND\t23.19\nCHANGE DUE\t0.00\n\nEFT DEBIT\tPAY FROM PRIMARY\n23.19 TOTAL PURCHASE\nUS DEBIT\t**** **** **** 2696 I O\nREF # 731700494718\nNETWORK ID. 0081 APPR CODE 936886\nUS DEBIT\nAID A0000000980840\nTC 58B77239DA5B3B44\n*NO SIGNATURE REQUIRED\nTERMINAL # SC011090\n11/13/17 12:34:04\n# ITEMS SOLD 3\nTC# 2188 7274 6444 1567 3762\n\nLow Prices You Can Trust. Every Day.\n11/13/17 12:34:11\nStore receipts on your phone. Walmart P\nay.",
//   //   order_date: null,
//   //   payment: {
//   //     card_number: "2696",
//   //     display_name: "Visa ***2696",
//   //     terms: null,
//   //     type: "visa",
//   //   },
//   //   pdf_url:
//   //     "https://scdn.veryfi.com/receipts/656a45b25f0759c0/a39b0aaa-5153-4680-b404-3f12adafa12a/146681e9-3e11-485b-b41f-a7c7694cead8.pdf?Expires=1680735644&Signature=M2A-fFtRKpY5nA8EMQ4mbfwQrMKpnzubahVD-M2XJUr0d~sy-NG~W-yZbjUl-kQc9ZqGGNzY3Pw2f9ADmYvxT1LPQsTK4iAlf2ThG61e8kdaZIFiCc-Ga7KmL26kxdyJ4wjt6Z5mmXChh5acaRHgS2sEdxL~cI1RJ6Kcuhgi7vJziHQoBKyyMxHz5uKnkfe9JjRpb0lAjSIfqFik1wuYnXmsFUVKCZKuU6OUOIz~k92SIzbXXF78kl~ylADw9yPOF9ujHdDatjhrBCVZPFRbea0nEei6W2RwAeq4o2KEnGkg-XVq3GMi5c~lPi0oxRCbPCNvxQAnhPO4NGesOf5zhA__&Key-Pair-Id=APKAJCILBXEJFZF4DCHQ",
//   //   purchase_order_number: null,
//   //   reference_number: "VBBBE-66554",
//   //   rounding: null,
//   //   service_end_date: null,
//   //   service_start_date: null,
//   //   ship_date: null,
//   //   ship_to: {
//   //     address: null,
//   //     name: null,
//   //     parsed_address: null,
//   //   },
//   //   shipping: null,
//   //   store_number: "01534",
//   //   subtotal: 21.74,
//   //   tags: [],
//   //   tax: 1.45,
//   //   tax_lines: [
//   //     {
//   //       base: null,
//   //       name: null,
//   //       order: 0,
//   //       rate: 6.5,
//   //       total: 1.15,
//   //     },
//   //     {
//   //       base: null,
//   //       name: null,
//   //       order: 1,
//   //       rate: 7.5,
//   //       total: 0.3,
//   //     },
//   //   ],
//   //   tip: null,
//   //   total: 23.19,
//   //   total_weight: null,
//   //   tracking_number: null,
//   //   updated_date: "2023-04-05 22:45:45",
//   //   vendor: {
//   //     abn_number: null,
//   //     account_number: null,
//   //     address:
//   //       "2717 Rock Island Place, Bismarck, North Dakota 58504, United States",
//   //     bank_name: null,
//   //     bank_number: null,
//   //     bank_swift: null,
//   //     category: "Department Store",
//   //     email: null,
//   //     fax_number: null,
//   //     iban: null,
//   //     lat: 46.792268,
//   //     lng: -100.750269,
//   //     logo: "https://cdn.veryfi.com/logos/us/218078496.jpeg",
//   //     name: "Walmart",
//   //     phone_number: "(701) 223 - 3066",
//   //     raw_address: "2717 ROCK ISLAND PL\nBISMARCK ND 58504",
//   //     raw_name: "Walmart",
//   //     reg_number: null,
//   //     type: "Department Store",
//   //     vat_number: null,
//   //     web: null,
//   //   },
//   // },
//   // {
//   //   account_number: "936886",
//   //   bill_to: {
//   //     address: null,
//   //     name: null,
//   //     parsed_address: null,
//   //     vat_number: null,
//   //   },
//   //   cashback: null,
//   //   category: "Job Supplies",
//   //   created_date: "2023-04-05 22:45:44",
//   //   currency_code: "USD",
//   //   date: "2017-11-13 12:34:04",
//   //   delivery_date: null,
//   //   discount: null,
//   //   document_reference_number: "2188 7274 6444 1567 3762",
//   //   document_title: null,
//   //   document_type: "receipt",
//   //   due_date: null,
//   //   duplicate_of: null,
//   //   external_id: null,
//   //   id: 129466554,
//   //   img_file_name: "129466554.jpg",
//   //   img_thumbnail_url:
//   //     "https://scdn.veryfi.com/receipts/656a45b25f0759c0/a39b0aaa-5153-4680-b404-3f12adafa12a/thumbnail.jpg?Expires=1680735644&Signature=XJ6u622UewDWMGHCKR8ljZLPf3TXih692ihcKgDxch5~MvOhdyFhXAmiwgZBMJwblo0V6MrqEW8IJpwOJFnr~RLI8j4HnqAubMGKiwuaJ0q64x1EuYlXk4sbP7H85jeCmVAD8VXC0Qs39ASTj1Mbe9upV~NRFPBzzFpAYnF9PfMzFLARYLySoBYcO~cWH0cNqWXwnkkjkZzEbMXH7sk7AzVwwtHgqKo-6r1O~EslETyykIXgsO7a3yw3s9dajjXaI4iJB4wfm2DbkCqRWXO3jlGULjbj~dkJcSG5xLnruG6p7qU8KZ9y17Mdx~ihAqM07Zqj2lc511uxEm~t8EX43A__&Key-Pair-Id=APKAJCILBXEJFZF4DCHQ",
//   //   img_url:
//   //     "https://scdn.veryfi.com/receipts/656a45b25f0759c0/a39b0aaa-5153-4680-b404-3f12adafa12a/146681e9-3e11-485b-b41f-a7c7694cead8.jpg?Expires=1680735644&Signature=aR5Aw7YlHXmhBDcFntse5Ht0-I64RZjZXkxeoIk5tQTaQSvAAq~w1r1KySLXIfqqDv6KdmRz~RAovcZ9-zYugU7pInS7f7XMh132ZJ04nhLHUQEKctgO0ACgjODDmmREP-m4NobObpjpU-2jcbNK8upyxUsvn6sA7NnK1bfPKzEUljjScbzzYvlKUvEL8zavis5PocbZri4cwDFYZeckzjrxyq5AfBITj55F7Y5dg9~sdRmalgi9-qEVq-0tobVUC5LwVPaIe-bIOoPsAg7~yaAFicHizdxIP7WRSfHfGp8aLNCRFyK~Jc2Z8bp1a-draYgeMTjOgN8CJbTj1H-Z5g__&Key-Pair-Id=APKAJCILBXEJFZF4DCHQ",
//   //   insurance: null,
//   //   invoice_number: "04455",
//   //   is_duplicate: false,
//   //   is_money_in: false,
//   //   line_items: [
//   //     {
//   //       date: null,
//   //       description: "6 WING PLATE",
//   //       discount: null,
//   //       discount_rate: null,
//   //       id: 535257773,
//   //       order: 0,
//   //       price: null,
//   //       quantity: 1,
//   //       reference: null,
//   //       section: null,
//   //       sku: "020108870398",
//   //       tags: [],
//   //       tax: null,
//   //       tax_rate: null,
//   //       text: "6 WING PLATE 020108870398\t3.98 P",
//   //       total: 3.98,
//   //       type: "product",
//   //       unit_of_measure: null,
//   //       upc: null,
//   //     },
//   //     {
//   //       date: null,
//   //       description: "ASST 27",
//   //       discount: null,
//   //       discount_rate: null,
//   //       id: 535257775,
//   //       order: 1,
//   //       price: null,
//   //       quantity: 1,
//   //       reference: null,
//   //       section: null,
//   //       sku: "063099656595",
//   //       tags: [],
//   //       tax: null,
//   //       tax_rate: null,
//   //       text: "ASST 27\t063099656595\t4.88 X",
//   //       total: 4.88,
//   //       type: "product",
//   //       unit_of_measure: null,
//   //       upc: null,
//   //     },
//   //     {
//   //       date: null,
//   //       description: "CUTIE CAR",
//   //       discount: null,
//   //       discount_rate: null,
//   //       id: 535257776,
//   //       order: 2,
//   //       price: null,
//   //       quantity: 1,
//   //       reference: null,
//   //       section: null,
//   //       sku: "063099656644",
//   //       tags: [],
//   //       tax: null,
//   //       tax_rate: null,
//   //       text: "CUTIE CAR\t063099656644\t12.88 X",
//   //       total: 12.88,
//   //       type: "product",
//   //       unit_of_measure: null,
//   //       upc: null,
//   //     },
//   //   ],
//   //   meta: {
//   //     owner: "georgerykunov",
//   //   },
//   //   notes: null,
//   //   ocr_text:
//   //     "See back of receipt for your chance\nto win $1000\nID\t#:\t7L2T9WJM25F\nWalmart\nSave money. Live better.\n(701) 223 - 3066\nMANAGER TIM MORRIS\n2717 ROCK ISLAND PL\nBISMARCK ND 58504\nST# 01534 OP# 009048 TE# 48 TR# 04455\n6 WING PLATE 020108870398\t3.98 P\nASST 27\t063099656595\t4.88 X\nCUTIE CAR\t063099656644\t12.88 X\n\tSUBTOTAL\t21.74\nTAX 1\t6.500 %\t1.15\nTAX 4\t7.500 %\t0.30\n\tTOTAL\t23.19\nDEBIT TEND\t23.19\nCHANGE DUE\t0.00\n\nEFT DEBIT\tPAY FROM PRIMARY\n23.19 TOTAL PURCHASE\nUS DEBIT\t**** **** **** 2696 I O\nREF # 731700494718\nNETWORK ID. 0081 APPR CODE 936886\nUS DEBIT\nAID A0000000980840\nTC 58B77239DA5B3B44\n*NO SIGNATURE REQUIRED\nTERMINAL # SC011090\n11/13/17 12:34:04\n# ITEMS SOLD 3\nTC# 2188 7274 6444 1567 3762\n\nLow Prices You Can Trust. Every Day.\n11/13/17 12:34:11\nStore receipts on your phone. Walmart P\nay.",
//   //   order_date: null,
//   //   payment: {
//   //     card_number: "2696",
//   //     display_name: "Visa ***2696",
//   //     terms: null,
//   //     type: "visa",
//   //   },
//   //   pdf_url:
//   //     "https://scdn.veryfi.com/receipts/656a45b25f0759c0/a39b0aaa-5153-4680-b404-3f12adafa12a/146681e9-3e11-485b-b41f-a7c7694cead8.pdf?Expires=1680735644&Signature=M2A-fFtRKpY5nA8EMQ4mbfwQrMKpnzubahVD-M2XJUr0d~sy-NG~W-yZbjUl-kQc9ZqGGNzY3Pw2f9ADmYvxT1LPQsTK4iAlf2ThG61e8kdaZIFiCc-Ga7KmL26kxdyJ4wjt6Z5mmXChh5acaRHgS2sEdxL~cI1RJ6Kcuhgi7vJziHQoBKyyMxHz5uKnkfe9JjRpb0lAjSIfqFik1wuYnXmsFUVKCZKuU6OUOIz~k92SIzbXXF78kl~ylADw9yPOF9ujHdDatjhrBCVZPFRbea0nEei6W2RwAeq4o2KEnGkg-XVq3GMi5c~lPi0oxRCbPCNvxQAnhPO4NGesOf5zhA__&Key-Pair-Id=APKAJCILBXEJFZF4DCHQ",
//   //   purchase_order_number: null,
//   //   reference_number: "VBBBE-66554",
//   //   rounding: null,
//   //   service_end_date: null,
//   //   service_start_date: null,
//   //   ship_date: null,
//   //   ship_to: {
//   //     address: null,
//   //     name: null,
//   //     parsed_address: null,
//   //   },
//   //   shipping: null,
//   //   store_number: "01534",
//   //   subtotal: 21.74,
//   //   tags: [],
//   //   tax: 1.45,
//   //   tax_lines: [
//   //     {
//   //       base: null,
//   //       name: null,
//   //       order: 0,
//   //       rate: 6.5,
//   //       total: 1.15,
//   //     },
//   //     {
//   //       base: null,
//   //       name: null,
//   //       order: 1,
//   //       rate: 7.5,
//   //       total: 0.3,
//   //     },
//   //   ],
//   //   tip: null,
//   //   total: 23.19,
//   //   total_weight: null,
//   //   tracking_number: null,
//   //   updated_date: "2023-04-05 22:45:45",
//   //   vendor: {
//   //     abn_number: null,
//   //     account_number: null,
//   //     address:
//   //       "2717 Rock Island Place, Bismarck, North Dakota 58504, United States",
//   //     bank_name: null,
//   //     bank_number: null,
//   //     bank_swift: null,
//   //     category: "Department Store",
//   //     email: null,
//   //     fax_number: null,
//   //     iban: null,
//   //     lat: 46.792268,
//   //     lng: -100.750269,
//   //     logo: "https://cdn.veryfi.com/logos/us/218078496.jpeg",
//   //     name: "Walmart",
//   //     phone_number: "(701) 223 - 3066",
//   //     raw_address: "2717 ROCK ISLAND PL\nBISMARCK ND 58504",
//   //     raw_name: "Walmart",
//   //     reg_number: null,
//   //     type: "Department Store",
//   //     vat_number: null,
//   //     web: null,
//   //   },
//   // },
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
      className="md:min-h-[80vh] w-[80%]
      p-5 list-none border-solid border-white-500 border-[2px] 
      rounded-md bg-[#DDE4E4] shadow-md"
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
        <p>{`Subtotal (${item.currency_code}): ${item.subtotal}`}</p>
        {item.discount && (
          <p>{`Discount (${item.currency_code}): -${item.discount}`}</p>
        )}
        <p>{`Tax (${item.currency_code}): ${item.tax}`}</p>
        {item.tip && <p>{`Tip (${item.currency_code}): ${item.tip}`}</p>}
        <p>{`Total (${item.currency_code}): ${item.total}`}</p>
      </div>
    </div>
  ));
  return (
    <div className="flex justify-center pb-5 md:pb-0 mt-3">{receipts}</div>
  );
}

export default ReceiptData;
