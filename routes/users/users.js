import { Router } from 'express';
import { User, addUser, comparePass } from '../../models/user.js';
import config from '../../config/db.js';

const router = Router();

router.post('/registration', async (request, response) => {
  try {
    const { email, password, confirmPassword, firstName, lastName } =
      request.body;

    const errors = {};

    let isError = false;

    if (!email) {
      isError = true;
      errors.email = 'Email is required';
    }

    if (!password) {
      isError = true;
      errors.password = 'Password is required';
    }

    if (password !== confirmPassword) {
      isError = true;
      errors.confirmPassword = 'Passwords do not match';
    }

    if (isError) {
      return response.status(400).json(errors);
    }

    const user = await User.findOne({ email: email.toLowerCase() });

    if (user) {
      return response.status(400).json({ message: 'User already exists' });
    }

    const newUser = new User({
      firstName: firstName.toLowerCase(),
      lastName: lastName.toLowerCase(),
      email: email.toLowerCase(),
      createdDate: Date.now(),
      updatedDate: Date.now(),
      password,
    });

    addUser(newUser, (user) => {
      user.save();
      response.status(201).json({
        message: 'Sucess!',
        newUser: {
          id: user._id,
          firstName,
          lastName,
          email,
        },
      });
    });
  } catch (error) {
    response.status(500).json({ message: 'Server error' });
  }
});

router.post('/authorization', async (request, response) => {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ email: email.toLowerCase() });

    if (!user) {
      return response.status(400).json({
        message: 'There is no user with this email',
      });
    }

    comparePass(password, user.password, (_f, isMatch) => {
      if (isMatch) {
        import('jsonwebtoken').then((jwt) => {
          const token = jwt.default.sign(user.toJSON(), config.secret, {
            expiresIn: 3600 * 24 * 7,
          });

          response.status(200).json({
            token,
            user: {
              id: user._id,
              email: user.email,
              password: user.password,
            },
          });
        });
      } else {
        return response.status(400).json({
          message: 'Passwords do not converge!',
        });
      }
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: 'There were some problems',
      error: error,
    });
  }
});

export default router;
