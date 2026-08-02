export interface IRental {
  id: number;
  orderStatus: string;
  rentalDate: string;
  returnDate: string | null;

  rentalItem: {
    id: number;

    product: {
      id: number;
      title: string;
      brand: string;
      product_image: string;

      reviews: {
        id: number;
        rating: number;
      }[];
    };
  }[];
}
