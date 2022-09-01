import useShallowRoute from "hooks/useShallowRoute";
import { useRouter } from "next/router";
import React, { useState } from "react";

import {
  DEFAULT_OPTION,
  LISTING_OPTIONS,
  SORTING_OPTIONS,
} from "utils/options";
import * as S from "./headerBar.styled";

const HeaderBar = () => {
  const router = useRouter();

  const [hovered, setHovered] = useState(false);
  const toggleHover = () => setHovered(!hovered);

  const [sortOption, setSortOption] = useState(DEFAULT_OPTION.sort);
  const [listOption, setListOption] = useState(DEFAULT_OPTION.list);

  const changeSort = (e: React.ChangeEvent<HTMLInputElement>) => {
    const option = e.currentTarget.value;
    setSortOption(option);
    useShallowRoute(router, "/products", { sorter: option });
  };

  const changeListNum = (option: number) => {
    setListOption(option);
    useShallowRoute(router, "/products", { limit: option });
  };

  return (
    <S.Wrap>
      <S.Title>사과/배</S.Title>
      <S.Content>
        <S.SortBar>
          <S.SortList>
            {SORTING_OPTIONS.map(({ name, value }) => (
              <S.SortItem
                className={sortOption === value ? "selected" : ""}
                key={value}
              >
                <input
                  type="radio"
                  id={`sorter-${value}`}
                  name="sorter"
                  value={value}
                  onChange={changeSort}
                  checked={sortOption === value}
                />
                <label htmlFor={`sorter-${value}`}>{name}</label>
              </S.SortItem>
            ))}
          </S.SortList>
        </S.SortBar>
        <S.ListBar>
          <S.List
            className={`selectbox-options ${hovered ? "opened" : ""}`}
            onMouseEnter={toggleHover}
            onMouseLeave={toggleHover}
          >
            {LISTING_OPTIONS.map((option) => (
              <S.ListItem
                key={option}
                className={listOption === option ? "selected" : ""}
                onClick={() => changeListNum(option)}
              >
                {option}개씩 보기
              </S.ListItem>
            ))}
          </S.List>
        </S.ListBar>
      </S.Content>
    </S.Wrap>
  );
};

export default HeaderBar;
