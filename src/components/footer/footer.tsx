import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import * as S from "./footer.styled";

const Footer = () => {
  const router = useRouter();
  const {
    query: { page = 1 },
  } = router;
  const [startPage, setStartPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(Number(page));

  const pageChange = (e: React.MouseEvent) => {
    const pageNum = e.currentTarget.getAttribute("data-page");
    pageNum && setCurrentPage(Number(pageNum));
  };

  const prevPage = (e: React.MouseEvent) => {
    if (startPage === 1) return;
    setStartPage((prev) => (prev -= 10));
    setCurrentPage(startPage - 1);
    router.push({
      pathname: "/products",
      query: { page: startPage - 1 },
    });
  };

  const nextPage = (e: React.MouseEvent) => {
    setStartPage((prev) => (prev += 10));
    setCurrentPage(startPage + 10);
    router.push({
      pathname: "/products",
      query: { page: startPage + 10 },
    });
  };

  return (
    <S.Wrap data-raw='{"currentPageIndex":1 }' data-total="9">
      <div className="page-wrapper">
        <a className="icon prev-page" onClick={prevPage}>
          <span>이전</span>
        </a>
        {new Array(10)
          .fill(startPage)
          .map((key, idx) => key + idx)
          .map((pagenum) => {
            return (
              <Link
                href={pagenum === 1 ? "/products" : `?page=${pagenum}`}
                key={pagenum}
              >
                <a
                  data-page={pagenum}
                  onClick={pageChange}
                  className={`${pagenum === currentPage ? "selected" : ""}`}
                >
                  {pagenum}
                </a>
              </Link>
            );
          })}
        <a className="icon next-page" onClick={nextPage}>
          <span>다음</span>
        </a>
      </div>
    </S.Wrap>
  );
};

export default Footer;
