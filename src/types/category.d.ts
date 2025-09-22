export interface Category {
  _id: string;
  categoryName: string;
  parentCategoryId?: string; // hierarchical categories
  description?: string;
  createdAt: Date;
  updatedAt: Date;
}