import Jogo from '../models/Jogo';

class JogoController {
  async getById(req, res) {
    try {
      return res.status(400).json(Jogo.getById(req.params.id));
    } catch (error) {
      return res.status(400).json({ error: 'getById Method is not found' });
    }
  }

  async getAll(req, res) {
    try {
      const Jogos = await Jogo.getAll();
      return res.status(400).json(Jogos);
    } catch (error) {
      return res.status(400).json({ error: 'getAll Method is not found' });
    }
  }
}

export default new JogoController();
