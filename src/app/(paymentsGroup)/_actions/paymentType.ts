import { IRentalItem } from "@/app/(rentedGroup)/_actions/getSingleOrderAction";

export interface ICustomer {
  id: string;
  name: string;
  email: string;
}

export interface IOrder {
  id: number;
  customer: ICustomer;
  rentalItem: IRentalItem[];
}

export interface IPayment {
  id: number;
  amount: string;
  gateway: string;
  status: "PENDING" | "SUCCESS" | "FAILED" | "CANCELLED";
  transactionId: string;
  paidAt: string | null;
  order: IOrder;
}
