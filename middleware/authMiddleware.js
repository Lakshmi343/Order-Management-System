const jwt = require("jsonwebtoken");
const User = require("../models/User");

const authMiddleware = (roles) => async (req, res, next) => {
  try {
    const token = req.header("Authorization").replace("Bearer ", "");
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findOne({ _id: decoded.id, token });

    if (!user || !roles.includes(user.role)) {
      throw new Error("Unauthorized access");
    }

    req.user = user;
    next();
  } catch (err) {
    res.status(401).json({ message: "Please authenticate" });
  }
};

module.exports = authMiddleware;