import { Role } from '@prisma/client'
import { DefaultSession } from 'next-auth'

export type ExtendUser = DefaultSession['user'] & {
    role: Role
}



declare module 'next-auth' {
    interface Session {
        user: ExtendUser
    }
}