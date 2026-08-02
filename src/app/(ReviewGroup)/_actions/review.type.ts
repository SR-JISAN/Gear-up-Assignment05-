export interface IReviewUser {
  id: string;
  name: string;
  email?: string;
  profileImage?: string | null;
}

export interface IReviewProduct {
  id: number;
  title: string;
  brand: string;
  product_image: string | null;
  price_per_day?: number;
}

export interface IReview {
  id: number;
  rating: number;
  comment: string;
  created_at: string;
  updated_at: string;

  user: IReviewUser;
  product: IReviewProduct;
}

export interface IReviewResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IReview;
}

export interface IReviewsResponse {
  success: boolean;
  statusCode: number;
  message: string;
  data: IReview[];
}

export interface ICreateReviewPayload {
  productId: number;
  rating: number;
  comment: string;
}

export interface IUpdateReviewPayload {
  rating: number;
  comment: string;
}
