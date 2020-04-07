"use strict"; function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _dotenv = require('dotenv'); var _dotenv2 = _interopRequireDefault(_dotenv);
var _express = require('express'); var _express2 = _interopRequireDefault(_express);
var _morgan = require('morgan'); var _morgan2 = _interopRequireDefault(_morgan);
var _cors = require('cors'); var _cors2 = _interopRequireDefault(_cors);

var _routes = require('./routes'); var _routes2 = _interopRequireDefault(_routes);

_dotenv2.default.config()

const app = _express2.default.call(void 0, )

app.use(_cors2.default.call(void 0, ))
app.use(_express2.default.json())
app.use(_morgan2.default.call(void 0, 'dev'))

app.get('/', (req, res) => {
  return res.json(
    {
      name: 'Be The Hero api',
      version: '0.1',
      author: [
        {
          name: 'Flávio Santos',
          rule: 'Fullstack developer',
          email: 'fallsantosdev@hotmail.com',
          github: 'https://github.com/fallsantos',
          linkedin: 'https://www.linkedin.com/in/fall-santos-23bb87103/'
        }
      ]
    }
  )
})

app.use('/ongs', _routes2.default)

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}...`)
})
