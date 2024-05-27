import React from "react"
import MaxWidthWrapper from "./MaxWidthWrapper"

const Footer = () => {
  return (
    <footer className="w-full">
      <MaxWidthWrapper>
        <div className="w-full flex flex-col items-center py-5 mt-4">
          <div className="w-full h-px bg-white/15" />
          <h1 className="pt-5 text-white/15 text-xs">
            {new Date().getFullYear()} &copy; MrAHMED Chikhaoui
          </h1>
        </div>
      </MaxWidthWrapper>
    </footer>
  )
}

export default Footer
