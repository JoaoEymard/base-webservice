const { generateToken } = require("../helpers/jwt");
const { login } = require("../model/services/auth");

module.exports = {
  login: (req, res, next) => {
    try {
      const { id } = login(req.body);
      const token = generateToken({ id, userAgent: req.get("User-Agent") });

      return res.json({ token });
    } catch (error) {
      next(error);
    }
  },
};
