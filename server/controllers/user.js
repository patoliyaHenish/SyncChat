import { User } from "../models/user.js";

// Create a new user and save it to the database and save in cookie 
const newUser = async(req, res) => {

  const { name, username, password, bio } = req.body;

  const avatar = {
    public_id: "zfnhdjh",
    url: "safs"
  }

  await User.create({
    name,
    bio,
    username,
    password,
    avatar
  })

  res.status(201).json({
    message: "User created successfully"
  });
};

const login = (req, res) => {
  res.send("Hello, world!");
};

export { login, newUser };
