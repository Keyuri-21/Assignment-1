import loginModel from "../model/Login.js";
import bcrypt from 'bcrypt';

export const signup = async (req, res) => {
  const { email, password } = req.body;

  try {
      const saltRounds = 10;
      const hashedPassword = await bcrypt.hash(password, saltRounds);

      const login = new loginModel({ email, password: hashedPassword });
      await login.save();

      res.json({ message: 'Signup successful', login });
  } catch (error) {
      console.error(error.message);
      res.status(500).json({ message: 'Error during signup' });
  }
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  try {
      const login = await loginModel.findOne({ email });

      if (login) {
          const isPasswordMatched = await bcrypt.compare(password, login.password);

          if (isPasswordMatched) {
              res.json('Success');
          } else {
              res.json('Password incorrect');
          }
      } else {
          res.json('Email is not registered');
      }
  } catch (error) {
      console.error('Error during login:', error);
      res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const adminLogin = async (req, res) => {
  const { email, password } = req.body;

  try {
      const admin = await loginModel.findOne({ email });

      if (admin) {
          const isPasswordMatched = await bcrypt.compare(password, admin.password);

          if (isPasswordMatched) {
              res.json("Success");
          } else {
              res.json("Password incorrect");
          }
      } else {
          res.json("Email is not registered");
      }
  } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
  }
};


