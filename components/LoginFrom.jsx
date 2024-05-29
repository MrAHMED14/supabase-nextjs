"use client"
import { Button } from "@/components/ui/button"
import { zodResolver } from "@hookform/resolvers/zod"
import { LoaderCircle } from "lucide-react"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { z } from "zod"

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { signInWithEmail } from "@/lib/action"
import { toast } from "sonner"

const FormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(2, {
    message: "password must be at least 2 characters.",
  }),
})

const LoginFrom = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [pendingEmail, setPendingEmail] = useState(false)

  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  })

  async function onSubmit(data) {
    setIsLoading(true)
    setPendingEmail(true)

    const error = await signInWithEmail(data.email, data.password)

    if (error?.error) {
      toast.error(error?.error)
    } else {
      form.reset()
    }

    setPendingEmail(false)
    setIsLoading(false)
  }

  return (
    <div className="w-full">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-2">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  email <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input placeholder="example@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  password <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    type="password"
                    placeholder="example: 123"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button disabled={isLoading} type="submit" className="w-full">
            {pendingEmail ? (
              <>
                <p className="flex items-center justify-center gap-1">
                  Loading <LoaderCircle className="animate-spin" size={16} />
                </p>
              </>
            ) : (
              "Login"
            )}
          </Button>
        </form>
      </Form>
    </div>
  )
}

export default LoginFrom
