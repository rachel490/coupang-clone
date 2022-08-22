import React from "react";

import * as S from "./layout.styled";

const Layout = ({children} : {children: JSX.Element}) => {
  return (
    <S.Wrap>
      <S.Header>header</S.Header>
      <S.Container>
        <S.Sidebar>sidebar</S.Sidebar>
        <main>{children}</main>
      </S.Container>
    </S.Wrap>
  );
};

export default Layout;
