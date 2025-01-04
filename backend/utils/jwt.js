const jwt = require("jsonwebtoken");

const generateToken = (user) => {
  const payload = {
    user: {
      id: user.id,
    },
  };
  return jwt.sign(payload, "your_jwt_secret", { expiresIn: "1h" });
};

module.exports = generateToken;
