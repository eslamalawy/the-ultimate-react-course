import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { createGuest, getGuest } from "./data-service";

const authConfig = {
  providers: [
    Google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  callbacks: {
    authorized({ auth, request }) {
      // auth here is the session - request is sent by the middleware
      // !! is used to convert this to boolean instead of if(auth.user) return true
      return !!auth?.user;
    },
    async signIn({ user, account, profile }) {
      // this callback actually runs before the actual signup process happens so that means we can perform all kinds of operations here that are associated with the signing in process
      // works as middleware it happens after the user has put in their credentials but before they actually really logged into the application
      try {
        const existingGuest = await getGuest(user.email);
        if (!existingGuest)
          await createGuest({ email: user.email, fullName: user.name });

        return true;
      } catch {
        return false;
      }
    },
    async session({ session, user }) {
      // this callback is gonna be called the session callback, and it runs after the sign in callback - and also each time that the session is checked out
      const guest = await getGuest(session.user.email);
      session.user.guestId = guest.id;
      return session;
    },
  },
  pages: {
    signIn: "/login",
  },
};

export const {
  auth,
  signIn,
  signOut,
  handlers: { GET, POST },
} = NextAuth(authConfig);
