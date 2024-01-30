import { Schema, model } from 'mongoose';

const UserScheme = Schema({
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    gender: {
      type: String,
      required: false,
    },
    createdDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
    updatedDate: {
      type: Date,
      default: Date.now,
      required: true,
    },
  }),
  User = model('users', UserScheme);

const addUser = (newUser, callback) => {
  import('bcrypt').then((bcrypt) => {
    bcrypt.genSalt(10, (_, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        callback(newUser);
      });
    });
  });
};

const comparePass = (passFromUser, userDBPass, callback) => {
  import('bcrypt').then((bcrypt) => {
    bcrypt.compare(passFromUser, userDBPass, (err, isMatch) => {
      if (err) throw err;
      callback(null, isMatch);
    });
  });
};

export { User, addUser, comparePass };
