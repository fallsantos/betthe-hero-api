import connection from '../database'

export default {
  async create (req, res) {
    const { id } = req.body

    const ong = await connection('ongs')
      .where('id', id)
      .select('name')
      .first()

    if (!ong) {
      return res.status(400).json({ error: 'No ONG found whith this ID' })
    }

    res.json(ong)
  }
}
