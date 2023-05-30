import NextAuth from "next-auth"
import GithubProvider from "next-auth/providers/github"
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: 'f47ed548cf083e109954',
      clientSecret: '2ada6b80cebac0b30f591327d823cbb45b490f1e',
    }),
    // ...add more providers here
  ],
}
export default NextAuth(authOptions)