import Link from "next/link"
import MaxWidthWrapper from "./MaxWidthWrapper"
import { Button } from "./ui/button"

const Navbar = () => {
  return (
    <nav className="w-full sticky top-0 z-50 backdrop-blur-sm">
      <MaxWidthWrapper>
        <div className="w-full flex items-center justify-between mx-auto my-2">
          {/* Left */}
          <div className="w-full flex items-center">
            <Link className="text-xl font-bold" href={"/"}>
              LOGO
            </Link>
          </div>

          {/* Center */}
          <div className="w-full flex items-center justify-center">
            <ul className="hidden sm:flex justify-center items-center space-x-5">
              <li>
                <Link href={"/"}>Home</Link>
              </li>
              <li>
                <Link href={"/notes"}>Notes</Link>
              </li>
              <li>
                <Link href={"#"}>Contact</Link>
              </li>
            </ul>
          </div>

          {/* Right */}
          <div className="w-full flex items-center justify-end gap-x-2">
            <Button variant="ghost">Login</Button>
            <Button className="text-white bg-blue-500 hover:bg-blue-400">
              Sign in
            </Button>
          </div>
        </div>
      </MaxWidthWrapper>
    </nav>
  )
}

export default Navbar
