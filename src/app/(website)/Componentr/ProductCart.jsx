import React from "react";
import Productcart from "../Common/Productcart";

export default function ProductCart({ title, top }) {
  return (
    <>
      <p className="mx-auto mt-10 mb-5 max-w-[1200px] px-5">{title}</p>

      {/* <!-- Recommendations --> */}
      <section className="mx-auto grid max-w-[1200px] grid-cols-2 gap-3 px-5 pb-10 lg:grid-cols-4">
        {/* <!-- 1 --> */}

        {top.map((v, i) => {
          return <Productcart key={i} />;
        })}
      </section>
      {/* <!-- /Recommendations --> */}
    </>
  );
}
