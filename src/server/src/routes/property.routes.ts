import { Router } from 'express'
import requireUser from '../middlewares/requireUser'
import validateResource from '../utils/validateResource'
import {
    createPropertySchema,
    getPropertySchema,
    updatePropertySchema,
    deletePropertySchema
} from '../schemas/property.schema'
import {
    createPropertyHandler,
    getPropertyHandler,
    updatePropertyHandler,
    deletePropertyHandler,
    getPropertiesHandler
} from '../controllers/property.controller'

const propertyRouter = Router()

propertyRouter.get('/', getPropertiesHandler)
propertyRouter.get('/:id', requireUser, validateResource(getPropertySchema), getPropertyHandler)
propertyRouter.post('/', requireUser, validateResource(createPropertySchema), createPropertyHandler)
propertyRouter.put('/:id', requireUser, validateResource(updatePropertySchema), updatePropertyHandler)
propertyRouter.delete('/:id', requireUser, validateResource(deletePropertySchema), deletePropertyHandler)

export default propertyRouter