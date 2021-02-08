const yup = require("yup");

module.exports = yup.object().shape({
  id: yup.string().required(),
  username: yup.string().required(),
  password: yup.string().required(),
  loggedAt: yup.date().default(function () {
    return new Date();
  }),
});
