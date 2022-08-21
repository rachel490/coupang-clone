export interface IProductItem {
  name: string; // 상품 이름
  imageUrl: string; // 상품 이미지
  rocketType: string; // 로켓배송, 로켓프레시, null
  rating: number; // 상품평
  reviewCount: number; // 상품평 개수
  originalPrice: number; // 정가
  weight: number; // 무게 (100g당 가격 산출)
  id: number; // id값
  salePrice: number; // 할인가
  wowPrice: number; // 와우 할인가
  shippinFee: number; // 무료배송 태그
  isRecommended: boolean; // 쿠팡 추천 제품
  isMdRecommended: boolean; // 쿠팡 md 추천 제품
  isSoldout: boolean; // 품절여부
  maxPoint: number; // 최대 적립 포인트
  expectedDeliveryDate: string; // 도착예정일 (내일일 경우 : 내일(요일) MM/DD 도착 보장, 내일 + 새벽 : 내일(요일) 새벽 도착 보장, MM/DD(요일) (새벽) 도착 보장 )
  isAssured: boolean; // true = 도착보장, false = 도착예정
  isEarlyDelivery: boolean; // 새벽도착
}
