import React, { useEffect } from 'react'

import { useSession } from 'next-auth/client'
import { useRouter } from 'next/router'


function AuthenticationGate({ children }) {
    const [session, loading] = useSession()
    const router = useRouter()
    useEffect(() => {
      if (!session) {
        router.push('/login').catch(console.error)
      }
    }, [session, loading])

    if (loading) return <p>Loading...</p>

    return children
  }

export default AuthenticationGate

