import authConfig from "./auth.config"
import NextAuth from "next-auth"
import { apiAuthPrefix, authRoutes, DEFAULT_REDIRECT, publicRoutes } from "./routes"



const { auth } = NextAuth(authConfig)


export default auth((req) => {

    const { nextUrl } = req
    const isLoggedIn = !!req.auth

    const isPublicRoutes = publicRoutes.includes(nextUrl.pathname)
    const isAuthRoutes = authRoutes.includes(nextUrl.pathname)
    const isApiAuthPrefix = nextUrl.pathname.startsWith(apiAuthPrefix)


    if (isApiAuthPrefix) {
        return 
    }


    if (isAuthRoutes) {
        if (isLoggedIn) {
            return Response.redirect(new URL(DEFAULT_REDIRECT, nextUrl))
        }
        return
    }


    if (!isLoggedIn && !isPublicRoutes) {
        return Response.redirect(new URL("/sign-in", nextUrl))
    }

})



export const config = {
    matcher: [
      '/((?!.+\\.[\\w]+$|_next).*)', '/', '/(api|trpc)(.*)'
    ],
}