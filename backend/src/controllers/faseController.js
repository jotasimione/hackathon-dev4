import Fase from '../models/Fase';

class FaseController {
  async getById(req, res) {
    try {
      return res.status(200).json(Fase.getById(req.params.id));
    } catch (error) {
      return res.status(400).json({ error: 'getById Method is not found' });
    }
  }

  async validaFase(req, res) {
    try {
      const { steps } = req.body;
      const { gabarito } = await this.getById(req.params.id);

      const validados = steps.map((s, i) => {
        if (s.id === gabarito.pos[i].id) {
          return s;
        }
        return '';
      });

      return res.status(200).json(validados);
    } catch (error) {
      return res.status(400).json({ error: 'validaFase Method is not found' });
    }
  }

  async getAll(req, res) {
    try {
      return res.status(200).json(Fase.getAll());
    } catch (error) {
      return res.status(400).json({ error: 'getAll Method is not found' });
    }
  }
}

export default new FaseController();
