import Usuario from '../models/Usuario';

class UsuarioController {
  // async update(req, res) {
  //   if (!(await Usuario.findOne({ where: { email: req.body.email } }))) {
  //     return res.status(400).json({ error: 'E-mail not found' });
  //   }

  //   const { id, name, email, provider } = await Usuario.update(req.body);
  //   return res.json({ id, name, email, provider });
  // }

  async allUsuarios(req, res) {
    try {
      const Usuarios = await Usuario.allUsuarios();
      return res.status(400).json(Usuarios);
    } catch (error) {
      return res.status(400).json({ error: 'allUsuarios Method is not found' });
    }
  }
}

export default new UsuarioController();
