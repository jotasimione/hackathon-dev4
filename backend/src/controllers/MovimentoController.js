import Movimento from '../models/Movimento';

class MovimentoController {
  // async update(req, res) {
  //   if (!(await Movimento.findOne({ where: { email: req.body.email } }))) {
  //     return res.status(400).json({ error: 'E-mail not found' });
  //   }

  //   const { id, name, email, provider } = await Movimento.update(req.body);
  //   return res.json({ id, name, email, provider });
  // }

  async allMovimentos(req, res) {
    try {
      const Movimentos = await Movimento.allMovimentos();
      return res.status(400).json(Movimentos);
    } catch (error) {
      return res
        .status(400)
        .json({ error: 'allMovimentos Method is not found' });
    }
  }
}

export default new MovimentoController();
