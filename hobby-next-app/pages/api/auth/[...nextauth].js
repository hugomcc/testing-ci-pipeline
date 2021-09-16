import NextAuth from "next-auth"
import Providers from "next-auth/providers"

export default NextAuth({
    pages: {
        signIn: '/login',
    },
  // Configure one or more authentication providers
  providers: [
    Providers.Credentials({
        id: 'Credentials',
        // The name to display on the sign in form (e.g. 'Sign in with...')
        name: 'Credentials',
        // The credentials is used to generate a suitable form on the sign in page.
        // You can specify whatever fields you are expecting to be submitted.
        // e.g. domain, username, password, 2FA token, etc.
        credentials: {
          username: { label: "Username", type: "text", placeholder: "jsmith" },
          password: {  label: "Password", type: "password" }
        },
        async authorize(credentials, req) {
            console.log("credentials-----: ", credentials)
          // You need to provide your own logic here that takes the credentials
          // submitted and returns either a object representing a user or value
          // that is false/null if the credentials are invalid.
          // e.g. return { id: 1, name: 'J Smith', email: 'jsmith@example.com' }
          // You can also use the `req` object to obtain additional parameters
          // (i.e., the request IP address) 
          const res = await fetch("https://motion.propulsion-home.ch/backend/api/auth/token/", {
            method: 'POST',
            body: JSON.stringify(credentials),
            headers: { "Content-Type": "application/json" }
          })
          const user = await res.json()
          
          // If no error and we have user data, return it
          if (res.ok && user) {
              console.log("User------: ", user)
            return user
          }
          // Return null if user data could not be retrieved
          return null
        }
      })
  ],
//   callbacks: {
//     // this is a little bit annoying, by default nextauth does not store id and other information in the JWT token, need to manually do this
//     async jwt(token, user, _account, _profile, _isNewUser) {
//       if (user) {
//           console.log("UserJwt------: ", user)
//           console.log("token------: ", token)
          
//           token.user = user
//         }
        
//         return token
//     },
//     // also a bit annoying, but nextauth does not store the full jwt user in the session - let's do it here
//     async session(session, jwt, _sessionToken) {
//         session.user = jwt.user
//         console.log("Session.user------: ", session.user)
//       return session
//     },
//   },

  // A database is optional, but required to persist accounts in a database
  database: process.env.DATABASE_URL,
})