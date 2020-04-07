"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _ = require('../database/'); var _2 = _interopRequireDefault(_);

exports. default = {

  async create (req, res) {
    const { title, description, value } = req.body

    const ong_id = req.headers.authorization

    const [id] = await _2.default.call(void 0, 'incidents').insert({
      title,
      description,
      value,
      ong_id
    })

    return res.json({ id })
  },

  async index (req, res) {
    const [count] = await _2.default.call(void 0, 'incidents')
      .count()

    const { page = 1 } = req.query

    const incidents = await _2.default.call(void 0, 'incidents').select('*')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'])

    res.header('X-Total-Count', count['count(*)'])

    return res.json(incidents)
  },

  async read (req, res) {
    const { page = 1 } = req.query
    const ong_id = req.headers.authorization

    const [count] = await _2.default.call(void 0, 'incidents')
      .count()

    const incidents = await _2.default.call(void 0, 'incidents')
      .join('ongs', 'ongs.id', '=', 'incidents.ong_id')
      .limit(5)
      .offset((page - 1) * 5)
      .select([
        'incidents.*',
        'ongs.name',
        'ongs.email',
        'ongs.whatsapp',
        'ongs.city',
        'ongs.uf'])
      .where('ong_id', ong_id)

    res.header('X-Total-Count', count['count(*)'])

    return res.json(incidents)
  },

  async delete (req, res) {
    const { id } = req.params
    const ong_id = req.headers.authorization

    const incident = await _2.default.call(void 0, 'incidents')
      .where('id', id)
      .select('ong_id')
      .first()

    if (incident.ong_id !== ong_id) {
      return res.status(401).json({ error: 'Operation not permitted' })
    }

    await _2.default.call(void 0, 'incidents').where('id', id).delete()

    return res.status(204).json({ res: true })
  }
}
