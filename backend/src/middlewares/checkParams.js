function checkParams(req, res, next) {
  if (req.params) {
    return next();
  }
  return res.status(400).json({ error: 'Invalid params' });
}

export default checkParams;
