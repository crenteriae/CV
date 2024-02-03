'use client'

import LoginForm from "./components/loginForm";
import Image from "next/image";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, []);
  return (
    <div className="flex w-screen h-screen max-w-full flex-row">
      <div className="w-1/3 min-w-fit h-full z-10 bg-white flex items-center justify-center">
        <LoginForm />
      </div>
      <Image 
        src={"/Zugpsitze_mountain.jpg"}
        layout="fill"
        objectFit="cover"
        alt="Nature"
      />
    </div>
  )
}
