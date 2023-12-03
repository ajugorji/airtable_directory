import { Link } from "gatsby"
import React from "react"
import { Footer, SignupForm } from "../components"

export const LayoutFull = ({ children }) => {
  return (
    <>
      <header className="bg-white py-6">
        <div className="container text-center">
          <Link to="/" className="inline-block">
            <span class="font-bold text-slate-800">Bootstrap</span>
            <span class="text-slate-500">city</span>
          </Link>
        </div>
      </header>
      {children}
      <Footer />
    </>
  )
}
