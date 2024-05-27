"use client"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button } from "@/components/ui/button"
import { signIN } from "@/lib/action"
import { LoaderCircle } from "lucide-react"
import { Bone, Github } from "lucide-react"
import { useState } from "react"

export default function Page() {
  const [isLoading, setIsLoading] = useState(false)
  const pending = isLoading

  const signInHandler = async () => {
    setIsLoading(true)
    await signIN()
  }

  return (
    <MaxWidthWrapper
      className={"h-full flex flex-col justify-center items-center"}
    >
      <div className="flex flex-col items-center gap-y-4 w-40">
        <h1 className="text-4xl font-bold">Sign in</h1>

        <div className="w-full space-y-2">
          <button></button>
          <Button
            disabled={isLoading}
            onClick={signInHandler}
            className="font-semibold w-full text-black  flex items-center justify-center gap-1"
          >
            <Github className="fill-black stroke-black" size={16} />
            GitHub
            {pending ? (
              <>
                <p className="flex items-center justify-center ml-1">
                  <LoaderCircle className="animate-spin" size={16} />
                </p>
              </>
            ) : (
              ""
            )}
          </Button>
          <Button className="font-semibold w-full text-black  flex items-center justify-center gap-1">
            <Bone className="fill-black stroke-black w-4 h-4" />
            Google
          </Button>
        </div>
      </div>
    </MaxWidthWrapper>
  )
}
