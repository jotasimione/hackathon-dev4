import Movimento from '../models/Movimento';

class MovimentoController {
  async getById(req, res) {
    try {
      return res.status(200).json(Movimento.getById(req.params.id));
    } catch (error) {
      return res.status(400).json({ error: 'getById Method is not found' });
    }
  }

  async getAll(req, res) {
    try {
      return res.status(200).json(Movimento.getAll());
    } catch (error) {
      return res.status(400).json({ error: 'getAll Method is not found' });
    }
  }
}

export default new MovimentoController();
