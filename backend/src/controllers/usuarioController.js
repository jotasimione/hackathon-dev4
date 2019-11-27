import Usuario from '../models/Usuario';

class UsuarioController {
  async getById(req, res) {
    try {
      return res.status(200).json(Usuario.getById(req.params.id));
    } catch (error) {
      return res.status(400).json({ error: 'getById Method is not found' });
    }
  }

  async getScore(req, res) {
    try {
      const { score } = await res.status(400).json(this.getById(req.params.id));
      return res.status(200).json(score);
    } catch (error) {
      return res.status(400).json({ error: 'getScore Method is not found' });
    }
  }

  async getAll(req, res) {
    try {
      return res.status(200).json(Usuario.getAll());
    } catch (error) {
      return res.status(400).json({ error: 'getAll Method is not found' });
    }
  }
}

export default new UsuarioController();
