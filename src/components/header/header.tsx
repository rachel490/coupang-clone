import { useRouter } from "next/router";
import React, { useState } from "react";
import * as S from "./header.styled";

const Header = () => {
  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const [selected, setSelected] = useState("bestAsc");
  const router = useRouter();
  const originalQuery = router.query;

  const SORTING_OPTIONS = [
    { value: "bestAsc", name: "쿠팡 랭킹순" },
    { value: "salePriceAsc", name: "낮은 가격순" },
    { value: "salePriceDesc", name: "높은 가격순" },
    { value: "saleCountDesc", name: "판매량순" },
    { value: "latestAsc", name: "최신순" },
  ];

  const changeSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.currentTarget.value);
    router.push({
      pathname: "/products",
      query: { ...originalQuery, sorter: e.currentTarget.value },
    });
  };

  return (
    <S.Header>
      <h3>사과/배</h3>
      <div className="search-utils">
        <div className="sorting-order">
          <ul className="sorting-order-options">
            {SORTING_OPTIONS.map(({ name, value }) => (
              <li className={selected === value ? "selected" : ""} key={value}>
                <input
                  type="radio"
                  id={`sorter-${value}`}
                  name="sorter"
                  value={value}
                  onChange={changeSort}
                  checked={selected === value}
                />
                <label htmlFor={`sorter-${value}`}>{name}</label>
              </li>
            ))}
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
