import type { SessionStrategy } from "next-auth";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  session: {
    strategy: "jwt" as SessionStrategy,
  },
  pages: {
    signIn: "/auth/signin",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {},
        password: {},
      },
      async authorize(credentials) {
        const passwordCorrect =
          credentials?.email === "admin@gmail.com" &&
          credentials?.password === "Admin@123";

        if (passwordCorrect) {
          return {
            id: "1",
            name: "Admin User",
            email: credentials.email,
            role: "admin",
          };
        }
        return null;
      },
    }),
  ],
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
