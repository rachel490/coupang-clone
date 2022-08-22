import styled from "@emotion/styled";
import axios from "axios";
import { useQuery } from "react-query";
import { ProductItem } from "../src/components/productItem/productItem";
import { IProductItem } from "../types/product";

export default function ProductListPage() {
  const { data } = useQuery("products", () =>
    axios.get(
      process.env.NEXT_PUBLIC_API_HOST +
        "/products?offset=0&limit=40&sorter=bestAsc"
    )
  );

  // console.log(data);

  return (
    <Container>
      {data?.data?.map((item: IProductItem) => (
        <ProductItem {...item} key={item.id} />
      ))}
    </Container>
  );
}

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;
