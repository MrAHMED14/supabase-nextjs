import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { LoaderCircle } from "lucide-react"

const Loading = () => {
  return (
    <MaxWidthWrapper
      className={"h-full flex flex-col justify-center items-center"}
    >
      <div className="flex flex-col items-center">
        <LoaderCircle className="animate-spin" size={20} />
      </div>
    </MaxWidthWrapper>
  )
}

export default Loading
