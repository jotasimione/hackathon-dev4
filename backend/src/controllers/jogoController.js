import Jogo from '../models/Jogo';

class JogoController {
  async getById(req, res) {
    try {
      return res.status(200).json(Jogo.getById(req.params.id));
    } catch (error) {
      return res.status(400).json({ error: 'getById Method is not found' });
    }
  }

  async getJornada(req, res) {
    const { id_jogo, id_usuario } = req.params;
    try {
      return res
        .status(200)
        .json(Jogo.getJornadaByUsuario(id_jogo, id_usuario));
    } catch (error) {
      return res.status(400).json({ error: 'getJornada Method is not found' });
    }
  }

  async getAll(req, res) {
    try {
      return res.status(200).json(Jogo.getAll());
    } catch (error) {
      return res.status(400).json({ error: 'getAll Method is not found' });
    }
  }
}

export default new JogoController();
