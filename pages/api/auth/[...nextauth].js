import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import { MongoDBAdapter } from "@next-auth/mongodb-adapter"
import clientPromise from "./lib/mongodb"

//export const authOptions = {
//  // Configure one or more authentication providers
//  providers: [
//    GithubProvider({
//      adapter: MongoDBAdapter(clientPromise),
//      clientId: process.env.GITHUB_ID,
//      clientSecret: process.env.GITHUB_SECRET
//    }),
//    GoogleProvider({
//      client_id: process.env.GOOGLE_CLIENT_ID,
//      clientSecret: process.env.GOOGLE_CLIENT_SECRET
//    })
//    // ...add more providers here
//  ],
//}

export default NextAuth({
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    GoogleProvider({
      client_id: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    })
  ],
  adapter: MongoDBAdapter(clientPromise),
})