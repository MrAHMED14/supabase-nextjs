"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import { LoaderCircle } from "lucide-react"
import { createNote } from "@/lib/action"
import { toast } from "sonner"

const FormSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
})

const InputForm = () => {
  const [isLoading, setIsLoading] = useState(false)
  const pending = isLoading

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      title: "",
    },
  })

  async function onSubmit(data) {
    setIsLoading(true)

    await createNote(data.title)

    toast.success("Your notes added successfully")

    form.reset()
    setIsLoading(false)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>
                title <span className="text-red-600">*</span>
              </FormLabel>
              <FormControl>
                <Input placeholder="Enter a note here" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isLoading} type="submit">
          {pending ? (
            <>
              <p className="flex items-center justify-center gap-1">
                Loading <LoaderCircle className="animate-spin" size={16} />
              </p>
            </>
          ) : (
            "Submit"
          )}
        </Button>
      </form>
    </Form>
  )
}
export default InputForm
