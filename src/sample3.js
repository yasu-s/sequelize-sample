const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define(
  'user',
  {
    userName: DataTypes.STRING,
    birthday: DataTypes.DATE,
  },
  { underscored: true, timestamps: true }
);

(async () => {
  await sequelize.sync();
  await User.create({
    userName: 'test1',
    birthday: new Date(1981, 6, 20),
  });
  await User.create({
    userName: 'test2',
    birthday: new Date(1982, 6, 20),
  });
  const users = await User.findAll();
  console.log(users[0].toJSON());

  const user = await User.findOne({ where: { userName: 'test2' } });
  console.log(user.toJSON());
})();
