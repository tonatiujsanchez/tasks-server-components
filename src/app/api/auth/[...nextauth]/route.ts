// import NextAuth, { NextAuthOptions } from "next-auth"
// import GithubProvider from "next-auth/providers/github"
// import GoogleProvider from "next-auth/providers/google";


// export const authOptions:NextAuthOptions = {
//     // Configure one or more authentication providers
//     providers: [
//         GoogleProvider({
//             clientId: process.env.GOOGLE_CLIENT_ID ?? '',
//             clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? ''
//         }),
//         GithubProvider({
//             clientId: process.env.GITHUB_ID ?? '',
//             clientSecret: process.env.GITHUB_SECRET ?? '',
//         }),
//         // ...add more providers here
//     ],
// }

// const handler = NextAuth(authOptions)

// export { handler as GET, handler as POST }


import NextAuth from "next-auth"
import { authOptions } from "./auth"

const handler = NextAuth(authOptions)

export { handler as GET, handler as POST }