import React, { useState } from "react";
import * as S from "./header.styled";

const Header = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  return (
    <S.Header>
      <h3>사과/배</h3>
      <div className="search-utils">
        <div className="sorting-order">
          <ul className="sorting-order-options">
            <li className="selected">
              <input
                type="radio"
                id="sorter-bestAsc"
                name="sorter"
                value="bestAsc"
              />
              <label htmlFor="sorter-bestAsc">쿠팡 랭킹순</label>
            </li>
            <li>
              <input
                type="radio"
                id="sorter-salePriceAsc"
                name="sorter"
                value="salePriceAsc"
              />
              <label htmlFor="sorter-salePriceAsc">낮은가격순</label>
            </li>
            <li>
              <input
                type="radio"
                id="sorter-salePriceDesc"
                name="sorter"
                value="salePriceDesc"
              />
              <label htmlFor="sorter-salePriceDesc">낮은가격순</label>
            </li>
            <li>
              <input
                type="radio"
                id="sorter-saleCountDesc"
                name="sorter"
                value="saleCountDesc"
              />
              <label htmlFor="sorter-saleCountDesc">판매량순</label>
            </li>
            <li>
              <input
                type="radio"
                id="sorter-latestAsc"
                name="sorter"
                value="latestAsc"
              />
              <label htmlFor="sorter-latestAsc">최신순</label>
            </li>
          </ul>
        </div>
        <div className="sorting-list">
          <ul
            className={`selectbox-options ${hovered ? "opened" : ""}`}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            <li className="selected">60개씩 보기</li>
            <li>120개씩 보기</li>
          </ul>
        </div>
      </div>
    </S.Header>
  );
};

export default Header;
