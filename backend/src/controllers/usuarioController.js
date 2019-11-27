import Usuario from '../models/Usuario';

class UsuarioController {
  async getById(req, res) {
    try {
      return res.status(400).json(Usuario.getById(req.params.id));
    } catch (error) {
      return res.status(400).json({ error: 'getById Method is not found' });
    }
  }

  async getAll(req, res) {
    try {
      const Usuarios = await Usuario.getAll();
      return res.status(400).json(Usuarios);
    } catch (error) {
      return res.status(400).json({ error: 'getAll Method is not found' });
    }
  }
}

export default new UsuarioController();
