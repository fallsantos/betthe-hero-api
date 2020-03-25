import express from 'express'

import OngController from './controllers/OngController'
import IncidentController from './controllers/IncidentController'
import ProfileController from './controllers/ProfileController'
import SessionController from './controllers/SessionController'

const routes = express.Router()

// Session
routes.post('/session', SessionController.create)

// Ongs
routes.post('/', OngController.create)
routes.get('/', OngController.read)

// Incidents
routes.post('/incidents', IncidentController.create)
routes.get('/incidents', IncidentController.read)
routes.delete('/incidents/:id', IncidentController.delete)

// Profile
routes.get('/user-incidents', ProfileController.read)

export default routes
