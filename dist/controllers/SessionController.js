"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _database = require('../database'); var _database2 = _interopRequireDefault(_database);

exports. default = {
  async create (req, res) {
    const { id } = req.body

    const ong = await _database2.default.call(void 0, 'ongs')
      .where('id', id)
      .select('name')
      .first()

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found whith this ID' })
    }

    res.json(ong)
  }
}
