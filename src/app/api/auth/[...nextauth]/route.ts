import { prisma } from "@src/prisma.client";
import NextAuth from "next-auth/next";
import { NextResponse } from "next/server";
import GoogleProvider from 'next-auth/providers/google'
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from 'bcrypt'
import { AuthOptions } from "next-auth";

export const authOptions: AuthOptions = {
    session: {
        strategy: 'jwt'
    },
    callbacks: {
        session({ session, user }) {
          return session
        },
      },
    providers: [
        GoogleProvider({
        clientId: process.env.GOOGLE_CLIENT_ID as string,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET as string
    }),
        CredentialsProvider({
            type: 'credentials',
            credentials: {
            },
            async authorize(credentials, req) {
                const {email, password} = credentials as Credentials
                const user = await prisma.user.findUnique({
                    where: {
                        email
                    }
                })

                if (!user) {
                    return null
                }

                if (!bcrypt.compareSync(password, user!.password)){
                    return null
                }

                return {id: user.id, name: user.name, surname: user.surname};
            },
        })
    ],
    pages:{
        signIn: '/auth/signin'
    }
}

const handler = NextAuth(authOptions);

export {handler as GET, handler as POST}