'use server'

import { PrismaClient } from "@prisma/client";
import { revalidatePath } from "next/cache";

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