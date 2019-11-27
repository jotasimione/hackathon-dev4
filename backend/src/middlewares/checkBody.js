function checkBody(req, res, next) {
  if (req.body) {
    return next();
  }
  return res.status(400).json({ error: 'Request Body not found' });
}

export default checkBody;
