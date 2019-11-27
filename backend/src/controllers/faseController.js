import Fase from '../models/Fase';

class FaseController {
  async getById(req, res) {
    try {
      return res.status(400).json(Fase.getById(req.params.id));
    } catch (error) {
      return res.status(400).json({ error: 'getById Method is not found' });
    }
  }

  async getAll(req, res) {
    try {
      const fases = await Fase.getAll();
      return res.status(400).json(fases);
    } catch (error) {
      return res.status(400).json({ error: 'getAll Method is not found' });
    }
  }
}

export default new FaseController();
