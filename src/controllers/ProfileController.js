import connection from '../database/'

export default {
  async read (req, res) {
    const ong_id = req.headers.authorization

    const incidents = await connection('incidents')
      .where('id', ong_id)
      .select('*')

    return res.json(incidents)
  }
}
