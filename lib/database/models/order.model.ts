import { Document, Schema, model, models } from "mongoose";

export interface IOrder extends Document {
    createdAt: Date
    stripeId: string
    totalAmount: string
  event: {
    _id: string
    title: string
  }
  buyer: {
    _id: string
    firstName: string
    lastName: string
  }
}

export type IOrderItem = {
    _id: string
    totalAmount: string
    createdAt: Date
}
const OrderSchema = new Schema({
    name: { type: String, required: true, unique: true },
})

const Category = models.Category || model('Category', OrderSchema)

export default Category