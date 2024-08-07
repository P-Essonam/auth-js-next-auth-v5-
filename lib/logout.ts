"use server"

import { signOut } from '@/auth'


export const logOut = async () => {

    // some stuff here

    await signOut({
        redirectTo: '/sign-in'
    })

}