export class Product {
  constructor(initData?: Partial<Product>) {
    Object.assign(this, initData);
    this.createDate = new Date();
  }
  id!: number;

  name!: string;

  authors!: string[];

  company!: string;

  isShow!: boolean;

  imgUrl!: string;

  createDate!: Date;

  price!: number;
}
