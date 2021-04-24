import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import ScrollToTop from "../ScrollToTop";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
      <ScrollToTop />
    </>
  );
}
