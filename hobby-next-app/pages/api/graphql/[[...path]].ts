import { createProxyMiddleware } from 'http-proxy-middleware'
import { getSession } from 'next-auth/client'
import express from 'express'

const proxyMiddleware = createProxyMiddleware({
  target: process.env.FRONTEND_BACKEND_URL || 'http://localhost:4000',
  changeOrigin: true,
  pathRewrite: { '^/api': '/' },
  xfwd: true,
})

export default async (req: express.Request, res: express.Response) => {
  const session = await getSession({ req })
  if (session) {
    req.headers['x-user-id'] = session.user.id
  }
  proxyMiddleware(req, res, console.error)
}

export const config = {
  api: {
    bodyParser: false, // enable POST requests
    externalResolver: true, // hide warning message
  },
}