import { BaseModel } from "../base.model";
import { Product } from "../products/product.model";
import { User } from "../users/user.model";

export interface orderItem extends BaseModel {
  product: Product[],
  quantity: number,
  totalPrice: number,
  user: User,
}
