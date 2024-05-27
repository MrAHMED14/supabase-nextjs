'use server'

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { createClient } from "./supabase";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

const prisma = new PrismaClient()

export async function getAllNotes() {
    try {
        const todos = await prisma.notes.findMany()

        return todos
    } catch (error) {
        console.log(error);
    }
}

export async function createNote(title) {
    try {
        const note = await prisma.notes.create({
            data: {
                title
            },
        })
        console.log(note);
        revalidatePath('/notes')

    } catch (error) {
        console.log(error);
    }
}

export async function signOut() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()

    if (error) console.log(error)
}


export async function signIN() {
    const origin = headers().get("origin")
    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider: "github",
        options: {
            redirectTo: `${origin}/auth/callback`,
        },
    })

    if (error) {
        console.log(error)
    }
    if (data) {
        redirect(data.url)
    }
}
