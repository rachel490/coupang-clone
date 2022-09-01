import styled from "@emotion/styled";

export const Container = styled.li`
  padding: 20px;
  border-bottom: 1px solid #ddd;
`;

export const LinkContent = styled.a`
  display: block;
  border: 1px solid transparent;
  cursor: pointer;
`;

export const DefList = styled.dl`
  padding: 10px;
  width: 212px;
  height: 432px;
  font-size: 12px;

  &:hover {
    box-shadow: 0 2px 10px 0 rgb(0 0 0 / 20%);
    cursor: pointer;
  }
`;

export const DefDesc = styled.dd`
  .badges {
    display: block;
    padding: 16px 0 5px;
    height: 17px;
    font-size: 12px;
    line-height: 16px;
    color: #555;
    zoom: 1;
    white-space: nowrap;

    &:after {
      display: block;
      clear: both;
      content: "";
    }
  }

  .name {
    display: -webkit-box;
    overflow: hidden;
    width: 100%;
    max-height: 48px;
    line-height: 16px;
    font-size: 12px;
    color: #111;
    -webkit-line-clamp: 3;
    text-overflow: ellipsis;
    word-wrap: break-word;
    text-decoration: none;
  }

  .price-area {
    padding-top: 3px;
    .price-wrap {
      padding-top: 5px;

      .price {
        & > * {
          display: block;
        }
        .discount-info {
          & > * {
            /* margin-right: 2px; */
          }
          .instant-discount-text {
            color: #ae0000;
          }
          .divider {
            font-size: 10px;
            color: #ddd;
          }
          .discount-percentage {
          }
          .original-price {
            color: #888;
          }
        }

        .price-info {
          padding-bottom: 2px;
          margin-bottom: -3px;
          height: 20px;
          line-height: 20px;
          font-size: 14px;
          color: #ae0000;

          .badge {
            overflow: hidden;
            display: inline-block;
            position: relative;
            line-height: inherit;
            vertical-align: middle;
          }

          img {
            height: 16px;
          }
        }

        .unit-price {
          font-size: 11px;
          color: #ae0000;
          margin-top: 2px;
          margin-bottom: 2px;
        }
      }

      .delivery {
        padding-top: 3px;
        font-size: 14px;
        color: #00891a;
      }
    }
  }

  .other-info {
    margin-top: 6px;
    height: 17px;

    .star {
      float: left;
      width: 70px;
      height: 17px;
      margin-right: 3px;
      background: url("https://img1a.coupangcdn.com/image/coupang/list/babycx/bg_babycx2_20160523.png")
        0px -149px/114px 655px no-repeat;

      .rate {
        background: url("https://img1a.coupangcdn.com/image/coupang/list/babycx/bg_babycx2_20160523.png")
          0 -199px/114px 655px no-repeat;
        overflow: hidden;
        float: left;
        height: 17px;
        text-indent: -9em;
      }
    }
  }

  .benefit-badges {
    padding-top: 6px;

    .reward-cash-badge {
      margin-top: 6px;
      box-sizing: border-box;
      display: inline-block;
      padding: 0 8px;
      height: 20px;
      border-radius: 10px;
      border: solid 1px #ccc;
      background-color: #fff;

      .reward-cash-icon {
        display: inline-block;
        width: 14px;
        margin-top: 2px;
        vertical-align: top;
      }

      .reward-cash-txt {
        display: inline-block;
        vertical-align: top;
        color: #333;
        font-size: 12px;
        line-height: 17px;
        margin-left: 2px;
      }
    }
  }
`;
