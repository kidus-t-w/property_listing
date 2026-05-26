import _ from 'lodash'
import config from 'config'
import { getUser } from './users.service'
import { FilterQuery, UpdateQuery } from 'mongoose'
import { signJwt, verifyJwt } from '../utils/jwt.utils'
import SessionModel, { SessionDocument } from '../models/session.model'

export async function createSession(userId: string, userAgent: string) {
  const session = await SessionModel.create({ user: userId, userAgent })
  return session.toJSON()
}

export async function findSessions(query: FilterQuery<SessionDocument>) {
  return SessionModel.find(query).lean()
}

export async function updateSession(
  query: FilterQuery<SessionDocument>, update: UpdateQuery<SessionDocument>
) {
  return SessionModel.updateOne(query, update)
}

export async function reIssueAccessToken({ refreshToken }: { refreshToken: string }) {
  const { decoded } = verifyJwt(refreshToken)

  if (!decoded || _.get(decoded, 'session')) return false

  const session = await SessionModel.findById(_.get(decoded, 'session'))
  if (!session || !session.valid) return false

  const user = await getUser({ _id: session.user })
  if (user === null) return false

  return signJwt({
    ...user,
    session: session._id
  }, { expiresIn: config.get<number>('accessTokenTtl') })
}
