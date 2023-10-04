import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PageSelect from "../pages/pageSelect/PageSelect";
import DropDown from "../pages/dropDown/DropDown";

function MainRouter() {
  return (
    <Routes>
      <Route path="/" element={<PageSelect />}></Route>
      <Route path="/dropdown" element={<DropDown />}></Route>
    </Routes>
  );
}

export default MainRouter;
