const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const User = sequelize.define(
  'user',
  {
    userName: {
      type: DataTypes.STRING,
    },
    birthday: {
      type: DataTypes.DATE,
    },
  },
  { underscored: true }
);

(async () => {
  await sequelize.sync();
  const jane = await User.create({
    userName: 'janedoe',
    birthday: new Date(1980, 6, 20),
  });
  console.log(jane.toJSON());
})();
