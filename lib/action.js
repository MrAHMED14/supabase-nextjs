'use server'

import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { createClient } from "./supabase";
import { revalidatePath } from "next/cache";


export async function getUserNotes() {
    const supabase = createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        console.error('User is not authenticated');
        return;
    }

    const { data: notes, error } = await supabase
        .from("notes")
        .select("*")
        .eq("author", user.id)

    if (error) {
        console.error(error, '\n\nError: geting User Notes');
        return;
    }
    return notes ?? []
}

export async function createNote(title) {
    const supabase = createClient()
    const {
        data: { user },
    } = await supabase.auth.getUser()

    if (!user) {
        console.error('User is not authenticated');
        return { status: 401 };
    }

    const { data, error } = await supabase
        .from("notes")
        .insert([{ title, author: user.id }]);

    if (error) {
        console.error('Error inserting note:', error);
        return { status: 401 };
    }

    console.log('Inserted note:', data);

    revalidatePath('/notes')
    return { status: 200 };
}


export async function signOut() {
    const supabase = createClient()
    const { error } = await supabase.auth.signOut()

    if (error) console.log(error)

    redirect('/notes')
}


export async function signIN(provider) {
    const origin = headers().get("origin")
    const supabase = createClient()

    const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
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

export async function signUpNewUser(email, password, name) {
    const supabase = createClient()

    const { error } = await supabase.auth.signUp(
        {
            email,
            password,
            options: {
                data: {
                    first_name: 'name',
                    name: name,
                }
            }
        }
    )

    if (error) {
        console.error(error.message)
        return { error: error.message };

    }

    redirect('/login')
}

export async function signInWithEmail(email, password) {
    const supabase = createClient()
    const { error } = await supabase.auth.signInWithPassword({
        email,
        password,
    })
    if (error) {
        console.error(error.message)
        return { error: error.message };
    }

    revalidatePath('/', 'layout')
    redirect('/')

}
