import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import selectPageJSON from "../../DB/selectPage.json";

function PageSelect() {
  const navigate = useNavigate();

  const pageMove = (url) => {
    navigate(url);
  };

  return (
    <Container>
      <Wrap>
        {selectPageJSON.pages?.map((page, idx) => {
          return (
            <PageMoveBtn
              key={idx}
              onClick={() => {
                pageMove(page.url);
              }}
            >
              {page.title}
            </PageMoveBtn>
          );
        })}
      </Wrap>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
  background-color: gray;
  align-items: center;
  justify-content: space-around;
`;

const Wrap = styled.div`
  display: flex;
  width: 500px;
  height: 100px;
  flex-wrap: wrap;
  justify-content: center;

  * {
    color: white;
  }
`;

const PageMoveBtn = styled.button`
  width: 100px;
  height: 50px;
  margin: 20px;
  justify-content: center;
  align-items: center;
  background-color: black;
`;

export default PageSelect;
