export interface IProduct {
  id:number;
  categoryId:number;
  unitPrice:number;
  unitsInStock:number;
  reorderLevel:number;
  discontinued:boolean;
  name:string;
}
