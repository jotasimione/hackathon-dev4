import Fase from '../models/Fase';

class FaseController {
  // async update(req, res) {
  //   if (!(await Fase.findOne({ where: { email: req.body.email } }))) {
  //     return res.status(400).json({ error: 'E-mail not found' });
  //   }

  //   const { id, name, email, provider } = await Fase.update(req.body);
  //   return res.json({ id, name, email, provider });
  // }

  async allFases(req, res) {
    try {
      const fases = await Fase.allFases();
      return res.status(400).json(fases);
    } catch (error) {
      return res.status(400).json({ error: 'allFases Method is not found' });
    }
  }
}

export default new FaseController();
