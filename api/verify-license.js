export default function handler(req, res) {
  if (req.method === 'POST') {
    const { license } = req.body;
    const VALID_LICENSES = ['ABC123DEF456', 'XYZ789JKL012'];
    if (VALID_LICENSES.includes(license)) {
      res.status(200).json({ valid: true });
    } else {
      res.status(200).json({ valid: false });
    }
  } else {
    res.status(405).json({ message: 'Méthode non autorisée' });
  }
}