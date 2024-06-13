import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import { errorHandler } from '../utils/error.js';
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json('User created successfully');
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email: email }); //findOne is a method to search data from the mongodb table
    if (!validUser) return next(errorHandler(404, 'User not found!'));
    const validPassword = bcryptjs.compareSync(password, validUser.password); //compare the password with bcryptjs with the help of method called compareSync
    if (!validPassword) return next(errorHandler(401, 'Wrong Credentials!'));
    const token = jwt.sign({ id: validUser._id }, process.env.JWT_SECRET);
    const { password: pwd, ...rest } = validUser._doc;
    res
      .cookie('access_token', token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
