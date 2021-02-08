const User = require("../data/user");

module.exports = {
  login: ({ username, password }) => {
    /**
     * Valida o username e o password
     */

    const user = User.cast({
      id: 1,
      username,
      password,
    });

    return user;
  },
};
