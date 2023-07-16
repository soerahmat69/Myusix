import React from "react";
import { BrowserRouter } from "react-router-dom";
import PrivateRoute from "./PrivateRoute";

export default function Index() {
  return (
    <BrowserRouter>
      <PrivateRoute />
    </BrowserRouter>
  );
}
