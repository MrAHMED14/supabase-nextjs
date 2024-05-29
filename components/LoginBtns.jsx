"use client"
import { Button } from "@/components/ui/button"
import { signIN } from "@/lib/action"
import { LoaderCircle } from "lucide-react"
import { useState } from "react"

import Link from "next/link"
import { GithubIcon, GoogleIcon } from "@/app/Icons"

const LoginBtns = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [pendingGithub, setPendingGithub] = useState(false)
  const [pendingGoogle, setPendingGoogle] = useState(false)

  const signInWithGithub = async () => {
    setPendingGithub(true)
    setIsLoading(true)
    try {
      await signIN("github")
    } catch (err) {
      console.log(err)
    }
  }

  const signInWithGoogle = async () => {
    setPendingGoogle(true)
    setIsLoading(true)
    try {
      await signIN("google")
    } catch (err) {
      console.log(err)
    }
  }
  return (
    <div className="w-full space-y-2">
      <Button
        disabled={isLoading}
        onClick={signInWithGithub}
        className="font-semibold w-full text-black  flex items-center justify-center gap-1"
      >
        <GithubIcon width={24} height={24} />
        GitHub
        {pendingGithub ? (
          <>
            <p className="flex items-center justify-center ml-1">
              <LoaderCircle className="animate-spin" size={16} />
            </p>
          </>
        ) : (
          ""
        )}
      </Button>
      <Button
        disabled={isLoading}
        onClick={signInWithGoogle}
        className="font-semibold w-full text-black  flex items-center justify-center gap-1"
      >
        <GoogleIcon width={24} height={24} />
        Google
        {pendingGoogle ? (
          <>
            <p className="flex items-center justify-center ml-1">
              <LoaderCircle className="animate-spin" size={16} />
            </p>
          </>
        ) : (
          ""
        )}
      </Button>
    </div>
  )
}

export default LoginBtns
