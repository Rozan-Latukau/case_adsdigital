// app/api/auth/route.js (atau pages/api/auth/[...nextauth].js)
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Dummy data for simulation
        const users = [{ id: 1, username: "anonymus", password: "12345678" }];

        // Find user with matching credentials
        const user = users.find((user) => user.username === credentials.username && user.password === credentials.password);

        if (user) {
          return { id: user.id, name: user.username };
        }
        return null;
      },
    }),
  ],
  pages: {
    signIn: "/Auth/signin",
    error: "/error", // Redirect here on error
  },
  // cookies: {
  //   csrfToken: {
  //     name: `__Host-next-auth.csrf-token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: true,
  //     },
  //   },
  // },
  // callbacks: {
  //   async session({ session, token }) {
  //     session.user.id = token.id;
  //     return session;
  //   },
  // },
};

export default NextAuth(authOptions);
