"use client";

import React, { useState } from "react";
import CategoriesCard from "../about-us/CategoriesCard";

export default function CategoriesSection() {
  var [cate, setCate] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <>
      {/* <!-- /Cons bages  --> */}

      <h2 className="mx-auto mb-5 max-w-[1200px] px-5">SHOP BY CATHEGORY</h2>

      {/* <!-- Cathegories --> */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-2 px-5 lg:grid-cols-3 lg:gap-5">
        {/* <!-- 1 --> */}
        {cate.map((v, i) => {
          return <CategoriesCard key={i} />;
        })}
      </section>
      {/* <!-- /Cathegories  --> */}
    </>
  );
}
