import React from "react";
import Header from "../Header";
import ScrollToTop from "../ScrollToTop";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <ScrollToTop />
    </>
  );
}
