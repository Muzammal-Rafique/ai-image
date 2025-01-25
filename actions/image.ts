'use server'
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

export async function generateImageAi() {

    auth.protect()

    try {

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch (err:any) {
        throw new Error(err);
        redirect("/")
    }
}