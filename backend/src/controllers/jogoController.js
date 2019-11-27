import Jogo from '../models/Jogo';

class JogoController {
  // async update(req, res) {
  //   if (!(await Jogo.findOne({ where: { email: req.body.email } }))) {
  //     return res.status(400).json({ error: 'E-mail not found' });
  //   }

  //   const { id, name, email, provider } = await Jogo.update(req.body);
  //   return res.json({ id, name, email, provider });
  // }

  async allJogos(req, res) {
    try {
      const Jogos = await Jogo.allJogos();
      return res.status(400).json(Jogos);
    } catch (error) {
      return res.status(400).json({ error: 'allJogos Method is not found' });
    }
  }
}

export default new JogoController();
