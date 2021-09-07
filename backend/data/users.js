import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Oliver',
    email: 'oliver@dev.io',
    password: bcrypt.hashSync('123456', 10),
    isAdmin: true,
  },
  {
    name: 'Emilie',
    email: 'emilie@dev.io',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Alain',
    email: 'alain@dev.io',
    password: bcrypt.hashSync('123456', 10),
  },
];

export default users;
