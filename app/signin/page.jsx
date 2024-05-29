import LoginBtns from "@/components/LoginBtns"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import SignInForm from "@/components/SigninForm"
import Link from "next/link"

export default function Page() {
  return (
    <MaxWidthWrapper
      className={"h-full flex flex-col justify-center items-center"}
    >
      <div className="flex flex-col items-center gap-y-6 w-60 sm:w-80">
        <h1 className="text-4xl font-bold">Sign in</h1>

        <SignInForm />

        <div className="w-full flex justify-between items-center gap-2">
          <div className="w-full h-px bg-white/15" />
          <p className="text-xs text-white/50">OR</p>
          <div className="w-full h-px bg-white/15" />
        </div>

        <div className="w-full space-y-2">
          <LoginBtns />
          <p className="text-xs text-white/50">
            Already have account?{" "}
            <Link href={"/login"} className="hover:underline hover:text-white">
              Login
            </Link>
          </p>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
