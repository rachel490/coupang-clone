export interface IProductItem {
  name: string;
  imageUrl: string;
  rocketType: string;
  rating: number;
  reviewCount: number;
  originalPrice: number;
  weight: number;
  id: number;
  salePrice: number;
  wowPrice: number;
  shippinFee: number;
  isRecommended: boolean;
  isMdRecommended: boolean;
  isSoldout: boolean;
  maxPoint: number;
  expectedDeliveryDate: string;
  isAssured: boolean;
  isEarlyDelivery: boolean;
}
