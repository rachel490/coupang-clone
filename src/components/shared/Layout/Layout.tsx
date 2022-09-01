import React from "react";

import * as S from "./layout.styled";

const Layout = ({ children }: { children: JSX.Element }) => {
  return (
    <>
      <S.Nav>Header</S.Nav>
      <S.Container>
        <S.Sidebar>Sidebar</S.Sidebar>
        <S.Content>{children}</S.Content>
      </S.Container>
    </>
  );
};

export default Layout;
