import { Router } from 'express';
import OngsController from './controllers/OngsController';
import IncidentController from './controllers/IncidentController';
import ProfileController from './controllers/ProfilleController';
import SessionController from './controllers/SessionController';

const routes = Router();

routes.post('/sessions', SessionController.store);

routes.get('/ongs', OngsController.index);
routes.post('/ongs', OngsController.store);

routes.post('/incidents', IncidentController.store);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

routes.get('/profiles', ProfileController.index);

export default routes;
