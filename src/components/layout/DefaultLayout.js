import React from "react";
import { Footer } from "../sections/footer/Footer";
import { TopNavBar } from "../top-nav-bar/TopNavBar";

export const DefaultLayout = ({ children }) => {
  return (
    <div>
      <TopNavBar />
      <div className="main-children">{children}</div>
      <Footer />
    </div>
  );
};
