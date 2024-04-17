import { Product } from "./product";

const products = [
  new Product(
    1,
    "圖像 Angular 開發入門 第二版",
    "博碩文化",
    500,
    true,
    new Date(2024 - 3 - 10)
  ),
  new Product(
    2,
    "金魚都能懂的 CSS 必學屬性",
    "博碩文化",
    500,
    true,
    new Date(2024 - 3 - 10)
  ),
];

setProductDisplay(products[1], false);

console.log(products);
console.table(products);

function setProductDisplay(product: Product, isShow: boolean): void {
  product.isShow = isShow;
}
