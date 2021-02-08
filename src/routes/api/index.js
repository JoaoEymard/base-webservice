const routes = require("express").Router();

const { login } = require("../../controllers/auth");
const { verifyToken } = require("../../helpers/jwt");

routes.get("/login", login);

// Exemplo de rota livre de autenticação
routes.get("/free", (req, res) => {
  return res.send("");
});

// Exemplo de rota bloqueada para autenticação
routes.get("/blocked", verifyToken, (req, res) => {
  return res.send("");
});

module.exports = routes;
