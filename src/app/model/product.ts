export class Product {
  subscribe(arg0: () => Promise<boolean>): any {
    throw new Error('Method not implemented.');
  }
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
