import mongoose from "mongoose";

const connectDB = (uri) => {
  mongoose
    .connect(uri, { dbName: "SyncChat" })
    .then((data) => {
      console.log(`Connected to DB: ${data.connection.host}`);
    })
    .catch((err) => {
      throw err;
    });
};

const sendToken = (res, user, code, message) => { 
  const token = "adfjhdj";

  return res.status(code).cookie("chat-token", token, {
    maxAge: 15 * 24 * 60 * 60 * 1000,
    sameSite: "none",
    httpOnly: true,
    secure: true,
  }).json({
    success: true,
    message,
    token,
    user,
  })
};

export { connectDB, sendToken };
