// const User = require("../Models/UserModel");
// require("dotenv").config();
// const jwt = require("jsonwebtoken");

// module.exports.userVerification = (req, res) => {
//   const token = req.cookies.token
//   if (!token) {
//     return res.json({ status: false })
//   }
//   jwt.verify(token, process.env.TOKEN_KEY, async (err, data) => {
//     if (err) {
//      return res.json({ status: false })
//     } else {
//       const user = await User.findById(data.id)
//       if (user) return res.json({ status: true, user: user.username })
//       else return res.json({ status: false })
//     }
//   })
// }

const jwt = require("jsonwebtoken");
const User = require("../Models/UserModel");

const authMiddleware = async (req, res, next) => {
  try {
    // get token from cookie
    // const token = req.cookies?.token;
    const token = req.header("Authorization")?.replace("Bearer ", "");

    // check token exists
    if (!token) {
      return res.status(401).json({
        success: false,
        message: "No token provided",
      });
    }

    // verify token
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);

    // find user
    const user = await User.findById(decoded.id);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "User not found",
      });
    }

    // attach user to request
    req.user = user;

    // move to next
    next();

  } catch (error) {
    return res.status(401).json({
      success: false,
      message: "Invalid or expired token",
    });
  }
};

module.exports = authMiddleware;