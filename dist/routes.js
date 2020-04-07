"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _express = require('express'); var _express2 = _interopRequireDefault(_express);

var _OngController = require('./controllers/OngController'); var _OngController2 = _interopRequireDefault(_OngController);
var _IncidentController = require('./controllers/IncidentController'); var _IncidentController2 = _interopRequireDefault(_IncidentController);
var _ProfileController = require('./controllers/ProfileController'); var _ProfileController2 = _interopRequireDefault(_ProfileController);
var _SessionController = require('./controllers/SessionController'); var _SessionController2 = _interopRequireDefault(_SessionController);

const routes = _express2.default.Router()

// Session
routes.post('/session', _SessionController2.default.create)

// Ongs
routes.post('/', _OngController2.default.create)
routes.get('/', _OngController2.default.read)

// Incidents
routes.post('/incidents', _IncidentController2.default.create)
routes.get('/incidents', _IncidentController2.default.read)
routes.get('/all-incidents', _IncidentController2.default.index)
routes.delete('/incidents/:id', _IncidentController2.default.delete)

// Profile
routes.get('/user-incidents', _ProfileController2.default.read)

exports. default = routes
