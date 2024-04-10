import { Product } from "./product";

const product = new Product(
  1,
  "圖像 Angular 開發入門 第二版",
  "博碩文化",
  500,
  true,
  new Date(2024 - 3 - 10),
  undefined
);

console.log(product);
console.table(product);
