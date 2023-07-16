import React, { useEffect } from "react";
import { Header } from "../../layout/Header/Header";
import Aside from "../../layout/Aside/Aside";
export default function Home() {
  useEffect(() => {
    document.title = "Home";
  });
  return (
    <>
      <Header />
      <Aside/>
   
    </>
  );
}
