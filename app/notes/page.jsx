import InputForm from "@/components/InputForm"
import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import Notes from "@/components/Notes"

export const dynamic = "force-dynamic"

export default async function Page() {
  return (
    <MaxWidthWrapper className="py-10">
      <h1 className="text-4xl font-bold py-2">Create Note</h1>
      <InputForm />
      <h1 className="text-4xl font-bold py-2 mt-7">Notes</h1>
      <div className="grid grid-cols-1 grid-y-12 sm:grid-cols-2 sm:gap-x-6 md:grid-cols-3 md:gap-x-8 md:gap-y-0 lg:grid-cols-4">
        <Notes />
      </div>
    </MaxWidthWrapper>
  )
}
