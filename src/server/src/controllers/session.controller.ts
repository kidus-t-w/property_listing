import config from 'config'
import { Request, Response } from 'express'
import { signJwt } from '../utils/jwt.utils'
import { UserDocument } from '../models/user.model'
import { validatePassword } from '../services/users.service'
import { createSession, findSessions, updateSession } from '../services/session.service'
import { CreateSessionInput } from '../schemas/session.schema'

export async function createUserSessionHandler(req: Request<{}, {}, CreateSessionInput["body"]>, res: Response) {
  const result = await validatePassword(req.body)

  if (!result) {
    return res.status(401).send('Invalid email or password.')
  }

  const user = result as UserDocument
  const session = await createSession(user._id as string, req.get('user-agent') || '')
  const accessToken = signJwt({ ...user, session: session._id }, { expiresIn: config.get<string>('accessTokenTtl') })
  const refreshToken = signJwt({ ...user, session: session._id }, { expiresIn: config.get<string>('refreshTokenTtl') })

  return res.status(200).json({ accessToken, refreshToken })
}

export async function getUserSessionHandler(req: Request, res: Response) {
  const userId = res.locals.user._id
  const sessions = await findSessions({ user: userId, valid: true })

  return res.status(200).json(sessions)
}

export async function deleteUserSessionHandler(req: Request, res: Response) {
  const sessionId = res.locals.user.session
  await updateSession({ _id: sessionId }, { valid: false })

  return res.status(200).json({ accessToken: null, refreshToken: null })
}
