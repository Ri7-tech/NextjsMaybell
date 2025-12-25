import React from "react";
import MainLayout from "../Common/MainLayout";
import Login from "../Componentr/Login";

export const metadata = {
  title: "LogIn | Maybell",
  description: "",
};

export default function page() {
  return (
    <>
      <MainLayout>
        <Login />
      </MainLayout>
    </>
  );
}
