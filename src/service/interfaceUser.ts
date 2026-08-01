export interface IUser {
  success: true;
  statusCode: number;
  message: string;
  data: {
    id: string;
    name: string;
    email: string;
    phone_number: string;
    role: string;
    customer_status: string;
    stripCustomerId: string;
    created_at: string;
    updated_at: string;
    profile: {
      id: string;
      bio?: string;
      profileImage: string;
      userId: string;
      created_at: string;
      updated_at: string;
    };
  };
}