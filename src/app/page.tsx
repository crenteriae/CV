'use client'

import LoginForm from "./components/loginForm";

import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.bundle.min.js")
  }, []);
  return (
    <div className="flex w-screen h-screen max-w-full flex-row">
      <div className="w-2/5 my-auto">
        <LoginForm />
      </div>
      <div className="w-full h-full"
        style={{
          backgroundImage: 'url("Zugpsitze_mountain.jpg")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
      </div>
    </div>
  )
}
