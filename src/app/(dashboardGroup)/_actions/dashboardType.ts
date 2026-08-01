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

export interface AdminUser {
  id: string;
  name: string;
  email: string;
  phone_number: string;
  role: "ADMIN" | "CUSTOMER" | "PROVIDER";
  customer_status: "ACTIVE" | "BLOCKED";
  created_at: string;
  updated_at: string;
  profile: {
    profileImage: string | null;
  } | null;
}


export interface ProviderProduct {
  id: string;
  name: string;
  brand: string;
  price_per_day: number;
  availability: string;
  product_image: string | null;
}

export interface ProviderOrder {
  id: number;
  status: string;
  total_price: number;

  customer: {
    name: string;
    email: string;
  };

  created_at: string;
}

export interface ProviderDashboardData {
  products: ProviderProduct[];

  orders: ProviderOrder[];
}
