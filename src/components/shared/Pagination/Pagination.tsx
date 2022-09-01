import { useRouter } from "next/router";
import React, { useState } from "react";

import useShallowRoute from "hooks/useShallowRoute";
import * as S from "./pagination.styled";

const Pagination = () => {
  const router = useRouter();

  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);

  const pageArr = new Array(10).fill(startPage).map((key, idx) => key + idx);

  const pageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const pageNum = Number(e.currentTarget.innerText);
    pageNum && setCurrentPage(pageNum);
    useShallowRoute(router, "/products", { page: pageNum });
  };

  const prevPage = () => {
    if (startPage === 1) return;
    setStartPage((prev) => (prev -= 10));
    setCurrentPage(startPage - 1);
    useShallowRoute(router, "/products", { page: startPage - 1 });
  };

  const nextPage = () => {
    setStartPage((prev) => (prev += 10));
    setCurrentPage(startPage + 10);
    useShallowRoute(router, "/products", { page: startPage + 10 });
  };

  return (
    <S.Wrap>
      <S.Content>
        <S.Btn className="icon prev" onClick={prevPage}>
          <span>이전</span>
        </S.Btn>
        {pageArr.map((pagenum) => {
          return (
            <S.Btn
              key={pagenum}
              onClick={pageChange}
              className={`${pagenum === currentPage ? "selected" : ""}`}
            >
              {pagenum}
            </S.Btn>
          );
        })}
        <S.Btn className="icon next" onClick={nextPage}>
          <span>다음</span>
        </S.Btn>
      </S.Content>
    </S.Wrap>
  );
};

export default Pagination;
