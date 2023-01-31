import mongoose from "mongoose";
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import GoogleProvider from "next-auth/providers/google";
import User from "../../../models/user.model";
// import connectDB from "../../../middleware/connectDB";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "credentials",
      // fetch user from database
      async authorize(credentials) {
        await mongoose.connect(process.env.MONGODB_URL);
        const user = await User.findOne({ phone: credentials.phone })
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async session({ session, token }) {
      const user = await User.findOne({ email: session.user.email }, { password: 0 });
      if (session.user) {
        session.user.role = user.role;
        session.user.name = user.name;
        session.user.id = user._id;
        session.user.phone = user.phone;
      }
      return session;
    },
    async jwt({ token }) {
      // const user = await User.findOne({ email: token.email }, { password: 0 }).populate('courses.courseId')
      // if (user) {
      //   token.role = user.role;
      // }
      return token;
    }
  },

  pages: {
    pages: {
      signIn: '/auth/signin',
      signOut: '/auth/signout',
      error: '/auth/error', // Error code passed in query string as ?error=
      verifyRequest: '/auth/verify-request', // (used for check email message)
      newUser: '/auth/new-user' // New users will be directed here on first sign in (leave the property out if not of interest)
    }
  },
});