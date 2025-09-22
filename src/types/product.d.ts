export interface Product {
  _id: string;
  productName: string;
  productDescription: string;
  price: number;
  discountPercentage?: number;
  images: ProductImage[];
  categoryId: string; // reference -> Category._id
  brandId?: string;   // reference -> Brand._id
  stockQuantity: number;
  isActive: boolean; // soft delete flag
  createdAt: Date;
  updatedAt: Date;
}