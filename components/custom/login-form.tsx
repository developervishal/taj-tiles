import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signIn } from "@/auth"
import { redirect } from "next/navigation"



export default function LoginForm() {
  return (
    <form
      action={async (formData) => {
        "use server"
        await signIn("credentials", formData)
        redirect("/")
      }}
    >
      <Card className="w-[450px]">
        <CardHeader className="flex h-20 w-full items-center justify-center rounded-t-lg bg-primary p-3 md:h-36">
          <CardTitle className="text-white tracking-wide text-2xl font-bold">TAJ TILES</CardTitle>
          <CardDescription>Login to the application.</CardDescription>
        </CardHeader>
        <CardContent className="mt-10">

          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name" className="text-md">Username</Label>
              <Input className="py-5 h-12 text-md" id="username" name="username" placeholder="Enter your username" />
            </div>
            <div className="flex flex-col space-y-1.5 mt-3">
              <Label htmlFor="name">Password</Label>
              <Input className="py-5 h-12 text-md" id="password" name="password" type="password" placeholder="Enter your password" />
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex">
          <Button className="w-full" size={'lg'}>Login</Button>
        </CardFooter>
      </Card>
    </form>
  )
}
