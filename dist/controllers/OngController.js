"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _crypto = require('crypto'); var _crypto2 = _interopRequireDefault(_crypto);

var _ = require('../database/'); var _2 = _interopRequireDefault(_);

exports. default = {
  async create (req, res) {
    const { name, email, whatsapp, city, uf } = req.body

    const id = _crypto2.default.randomBytes(4).toString('HEX')

    await _2.default.call(void 0, 'ongs').insert({
      id,
      name,
      email,
      whatsapp,
      city,
      uf
    })

    return res.json({ id })
  },

  async read (req, res) {
    const ongs = await _2.default.call(void 0, 'ongs').select('*')

    return res.json(ongs)
  }
}
