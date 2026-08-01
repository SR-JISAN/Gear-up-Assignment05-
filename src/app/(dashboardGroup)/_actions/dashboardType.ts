export interface CustomerDashboardData {
  totalOrders: number;
  activeOrders: number;
  totalPayment: number;
  products: number;
  recentPayments: Payment[];
}

export interface Payment {
  id: number;
  amount: number;
  status: string;
  createdAt: string;
}
