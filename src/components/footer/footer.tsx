import React from "react";
import * as S from "./footer.styled";

const Footer = () => {
  return (
    <S.Wrap data-raw='{"currentPageIndex":1 }' data-total="9">
      <div className="page-wrapper">
        <a className="icon prev-page" data-page="1">
          <span>이전</span>
        </a>
        <a className="selected" data-page="1">
          1
        </a>
        <a data-page="2">2</a>
        <a data-page="3">3</a>
        <a data-page="4">4</a>
        <a data-page="5">5</a>
        <a data-page="6">6</a>
        <a data-page="7">7</a>
        <a data-page="8">8</a>
        <a data-page="9">9</a>
        <a className="icon next-page" data-page="9">
          <span>다음</span>
        </a>
      </div>
    </S.Wrap>
  );
};

export default Footer;
