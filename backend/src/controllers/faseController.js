import Fase from '../models/fase';

class FaseController {
  async store(req, res) {
    return res.status(400).json({ msg: 'tala' });
  }

  async update(req, res) {
    if (!(await Fase.findOne({ where: { email: req.body.email } }))) {
      return res.status(400).json({ error: 'E-mail not found' });
    }

    const { id, name, email, provider } = await Fase.update(req.body);
    return res.json({ id, name, email, provider });
  }

  async getAllFases(req, res) {
    // try {
    return res.status(400).json(Fase.getFases());
    // } catch (error) {
    //   return res.status(400).json({ error: 'deu pau' });
    // }
  }
}

export default new FaseController();
