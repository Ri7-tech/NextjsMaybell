"use client";

import Image from "next/image";
import MainLayout from "./Common/MainLayout";

import BestSelling from "./Common/Home page/BestSelling";
import DiscoverOrder from "./Common/Home page/DiscoverOrder";
import CategoriesSection from "./Componentr/CategoriesSection";
import ProductCart from "./Componentr/ProductCart";
import { useState } from "react";

// export const metadata = {
//   title: "Mybell",
//   description: "",
// };

export default function Home() {
  let [topRated, setToprated] = useState([1, 2, 3, 4]);
  let [recomand, setRecomand] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  return (
    <>
      <MainLayout>
        <BestSelling />
        <DiscoverOrder />
        <CategoriesSection />
        <ProductCart title="Top Rated" top={topRated} />
        <ProductCart title="most recomanded" top={recomand} />
      </MainLayout>
    </>
  );
}
