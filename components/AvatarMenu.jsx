"use client"
import { signOut } from "@/lib/action"
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import Link from "next/link"

const AvatarMenu = ({ img, name }) => {
  const signOutHandler = async () => {
    await signOut()
  }
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="cursor-pointer">
          <AvatarImage src={img} alt={name} />
          <AvatarFallback className="animate-pulse bg-white/20"></AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white text-black">
        <DropdownMenuLabel>{name}</DropdownMenuLabel>
        <DropdownMenuSeparator />

        <Link href={"/"}>
          <DropdownMenuItem className="flex sm:hidden cursor-pointer">
            Home
          </DropdownMenuItem>
        </Link>
        <Link href={"/notes"}>
          <DropdownMenuItem className="flex sm:hidden cursor-pointer">
            Notes
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem className="flex sm:hidden cursor-pointer">
          Contact
        </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer" onClick={signOutHandler}>
          Sign Out
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default AvatarMenu
