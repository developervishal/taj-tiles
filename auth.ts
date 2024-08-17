import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { createHash } from 'crypto'
import { signInSchema } from "./lib/zod";
import prismadb from "./lib/prisma";


export const { handlers, signIn, signOut, auth } = NextAuth({
    pages: {
        signIn: '/login'
    },
    callbacks: {
        authorized({ auth, request: { nextUrl } }) {
            const isLoggedIn = !!auth?.user;
            const isOnDashboard = nextUrl.pathname === "/";
            const isLoginPage = nextUrl.pathname === "/login"
            if (isOnDashboard && !isLoginPage) {
                if (isLoggedIn) return true;
                return Response.redirect(new URL("/login", nextUrl))
            } else if (!isLoggedIn && !isLoginPage) {
                return Response.redirect(new URL("/login", nextUrl));
            } else if (isLoggedIn && isLoginPage) {
                return Response.redirect(new URL("/", nextUrl));
            }
            else {
                return true;
            }

        },
    },
    providers: [
        Credentials({
            credentials: {
                username: {},
                password: {}
            },
            async authorize(credentials) {
                try {
                    let user = null
                    const { username, password } = await signInSchema.parseAsync(credentials)
                    const hashPassword = createHash('sha1').update(password).digest('hex')
                    user = await prismadb.user.findUnique({
                        where: {
                            username: username,
                        }
                    })
                    if (!user) {
                        return null
                    }
                    if (user.password === hashPassword) {
                        return user
                    }
                    return null
                } catch (err) {
                    return null
                }
            }
        })
    ],
    session: {
        strategy: 'jwt'
    }
})