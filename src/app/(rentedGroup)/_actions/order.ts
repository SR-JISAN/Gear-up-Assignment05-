export interface IProduct {
  id: number;
  title: string;
  product_image: string;
  brand: string;
}

export interface IRentalItem {
  id: number;
  quantity: number;
  startDate: string;
  endDate: string;
  totalDays: number;
  subTotal: string;
  product: IProduct;
}

export interface IOrder {
  id: number;
  totalAmount: string;
  orderStatus: "PROCESSING" | "PAID" | "CANCELLED" | "PICKED_UP" | "RETURNED";

  pickUpAddress: string;
  pickUpDate: string | null;
  returnDate: string | null;
  customerId: string;
  createdAt: string;

  rentalItem: IRentalItem[];
}
