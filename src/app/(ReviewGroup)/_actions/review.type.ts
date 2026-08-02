export interface Review {
  id: number;
  rating: number;
  comment: string;
  created_at: string;

  user: {
    id: string;
    name: string;
    email: string;
  };

  product: {
    id: number;
    title: string;
    brand: string;
    product_image: string | null;
    price_per_day: number;
  };
}
