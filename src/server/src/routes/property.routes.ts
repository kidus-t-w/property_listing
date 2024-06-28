import { Router } from 'express';
import {
    createPropertyHandler,
    getPropertiesHandler,
    getPropertyByIdHandler,
    updatePropertyHandler,
    deletePropertyHandler
} from '../controllers/property.controller';

const propertyRouter = Router();

propertyRouter.post('/', createPropertyHandler);
propertyRouter.get('/', getPropertiesHandler);
propertyRouter.get('/:id', getPropertyByIdHandler);
propertyRouter.put('/:id', updatePropertyHandler);
propertyRouter.delete('/:id', deletePropertyHandler);

export default propertyRouter;
