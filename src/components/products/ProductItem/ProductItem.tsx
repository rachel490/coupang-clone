import Image from "next/image";
import Link from "next/link";

import { IProductItem } from 'types/product';
import * as S from "./productItem.styled";

const ProductItem = (props: IProductItem) => {
  const {
    originalPrice,
    salePrice,
    wowPrice,
    name,
    imageUrl,
    rating,
    reviewCount,
    weight,
    shippinFee,
    isRecommended,
    isMdRecommended,
    maxPoint,
    expectedDeliveryDate,
    isAssured,
    isEarlyDelivery,
    isSoldout,
    rocketType,
  } = props;

  const isWow = salePrice !== wowPrice;
  const isSale = !isWow && salePrice !== originalPrice;
  const price = isWow ? wowPrice : isSale ? salePrice : originalPrice;
  const discountRate = Math.round(
    ((originalPrice - price) / originalPrice) * 100
  );
  const getTimeDifference = (date: string) => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const day = now.getDate();

    const tmr = `${year}-${month}-${day + 1}`;
    var week = ["일", "월", "화", "수", "목", "금", "토"];
    var dayOfWeek = week[new Date(date).getDay()];

    https: return tmr === date
      ? `내일(${dayOfWeek}) ${Number(date.split("-")[1])}/${Number(
          date.split("-")[2]
        )}`
      : `${Number(date.split("-")[1])}/${Number(
          date.split("-")[2]
        )} (${dayOfWeek}) `;
  };
  const deliveryDate =
    getTimeDifference(expectedDeliveryDate) +
    (isEarlyDelivery ? "새벽 " : "") +
    (isAssured ? "도착 보장" : "도착 예상");
  const rate = (Math.round(rating) / 5.0) * 100 + "%";

  return (
    <S.Container>
      <Link href="/">
        <S.LinkContent>
          <S.DefList>
            <dt>
              <Image
                src={imageUrl}
                alt="product preview"
                width="100%"
                height="100%"
                layout="responsive"
                objectFit="cover"
              />
            </dt>
            <S.DefDesc>
              <div className="badges"></div>
              <div className="name">{name}</div>
              <div className="price-area">
                <div className="price-wrap">
                  <div className="price">
                    <span className="discount-info">
                      {isWow && (
                        <>
                          <span className="instant-discount-text">
                            와우할인가
                          </span>
                          <span className="divider">{" | "}</span>
                        </>
                      )}
                      {discountRate ? (
                        <>
                          <span className="discount-percentage">
                            {discountRate + "% "}
                          </span>
                          <del className="original-price">
                            {originalPrice.toLocaleString()}
                          </del>
                        </>
                      ) : (
                        ""
                      )}
                    </span>
                    <em className="price-info">
                      <strong className="final-price">
                        {price.toLocaleString()}
                      </strong>
                      {"원 "}
                      {rocketType === "fresh" && (
                        <span className="badge">
                          <img
                            src="https://image6.coupangcdn.com/image/badges/falcon/v1/web/rocket-fresh@2x.png"
                            alt="로켓프레시 배송"
                          />
                        </span>
                      )}
                    </em>
                    {weight && rocketType === "fresh" && (
                      <span className="unit-price">
                        (<em>100</em>g당{" "}
                        <em>{Math.round((price / weight) * 100)}</em>원)
                      </span>
                    )}
                  </div>
                  <div className="delivery">
                    <span className="arrival-info">
                      <em>{deliveryDate}</em>
                    </span>
                  </div>
                </div>
              </div>
              <div className="other-info">
                <div className="rating">
                  <span className="star">
                    <em className="rate" style={{ width: rate }}>
                      5.0
                    </em>
                  </span>
                  <span className="review-number">({reviewCount})</span>
                </div>
              </div>
              <div className="benefit-badges">
                <div className="reward-cash-badge">
                  <img
                    src="https://image6.coupangcdn.com/image/badges/cashback/web/list-cash-icon@2x.png"
                    alt="reward cash icon"
                    className="reward-cash-icon"
                  />
                  <span className="reward-cash-txt">
                    최대 {maxPoint.toLocaleString()}원 적립
                  </span>
                </div>
              </div>
            </S.DefDesc>
          </S.DefList>
        </S.LinkContent>
      </Link>
    </S.Container>
  );
};

export default ProductItem;
