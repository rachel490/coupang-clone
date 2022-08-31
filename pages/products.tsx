import styled from "@emotion/styled";
import axios from "axios";
import { useRouter } from "next/router";
import { useQuery } from "react-query";

import Footer from "../src/components/footer/footer";
import Header from "../src/components/header/header";
import { ProductItem } from "../src/components/productItem/productItem";
import { IProductItem } from "../types/product";

export default function ProductListPage() {
  const {
    query: { page = 1, sorter = "bestAsc", limit = 12 },
  } = useRouter();
  const URL =
    process.env.NEXT_PUBLIC_API_HOST +
    `/products?offset=${
      Number(limit) * (Number(page) - 1)
    }&limit=${limit}&sorter=${sorter}`;

  const { data } = useQuery(["products", URL], () => axios.get(URL));

  return (
    <Wrap>
      <Header />
      <Container>
        {data?.data?.map((item: IProductItem) => (
          <ProductItem {...item} key={item.id} />
        ))}
      </Container>
      <Footer />
    </Wrap>
  );
}

export const Wrap = styled.div`
  width: 1080px;
  padding: 20px 0 0 0px;
`;
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
`;
