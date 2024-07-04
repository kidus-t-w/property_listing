import _ from 'lodash'
import { verifyJwt } from '../utils/jwt.utils'
import { NextFunction, Request, Response } from 'express'
import { reIssueAccessToken } from '../services/session.service'

const deserializeUser = async (req: Request, res: Response, next: NextFunction) => {
  const accessToken = _.get(req, 'headers.authorization')?.replace(/^Bearer\s/, '')

  // req[headers].authorization
  // Bearer <AuthToken>
  const refreshToken = _.get(req, 'headers.x-refresh') as string

  if (!accessToken) return next()

  const { decoded: user, expired } = verifyJwt(accessToken)
  if (user) {
    res.locals.user = user
    return next()
  }

  if (expired && refreshToken) {
    const newAccessToken = await reIssueAccessToken({ refreshToken })
    if (!newAccessToken) {
      return next()
    }
    res.setHeader('x-access-token', newAccessToken)
    const result = verifyJwt(newAccessToken)
    res.locals.user = result.decoded
    return next()
  }
  return next()
}

export default deserializeUser
