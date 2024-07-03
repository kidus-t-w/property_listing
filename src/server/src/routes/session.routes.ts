import { Router } from 'express'
import {
  getUserSessionHandler,
  createUserSessionHandler,
  deleteUserSessionHandler
} from '../controllers/session.controller'
import requireUser from '../middlewares/requireUser'
import validateResource from '../utils/validateResource'
import { createSessionSchema } from '../schemas/session.schema'

const sessionRouter = Router()

sessionRouter.post('/', validateResource(createSessionSchema), createUserSessionHandler)
sessionRouter.get('/', requireUser, getUserSessionHandler)
sessionRouter.delete('/', requireUser, deleteUserSessionHandler)

export default sessionRouter