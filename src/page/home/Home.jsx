import React, { useEffect } from "react";
import { Header } from "../../layout/Header/Header";
import Aside from "../../layout/Aside/Aside";
import Card from "../../layout/Card/Card";
export default function Home() {
  useEffect(() => {
    document.title = "Home";
    document.body.classList = "bg-[#20262E]"
  });
  return (
    <>
      <Header />
      <Card />
      <Aside/>

    </>
  );
}
