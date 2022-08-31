import styled from '@emotion/styled';

export const Header = styled.div`
  padding-left: 20px;
  h3 {
    padding-top: 10px;
    font-size: 20px;
    color: #111;
  }

  .search-utils {
    max-width: 100%;
    height: 32px;
    margin: 15px 0;
    background-color: #fafafa;

    .sorting-order {
      position: relative;
      float: left;
      font-size: 12px;

      .sorting-order-options {
        margin-top: 6px;
        height: 20px;

        li {
          float: left;
          height: 100%;
          padding: 0 10px;
          line-height: 1.5;
          color: #555;
          border-left: 1px solid #eee;

          input[type="radio"] {
            position: absolute;
            visibility: hidden;
          }

          label {
            float: left;
            display: block;
            padding-top: 2px;
            cursor: pointer;
          }
        }

        li.selected {
          font-weight: bold;
          color: #0073e9;
        }
      }
    }

    .sorting-list {
      float: right;
      width: 105px;
      position: relative;
      height: 32px;
      color: #555;
      z-index: 4;

      .selectbox-options {
        width: 100%;
        height: 32px;
        max-height: 32px;
        background-color: #fafafa;
        overflow: hidden;
        z-index: 9;
        transition: max-height 0.5s ease-out;

        &.opened {
          height: auto;
          max-height: 500px;
          background-color: #fff;

          li {
            display: block;
          }

          li:first-child {
            background-position: -17px -227px;
          }
        }

        li {
          display: none;
          height: 21px;
          padding: 11px 5px 0;
          line-height: 1;
          font-size: 12px;
          cursor: pointer;
        }

        li:first-child {
          background-image: url("https://img1a.coupangcdn.com/image/coupang/search/search_assets_160912@2x.png");
          background-size: 234px 460px;
          background-position: -17px -199px;
        }

        li.selected {
          display: block;
          font-weight: bold;
        }
      }
    }
  }
`;
