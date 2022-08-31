import styled from "@emotion/styled";

export const Wrap = styled.div`
  display: block;
  height: 54px;
  width: 100%;
  text-align: center;
  margin: 20px auto 0 auto;
  background-color: rgba(255, 255, 255, 0.9);
  position: fixed;
  z-index: 1000;
  bottom: 0;
  left: 0;
  border-top: 1px solid #fff;
  box-shadow: 0 -3px 3px rgb(0 0 0 / 5%);

  .page-wrapper {
    margin-left: 212px;
    text-align: center;
    margin-top: 11px;

    a {
      display: inline-block;
      width: 29px;
      height: 29px;
      margin: 0 -2px;
      color: #555;
      text-align: center;
      font-size: 12px;
      font-weight: bold;
      line-height: 30px;
      vertical-align: middle;
      cursor: pointer;

      &.selected {
        color: #0073e9;
        border: 1px solid #0073e9;
      }

      &.icon {
        width: 31px;
        height: 31px;
        background: url("https://img1a.coupangcdn.com/image/coupang/list/ico_paging.png")
          0 0 no-repeat;
        margin: 0 8px 0 4px;
        text-indent: -9999em;
        vertical-align: middle;
        cursor: default;

        &.prev-page {
          background-position: 0px -68px;
        }

        &.next-page {
          background-position: -34px -68px;
        }
      }

      span {
        display: block;
        text-indent: -9999em;
      }
    }
  }
`;
