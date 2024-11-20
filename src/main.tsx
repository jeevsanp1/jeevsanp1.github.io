import React from "react";
import ReactDOM from "react-dom/client";
import Homepage from "./pages/Home.tsx";
import Personalp from "./pages/personalp.tsx";
import { FollowerPointerCard } from "./pages/following-pointer.tsx";
import Nav from "./pages/nav.tsx";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Nav />
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<FollowerPointerCard children={<Homepage />} />}
        ></Route>
        <Route path="/personal" element={<Personalp />}></Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
