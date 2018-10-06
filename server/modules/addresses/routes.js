import { Router } from 'express';
import * as AddressesController from './controller';

const routes = new Router();

routes.get('/addresses', AddressesController.getAddresses);
routes.post('/addresses/create', AddressesController.createAddresses);

export default routes;