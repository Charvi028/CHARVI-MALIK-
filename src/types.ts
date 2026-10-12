export type VariantId = 'classic' | 'premium' | 'pro';

export interface ProductVariant {
  id: VariantId;
  name: string;
  subtitle: string;
  tagline: string;
  price: number;
  originalPrice?: number;
  badge?: string;
  description: string;
  image: string;
  accentColor: string;
  gripType: string;
  bodyMaterial: string;
  tipSpecification: string;
  weightGrams: number;
  inkCapacity: string;
  idealFor: string;
  features: string[];
}

export interface CartItem {
  variantId: VariantId;
  variant: ProductVariant;
  quantity: number;
}

export interface Review {
  id: string;
  author: string;
  role: string;
  rating: number;
  title: string;
  content: string;
  verifiedDemo: boolean;
  date: string;
}

export interface OrderDetails {
  orderId: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  city: string;
  state: string;
  pincode: string;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  total: number;
  orderDate: string;
}
