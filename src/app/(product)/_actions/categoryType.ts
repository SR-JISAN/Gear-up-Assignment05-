export interface Category {
  id: number;
  name: string;
  created_at: string;
}

export interface CategoryResponse {
  success: boolean;
  data: Category[];
}
