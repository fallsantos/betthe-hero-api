"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ = require('../database/'); var _2 = _interopRequireDefault(_);

exports. default = {
  async read (req, res) {
    const ong_id = req.headers.authorization

    const incidents = await _2.default.call(void 0, 'incidents')
      .where('id', ong_id)
      .select('*')

    return res.json(incidents)
  }
}
