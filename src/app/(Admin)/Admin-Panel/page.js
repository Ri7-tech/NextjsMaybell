import Image from "next/image";
import MainLayout from "./Common/MainLayout";
import Homepage from "./Componentr/Homepage";
import BestSelling from "./Common/Home page/BestSelling";

export const metadata = {
  title: "Mybell",
  description: "",
};

export default function Home() {
  return (
    <>
      <MainLayout>
        <BestSelling />
      </MainLayout>
    </>
  );
}
