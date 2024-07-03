import { NextFunction, Request, Response } from 'express'

const requireUser = (req: Request, res: Response, next: NextFunction) => {
  const user = res.locals.user

  if (!user) {
    return res.sendStatus(401)
  }
  // TODO: Also reject users whose session id is not valid
  return next()
}

export default requireUser
