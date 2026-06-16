// const User = require("../models/UserModel");
// const { createSecretToken } = require("../util/SecretToken");
// const bcrypt = require("bcryptjs");

// // ================= SIGNUP =================
// module.exports.Signup = async (req, res) => {
//   try {
//     const { email, password, username } = req.body;

//     if (!email || !password || !username) {
//       return res.json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const existingUser = await User.findOne({ email });

//     if (existingUser) {
//       return res.json({
//         success: false,
//         message: "User already exists",
//       });
//     }

//     // hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const user = await User.create({
//       email,
//       password: hashedPassword,
//       username,
//     });

//     // create token
//     const token = createSecretToken(user._id);

//     //  SET COOKIE (IMPORTANT)
//     res.cookie("token", token, {
//       httpOnly: true,
//       sameSite: "lax",
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Signup successful",
//       user,
//     });

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };


// // ================= LOGIN =================
// module.exports.Login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     if (!email || !password) {
//       return res.json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     const user = await User.findOne({ email });

//     if (!user) {
//       return res.json({
//         success: false,
//         message: "Invalid email",
//       });
//     }

//     const isMatch = await bcrypt.compare(password, user.password);

//     if (!isMatch) {
//       return res.json({
//         success: false,
//         message: "Invalid password",
//       });
//     }

//     // create token
//     const token = createSecretToken(user._id);

//     //  SET COOKIE (IMPORTANT)
//     res.cookie("token", token, {
//       httpOnly: true,
//       sameSite: "lax",
//     });

//     return res.json({
//       success: true,
//       message: "Login successful",
//       user,
//     });

//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };

// const User = require("../models/UserModel");
// const { createSecretToken } = require("../util/SecretToken");
// const bcrypt = require("bcryptjs");

// // ================= SIGNUP =================
// const Signup = async (req, res) => {
//   try {
//     const { email, password, username } = req.body;

//     // ✅ Validate input
//     if (!email || !password || !username) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     // ✅ Check existing user
//     const existingUser = await User.findOne({ email });
//     if (existingUser) {
//       return res.status(409).json({
//         success: false,
//         message: "User already exists",
//       });
//     }

//     // ✅ Hash password
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // ✅ Create user
//     const user = await User.create({
//       email,
//       password: hashedPassword,
//       username,
//     });

//     // ✅ Create token
//     const token = createSecretToken(user._id);

//     // ✅ Set cookie
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: true,          // IMPORTANT for production (Render)
//       sameSite: "none",      // REQUIRED for cross-origin
//     });

//     return res.status(201).json({
//       success: true,
//       message: "Signup successful",
//       user,
//     });

//   } catch (error) {
//     console.error("Signup Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };


// // ================= LOGIN =================
// const Login = async (req, res) => {
//   try {
//     const { email, password } = req.body;

//     // ✅ Validate input
//     if (!email || !password) {
//       return res.status(400).json({
//         success: false,
//         message: "All fields are required",
//       });
//     }

//     // ✅ Check user
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(404).json({
//         success: false,
//         message: "Invalid email",
//       });
//     }

//     // ✅ Compare password
//     const isMatch = await bcrypt.compare(password, user.password);
//     if (!isMatch) {
//       return res.status(401).json({
//         success: false,
//         message: "Invalid password",
//       });
//     }

//     // ✅ Create token
//     const token = createSecretToken(user._id);

//     // ✅ Set cookie
//     res.cookie("token", token, {
//       httpOnly: true,
//       secure: true,
//       sameSite: "none",
//     });

//     return res.status(200).json({
//       success: true,
//       message: "Login successful",
//       user,
//     });

//   } catch (error) {
//     console.error("Login Error:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Server error",
//     });
//   }
// };

// module.exports = { Signup, Login };



// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");
// const cookieParser = require("cookie-parser");

// const app = express();

// // ✅ IMPORT ROUTES
// const authRoute = require("./Routes/AuthRoute");

// // ✅ MIDDLEWARE
// app.use(express.json());
// app.use(cookieParser());

// // ✅ CORS (VERY IMPORTANT FOR FRONTEND)
// app.use(
//   cors({
//     origin: [
//       "http://localhost:5173",
//       "http://localhost:5174",
//       // 👉 add your deployed frontend URL here later
//     ],
//     credentials: true,
//   })
// );

// // ✅ CONNECT DATABASE (update your MongoDB URL)
// mongoose
//   .connect(process.env.MONGO_URL || "your_mongodb_connection_string")
//   .then(() => console.log("MongoDB connected"))
//   .catch((err) => console.log(err));

// // ✅ ROUTES (THIS FIXES YOUR ERROR)
// app.use("/api", authRoute);

// // ✅ TEST ROUTE
// app.get("/", (req, res) => {
//   res.send("Server is running");
// });

// // ✅ START SERVER
// const PORT = process.env.PORT || 3002;
// app.listen(PORT, () => {
//   console.log(`Server running on port ${PORT}`);
// });

const User = require("../models/UserModel");
const bcrypt = require("bcryptjs");
const { createSecretToken } = require("../util/SecretToken");

// ================= SIGNUP =================
const Signup = async (req, res) => {
  try {
    const { email, password, username } = req.body;

    // validation
    if (!email || !password || !username) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(409).json({
        success: false,
        message: "User already exists",
      });
    }

    // hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // create user
    const user = await User.create({
      email,
      password: hashedPassword,
      username,
    });

    // create token
    const token = createSecretToken(user._id);

    // set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(201).json({
      success: true,
      message: "Signup successful",
      user,
      token, // optional but useful for frontend
    });

  } catch (error) {
    console.log("Signup Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


// ================= LOGIN =================
const Login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // validation
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      });
    }

    // find user
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "Invalid email",
      });
    }

    // check password
    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(401).json({
        success: false,
        message: "Invalid password",
      });
    }

    // create token
    const token = createSecretToken(user._id);

    // set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
    });

    return res.status(200).json({
      success: true,
      message: "Login successful",
      user,
      token,
    });

  } catch (error) {
    console.log("Login Error:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};

module.exports = { Signup, Login };